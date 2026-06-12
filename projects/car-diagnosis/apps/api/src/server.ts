import fastify from 'fastify';
import cors from '@fastify/cors';
import sensible from '@fastify/sensible';
import rateLimit from '@fastify/rate-limit';
import {
  DiagnoseRequest,
  DiagnoseResponse,
  VehicleCatalog,
  diagnoseFromInputs,
  dtcKnowledge,
  symptomRules
} from '@tomsauto/common';
import vehicleCatalog from '../../../data/vehicle-catalog.json' assert { type: 'json' };
import { enhanceDiagnosisWithLLM } from './services/llm.js';

const CACHE_TTL_MS = 15 * 60 * 1000;
type CacheEntry = { expires: number; value: DiagnoseResponse };
const cache = new Map<string, CacheEntry>();
const bootTimestamp = new Date().toISOString();
const catalogData = vehicleCatalog as VehicleCatalog;

const buildDtcContext = (codes?: string[]) => {
  const results: Array<{
    code: string;
    title: string;
    explanation: string;
    severity: 'low' | 'medium' | 'high';
    recommendedChecks: string[];
  }> = [];
  if (!codes?.length) return results;
  const seen = new Set<string>();
  for (const code of codes) {
    if (!code || seen.has(code)) continue;
    const entry = dtcKnowledge[code];
    if (!entry) continue;
    seen.add(code);
    results.push({
      code,
      title: entry.title,
      explanation: entry.explanation,
      severity: entry.severity,
      recommendedChecks: entry.recommendedChecks.slice(0, 4)
    });
    if (results.length >= 8) break;
  }
  return results;
};

const buildServer = () => {
  const app = fastify({
    logger: true
  });

  app.register(cors, { origin: true });
  app.register(sensible);
  app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute'
  });

  app.get('/healthz', async () => ({ status: 'ok' }));

  app.get('/v1/meta/sources', async () => ({
    sources: [
      {
        id: 'dtc_seed_rules',
        description: 'Seed rules bundled with the API build',
        rows: Object.keys(dtcKnowledge).length,
        lastUpdated: bootTimestamp
      },
      {
        id: 'symptom_rules',
        description: 'Keyword-driven symptom rules',
        rows: symptomRules.length,
        lastUpdated: bootTimestamp
      }
    ]
  }));

  app.get('/v1/meta/vehicles', async () => catalogData);

  app.post<{ Body: DiagnoseRequest }>('/v1/diagnose', async (request, reply) => {
    const body = request.body ?? {};

    if (!body.dtc?.length && !body.symptoms?.length) {
      throw app.httpErrors.badRequest(
        'Provide at least one DTC or describe the symptoms so we can help.'
      );
    }

    const sanitizedBody: DiagnoseRequest = {
      vehicle: body.vehicle,
      recentWork: body.recentWork?.trim() || undefined,
      dtc: body.dtc?.map((code) => code?.toUpperCase().trim()).filter(Boolean),
      symptoms: body.symptoms?.map((symptom) => symptom?.trim()).filter(Boolean)
    };

    const cacheKey = JSON.stringify(sanitizedBody);
    const cached = cache.get(cacheKey);
    if (cached && cached.expires > Date.now()) {
      request.log.debug({ cache: 'hit' }, 'Serving cached diagnosis');
      return cached.value;
    }

    const baseResponse = diagnoseFromInputs(sanitizedBody);
    const dtcContext = buildDtcContext(sanitizedBody.dtc);
    const llmResponse = await enhanceDiagnosisWithLLM({
      request: sanitizedBody,
      baseResponse,
      dtcContext
    });
    const finalResponse = llmResponse ?? baseResponse;

    cache.set(cacheKey, {
      expires: Date.now() + CACHE_TTL_MS,
      value: finalResponse
    });

    reply.header('Cache-Control', 'private, max-age=60');

    return finalResponse;
  });

  return app;
};

const start = async () => {
  const server = buildServer();
  try {
    await server.listen({ port: Number(process.env.PORT) || 3333, host: '0.0.0.0' });
    server.log.info('API listening');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  start();
}

export { buildServer };
