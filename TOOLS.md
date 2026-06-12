# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics - the stuff that's unique to your setup.

## API Keys

- **OpenAI:** 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
- **Replicate:** r8_JUwDd65YeG2QPALlN1A0CnDnUhGe3T41fYzDZ

## eCommerce (for Lois)

- Shopify: moneylanguage602@gmail.com / Kristina602!
- Amazon: Not yet set up
- Etsy: Not yet set up

## Social Platforms (for Addy)

- TikTok: Not connected
- X (Twitter): Not connected
- Facebook: Not connected

## Web/Infra

- Netlify: johnnyfiveisalive602@gmail.com / IsAlive02NotDead!
- Google Ads: johnnyfiveisalive602@gmail.com / IsAlive02
- Twilio: SID AC1051e1455b7973428c1f5acd32978a2d / Token fa69fa1c29d2a723bd06c03b05df1a55

## Outreach

- Instantly: johnnyfiveisalive602@gmail.com / IsAlive02
- Apollo: johnnyfiveisalive602@gmail.com / IsAlive02

## Email

— Domain (johnny@austinrapidroof.com): IsAlive02NotDead! (IMAP mail.austinrapidroof.com / SMTP smtp.austinrapidroof.com :587)
— Gmail: johnnyfiveisalive602@gmail.com / IsAlive02
— Gmail App Password: uivqdfzvzbpflsou

## Phone

- Lead line (Twilio): +1 737-252-5974 → forwards to (573) 260-3716 via Twimlet
- TextNow: +1 573-307-0846 (for verification codes)

## Google Drive CLI

- **Client ID:** 37320892354-n5lb0cn3hih8d2qtm26hgf6j13klcql1.apps.googleusercontent.com
- **Client Secret:** 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

---

### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### Video Generation (for TikTok)

**Script:** `~/.openclaw/workspace/scripts/generate_video.py`
**Model:** Kling Video 3.0 via Replicate
**Usage:**
```bash
python3 ~/.openclaw/workspace/scripts/generate_video.py "<prompt>" <output.mp4> [duration]
```
- Duration: 10 seconds default (up to 15s)
- Aspect ratio: 9:16 (vertical/TikTok)
- **Audio: `generate_audio=true` is enabled in script** (critical - defaults to false!)
- Model: `kwaivgi/kling-v3-video`
- Version ID: `4a8ba2743bd9dc2b487e0c4319988aacd658d33c2d064b8a420f4ee1732c30bd`

## TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod

---

Add whatever helps you do your job. This is your cheat sheet.
