# Diagnostic Widget Wireframes (Lo-Fi)

_Textual wireframes for review before high-fidelity mockups._

## 1. Entry / Vehicle Info
```
+------------------------------------------------------+
|  Tom's Auto Diagnostic Assistant 🛠️                 |
|  "Tell us what's happening and we'll guide you."     |
|------------------------------------------------------|
| Vehicle Details                                      |
| [Year ▼]  [Make ▼]  [Model ▼]                        |
| Mileage (optional): [____ mi]                        |
|                                                      |
| Continue button (disabled until year+make selected)  |
| "Skip vehicle info" link (for unknown)               |
+------------------------------------------------------+
```

## 2. Issue Input Choice
```
+------------------------------------------------------+
| What's going on?                                     |
| ( ) I have diagnostic codes                          |
| ( ) I want to describe symptoms                      |
| (•) Both                                             |
|------------------------------------------------------|
| If codes selected:                                   |
|   Enter DTCs (comma separated): [P0300, P0171]       |
| If symptoms selected:                                |
|   Describe the issue: ["Loss of power, sputters..."]|
| Helper text: "Use everyday language—we'll translate" |
|------------------------------------------------------|
| CTA: [Next ➜]                                        |
+------------------------------------------------------+
```

## 3. Clarifying Questions (Dynamic)
```
+------------------------------------------------------+
| A few quick questions                                |
| 1/3  [progress bar]                                  |
|------------------------------------------------------|
| Q1 (based on taxonomy):                              |
|  "When does the power loss happen?"                 |
|   ( ) At startup   ( ) While accelerating            |
|   ( ) At highway speed   ( ) Random                  |
|------------------------------------------------------|
| Q2: "Any recent repairs?" [text] (optional)         |
| Q3: "Warning lights on?" checkboxes                  |
|------------------------------------------------------|
| CTA row: [Back]   [See results ➜]                    |
+------------------------------------------------------+
```

## 4. Results / Recommendations
```
+------------------------------------------------------+
| Preliminary Findings                                 |
| Badge: "High urgency"                                |
|------------------------------------------------------|
| Issue Card 1                                         |
|  Title: "Multiple cylinder misfire (P0300)"          |
|  Likelihood meter: ███████░░ 74%                     |
|  Severity chip: [High]   Source: DTC + TSB           |
|  Summary: "Random misfire with lean condition..."    |
|  Recommended checks (bullets)                        |
|  Estimated parts/labor range (if available)          |
|  Toggle: [More details ▼]                            |
|------------------------------------------------------|
| Issue Card 2, etc.                                   |
|------------------------------------------------------|
| Next Steps box:                                       |
|  • "Limit driving until inspected"                   |
|  • Placeholder CTA: "Call Tom's Auto" (future: Tekmetric link)|
| Disclaimer text                                      |
|------------------------------------------------------|
| Footer: "Powered by Tom's Auto diagnostic data"      |
+------------------------------------------------------+
```

## 5. Error / Retry State
```
+------------------------------------------------------+
| We couldn't complete the check                       |
| "Looks like the system hit a snag. Try again in a moment." |
| CTA: [Retry]  Secondary: [Send details to shop] (email mailto) |
+------------------------------------------------------+
```

## Notes
- Mobile: stack fields vertically; progress indicator becomes top pill (Step 2 of 4).
- Colors follow Tom's Auto branding (deep blue, orange accents). Light/dark mode friendly.
- Copy tone: confident but approachable, no doom language.
- Space reserved beneath results for re-enabled lead funnel later.
