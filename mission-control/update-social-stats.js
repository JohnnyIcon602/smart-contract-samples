#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const __dirname = path.resolve(path.dirname(new URL(import.meta.url).pathname));

const TIKTOK_URL = 'https://www.tiktok.com/@moneylanguage602?is_from_webapp=1&sender_device=pc';
const SKOOL_URL = 'https://www.skool.com/money-language-academy-4435/about';

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15'
    }
  });
  if (!res.ok) {
    throw new Error(`Request failed for ${url}: ${res.status} ${res.statusText}`);
  }
  return res.text();
}

function parseTikTokFollowers(html) {
  const scriptMatch = html.match(/<script[^>]+type="application\/json"[^>]*>([\s\S]*?webapp\.user-detail[\s\S]*?)<\/script>/);
  if (!scriptMatch) {
    throw new Error('Unable to locate TikTok data block');
  }

  const jsonText = scriptMatch[1];
  const data = JSON.parse(jsonText);
  const stats = data?.__DEFAULT_SCOPE__?.['webapp.user-detail']?.userInfo?.stats;
  const followers = Number(stats?.followerCount ?? 0);
  if (!followers) {
    throw new Error('TikTok follower count missing');
  }
  return followers;
}

function parseSkoolMembers(html) {
  const match = html.match(/(\d{2,})\s+members/i);
  if (!match) {
    throw new Error('Unable to parse Skool member count');
  }
  return Number(match[1]);
}

function formatNumber(value) {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  }
  return String(value);
}

async function main() {
  const [tiktokHtml, skoolHtml] = await Promise.all([
    fetchText(TIKTOK_URL),
    fetchText(SKOOL_URL)
  ]);

  const followers = parseTikTokFollowers(tiktokHtml);
  const members = parseSkoolMembers(skoolHtml);

  const fetchedAt = new Date().toISOString();

  const payload = {
    fetchedAt,
    tiktok: {
      url: TIKTOK_URL,
      followers,
      formattedFollowers: formatNumber(followers),
      fetchedAt
    },
    skool: {
      url: SKOOL_URL,
      members,
      formattedMembers: formatNumber(members),
      fetchedAt
    }
  };

  const dest = path.join(__dirname, 'social-stats.json');
  await fs.writeFile(dest, JSON.stringify(payload, null, 2));
  console.log(`Saved social stats → ${dest}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
