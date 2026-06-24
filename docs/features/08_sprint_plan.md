# 08 Sprint Plan PRD

## Artifact-specific strict workflow

```text
Milestone definition
→ dependency ordering
→ sprint goal
→ deliverables
→ exit criteria
→ demo readiness check
```

## Contract

Plan prototype execution in six two-week sprints with Vercel Eve as the agent framework.

## Sprint 1: App and Repo Foundation

Deliverables:

- Next.js app shell.
- Mock role login.
- Seeded account data.
- `/agent` directory scaffold.
- README and PRD docs copied into repo.

Exit criteria:

- App runs locally.
- Role routes work.
- Agent directory exists.

## Sprint 2: Deterministic Scoring and Ranking

Deliverables:

- `score_accounts.ts`.
- `rank_accounts.ts`.
- reason code generation.
- account detail data.

Exit criteria:

- Scoring evals pass.
- Ranked accounts render.

## Sprint 3: Eve Runtime and Schedule

Deliverables:

- `agent/agent.ts`.
- `instructions.md`.
- daily prioritization schedule.
- agent run status.
- publish/blocked states.

Exit criteria:

- Manual and scheduled run contracts are represented.
- Verification report created.

## Sprint 4: AI Generation and Guardrails

Deliverables:

- call objective.
- email draft.
- CRM note.
- guardrail tool.
- approval request flow.

Exit criteria:

- Guardrail evals pass.
- Approval required for email/CRM write-back.

## Sprint 5: Manager/Admin Views and Analytics

Deliverables:

- manager dashboard.
- coaching queue.
- admin scoring config.
- analytics event logger.
- audit log viewer.

Exit criteria:

- Manager sees only team data.
- Admin changes audit logged.

## Sprint 6: QA, Evals, and Claude Code Handoff

Deliverables:

- P0/P1 tests.
- Eve eval suite.
- Playwright acceptance tests.
- verification report.
- demo script.

Exit criteria:

- All P0 evals pass.
- Prototype is demo-ready.

## Stop / Loop

Loop any sprint with failed P0 evals.
