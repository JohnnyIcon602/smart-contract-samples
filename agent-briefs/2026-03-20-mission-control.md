# Agent Brief — Mission Control + Memory Automation
_Date:_ 2026-03-20

## Dwight (Research)
1. **Docs feed updates:** After every trend or money report, run:
   ```bash
   python3 scripts/register_doc.py --name "Dwight Trend Report" --path "notes/dwight-<date>.md"
   ```
   That keeps Mission Control’s Docs panel live without dumping PDFs in chat.
2. **Memory logging:** When you finish a research sweep handed to Picasso, log it:
   ```bash
   python3 scripts/log_memory.py --entry "Flagged Shelby Park reopening for new border merch" --section handoff --title "Trend intel" --summary "Border story ready for Picasso"
   ```
   This updates both `memory/YYYY-MM-DD.md` and the dashboard stream.

## Picasso (Design)
1. **Design drops → docs feed:** Register each output pack as soon as it lands in `/designs/` so Lois sees it in Mission Control.
   ```bash
   python3 scripts/register_doc.py --name "Picasso Output Pack" --path "designs/hold-the-line-01.png"
   ```
2. **Hand-off notes:** When you pass files to Lois/Addy, add a memory entry so the nightly journal reflects the drop and promotion ask.

## Shared Guidance
- Mission Control now expects real data for **Autonomous Schedule**, **Memory Stream**, and **Docs**. Keep feeds updated so Boss can trust the dashboard snapshot at any time.
- If you hit anything worth turning into a reusable process, mention it in the memory log first; we’ll promote it into a skill later.
