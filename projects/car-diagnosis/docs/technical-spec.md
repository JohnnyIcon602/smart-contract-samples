# Tom's Auto Diagnostic Widget — Technical Specification

_Last updated: 2026-03-21_

## 1. Objectives
- Provide prospective customers a trustworthy self-serve diagnostic assistant similar to CarMD.
- Accept both official OBD-II diagnostic trouble codes (DTCs) and plain-language symptom descriptions.
- Leverage free/public data sources initially; design adapters for future paid data (CarMD, RepairPal, ALLDATA).
- Embed seamlessly into the existing Wix-site (tomsauto.net) managed via Tekmetric.
- Deliver actionable guidance (likely root causes, severity, suggested checks) while clearly positioning results as preliminary.
- Future-ready: hook into Tekmetric online scheduling once approved.

## 2. System Architecture Overview
```
Browser Widget (React) --> Fastify API --> Orchestrator Service
                                         |--> Retrieval Layer (Vector DB)
                                         |--> Structured KB (Postgres)
                                         |--> Data Adapters (NHTSA, DTC, Symptom datasets)
                                         |--> LLM (GPT-5.1 Codex via OpenAI)
```

### Core Modules
1. **Edge Widget** – React component bundled as a Wix Custom Element. Handles user flow, client-side validation, friendly copy, analytics events.
2. **Fastify API** – Node 20+, Fastify for schema validation, rate limiting, logging.
3. **Inference Service** – Within the API process; orchestrates normalization, retrieval, prompt assembly, output shaping, caching.
4. **Knowledge Base** –
   - **Postgres**: canonical store for normalized DTC definitions, symptom metadata, curated fix procedures, ingestion logs.
   - **Vector DB** (Qdrant or Pinecone free tier): embeddings for unstructured text (TSBs, forum summaries, recall notices).
5. **Data Ingestion Pipelines** – Cron jobs/scheduled workers to pull and normalize public data sources (see §3).
6. **Observability** – pino logging, structured events to Logtail/Datadog (optional). Basic metrics: request volume, completion latency, top symptoms.

## 3. Data Sources (Free/Public Phase)
| Source | Content | Access Method | Refresh Cadence |
|--------|---------|--------------|-----------------|
| NHTSA ODI/TSB API | Technical Service Bulletins, recall summaries | HTTPS JSON (api.nhtsa.gov/recalls/tsbs) | Weekly |
| NHTSA Recall CSV dumps | Recall metadata | Download + parse | Weekly |
| SAE/NIST public OBD-II DTC libraries | Code → description mapping | GitHub datasets (MIT License) | Static |
| Kaggle "Car Problems Dataset" & similar | Symptom text, vehicle metadata | Kaggle API download | Monthly |
| Forum scrapes (select OEM subforums, r/MechanicAdvice) | Natural-language complaints & resolutions | RSS/HTML scrape + moderation | Monthly |
| EPA fuel/engine datasets | Engine family IDs, failure trends | CSV download | Quarterly |

### Ingestion Flow
1. **Fetcher** pulls raw source → saves to `raw/<source>/<timestamp>.json`.
2. **Normalizer** maps to canonical schema (`vehicle`, `symptom`, `dtc`, `fix`, `source_meta`).
3. **Vectorizer** (OpenAI text-embedding-3-small) generates embeddings for long-form docs.
4. **Quality Filters** remove low-signal entries (e.g., forum posts <150 chars, junk keywords).
5. **Loaders:**
   - Structured rows → Postgres tables.
   - Unstructured text → Vector DB (chunked, metadata tags: source, vehicle_make, dtc, symptom_class).
6. **Catalog** table tracks ingestion version, counts, checksum for reproducibility.

## 4. API Design (Fastify)
### 4.1 Endpoints
1. `POST /v1/diagnose`
   - **Body**
     ```json
     {
       "vehicle": {
         "year": 2017,
         "make": "Toyota",
         "model": "Camry",
         "mileage": 128000
       },
       "dtc": ["P0300", "P0171"],
       "symptoms": ["loss of power", "engine shaking"],
       "recentWork": "Spark plugs 2 months ago"
     }
     ```
   - **Response**
     ```json
     {
       "issues": [
         {
           "title": "Multiple cylinder misfire (P0300)",
           "likelihood": 0.74,
           "severity": "high",
           "explanation": "Misfires under load + lean condition...",
           "recommendedChecks": ["Compression test", "Fuel trim analysis"],
           "estimatedRepairRange": {"parts": 250, "laborHours": 2.5},
           "sourceTrail": ["dtc:P0300", "tsb:toyota-16-NA-123"]
         }
       ],
       "nextActions": [
         "Avoid extended driving until inspected",
         "Schedule diagnostic"],
       "disclaimer": "Preliminary guidance..."
     }
     ```
   - **Behavior**: orchestrates normalization → retrieval → LLM synthesis → deterministic post-processing. Caches identical requests for 15 minutes.

2. `GET /v1/meta/sources`
   - Returns ingestion timestamps, row counts per source, helpful for admin/QA.

3. `POST /internal/ingest/:source`
   - Auth-protected trigger for manual ingestion.

4. `GET /healthz`
   - Health check for uptime monitors.

### 4.2 Services/Utilities
- **Normalizer**: unify free-text symptom into taxonomy (e.g., `loss of power` → `powertrain_performance`). Uses mini LLM call with deterministic prompt/few-shot.
- **Retriever**: hybrid search (structured filter on DTC + vector search on symptoms). Returns top-k context documents.
- **LLM Composer**: builds JSON-only prompt with constraints (“answer as JSON with schema X”).
- **Validator**: AJV schema to ensure LLM output matches expected shape; fall back to rule-based suggestions if validation fails.
- **Throttle & Abuse Protection**: IP-based rate limit (Fastify-rate-limit). Optionally integrate hCaptcha if embed becomes public target.

## 5. Widget (Wix Embed)
### Tech Choices
- React + Vite build, compiled to vanilla JS bundle.
- Expose `<toms-auto-diagnoser />` custom element with attributes for theme overrides.
- Internal state machine (XState or lightweight reducer) handling steps:
  1. Vehicle basics (year/make/model dropdowns with search)
  2. Input method choice (enter DTCs, describe symptoms, both)
  3. Clarifying questions (auto-generated from symptom taxonomy: e.g., “Happens at idle or acceleration?”)
  4. Results view with issues list + CTA placeholder (for future Tekmetric link).

### Accessibility & UX Notes
- Mobile-first layout; keep forms under 5 inputs before results.
- Use friendly copy, reassure privacy, highlight that diagnosis is preliminary.
- Provide collapsible detail for each suggested issue (cause, tests, severity indicator color).
- Analytics hooks (dataLayer push) for steps completed.

## 6. Deployment & DevOps
- **Repo structure**
  ```
  /apps/widget
  /apps/api
  /packages/common (shared schemas, types)
  /infrastructure (IaC, Terraform optional)
  ```
- **Environments**: `dev` (local), `staging` (password-protected), `prod`.
- **Hosting**: Vercel or Netlify for widget + static assets; Fly.io/Render for Fastify API (Node 20). Postgres via Supabase (free tier) initially; Qdrant Cloud free tier for vectors.
- **Secrets**: `.env` managed via Doppler or 1Password CLI.
- **CI/CD**: GitHub Actions running lint, tests, type-check, deploy on main merges.
- **Monitoring**: Healthchecks + UptimeRobot; future log shipping to Logtail.

## 7. Roadmap & Milestones
| Week | Deliverable |
|------|-------------|
| 1 | Finalize spec + wireframes (this doc + mockups), scaffold repo, set up Postgres/Qdrant, ingest initial datasets |
| 2 | Implement ingestion jobs + admin endpoints, validate data quality |
| 3 | Build `/v1/diagnose` pipeline, integrate GPT-5.1, add validation + caching |
| 4 | Implement widget UI, connect to API, add observability/logging |
| 5 | QA with curated scenarios, content polish, deploy to staging + gather feedback |
| 6 | Production embed on Wix, monitor, plan Tekmetric lead flow |

## 8. Open Questions / Future Work
- Paid data licensing (CarMD, RepairPal) for cost estimates as soon as budget allows.
- Tekmetric online scheduler webhook/deep link parameters.
- Add VIN decoder integration for automatic vehicle metadata.
- Multi-language support (Spanish) for local demographics.
- Lead capture + follow-up automation once funnel is reintroduced.

---
This spec will evolve as wireframes and implementation details solidify.
