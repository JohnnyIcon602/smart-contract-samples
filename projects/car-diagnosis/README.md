# Tom's Auto Diagnostic Widget

Monorepo containing:
- `apps/api` – Fastify service for diagnosis endpoint.
- `apps/widget` – React-based embeddable widget for Wix site.
- `packages/common` – Shared types & utilities.

## Getting Started
```bash
npm install
```

### Run the API
```bash
npm run dev:api
# defaults to http://localhost:3333
```

### Run the Widget
```bash
VITE_API_BASE="http://localhost:3333" npm run dev:widget
# open http://localhost:5173
```

The widget expects the API to be running; adjust `VITE_API_BASE` when pointing at staging or production.
