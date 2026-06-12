#!/bin/bash
# Quick weather probe for Austin storm monitoring.
set -euo pipefail
python3 - <<'PY'
import json, urllib.request
from datetime import datetime, timedelta
import math

URL = "https://api.open-meteo.com/v1/forecast?latitude=30.2672&longitude=-97.7431&hourly=precipitation_probability,precipitation,weathercode&forecast_days=3&timezone=America%2FChicago"
with urllib.request.urlopen(URL) as resp:
    data = json.load(resp)

times = data["hourly"]["time"]
weathercodes = data["hourly"]["weathercode"]
precip_probs = data["hourly"]["precipitation_probability"]
precip = data["hourly"]["precipitation"]

now = datetime.now()
window_end = now + timedelta(hours=24)

storm_codes = {95, 96, 99}
thunder_times = []
high_prob_blocks = []
current_block = []

for t_str, code, prob, mm in zip(times, weathercodes, precip_probs, precip):
    t = datetime.fromisoformat(t_str)
    if t < now or t > window_end:
        continue
    if code in storm_codes:
        thunder_times.append((t, prob, mm))
    if prob >= 60:
        current_block.append((t, prob))
    else:
        if len(current_block) >= 3:
            high_prob_blocks.append(current_block.copy())
        current_block.clear()

if len(current_block) >= 3:
    high_prob_blocks.append(current_block.copy())

print("Next 24h thunder windows:")
if thunder_times:
    for t, prob, mm in thunder_times:
        print(f"  - {t:%Y-%m-%d %H:%M} | prob={prob}% | precip={mm}mm")
else:
    print("  (none)")

print("\nHigh precip probability blocks (>=60% for >=3h):")
if high_prob_blocks:
    for block in high_prob_blocks:
        start = block[0][0]
        end = block[-1][0]
        avg_prob = sum(prob for _, prob in block)/len(block)
        print(f"  - {start:%Y-%m-%d %H:%M} to {end:%Y-%m-%d %H:%M} | avg prob={avg_prob:.0f}%")
else:
    print("  (none)")
PY
