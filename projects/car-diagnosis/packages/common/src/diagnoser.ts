import {
  DiagnoseRequest,
  DiagnoseResponse,
  IssueSuggestion
} from './index.js';
import {
  defaultDisclaimer,
  defaultNextActions,
  dtcKnowledge,
  symptomRules
} from './knowledgeBase.js';

const clamp = (value: number, min = 0, max = 1) => Math.max(min, Math.min(max, value));

const normalizeText = (value?: string) =>
  value?.trim().toLowerCase().replace(/\s+/g, ' ') ?? '';

const dedupeIssues = (issues: IssueSuggestion[]): IssueSuggestion[] => {
  const map = new Map<string, IssueSuggestion>();
  for (const issue of issues) {
    const existing = map.get(issue.title);
    if (!existing || issue.likelihood > existing.likelihood) {
      map.set(issue.title, issue);
    }
  }
  return Array.from(map.values()).sort((a, b) => b.likelihood - a.likelihood);
};

export const diagnoseFromInputs = (
  body: DiagnoseRequest
): DiagnoseResponse => {
  const issues: IssueSuggestion[] = [];
  const normalizedSymptoms = (body.symptoms ?? []).map((symptom) =>
    normalizeText(symptom)
  );

  const dtcMatches = (body.dtc ?? [])
    .map((codeRaw) => codeRaw?.toUpperCase().trim())
    .filter((code): code is string => Boolean(code));

  for (const code of dtcMatches) {
    const entry = dtcKnowledge[code];
    if (!entry) continue;

    const likelihoodBase = 0.55;
    const symptomBoost = normalizedSymptoms.some((symptom) =>
      entry.keywords?.some((keyword) => symptom.includes(keyword))
    )
      ? 0.25
      : 0;

    issues.push({
      title: entry.title,
      explanation: entry.explanation,
      severity: entry.severity,
      recommendedChecks: entry.recommendedChecks,
      estimatedRepairRange: entry.estimatedRepairRange,
      likelihood: clamp(likelihoodBase + symptomBoost),
      sourceTrail: [`dtc:${code}`]
    });
  }

  for (const rule of symptomRules) {
    const matched = normalizedSymptoms.some((symptom) =>
      rule.matchers.some((matcher) => symptom.includes(matcher))
    );

    if (!matched) continue;

    issues.push({
      ...rule.issue,
      likelihood: 0.5,
      sourceTrail: rule.sourceTrail
    });
  }

  if (!issues.length) {
    issues.push({
      title: 'Unable to determine likely cause',
      explanation:
        'We need additional data (specific DTCs, noises, smells, driving conditions) to narrow this down. A hands-on diagnostic will include scan data and visual tests.',
      severity: 'low',
      recommendedChecks: ['Full system scan', 'Visual inspection', 'Road test under symptom conditions'],
      likelihood: 0.3,
      sourceTrail: ['fallback:no_match']
    });
  }

  return {
    issues: dedupeIssues(issues),
    nextActions: defaultNextActions,
    disclaimer: defaultDisclaimer
  };
};
