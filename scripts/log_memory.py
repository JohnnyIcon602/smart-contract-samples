#!/usr/bin/env python3
"""Append a structured memory entry and refresh the Mission Control feed.

Usage:
    python3 scripts/log_memory.py --entry "Ran Dwight→Picasso workflow" \
        --section highlights \
        --title "T-shirt workflow" \
        --summary "Ran Dwight→Picasso pipeline, produced four designs"

Sections: highlights (default), handoff, decisions.
"""

import argparse
import datetime as dt
import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MEMORY_DIR = ROOT / "memory"
FEED_FILE = ROOT / "mission-control" / "memory-feed.json"

SECTION_HEADERS = {
    "highlights": "## Highlights",
    "handoff": "## Agent Hand-off Notes",
    "decisions": "## Decisions / Context to Remember",
}

TEMPLATE = """# {date}
\n## Highlights
- _Nothing logged yet_
\n## Agent Hand-off Notes
- _Nothing logged yet_
\n## Decisions / Context to Remember
- _Nothing logged yet_
"""


def ensure_memory_file(path: Path) -> None:
    if path.exists():
        return
    path.write_text(TEMPLATE.format(date=path.stem), encoding="utf-8")


def insert_bullet(path: Path, section: str, bullet: str) -> None:
    lines = path.read_text(encoding="utf-8").splitlines()
    header = SECTION_HEADERS[section]
    try:
        idx = lines.index(header)
    except ValueError:
        # append header + bullet to end
        lines.extend(["", header])
        idx = len(lines) - 1
    # remove placeholder if present just below header
    if idx + 1 < len(lines) and lines[idx + 1].strip().startswith("-_"):
        lines.pop(idx + 1)
    insert_at = idx + 1
    while insert_at < len(lines) and not lines[insert_at].startswith("## "):
        insert_at += 1
    lines.insert(insert_at, f"- {bullet}")
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def update_feed(date_str: str, title: str, summary: str) -> None:
    feed = {"entries": []}
    if FEED_FILE.exists():
        try:
            feed = json.loads(FEED_FILE.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            pass
    entry = {
        "date": date_str,
        "title": title or "Untitled",
        "summary": summary,
    }
    entries = [entry]
    for item in feed.get("entries", []):
        if item.get("date") == entry["date"] and item.get("title") == entry["title"]:
            continue
        entries.append(item)
    feed["entries"] = entries[:3]
    FEED_FILE.write_text(json.dumps(feed, indent=2), encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description="Log memory + refresh dashboard feed")
    parser.add_argument("--entry", required=True, help="One-sentence description to store in the markdown file")
    parser.add_argument("--section", choices=SECTION_HEADERS.keys(), default="highlights")
    parser.add_argument("--title", default="")
    parser.add_argument("--summary", default="")
    args = parser.parse_args()

    today = dt.date.today()
    date_str = today.isoformat()
    memory_path = MEMORY_DIR / f"{date_str}.md"
    ensure_memory_file(memory_path)

    bullet = args.entry.strip()
    insert_bullet(memory_path, args.section, f"{today:%H:%M} — {bullet}")

    summary = args.summary.strip() or bullet
    title = args.title.strip() or "Daily Update"
    update_feed(today.strftime("%b %d"), title, summary)
    print(f"Logged entry to {memory_path} and updated memory feed.")


if __name__ == "__main__":
    main()
