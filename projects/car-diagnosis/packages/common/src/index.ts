export type VehicleInput = {
  year?: number;
  make?: string;
  model?: string;
  mileage?: number;
};

export type DiagnoseRequest = {
  vehicle?: VehicleInput;
  dtc?: string[];
  symptoms?: string[];
  recentWork?: string;
};

export type IssueSuggestion = {
  title: string;
  likelihood: number; // 0-1
  severity: 'low' | 'medium' | 'high';
  explanation: string;
  recommendedChecks: string[];
  estimatedRepairRange?: {
    parts?: number;
    laborHours?: number;
  };
  sourceTrail?: string[];
};

export type DiagnoseResponse = {
  issues: IssueSuggestion[];
  nextActions: string[];
  disclaimer: string;
};

export type VehicleCatalog = {
  generatedAt: string;
  source?: string;
  years: VehicleYearOption[];
};

export type VehicleYearOption = {
  year: number;
  makes: VehicleMakeOption[];
};

export type VehicleMakeOption = {
  make: string;
  models: string[];
};

export { diagnoseFromInputs } from './diagnoser.js';
export {
  defaultDisclaimer,
  defaultNextActions,
  dtcKnowledge,
  symptomRules
} from './knowledgeBase.js';
