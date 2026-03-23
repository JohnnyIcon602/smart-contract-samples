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

const CACHE_TTL_MS = 15 * 60 * 1000;
type CacheEntry = { expires: number; value: DiagnoseResponse };
const cache = new Map<string, CacheEntry>();
const bootTimestamp = new Date().toISOString();
const catalogData = vehicleCatalog as VehicleCatalog;

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

    const response = diagnoseFromInputs(sanitizedBody);

    cache.set(cacheKey, {
      expires: Date.now() + CACHE_TTL_MS,
      value: response
    });

    reply.header('Cache-Control', 'private, max-age=60');

    return response;
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
