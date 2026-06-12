#!/usr/bin/env node
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const sourcePath = path.join(rootDir, 'data', 'obdii-codes.json');
const outputDir = path.join(rootDir, 'packages', 'common', 'src', 'data');
const outputPath = path.join(outputDir, 'generatedDtc.ts');

const defaultRecommendedChecks = [
  'Review freeze-frame data and duplicating conditions',
  'Inspect related wiring, connectors, and sensors for obvious faults',
  'Perform OEM pinpoint tests for this DTC before replacing parts'
];

const escapeString = (value) =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r?\n|\r/g, ' ')
    .replace(/\s+/g, ' ') // collapse whitespace
    .trim();

const normalizeCode = (raw) => {
  if (!raw) return null;
  return raw.split('/')[0].trim().toUpperCase();
};

const buildExplanation = (description) =>
  `Generic OBD-II definition: ${description}. A technician should capture live data and follow the diagnostic flow.`;

const severityForCode = (code) => {
  if (!code) return 'medium';
  const family = code[0];
  if (family === 'P') return 'medium';
  if (family === 'C') return 'medium';
  return 'low';
};

try {
  const raw = await readFile(sourcePath, 'utf-8');
  const parsed = JSON.parse(raw);

  const records = new Map();

  for (const entry of parsed) {
    const code = normalizeCode(entry.Code);
    const descriptionRaw = entry.Description ?? '';
    const description = escapeString(descriptionRaw);
    if (!code || !description) continue;
    if (records.has(code)) continue;

    records.set(code, {
      title: description,
      explanation: escapeString(buildExplanation(descriptionRaw)),
      severity: severityForCode(code),
      recommendedChecks: defaultRecommendedChecks
    });
  }

  const sortedCodes = Array.from(records.keys()).sort();
  await mkdir(outputDir, { recursive: true });

  const lines = [];
  lines.push('// AUTO-GENERATED FILE. Run `node scripts/generate-dtc-data.mjs` to regenerate.');
  lines.push(`// Generated on ${new Date().toISOString()}`);
  lines.push("import type { DtcEntry } from '../dtcTypes.js';");
  lines.push('');
  lines.push(
    `const genericRecommendedChecks: string[] = ${JSON.stringify(defaultRecommendedChecks, null, 2)};`
  );
  lines.push('');
  lines.push('export const generatedDtcCatalog: Record<string, DtcEntry> = {');

  for (const code of sortedCodes) {
    const entry = records.get(code);
    const entryLines = [
      `  ${code}: {`,
      `    title: '${entry.title}',`,
      `    explanation: '${entry.explanation}',`,
      `    severity: '${entry.severity}',`,
      "    recommendedChecks: [...genericRecommendedChecks]",
      '  },'
    ];
    lines.push(...entryLines);
  }

  lines.push('};');
  lines.push('');

  await writeFile(outputPath, lines.join('\n'));
  console.log(`Generated ${sortedCodes.length} DTC entries → ${path.relative(rootDir, outputPath)}`);
} catch (err) {
  console.error('Failed to generate DTC data:', err);
  process.exit(1);
}
