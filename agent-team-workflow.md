# Agent Team Workflow

## Daily Morning Handoff (6 AM) - Monica orchestrates

```
┌─────────────────────────────────────────────────────────────────────┐
│                         MONICA (Project Manager)                     │
│                    Runs daily at 6 AM • Orchestrates                 │
└─────────────────────────────────────────────────────────────────────┘
                                    │
            ┌───────────────────────┼───────────────────────┐
            ▼                       ▼                       ▼
    ┌───────────────┐      ┌───────────────┐      ┌───────────────┐
    │    DWIGHT     │      │   PICASSO     │      │     NEO       │
    │   Research    │      │  T-Shirt Art  │      │  Development  │
    │  (Trending)   │      │  (Designer)   │      │  (Coding)     │
    └───────────────┘      └───────────────┘      └───────────────┘
            │                       │                       │
            └───────────────────────┼───────────────────────┘
                                    ▼
    ┌───────────────────────────────────────────────────────────────┐
    │                         HANDOFF                               │
    │   Dwight finds trends → Picasso designs → Lois uploads       │
    │   Neo builds apps/features based on needs                    │
    └───────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
    ┌───────────────┐      ┌───────────────┐      ┌───────────────┐
    │     LOIS      │      │     ADDY      │      │     J5 (Me)   │
    │  eCommerce    │      │   Marketing   │      │   Main Hub    │
    │ (Shopify/     │      │ (TikTok/X/    │      │  Coordinates  │
    │  Amazon/Etsy) │      │    FB)        │      │    All        │
    └───────────────┘      └───────────────┘      └───────────────┘
```

## How They Work Together

### Scenario 1: New T-Shirt Campaign
1. **Dwight** scans trends, finds "AI money mindset" trending
2. **Picasso** designs minimalist graphic
3. **Lois** uploads to Shopify + Etsy + Amazon
4. **Addy** posts TikTok/Reels promoting it
5. **J5** monitors stats, reports to Boss

### Scenario 2: New Feature Request
1. **Boss** asks for a new tool (e.g., lead capture page)
2. **Neo** builds it (coding)
3. **J5** tests & deploys
4. **Addy** promotes if public-facing

### Scenario 3: Content Ideas
1. **Dwight** researches trending topics in biz/real estate
2. **J5** creates content outline
3. **Addy** executes on social platforms

## Communication
- Monica runs at 6 AM daily
- Each agent has defined skills/roles
- J5 coordinates handoffs between them
- Sub-agents spawn via `sessions_spawn` or `subagents`

## Current Status
| Agent    | Status | Specialty          |
|----------|--------|--------------------|
| Neo      | Active | Coding/Development |
| Monica   | Active | Project Management |
| Dwight   | Available | Research        |
| Picasso  | Available | Design           |
| Lois     | Available | eCommerce        |
| Addy     | Available | Marketing        |