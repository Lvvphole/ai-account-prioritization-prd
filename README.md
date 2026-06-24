# AI Account Prioritization Agent PRD Handoff
## Modern AI Agent PRD Workflow + Vercel Eve Orchestration

**Package version:** v2.0-vercel-eve  
**Product:** AI Account Prioritization Agent for B2B Sales Teams  
**Primary orchestration framework:** Vercel Eve  
**Application platform:** Next.js on Vercel  
**Build executor:** Claude Code  
**Primary handoff style:** Modular Markdown PRD repository, code-adjacent, eval-driven, MCP-task-mappable

## Framework decision

This package updates the prior AI Account Prioritization Artifact-Specific PRD Handoff so the agent runtime is explicitly orchestrated through **Vercel Eve**.

Vercel Eve is treated as the file-system-first agent framework for:

- `agent/agent.ts` model and agent configuration
- `agent/instructions.md` standing rules
- `agent/tools/*.ts` deterministic tools and guarded generation tools
- `agent/skills/*.md` reusable sales, scoring, CRM, and guardrail knowledge
- `agent/subagents/*` scoped review agents
- `agent/schedules/*` scheduled weekday morning prioritization
- `agent/evals/*` testable evaluation suites
- `agent/connections/*` future CRM, analytics, database, and MCP connections

## Runtime loop

```text
DISCOVER account signals
→ PLAN ranked recommendations
→ EXECUTE human-approved sales workflow support
→ VERIFY recommendation quality, guardrails, RBAC, analytics, and evals
→ ITERATE scoring, prompt, data-quality, backlog, or beta-feedback changes
```

## Package map

| Folder | Purpose |
|---|---|
| `docs/` | Master PRD workflow, source notes, architecture, runtime loop, and combined handoff |
| `docs/features/` | Artifact-specific PRD documents for each requested handoff requirement |
| `agent/` | Vercel Eve source-of-truth agent skeleton and contracts |
| `agent/tools/` | TypeScript tool contracts and stubs for Claude Code implementation |
| `agent/skills/` | Markdown skills Eve can load by topic |
| `agent/subagents/` | Scoped reviewer/verifier/guardrail subagent instructions |
| `agent/schedules/` | Daily prioritization schedule contract |
| `agent/evals/` | Eve eval contracts and test cases |
| `tasks/` | MCP-style task map and GitHub issue seed |
| `commands/` | `/prd-create`, `/prd-start`, `/prd-validate` command contracts |
| `schemas/` | JSON schema contracts for recommendations, evals, and analytics |
| `api-python/` | Optional Vercel Python Runtime support service scope |
| `verification/` | File inventory, hashes, and completion report |

## Build decision

The prototype remains **seeded-data first**. Live Salesforce/HubSpot integration is deferred until the product loop validates.

Approved first build path:

```text
Seeded account data
→ Next.js dashboard
→ Vercel Eve agent directory
→ deterministic scoring tools
→ reason code generation
→ next best action mapping
→ guarded AI generation
→ human approval gates
→ eval validation
→ Claude Code handoff
```

## Source references

- Vercel Eve docs: https://vercel.com/docs/eve
- Vercel Eve launch blog: https://vercel.com/blog/introducing-eve
- Vercel Python Runtime docs: https://vercel.com/docs/functions/runtimes/python
