#!/usr/bin/env node
/**
 * Memory Feed Automation
 * Run after each session to sync latest memory entries to Mission Control
 */

const fs = require('fs');
const path = require('path');

const MEMORY_DIR = path.join(__dirname, '..', 'memory');
const FEED_FILE = path.join(__dirname, '..', 'mission-control', 'memory-feed.json');
const MAX_ENTRIES = 10;

function getMemoryFiles() {
    const files = fs.readdirSync(MEMORY_DIR)
        .filter(f => f.match(/^\d{4}-\d{2}-\d{2}\.md$/))
        .sort()
        .reverse(); // newest first
    return files.slice(0, 7); // last 7 days
}

function parseMemoryEntry(filename) {
    const content = fs.readFileSync(path.join(MEMORY_DIR, filename), 'utf8');
    const date = filename.replace('.md', '');
    
    // Extract key info from the file
    const titleMatch = content.match(/^#\s+.*$/m);
    const title = titleMatch ? titleMatch[0].replace(/^#\s+/, '') : date;
    
    // Look for task completions or highlights
    const highlights = [];
    const lines = content.split('\n');
    for (const line of lines) {
        if (line.startsWith('## ') && !line.includes('## ')) {
            // Section headers might have useful info
        }
        if (line.includes('completed') || line.includes('Done') || line.includes('Finished')) {
            const match = line.match(/- (.*)/);
            if (match) highlights.push(match[1]);
        }
    }
    
    const summary = highlights.length > 0 
        ? highlights.slice(0, 2).join('; ')
        : 'Session activity logged';
    
    return { date, title, summary };
}

function updateFeed() {
    const files = getMemoryFiles();
    const entries = files.map(parseMemoryEntry).slice(0, MAX_ENTRIES);
    
    const feed = { entries };
    fs.writeFileSync(FEED_FILE, JSON.stringify(feed, null, 2));
    
    console.log(`Updated memory-feed.json with ${entries.length} entries`);
    console.log(entries.map(e => `${e.date}: ${e.title}`).join('\n'));
}

updateFeed();