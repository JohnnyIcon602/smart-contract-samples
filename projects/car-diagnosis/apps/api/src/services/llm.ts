import OpenAI from 'openai';
import type {
  DiagnoseRequest,
  DiagnoseResponse,
  IssueSuggestion
} from '@tomsauto/common';

const OPENAI_MODEL = process.env.OPENAI_MODEL?.trim() || 'gpt-5.1-mini';
const apiKey = process.env.OPENAI_API_KEY;
const openaiClient = apiKey ? new OpenAI({ apiKey }) : null;

const responseSchema = {
  name: 'diagnosis_response',
  schema: {
    type: 'object',
    additionalProperties: false,
    required: ['issues', 'nextActions', 'disclaimer'],
    properties: {
      issues: {
        type: 'array',
        minItems: 1,
        items: {
          type: 'object',
          additionalProperties: false,
          required: ['title', 'explanation', 'severity', 'recommendedChecks', 'likelihood'],
          properties: {
            title: { type: 'string', minLength: 4 },
            explanation: { type: 'string', minLength: 12 },
            severity: { type: 'string', enum: ['low', 'medium', 'high'] },
            likelihood: { type: 'number', minimum: 0, maximum: 1 },
            recommendedChecks: {
              type: 'array',
              minItems: 1,
              items: { type: 'string', minLength: 4 }
            },
            estimatedRepairRange: {
              type: 'object',
              additionalProperties: false,
              properties: {
                parts: { type: 'number', minimum: 0 },
                laborHours: { type: 'number', minimum: 0 }
              }
            },
            sourceTrail: {
              type: 'array',
              items: { type: 'string' }
            }
          }
        }
      },
      nextActions: {
        type: 'array',
        minItems: 1,
        items: { type: 'string', minLength: 4 }
      },
      disclaimer: { type: 'string', minLength: 12 }
    }
  }
} as const;

type DtcContext = Array<{
  code: string;
  title: string;
  explanation: string;
  severity: IssueSuggestion['severity'];
  recommendedChecks: string[];
}>;

type EnhanceOptions = {
  request: DiagnoseRequest;
  baseResponse: DiagnoseResponse;
  dtcContext: DtcContext;
};

const systemPrompt = `You are a master automotive diagnostician. Blend OBD-II trouble-code knowledge, symptom descriptions, and recent work history to propose likely root causes.

Guidelines:
- Respond ONLY with JSON that satisfies the provided schema.
- If information is limited, say so, but still offer the best next checks.
- Reference codes by ID (e.g., P0300) when relevant.
- Likelihood is between 0 and 1; be conservative unless the evidence is strong.
- Surface safety or drivability risks when severity is high.
- Recommend concrete inspections/tests, not generic advice.`;

const parseResponse = (payload: unknown): DiagnoseResponse | null => {
  if (!payload || typeof payload !== 'object') return null;
  const obj = payload as DiagnoseResponse;
  if (!Array.isArray(obj.issues) || !Array.isArray(obj.nextActions)) return null;
  if (typeof obj.disclaimer !== 'string') return null;
  return obj;
};

export const enhanceDiagnosisWithLLM = async (
  options: EnhanceOptions
): Promise<DiagnoseResponse | null> => {
  if (!openaiClient) {
    return null;
  }

  try {
    const { request, baseResponse, dtcContext } = options;
    const payload = {
      vehicle: request.vehicle ?? {},
      dtcContext,
      symptomDescriptions: request.symptoms ?? [],
      recentWork: request.recentWork ?? null,
      baseIssues: baseResponse.issues,
      baseNextActions: baseResponse.nextActions
    };

    const response = await openaiClient.responses.create({
      model: OPENAI_MODEL,
      input: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Use this JSON payload to craft the final diagnosis:'
            },
            {
              type: 'input_text',
              text: JSON.stringify(payload)
            }
          ]
        }
      ],
      response_format: {
        type: 'json_schema',
        json_schema: responseSchema
      },
      max_output_tokens: 900
    });

    const firstOutput = response.output?.[0]?.content?.[0];
    let parsed: DiagnoseResponse | null = null;
    if (firstOutput?.type === 'output_json') {
      parsed = parseResponse(firstOutput.json);
    } else if (firstOutput?.type === 'output_text') {
      parsed = parseResponse(JSON.parse(firstOutput.text));
    }

    return parsed ?? null;
  } catch (err) {
    console.error('LLM enhancement failed:', err);
    return null;
  }
};
