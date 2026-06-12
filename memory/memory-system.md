# Memory System 2.0

Inspired by Alex's OpenClaw deep dive (YouTube ID `CxErCGVo-oo`), this workflow keeps Boss's agents in sync without overbuilding. It focuses on simple daily journaling plus fast recall directly inside Mission Control.

## 1. Daily Journal Cadence

- **File naming:** `memory/YYYY-MM-DD.md` (already in place). J5 or the active agent writes to the file the moment meaningful work wraps.
- **Entry template:**
  ```markdown
  # YYYY-MM-DD
  ## Highlights
  - Major win(s)
  - Blockers / open loops
  ## Agent Hand-off Notes
  - Dwight → Picasso
  - Picasso → Lois
  - Addy promo asks
  ## Decisions / Context to Remember
  - …
  ```
- **Automation prompt (drop into OpenClaw):**
  > "Any time we finish a task or conversation with Boss, append a bullet to today's `memory/YYYY-MM-DD.md`. Summarize in one sentence, include owners + next action."  
  This mirrors Alex's "log through the day" guidance so we never rely on stale recall.

## 2. Mission Control Sync

Mission Control now expects a lightweight JSON feed so it can surface the latest memories in the "🧠 Memory Stream" panel.

- **Source file:** `mission-control/memory-feed.json` (new, created by agents).
- **Schema:**
  ```json
  {
    "entries": [
      { "date": "2026-03-20", "title": "T-shirt workflow", "summary": "Ran Dwight→Picasso loop…" }
    ]
  }
  ```
- **Update loop:** After each journal append, re-generate the feed with the latest three entries (oldest trimmed). Mission Control reads this file on refresh (currently hard-coded; next iteration can fetch dynamically).

## 3. Retrieval Ritual

When Boss asks, "What did we do about ____?"
1. Search the relevant `memory/YYYY-MM-DD.md` (yesterday + today first).
2. If more than a week back, load `MEMORY.md` for the curated highlights.
3. If the answer becomes a reusable playbook, promote it to `/notes/<topic>.md` and link it from Mission Control's Docs module.

## 4. Backfill (one-time)

- Parse the last 7 days of chat logs or morning briefs and write condensed entries so the new system is immediately useful.
- Populate `mission-control/memory-feed.json` with those summaries so the dashboard isn't empty.

Keep it simple: no vector DB, no extra local models. Plain markdown + a rolling feed is enough to catch every important decision just like Alex described in the video.
