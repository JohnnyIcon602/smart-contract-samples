#!/usr/bin/env python3
"""Register a document/artifact for Mission Control's Docs panel."""

import argparse
import json
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC_FEED = ROOT / "mission-control" / "docs-feed.json"


def load_feed():
    if DOC_FEED.exists():
        try:
            return json.loads(DOC_FEED.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            pass
    return {"docs": []}


def save_feed(feed):
    DOC_FEED.write_text(json.dumps(feed, indent=2), encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description="Register a doc for Mission Control")
    parser.add_argument("--name", required=True, help="Display name")
    parser.add_argument("--path", required=True, help="Workspace-relative path (ex: designs/hold-the-line-01.png)")
    parser.add_argument("--stamp", help="Override timestamp label (defaults to today)")
    args = parser.parse_args()

    feed = load_feed()
    stamp = args.stamp or datetime.now().strftime("%b %d")
    new_doc = {"name": args.name, "path": args.path, "stamp": stamp}

    docs = [new_doc]
    for doc in feed.get("docs", []):
        if doc.get("path") == new_doc["path"]:
            continue
        docs.append(doc)
    feed["docs"] = docs[:6]
    save_feed(feed)
    print(f"Registered {args.name} -> {args.path}")


if __name__ == "__main__":
    main()
