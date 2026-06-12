#!/usr/bin/env python3
"""Check Gmail for Fiverr job alerts"""

import imaplib
import email
import os
import json
from datetime import datetime, timedelta

# Config
EMAIL = "johnnyfiveisalive602@gmail.com"
APP_PASSWORD = "uivqdfzvzbpflsou"
IMAP_SERVER = "imap.gmail.com"

# Keywords to look for
KEYWORDS = [
    "web scraping", "web scraper", "data scraping",
    "smart contract", "solidity", "ethereum", "token", "nft",
    "python", "automation", "webhook",
    "landing page", "wordpress",
    "script", "api", "integration",
    "order", "buyer", "request", "requirements"
]

# State file
STATE_FILE = "/Users/five/.openclaw/workspace/.fiverr-email-state.json"

def load_state():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, 'r') as f:
            return json.load(f)
    return {"last_check": None, "seen_ids": []}

def save_state(state):
    with open(STATE_FILE, 'w') as f:
        json.dump(state, f)

def check_email():
    try:
        # Connect to Gmail
        mail = imaplib.IMAP4_SSL(IMAP_SERVER)
        mail.login(EMAIL, APP_PASSWORD)
        mail.select("INBOX")

        # Search for Fiverr emails
        status, messages = mail.search(None, 'FROM fiverr.com')
        
        if status != 'OK':
            print("No messages found")
            return []

        state = load_state()
        new_jobs = []

        for msg_id in messages[0].split():
            # Skip if already seen
            if msg_id.decode() in state.get("seen_ids", []):
                continue

            status, msg_data = mail.fetch(msg_id, '(RFC822)')
            if status != 'OK':
                continue

            msg = email.message_from_bytes(msg_data[0][1])
            subject = msg.get("Subject", "")
            body = ""

            if msg.is_multipart():
                for part in msg.walk():
                    if part.get_content_type() == "text/plain":
                        body = part.get_payload(decode=True).decode()
                        break
            else:
                body = msg.get_payload(decode=True).decode()

            # Check for relevant keywords
            combined = (subject + " " + body).lower()
            keyword_matches = [kw for kw in KEYWORDS if kw in combined]

            if keyword_matches:
                # Extract snippet
                snippet = body[:500].replace("\n", " ").strip()
                new_jobs.append({
                    "id": msg_id.decode(),
                    "subject": subject,
                    "matches": keyword_matches,
                    "snippet": snippet
                })

            # Mark as seen
            state["seen_ids"].append(msg_id.decode())

        # Keep only last 50 seen IDs
        state["seen_ids"] = state["seen_ids"][-50:]
        state["last_check"] = datetime.now().isoformat()
        save_state(state)

        mail.logout()
        return new_jobs

    except Exception as e:
        print(f"Error: {e}")
        return []

if __name__ == "__main__":
    jobs = check_email()
    if jobs:
        print(f"Found {len(jobs)} new potential Fiverr jobs:")
        for job in jobs:
            print(f"\n---")
            print(f"Subject: {job['subject']}")
            print(f"Matches: {', '.join(job['matches'])}")
            print(f"Snippet: {job['snippet'][:200]}...")
    # Silent if no jobs - don't output anything