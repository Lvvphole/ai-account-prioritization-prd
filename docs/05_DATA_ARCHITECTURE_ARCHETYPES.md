# Data and Architecture Archetypes

## Contract

The app must use a code-adjacent architecture that separates UI, deterministic tools, LLM generation, evals, audit logging, and optional Python support.

## Architecture

```text
Next.js App on Vercel
→ Rep Dashboard
→ Manager Dashboard
→ Admin Config

Vercel Eve Agent
→ agent.ts
→ instructions.md
→ tools/
→ skills/
→ subagents/
→ schedules/
→ evals/
→ connections/

Database
→ users
→ teams
→ accounts
→ contacts
→ opportunities
→ activities
→ recommendations
→ feedback
→ scoring_configs
→ audit_logs
→ analytics_events

Optional Python Runtime
→ scoring preview support
→ data quality batch checks
→ eval fixture generation
```

## Data architecture archetype

Use Postgres-compatible relational storage. Supabase is acceptable for prototype.

## Agent architecture archetype

Use Vercel Eve file-system-first layout under `/agent`.

## API archetype

Use Next.js API routes for prototype. Add optional Python services only when a scoring/data-quality/eval task is easier in Python.
