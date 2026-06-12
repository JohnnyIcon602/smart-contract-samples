import type { IssueSuggestion } from './index.js';

export type DtcEntry = {
  title: string;
  explanation: string;
  severity: IssueSuggestion['severity'];
  recommendedChecks: string[];
  estimatedRepairRange?: IssueSuggestion['estimatedRepairRange'];
  keywords?: string[];
};

export type SymptomRule = {
  matchers: string[];
  issue: Omit<IssueSuggestion, 'likelihood' | 'sourceTrail'>;
  sourceTrail?: string[];
};
