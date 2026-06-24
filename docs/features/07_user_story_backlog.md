# 07 User Story Backlog PRD

## Artifact-specific strict workflow

```text
Persona goal
→ epic grouping
→ user story
→ acceptance criteria
→ priority
→ dependency
→ eval/test link
```

## Contract

Create a backlog that Claude Code can convert into implementation tasks while preserving Vercel Eve orchestration requirements.

## Execute

### Epic 1: Daily Prioritized Selling

#### Story 1.1 View ranked accounts

As a rep, I want to see my highest-priority accounts every morning so I know where to focus first.

Acceptance criteria:

- Ranked accounts appear on dashboard.
- Each account shows score, confidence, reason code, and next action.
- Accounts sort by score descending.
- Rep sees only assigned accounts.
- Published list references a Vercel Eve `agent_run_id`.

Priority: P0.

#### Story 1.2 Open account detail

As a rep, I want account context so I can trust the recommendation.

Acceptance criteria:

- Detail includes source signals, reason codes, open opportunities, recent activities, and recommendation status.
- Unsupported data appears as missing, not fabricated.

Priority: P0.

### Epic 2: AI-Assisted Execution

#### Story 2.1 Generate call objective

Acceptance criteria:

- Under 60 words.
- Uses supplied context only.
- Does not expose internal score to customer.

Priority: P0.

#### Story 2.2 Generate email draft

Acceptance criteria:

- Draft is editable.
- Approval required before customer-facing use.
- Guardrail blocks unsupported claims.

Priority: P1.

### Epic 3: Vercel Eve Agent Runtime

#### Story 3.1 Add `/agent` directory

Acceptance criteria:

- `agent/agent.ts` exists.
- `agent/instructions.md` exists.
- tools, skills, schedules, subagents, evals folders exist.

Priority: P0.

#### Story 3.2 Run daily prioritization schedule

Acceptance criteria:

- Weekday morning schedule exists.
- Run creates `agent_run` record.
- Passing recommendations publish.
- Failed items go to blocked review.

Priority: P0.

### Epic 4: Manager Visibility

Stories include manager dashboard, coaching queue, and acceptance-rate review.

### Epic 5: Admin Scoring

Stories include scoring config display, preview, validation, and audit logging.

## Verify

Every P0 story must map to at least one test or eval.

## Stop / Loop

Loop if a story lacks acceptance criteria or if no eval/test exists for P0 work.
