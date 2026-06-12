# Austin Emergency Roof Search Campaign

_Last updated: 2026-03-30_

## Campaign Overview
- **Objective:** Generate inbound calls + form fills from homeowners experiencing storm/roof emergencies & water intrusion in Greater Austin.
- **Channel:** Google Ads – Search (Manual CPC w/ Enhanced CPC enabled)
- **Landing Page:** https://phenomenal-granita-e4295e.netlify.app
- **Call Tracking:** Twilio (+1 737-252-5974) – call extension + on-page tap-to-call.
- **Geo Target:** 30 mi radius around Austin, TX (Travis, Williamson, Hays counties). Exclude San Antonio DMA to focus budget.
- **Ad Schedule:** 6:00 AM – 11:00 PM CST (calls route to voicemail after hours but capture forms 24/7).
- **Conversion Actions:**
  1. **Netlify form submit** → Google Tag (HTML) fires on `/thank-you` event (form already posts in-page; need to inject GTM snippet or inline gtag event before form success message).
  2. **Calls from ads** → Call extension tied to Twilio number (counts at ≥60 sec).
  3. **On-site click-to-call** → Event with `gtag('event','click_to_call')` -> import to Ads.

## Budget & Bidding
- **Test Bank:** $350 on hand → allocate $200 to first 7-day sprint, leave $150 reserve.
- **Base Daily Budget:** $28/day (approx. $196 over 7 days).
- **Manual Max CPC Caps:**
  - Emergency Roof Repair keywords: $28 max click bid.
  - Water Damage / Flood keywords: $24 max.
  - Roof Tarp keywords: $20 max.
- **Weather Surge Rule:** When forecast shows thunderstorms (Open-Meteo `weathercode 95/96/99` or >60% precip probability) in next 24h, raise daily budget to $40 and increase keyword bids by +20% for 36 hours.

## Campaign & Ad Group Structure
1. **Camp:** `AUS | Emergency Roof | Search`
   - **Ad Group 1: Emergency Roof Repair**
     - Keywords (Exact + Phrase):
       - ["emergency roof repair"]
       - ["roof leak repair austin"]
       - "emergency roof leak"
       - +emergency +roof +repair +austin
     - RSA Headlines:
       1. "Austin Emergency Roof Crew"
       2. "Rapid Leak Stop – 24/7"
       3. "Insurance Friendly Repairs"
       4. "Same-Day Roof Tarping"
     - Descriptions:
       - "Local roof strike team on-call. We tarp, dry-in, and help with claims in under 2 hours."
       - "Licensed roofers + water mitigation techs, serving Travis & Williamson. Schedule your rescue now."

   - **Ad Group 2: Storm / Tarp Response**
     - Keywords:
       - ["roof tarping service"]
       - ["emergency roof tarping"]
       - +storm +damage +roof +repair
       - "tarp my roof austin"
     - RSA headlines emphasize 90-minute dispatch + no money down.

   - **Ad Group 3: Water & Dry-Out**
     - Keywords:
       - ["emergency water removal"]
       - ["ceiling leak repair"]
       - +water +damage +roof +leak +austin
     - Copy highlights water extraction + insurance paperwork.

   - **Ad Group 4: Insurance Claim Help**
     - Keywords target "hail damage roof inspection", "insurance roof claim help".
     - CTA: "Free claim-ready inspection + damage photos."

## Assets & Extensions
- **Callout Extensions:**
  - "Dispatch in 90 Minutes"
  - "Licensed & Insured"
  - "Insurance Claim Help"
  - "Water + Roof Crew"
- **Structured Snippets:** Services → "Roof Tarping, Leak Patching, Water Extraction, Attic Dry-Out".
- **Sitelinks:**
  1. "Why Austin Trusts Us" → section anchor #proof
  2. "Financing & Insurance" → #insurance
  3. "Service Area" → #coverage
  4. "Talk To Tech" → tel link

## Negative Keyword Starter List
jobs, employment, career, DIY, materials, tarps for sale, cheap, free, contract template, pdf, sample, courses, training, salary, how to.

## Tracking Checklist
1. Add `gtag` (or GTM) snippet to Netlify landing page `<head>`.
2. Fire `conversion` event on form success (Netlify supports inline `<div data-netlify-form-status>` listener or Netlify function + JS hook).
3. Twilio → forward to Boss/team cell; enable call recording.
4. Import call conversion + on-site event into Google Ads.
5. Verify Google Ads account billing now active (per Boss note 2026-03-30).

## Launch Runbook
1. Build the four ad groups + RSAs + extensions in Google Ads UI.
2. Set default device bidding to +10% for mobile (most emergency searches happen on phones).
3. Geo pin drop around Austin city center with 30-mi radius, exclude zip 78610? (optional) to avoid San Marcos duplicates.
4. QA landing page speed (Core Web Vitals pass) via PageSpeed once more post-gtag.
5. Start campaign → monitor for 3 conversions or $150 spend, whichever first.
6. Daily log metrics in `/ops/experiment-log.md` (impressions, clicks, CPC, spend, calls, forms).

## Weather Monitoring SOP
- Check Open-Meteo API at 07:00 & 19:00 CST daily (command saved in `notes/weather-check.sh`).
- If any of the next 24 hourly `weathercode` values ∈ {95, 96, 99} **or** precipitation probability ≥60% for ≥3 consecutive hours, mark "Storm Surge" →
  - Increase daily budget to $40.
  - Raise keyword bids by +20%.
  - Add storm-focused RSA pinning headlines: "Severe Storm Damage? Call Now".
- Log each check + action in `memory/YYYY-MM-DD.md`.
- Revert to base budget once severe window passes (no thunder codes/probability <30% for 12h).
