#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'csv-parse/sync';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const dataDir = path.join(projectRoot, 'data');
const outputPath = path.join(dataDir, 'vehicle-catalog.json');

const SOURCE_BASE = 'https://raw.githubusercontent.com/abhionlyone/us-car-models-data/master';
const START_YEAR = 2000;
const END_YEAR = 2026;

const yearsRange = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, idx) => START_YEAR + idx);

const catalog = new Map();

const fetchCsvForYear = async (year) => {
  const url = `${SOURCE_BASE}/${year}.csv`;
  const response = await fetch(url);
  if (!response.ok) {
    console.warn(`⚠️  Skipping ${year} — HTTP ${response.status}`);
    return [];
  }
  const text = await response.text();
  return parse(text, {
    columns: true,
    skip_empty_lines: true
  });
};

for (const year of yearsRange) {
  const rows = await fetchCsvForYear(year);
  for (const row of rows) {
    const yearNum = Number(row.year) || year;
    const make = row.make?.trim();
    const model = row.model?.trim();
    if (!make || !model) continue;
    if (!catalog.has(yearNum)) {
      catalog.set(yearNum, new Map());
    }
    const makeMap = catalog.get(yearNum);
    if (!makeMap.has(make)) {
      makeMap.set(make, new Set());
    }
    makeMap.get(make).add(model);
  }
}

const payload = Array.from(catalog.entries())
  .sort((a, b) => b[0] - a[0])
  .map(([year, makeMap]) => ({
    year,
    makes: Array.from(makeMap.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([make, models]) => ({
        make,
        models: Array.from(models).sort((a, b) => a.localeCompare(b))
      }))
  }));

await mkdir(dataDir, { recursive: true });
await writeFile(
  outputPath,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      source: 'github.com/abhionlyone/us-car-models-data',
      years: payload
    },
    null,
    2
  )
);

console.log(`✅ Wrote ${payload.length} years to ${path.relative(projectRoot, outputPath)}`);
