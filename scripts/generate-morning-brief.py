#!/usr/bin/env python3
"""
Morning Brief Generator
Fetches weather, tasks, and income ideas to generate a daily brief.
"""

import json
import os
from datetime import datetime
from urllib.request import urlopen
from urllib.error import URLError

# Configuration
LAT, LON = 38.95, -92.33  # Columbia, MO
WORKSPACE = "/Users/five/.openclaw/workspace"
OUTPUT_FILE = f"{WORKSPACE}/scripts/todays-morning-brief.txt"

def get_weather():
    """Fetch 3-day weather forecast from Open-Meteo API."""
    url = f"https://api.open-meteo.com/v1/forecast?latitude={LAT}&longitude={LON}&daily=temperature_2m_max,temperature_2m_min,weather_code&temperature_unit=fahrenheit&forecast_days=3"
    try:
        with urlopen(url, timeout=10) as response:
            data = json.loads(response.read())
            daily = data['daily']
            forecast_parts = []
            for i in range(len(daily['time'])):
                day_name = datetime.strptime(daily['time'][i], "%Y-%m-%d").strftime("%A")[:3]
                high = int(daily['temperature_2m_max'][i])
                low = int(daily['temperature_2m_min'][i])
                code = daily['weather_code'][i]
                desc = weather_code_desc(code)
                if i == 0:
                    day_name = "Today"
                elif i == 1:
                    day_name = "Tomorrow"
                forecast_parts.append(f"{day_name}: {high}°/{low}° — {desc}")
            return " | ".join(forecast_parts), 0
    except Exception as e:
        return "Unavailable", 0

def weather_code_desc(code):
    """Map WMO weather codes to descriptions."""
    codes = {
        0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
        45: "Foggy", 48: "Depositing rime fog",
        51: "Light drizzle", 53: "Drizzle", 55: "Dense drizzle",
        61: "Slight rain", 63: "Rain", 65: "Heavy rain",
        71: "Slight snow", 73: "Snow", 75: "Heavy snow",
        80: "Slight showers", 81: "Showers", 82: "Violent showers",
        95: "Thunderstorm", 96: "Thunderstorm with hail"
    }
    return codes.get(code, "Unknown")

def get_news():
    """Fetch news headlines - returns list of national and Missouri headlines."""
    national = []
    mo_news = []
    
    # National news - US-focused RSS sources
    rss_sources = [
        "https://news.yahoo.com/rss/topstories",
        "https://rss.nytimes.com/rss/TopStories.rss",
        "https://feeds.bbci.co.uk/news/rss.xml",
    ]
    
    for rss_url in rss_sources:
        try:
            from urllib.request import urlopen
            import json
            with urlopen(f"https://api.rss2json.com/v1/api.json?rss_url={rss_url}", timeout=8) as resp:
                data = json.loads(resp.read())
                if data.get('status') == 'ok':
                    for item in data.get('items', [])[:5]:
                        title = item.get('title', '')
                        if title and len(title) > 10:
                            national.append(title[:120])
                    if national:
                        break
        except:
            continue
    
    # Fallback if no news
    if not national:
        national = [
            "Top stories developing throughout the day",
            "Check cnn.com, bbc.com, reuters.com for latest",
        ]
    
    # Missouri news
    try:
        from urllib.request import urlopen
        import json
        with urlopen("https://api.rss2json.com/v1/api.json?rss_url=https://www.columbiamissourian.com/feed/rss/", timeout=8) as resp:
            data = json.loads(resp.read())
            if data.get('status') == 'ok':
                for item in data.get('items', [])[:2]:
                    title = item.get('title', '')
                    if title:
                        mo_news.append(title[:120])
    except:
        pass
    
    if not mo_news:
        mo_news = ["Check columbiamissourian.com for local news"]
    
    return national[:5], mo_news[:2]

def get_tasks():
    """Read tasks from tasks.json."""
    tasks_file = f"{WORKSPACE}/mission-control/tasks.json"
    try:
        with open(tasks_file) as f:
            data = json.load(f)
        high_priority = [t['text'] for t in data.get('tasks', []) if t.get('priority') == 'high' and t.get('status') != 'completed']
        in_progress = [t['text'] for t in data.get('tasks', []) if t.get('status') == 'in_progress']
        return high_priority, in_progress
    except Exception as e:
        return [], []

def get_income_ideas():
    """Read autonomous income ideas."""
    income_file = f"{WORKSPACE}/autonomous-income.md"
    ideas = []
    try:
        with open(income_file) as f:
            content = f.read()
        # Extract ideas from the table
        lines = content.split('\n')
        for line in lines:
            if '|' in line and 'Income Stream' not in line and '---' not in line:
                parts = [p.strip() for p in line.split('|')]
                if len(parts) >= 3 and parts[1]:
                    idea = parts[1]
                    potential = parts[3] if len(parts) > 3 else ""
                    if idea and potential:
                        # Strip leading numbers, markdown bold, bullets like "1. ", "**1. ", "* "
                        import re
                        idea = re.sub(r'^[\*\#]+[\s\.]*', '', idea)
                        idea = re.sub(r'^\d+[\.\)]\s*', '', idea)
                        ideas.append(f"{idea} — {potential}")
        # Fallback: just return first 3
        if not ideas:
            ideas = [
                "Landing Page Funnel — $3k+/mo",
                "Affiliate Links in Content — $500-2k/mo",
                "Digital Course — $5-10k/mo"
            ]
    except Exception as e:
        ideas = ["Setup pending", "Configure income streams", "Launch projects"]
    
    return ideas[:3]

def get_ordinal(n):
    """Add ordinal suffix to date."""
    if 11 <= n <= 13:
        return f"{n}th"
    elif n % 10 == 1:
        return f"{n}st"
    elif n % 10 == 2:
        return f"{n}nd"
    elif n % 10 == 3:
        return f"{n}rd"
    else:
        return f"{n}th"

def get_quote():
    """Get an inspiring quote."""
    quotes = [
        "The only way to do great work is to love what you do. — Steve Jobs",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
        "Believe you can and you're halfway there. — Theodore Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. — Confucius",
        "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
        "Hard work beats talent when talent doesn't work hard. — Tim Notke",
        "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
        "Success is walking from failure to failure with no loss of enthusiasm. — Winston Churchill",
        "The only impossible journey is the one you never begin. — Tony Robbins",
        "Your limitation—it's only your imagination. — Unknown",
    ]
    import random
    return random.choice(quotes)

def generate_brief():
    """Generate the morning brief."""
    now = datetime.now()
    day = now.strftime("%A")
    month = now.strftime("%B")
    date = now.day
    year = now.year
    
    # Get data
    weather, wind = get_weather()
    national_news, mo_news = get_news()
    high_priority, in_progress = get_tasks()
    income_ideas = get_income_ideas()
    quote = get_quote()
    
    # Format tasks
    hp_text = "• None" if not high_priority else "\n  • ".join(high_priority)
    ip_text = "• None" if not in_progress else "\n  • ".join(in_progress)
    
    # Format news
    news_text = ""
    for i, news in enumerate(national_news[:2], 1):
        news_text += f"• {news}\n"
    if mo_news:
        news_text += f"• {mo_news[0]}"
    
    # Format income ideas - strip any markdown and duplicates
    income_text = ""
    seen = set()
    idx = 1
    for idea in income_ideas:
        clean_idea = idea.replace("**", "").strip()
        # Skip duplicates
        if clean_idea and clean_idea not in seen:
            seen.add(clean_idea)
            income_text += f"{idx}. {clean_idea}\n"
            idx += 1
            if idx > 5:
                break
    
    brief = f"""GOOD MORNING, BOSS — {day}, {month} {get_ordinal(date)}, {year}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 LOCATION: Columbia, MO
🌡️ WEATHER: {weather}

📰 TOP NEWS
{news_text}

🔴 HIGH PRIORITY:
{hp_text}

🔄 IN PROGRESS:
{ip_text}

🤖 AGENT TEAM
• Monica: Project management (6 AM)
• Dwight: Research (morning + afternoon - autonomous income)
• Picasso: T-shirt designs
• Lois: eCommerce uploads
• Addy: TikTok/X/FB marketing

💡 MONEY IDEAS (Autonomous Income - 2x Daily Research)
{income_text}

💭 QUOTE OF THE DAY
"{quote}"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Have a great day, Boss! 🦅
"""
    
    # Save to file
    with open(OUTPUT_FILE, 'w') as f:
        f.write(brief)
    
    print(f"Brief saved to {OUTPUT_FILE}")
    return brief

if __name__ == "__main__":
    brief = generate_brief()
    print(brief)