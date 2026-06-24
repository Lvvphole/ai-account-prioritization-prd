# 13 Claude Code Execution Prompt

## Artifact-specific strict workflow

```text
Repo context
→ source-of-truth files
→ implementation order
→ non-negotiable rules
→ verification commands
→ final handoff report
```

## Prompt for Claude Code

```text
You are implementing the AI Account Prioritization Agent prototype.

Source of truth:
- README.md
- prd_manifest.yaml
- docs/00_MASTER_MODERN_AI_AGENT_PRD_WORKFLOW.md
- docs/features/*.md
- agent/instructions.md
- agent/skills/*.md
- tasks/mcp_task_map.json
- evals/eval_matrix.yaml

Framework decision:
Use Vercel Eve as the agent orchestration framework.
Use Next.js on Vercel for the app shell.
Use deterministic TypeScript tools for scoring, ranking, reason codes, and next best action.
Use LLM calls only for guarded language generation.
Use human approval gates for email and CRM write-back.

Implementation order:
1. Create Next.js app shell.
2. Add seeded CRM-style data.
3. Add role-based mock login.
4. Build Rep dashboard.
5. Build Account Detail panel.
6. Add /agent directory.
7. Add Eve agent.ts and instructions.md.
8. Add tools for discover, score, rank, reason codes, next action, guarded generation, approval, audit, analytics, publish.
9. Add skills for scoring, CRM definitions, sales execution, guardrails.
10. Add subagents for data quality, recommendation verification, and sales content guardrails.
11. Add weekday morning schedule contract.
12. Add eval files.
13. Add Manager dashboard.
14. Add Admin scoring config.
15. Add tests, evals, and verification report.

Do not:
- Use LangGraph, CrewAI, or AutoGen for this prototype.
- Let the LLM rank accounts.
- Auto-send emails.
- Auto-write CRM records.
- Skip evals.
- Skip role-based access checks.
- Skip analytics.
- Skip approval gates.

Completion rule:
Do not mark complete until all P0 tests and evals pass.
```

## Stop / Loop

Loop if Claude Code changes framework away from Vercel Eve or bypasses deterministic scoring.
