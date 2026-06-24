---

<!-- FILE: README.md -->

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


---

<!-- FILE: docs/00_MASTER_MODERN_AI_AGENT_PRD_WORKFLOW.md -->

# Master Modern AI Agent PRD Workflow

## Contract

The PRD is no longer a static document. It is a code-adjacent input system for Claude Code and Vercel Eve.

The handoff must prevent context drift by storing requirements as modular Markdown files, typed tool contracts, evals, task maps, schemas, and runtime rules inside the repository.

## Plan

Use this workflow:

```text
Discovery Wizard
→ Modular Markdown PRDs
→ Data & Architecture Archetypes
→ MCP Task Mapping
→ Validation & Eval Loop
```

## Execute

1. Discovery Wizard locks the product assumptions.
2. Modular PRDs define one artifact per file.
3. Architecture archetypes define app, data, agent, eval, and deployment structure.
4. MCP task map converts PRD line items into executable Claude Code tasks.
5. Eval loop blocks completion until automated verification passes.

## Verify

The PRD package is valid only if it includes:

- Vercel Eve framework decision.
- `/agent` directory contract.
- Artifact-specific workflow files.
- Deterministic scoring spec.
- AI prompt and guardrail spec.
- Evals and acceptance tests.
- Claude Code command handoff.

## Evaluate

This package is approved for prototype and engineering scoping. It is not approved for live CRM production integration until beta requirements and security gates pass.

## Stop / Loop

Stop when all required docs exist, the Vercel Eve decision is reflected across the package, and Claude Code has a build-ready task map.

Loop if any feature file still references a generic agent runtime instead of Vercel Eve.


---

<!-- FILE: docs/01_DISCOVERY_WIZARD_LOCKED_ANSWERS.md -->

# Discovery Wizard Locked Answers

## Artifact-specific workflow

```text
Rough product brief
→ 5-8 guided discovery answers
→ locked assumptions
→ open risks
→ prototype scope
→ handoff-ready decisions
```

## Product brief

Build an AI Account Prioritization Agent for B2B sales teams that ranks accounts every weekday morning, explains why each account matters, recommends the next best action, supports rep execution, verifies recommendations, captures outcomes, and feeds results into the next run.

## Locked answers

1. **Primary user:** Account Manager / Sales Rep.
2. **Primary buyer:** VP Sales, CRO, RevOps leader, or Sales Enablement leader.
3. **Primary problem:** Reps have too many accounts and insufficient clarity on which accounts to work first.
4. **Primary outcome:** More qualified pipeline, faster follow-up, cleaner CRM notes, improved manager visibility.
5. **Data source for prototype:** Seeded CRM-style dataset.
6. **First live CRM:** Salesforce first, HubSpot second.
7. **Agent framework:** Vercel Eve.
8. **Ranking approach:** Deterministic scoring, not LLM ranking.
9. **LLM use:** Explanations, call objectives, editable email drafts, CRM note formatting.
10. **Approval posture:** Human-in-the-loop for emails and CRM write-back.

## Assumptions

- The prototype validates with seeded data before CRM OAuth work.
- Next.js remains the app shell.
- Claude Code reads this package as the source of truth.
- Vercel Eve is the selected orchestration framework.

## Open risks

- Vercel Eve API details may change as docs evolve.
- Python runtime is optional support, not the primary agent loop.
- Live CRM field quality may weaken scoring confidence.
- Recommendation trust depends on transparent reason codes.


---

<!-- FILE: docs/02_VERCEL_EVE_FRAMEWORK_DECISION_ADR.md -->

# ADR-001: Select Vercel Eve as Agent Orchestration Framework

## Status

Accepted for prototype and engineering scoping.

## Context

The product requires a modern AI agent runtime that supports code-adjacent agent definitions, tools, skills, schedules, subagents, human approval gates, traces, and evals.

## Decision

Use **Vercel Eve** as the orchestration framework for the AI Account Prioritization Agent.

## Source-based rationale

Vercel describes Eve as an open-source framework for building, running, and scaling agents. The Eve launch material describes durable execution, sandboxed compute, human-in-the-loop approvals, subagents, evals, tools, skills, schedules, connections, traces, and the idea that an agent is a directory.

## Consequences

### Positive

- Agent behavior becomes file-based and reviewable.
- Claude Code can modify tools, skills, evals, and schedules one file at a time.
- The product can run a weekday morning prioritization schedule.
- Human approval gates are first-class in the architecture.
- Evals become part of the acceptance process.

### Constraints

- The prototype should use TypeScript-first Eve tools.
- Python should only support scoring/data-quality/eval services where useful.
- Live CRM integration is deferred until seeded-data loop passes.

## Rejected alternatives

| Alternative | Reason rejected for prototype |
|---|---|
| LangGraph | Strong runtime option, but not selected because the app platform and handoff are Vercel-centered. |
| CrewAI | More role-agent oriented than necessary for this bounded workflow. |
| AutoGen | Heavier multi-agent conversational pattern than needed for deterministic scoring and eval gates. |
| Temporal only | Useful later for durable enterprise workflows, but Eve already supplies the agent shape needed for prototype. |
| Generic cron only | Insufficiently explicit for tools, skills, approvals, subagents, and evals. |

## Final decision statement

```text
Vercel Eve is the selected orchestration framework.
Next.js on Vercel is the app platform.
Claude Code is the build executor.
Deterministic TypeScript tools perform scoring and ranking.
LLM calls are limited to guarded generation and explanation.
```


---

<!-- FILE: docs/03_RUNTIME_DISCOVER_PLAN_EXECUTE_VERIFY_ITERATE.md -->

# Runtime Workflow: DISCOVER → PLAN → EXECUTE → VERIFY → ITERATE

## Contract

The app must run a bounded self-checking agent loop every weekday morning and continue capturing outcomes throughout the day.

## Runtime state machine

```text
SCHEDULED
→ DISCOVERING_SIGNALS
→ SCORING_ACCOUNTS
→ RANKING_ACCOUNTS
→ GENERATING_RECOMMENDATIONS
→ VERIFYING_RECOMMENDATIONS
→ PUBLISHED
→ USER_ACTION_PENDING
→ USER_ACTION_CAPTURED
→ OUTCOME_VERIFIED
→ ITERATION_QUEUED
→ NEXT_RUN_READY
```

Failure path:

```text
SCHEDULED
→ DISCOVERING_SIGNALS
→ SCORING_ACCOUNTS
→ VERIFYING_RECOMMENDATIONS
→ FAILED
→ RETRYING_WEAKEST_STEP
→ FAILED
→ BLOCKED_REVIEW_REQUIRED
```

## Stage mapping

| Stage | App behavior | Eve implementation |
|---|---|---|
| DISCOVER | Read seeded CRM-style data and detect signals | `discover_account_signals.ts` |
| PLAN | Score, rank, explain, and select next action | `score_accounts.ts`, `rank_accounts.ts`, `select_next_best_action.ts` |
| EXECUTE | Generate call objective, email draft, CRM note, and capture rep action | guarded generation tools + approval gates |
| VERIFY | Check score, reason codes, permissions, guardrails, evals, analytics | `recommendation-verifier` subagent + evals |
| ITERATE | Feed rejected/skipped/bad-data outcomes into scoring, prompts, backlog, or next run | feedback tool + analytics + task map |

## Bounded loop rule

```text
max_retries = 2
retry_strategy = weakest_failed_step_first
on_final_failure = BLOCKED_REVIEW_REQUIRED
```

No infinite loops are allowed.


---

<!-- FILE: docs/04_MODULAR_MARKDOWN_PRD_INDEX.md -->

# Modular Markdown PRD Index

## Contract

Each requirement must live in a single-intent Markdown file that Claude Code can read without loading one massive PRD into context.

## Required artifacts

| File | Artifact |
|---|---|
| `docs/features/01_clickable_wireframe.md` | Clickable wireframe |
| `docs/features/02_data_model.md` | Data model |
| `docs/features/03_api_contract.md` | API contract |
| `docs/features/04_crm_field_mapping.md` | CRM field mapping |
| `docs/features/05_scoring_logic.md` | Scoring logic document |
| `docs/features/06_ai_prompt_guardrails.md` | AI prompt and guardrail document |
| `docs/features/07_user_story_backlog.md` | User story backlog |
| `docs/features/08_sprint_plan.md` | Sprint plan |
| `docs/features/09_qa_eval_test_cases.md` | QA test cases and evals |
| `docs/features/10_analytics_event_schema.md` | Analytics event schema |
| `docs/features/11_security_requirements.md` | Security requirements |
| `docs/features/12_beta_customer_requirements.md` | Beta customer requirements |
| `docs/features/13_claude_code_execution_prompt.md` | Claude Code execution prompt |
| `docs/features/14_vercel_eve_agent_framework.md` | Vercel Eve framework addendum |

## Syncing rule

When a requirement changes, update the smallest file that owns that requirement. Do not change the combined document first.


---

<!-- FILE: docs/05_DATA_ARCHITECTURE_ARCHETYPES.md -->

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


---

<!-- FILE: docs/06_MCP_TASK_MAPPING.md -->

# MCP Task Mapping

## Contract

The PRD handoff must be convertible into implementation tasks without manual copy-paste.

## Task mapping workflow

```text
Modular PRD file
→ feature slug
→ MCP task map item
→ GitHub issue seed
→ Claude Code execution step
→ eval gate
```

## Required task fields

- `id`
- `title`
- `source_doc`
- `owner_role`
- `priority`
- `dependencies`
- `implementation_steps`
- `acceptance_criteria`
- `evals_required`
- `blocked_until`

## Automation commands

- `/prd-create` creates or updates modular PRD files.
- `/prd-start` turns an approved PRD file into tasks.
- `/prd-validate` runs tests, evals, schema checks, and file completeness checks.


---

<!-- FILE: docs/07_VALIDATION_EVAL_LOOP.md -->

# Validation and Eval Loop

## Contract

The product is not done when the UI renders. It is done only when testable behavior passes acceptance criteria and Eve evals.

## Eval categories

1. Scoring determinism.
2. Reason code source mapping.
3. Next best action correctness.
4. Guardrail blocking.
5. Human approval enforcement.
6. Role-based access control.
7. Analytics event emission.
8. Manager dashboard accuracy.
9. Daily schedule publish behavior.
10. Blocked recommendation behavior.

## Eval outcome states

```text
PASSED
FAILED
BLOCKED_REVIEW_REQUIRED
NEEDS_DATA_FIX
NEEDS_PROMPT_FIX
NEEDS_SCORING_FIX
NEEDS_SECURITY_FIX
```

## Release rule

No prototype demo approval unless all P0 evals pass.


---

<!-- FILE: docs/features/01_clickable_wireframe.md -->

# 01 Clickable Wireframe PRD

## Artifact-specific strict workflow

```text
User role inventory
→ critical journey map
→ screen-state matrix
→ interaction contract
→ clickable prototype acceptance review
→ Claude Code UI handoff
```

## Contract

Create a clickable prototype that demonstrates the AI Account Prioritization Agent across Rep, Manager, and Admin flows using seeded account data and Vercel Eve-generated recommendation states.

## Plan

Required screens:

1. Mock login / role selector.
2. Rep Daily Priority Dashboard.
3. Account Detail Panel.
4. Manager Dashboard.
5. Coaching Queue.
6. Admin Scoring Configuration.
7. Agent Run / Eval Status Panel.
8. Blocked Recommendation Review Queue.

## Execute

### Rep flow

```text
Login as Rep
→ view Today’s Priority Accounts
→ open account detail
→ inspect score, confidence, reason codes, and source signals
→ generate call objective
→ generate email draft
→ generate CRM note
→ complete, skip, or reject recommendation
→ submit feedback
```

### Manager flow

```text
Login as Manager
→ view team activity
→ inspect accounts actioned, skipped, rejected, and blocked
→ open coaching queue
→ view rep-level acceptance rate
```

### Admin flow

```text
Login as Admin
→ open scoring config
→ adjust weights
→ preview ranking changes
→ save or reject config
→ audit log entry created
```

### Eve-specific UI requirements

- Show `agent_run_status`: scheduled, discovering, planning, verifying, published, blocked.
- Show `verification_report_id` for each published list.
- Show blocked recommendation count.
- Show human approval state for email drafts and CRM notes.

## Verify

Acceptance criteria:

- Each role routes to the correct dashboard.
- Account list sorts by score descending.
- Account detail shows reason codes mapped to source signals.
- Rep can complete, skip, or reject.
- Manager dashboard updates after action state changes.
- Admin scoring preview blocks weights that do not total 100.
- Agent run status appears on the UI.

## Evaluate

The wireframe is approved only when a software engineer can identify every required UI route, state, and data dependency without asking for a separate meeting.

## Stop / Loop

Stop when all screens are represented and every interaction has acceptance criteria. Loop if blocked states or approval states are missing.


---

<!-- FILE: docs/features/02_data_model.md -->

# 02 Data Model PRD

## Artifact-specific strict workflow

```text
Entity discovery
→ relationship mapping
→ constraints and indexes
→ seeded dataset contract
→ migration readiness
→ data validation tests
```

## Contract

Define the relational data model required to support seeded-data prototype, Vercel Eve agent runs, recommendations, feedback, evals, analytics, and auditability.

## Plan

Core entities:

- `users`
- `teams`
- `accounts`
- `contacts`
- `opportunities`
- `activities`
- `recommendations`
- `feedback`
- `scoring_configs`
- `agent_runs`
- `verification_reports`
- `blocked_recommendations`
- `approval_requests`
- `audit_logs`
- `analytics_events`

## Execute

### users

| Field | Type | Rule |
|---|---|---|
| id | uuid | primary key |
| name | text | required |
| email | text | unique, required |
| role | enum | rep, manager, admin |
| manager_id | uuid | nullable self-reference |
| team_id | uuid | required |

### accounts

| Field | Type | Rule |
|---|---|---|
| id | uuid | primary key |
| crm_account_id | text | unique in tenant |
| owner_id | uuid | required |
| team_id | uuid | required |
| name | text | required |
| industry | text | optional |
| segment | text | optional |
| account_tier | enum | strategic, enterprise, mid_market, smb |
| annual_spend | numeric | nullable |
| last_activity_date | date | nullable |
| last_purchase_date | date | nullable |
| status | enum | prospect, active, dormant, churn_risk, closed_lost |

### recommendations

| Field | Type | Rule |
|---|---|---|
| id | uuid | primary key |
| agent_run_id | uuid | required |
| account_id | uuid | required |
| owner_id | uuid | required |
| score | integer | 0-100 |
| confidence | enum | high, medium, low |
| reason_codes | jsonb | required array |
| source_signals | jsonb | required |
| next_best_action | text | required |
| status | enum | pending, published, completed, skipped, rejected, blocked |
| verification_status | enum | passed, failed, blocked_review_required |

### agent_runs

| Field | Type | Rule |
|---|---|---|
| id | uuid | primary key |
| run_type | enum | scheduled, manual, eval |
| framework | text | must equal Vercel Eve |
| status | enum | scheduled, running, passed, failed, blocked |
| started_at | timestamp | required |
| completed_at | timestamp | nullable |
| trace_id | text | nullable |
| verification_report_id | uuid | nullable |

### approval_requests

Tracks human-in-the-loop approval for email, CRM note, CRM write-back, or manager-visible coaching flags.

## Verify

Required data tests:

- Recommendation score cannot exceed 100.
- Published recommendation must have at least one reason code.
- Published recommendation must have source signals.
- Published recommendation must reference an agent run.
- User can only access accounts scoped by role.
- Approval-required actions cannot execute without granted approval.

## Evaluate

The model is approved only if it supports the full Discover, Plan, Execute, Verify, Iterate loop and Vercel Eve run traceability.

## Stop / Loop

Stop when schemas support prototype and eval needs. Loop if audit, approval, or agent run traceability is missing.


---

<!-- FILE: docs/features/03_api_contract.md -->

# 03 API Contract PRD

## Artifact-specific strict workflow

```text
UI action inventory
→ endpoint grouping
→ request/response schema
→ authorization rule
→ error contract
→ integration test mapping
```

## Contract

Define API endpoints that support dashboards, recommendations, Vercel Eve agent runs, approval gates, analytics, and eval verification.

## Plan

Endpoint groups:

1. Accounts.
2. Recommendations.
3. Agent runs.
4. AI generation.
5. Approvals.
6. Manager dashboard.
7. Admin scoring.
8. Analytics.
9. Evals.

## Execute

### GET /api/accounts/prioritized

Returns ranked accounts visible to current user.

Response:

```json
{
  "accounts": [
    {
      "account_id": "uuid",
      "account_name": "Acme Construction",
      "score": 87,
      "confidence": "high",
      "reason_codes": ["open_opportunity_stale"],
      "source_signals": [{"field": "opportunity.last_modified_date", "value": "2026-06-10"}],
      "next_best_action": "Call to confirm decision timeline",
      "status": "published"
    }
  ]
}
```

### POST /api/agent-runs/daily-prioritization

Starts a manual Vercel Eve prioritization run for prototype testing.

Rules:

- Production daily run uses Eve schedule.
- Manual endpoint is for QA and demo only.

### GET /api/agent-runs/{agent_run_id}

Returns run status, trace reference, verification report, and blocked count.

### POST /api/recommendations/{id}/action

Updates status to completed, skipped, or rejected.

### POST /api/recommendations/{id}/feedback

Stores feedback on recommendation quality.

### POST /api/ai/call-objective

Generates a guarded call objective from supplied account context.

### POST /api/ai/email-draft

Generates editable email draft. Creates approval request before any customer-facing use.

### POST /api/ai/crm-note

Formats raw note. Requires approval before CRM write-back.

### POST /api/approvals/{id}/decision

Accepts or rejects a human approval request.

### GET /api/manager/dashboard

Returns team metrics and coaching queue.

### POST /api/admin/scoring-config

Saves scoring config. Admin only. Weights must equal 100.

## Verify

Every endpoint must define:

- Auth scope.
- Request schema.
- Response schema.
- Error schema.
- Analytics event.
- Audit event where applicable.

## Evaluate

The API contract is approved if every UI action and Eve workflow state has an endpoint or Eve tool path.

## Stop / Loop

Loop if any API can bypass approval gates or role scope.


---

<!-- FILE: docs/features/04_crm_field_mapping.md -->

# 04 CRM Field Mapping PRD

## Artifact-specific strict workflow

```text
CRM object inventory
→ product field normalization
→ required/optional classification
→ quality checks
→ source signal mapping
→ live integration readiness
```

## Contract

Define how Salesforce and HubSpot fields map into the product model and Vercel Eve signal discovery tools.

## Plan

Prototype uses seeded data with Salesforce/HubSpot-shaped fields. Live CRM integration is deferred.

## Execute

### Salesforce mapping

| Product Field | Salesforce Object | Field | Required |
|---|---|---|---|
| account.crm_account_id | Account | Id | Yes |
| account.name | Account | Name | Yes |
| account.owner_id | Account | OwnerId | Yes |
| account.industry | Account | Industry | No |
| account.account_tier | Account | Account_Tier__c | No |
| account.annual_revenue | Account | AnnualRevenue | No |
| account.last_activity_date | Account | LastActivityDate | Yes |
| opportunity.id | Opportunity | Id | Yes |
| opportunity.account_id | Opportunity | AccountId | Yes |
| opportunity.amount | Opportunity | Amount | Yes |
| opportunity.stage | Opportunity | StageName | Yes |
| opportunity.close_date | Opportunity | CloseDate | Yes |
| activity.account_id | Task/Event | WhatId | Yes |
| activity.type | Task/Event | Type | Yes |
| activity.occurred_at | Task/Event | ActivityDate | Yes |

### HubSpot mapping

| Product Field | HubSpot Object | Field | Required |
|---|---|---|---|
| account.crm_account_id | Company | hs_object_id | Yes |
| account.name | Company | name | Yes |
| account.owner_id | Company | hubspot_owner_id | Yes |
| account.industry | Company | industry | No |
| opportunity.id | Deal | hs_object_id | Yes |
| opportunity.amount | Deal | amount | Yes |
| opportunity.stage | Deal | dealstage | Yes |
| opportunity.close_date | Deal | closedate | Yes |

### Eve signal mapping

`discover_account_signals.ts` must consume normalized fields only. CRM-specific field names must not leak into scoring logic.

## Verify

- Required fields missing creates `bad_data_detected`.
- Field mapping changes are audit logged.
- Signal tool returns source field for each signal.
- Seeded data includes both valid and bad-data examples.

## Evaluate

Mapping is approved if seeded data can generate all MVP reason codes.

## Stop / Loop

Loop if scoring logic depends on raw CRM field names.


---

<!-- FILE: docs/features/05_scoring_logic.md -->

# 05 Scoring Logic PRD

## Artifact-specific strict workflow

```text
Signal inventory
→ category weighting
→ deterministic formula
→ reason-code mapping
→ test vectors
→ calibration review
```

## Contract

Scoring must be deterministic, reproducible, explainable, and implemented as a Vercel Eve TypeScript tool. The LLM must not rank accounts.

## Plan

Score categories:

| Category | Weight |
|---|---:|
| Revenue potential | 25 |
| Urgency | 20 |
| Engagement | 15 |
| Risk | 15 |
| Opportunity status | 15 |
| Strategic fit | 10 |

## Execute

Formula:

```text
priority_score =
(revenue_potential_score * 0.25) +
(urgency_score * 0.20) +
(engagement_score * 0.15) +
(risk_score * 0.15) +
(opportunity_status_score * 0.15) +
(strategic_fit_score * 0.10)
```

Reason codes:

| Reason Code | Trigger |
|---|---|
| open_opportunity_stale | Open opportunity has no update in 7+ days |
| no_recent_activity | Account has no activity in 14+ days |
| high_revenue_potential | Account spend or opportunity amount is top quartile |
| renewal_approaching | Renewal date is within 60 days |
| spend_decline_detected | Spend declined 20%+ vs comparable period |
| recent_engagement | Reply, meeting, website, or activity in last 7 days |
| quote_follow_up_overdue | Quote/proposal open more than 3 days |
| dormant_high_value_account | High-value account with no purchase/activity in 30+ days |
| expansion_opportunity | Strong spend in one category and low adjacent attach |
| bad_data_detected | Missing owner, duplicate, stale close date, or missing required field |

Next best action mapping:

| Top condition | Action |
|---|---|
| stale open opportunity | Call to confirm decision timeline |
| quote overdue | Send quote follow-up |
| renewal approaching | Schedule renewal review |
| spend decline | Call to understand buying change |
| dormant high-value account | Call to reactivate account |
| bad data | Review account data before outreach |

## Verify

Test vectors must prove:

- Same input always returns same score.
- Score is 0-100.
- Weights total 100.
- Reason codes map to source signals.
- Blocked/bad-data accounts do not publish as outreach recommendations.

## Evaluate

Approved only when `score_accounts.ts` can pass all scoring evals without an LLM call.

## Stop / Loop

Loop if any scoring output cannot be explained by source signals.


---

<!-- FILE: docs/features/06_ai_prompt_guardrails.md -->

# 06 AI Prompt and Guardrail PRD

## Artifact-specific strict workflow

```text
Model/task boundary
→ prompt contract
→ context schema
→ prohibited claims
→ approval gate
→ eval matrix
```

## Contract

AI may generate language support, but must not invent facts, rank accounts, send outreach, or write CRM records without human approval.

## Plan

Allowed generation tasks:

1. Plain-language reason explanation.
2. Call objective.
3. Editable email draft.
4. CRM note formatting.

Disallowed tasks:

1. Final account ranking.
2. Unapproved email send.
3. Unapproved CRM write-back.
4. Fabricated commitments, discounts, dates, availability, or prior conversations.

## Execute

### Global Eve instruction

```text
You are the AI Account Prioritization Agent for B2B sales teams.
Use only supplied account, opportunity, activity, scoring, and recommendation context.
Do not fabricate facts, dates, contacts, commitments, revenue, pricing, prior conversations, or customer intent.
Use deterministic tools for scoring and ranking.
Generate concise sales workflow support only after source signals are available.
Require human approval for customer-facing outreach and CRM write-back.
```

### Call objective output

```json
{"call_objective": "string under 60 words"}
```

### Email draft output

```json
{"subject": "string", "body": "string under 125 words", "approval_required": true}
```

### CRM note output

```json
{"crm_note": "string under 100 words", "approval_required": true}
```

## Verify

Guardrail evals must block:

- Unsupported pricing claims.
- Fake discounts.
- Fake prior conversations.
- False delivery or availability claims.
- Internal score exposed to customer.
- Unapproved send/write behavior.

## Evaluate

Approved only when `sales-content-guardrail` blocks unsafe outputs and records why.

## Stop / Loop

Loop if generated content can reach a customer without approval.


---

<!-- FILE: docs/features/07_user_story_backlog.md -->

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


---

<!-- FILE: docs/features/08_sprint_plan.md -->

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


---

<!-- FILE: docs/features/09_qa_eval_test_cases.md -->

# 09 QA Test Cases and Agent Eval PRD

## Artifact-specific strict workflow

```text
Acceptance criterion
→ deterministic test case
→ agent eval case
→ expected result matrix
→ failure classification
→ release gate
```

## Contract

Use automated tests and Eve evals as the primary validation mechanism. Manual QA supports the eval loop but does not replace it.

## P0 QA cases

| ID | Test | Expected result |
|---|---|---|
| QA-001 | Rep login | Rep dashboard loads |
| QA-002 | Manager login | Manager dashboard loads |
| QA-003 | Admin login | Admin scoring page loads |
| QA-004 | Daily priority list | Accounts sort by score descending |
| QA-005 | Reason codes | Reason code maps to source signal |
| QA-006 | Scoring | Formula output matches fixture |
| QA-007 | Role scope | Rep cannot access unauthorized account |
| QA-008 | Call objective | Under 60 words, grounded |
| QA-009 | Unsafe email | Guardrail blocks unsupported claim |
| QA-010 | Approval | Email and CRM note require approval |
| QA-011 | Agent run | Eve run creates trace/run record |
| QA-012 | Failed recommendation | Moves to blocked review after retry |

## Eve evals

| Eval file | Pass criteria |
|---|---|
| `daily-prioritization.eval.ts` | Published list contains only valid recommendations |
| `scoring.eval.ts` | Scores match deterministic fixtures |
| `reason-codes.eval.ts` | Codes map to source signals |
| `guardrails.eval.ts` | Unsafe content blocked |
| `security.eval.ts` | RBAC enforced |
| `approval.eval.ts` | Approval required for external writes/customer-facing use |

## Release gate

No P0 failure may be open for prototype approval.

## Stop / Loop

Loop to weakest failing eval first.


---

<!-- FILE: docs/features/10_analytics_event_schema.md -->

# 10 Analytics Event Schema PRD

## Artifact-specific strict workflow

```text
Decision metric
→ event inventory
→ property schema
→ trigger point
→ validation test
→ dashboard contract
```

## Contract

Instrument the product so recommendation quality, rep adoption, manager usage, approval flow, blocked outputs, and eval results can be measured.

## Required base properties

```json
{
  "event_name": "string",
  "user_id": "uuid",
  "role": "rep | manager | admin | system",
  "team_id": "uuid",
  "agent_run_id": "uuid | null",
  "timestamp": "iso_datetime"
}
```

## Required events

- `user_logged_in`
- `priority_list_viewed`
- `agent_run_started`
- `agent_run_completed`
- `recommendation_viewed`
- `recommendation_completed`
- `recommendation_skipped`
- `recommendation_rejected`
- `feedback_submitted`
- `call_objective_generated`
- `email_draft_generated`
- `crm_note_generated`
- `approval_requested`
- `approval_granted`
- `approval_rejected`
- `guardrail_blocked_output`
- `manager_dashboard_viewed`
- `scoring_config_updated`
- `eval_suite_completed`

## North Star metric

Qualified pipeline created per rep per week from AI-prioritized accounts.

## Verify

Every primary user action must emit one analytics event.

## Stop / Loop

Loop if P0 workflows do not emit events.


---

<!-- FILE: docs/features/11_security_requirements.md -->

# 11 Security Requirements PRD

## Artifact-specific strict workflow

```text
Data boundary inventory
→ role permission matrix
→ tool permission matrix
→ approval gates
→ secrets policy
→ security evals
```

## Contract

The prototype must enforce role-based access, human approval gates, secret hygiene, and safe LLM data handling.

## Role permissions

| Role | Access |
|---|---|
| Rep | Own assigned accounts only |
| Manager | Assigned team only |
| Admin | All prototype data and scoring config |
| System/Eve | Only tools explicitly exposed under `/agent/tools` |

## Tool permissions

| Tool | Approval required |
|---|---|
| discover_account_signals | No |
| score_accounts | No |
| rank_accounts | No |
| generate_reason_codes | No |
| generate_call_objective | No, but guarded |
| generate_email_draft | Yes before customer-facing use |
| generate_crm_note | Yes before CRM write-back |
| publish_priority_list | No if verification passes |
| crm_writeback_future | Yes |

## Secrets

- No API keys in source code.
- Use environment variables.
- Do not expose connection URLs or credentials to the model.
- Seeded prototype should avoid real customer PII.

## AI safety

- LLM receives minimum required context.
- Output must pass guardrail checks.
- All generated content is auditable.
- Unsupported claims are blocked.

## Verify

Security evals must prove:

- Unauthorized account access fails.
- Admin-only scoring updates are protected.
- Approval-required action cannot execute without approval.
- Guardrail blocks fabricated claims.

## Stop / Loop

Loop if customer-facing or write actions bypass approval.


---

<!-- FILE: docs/features/12_beta_customer_requirements.md -->

# 12 Beta Customer Requirements PRD

## Artifact-specific strict workflow

```text
Ideal beta profile
→ entry criteria
→ baseline metric capture
→ weekly feedback cadence
→ success metric review
→ beta exit decision
```

## Contract

Define beta eligibility and measurable success requirements after seeded-data prototype approval.

## Ideal beta customer

- B2B sales team.
- 5-25 reps in test group.
- Salesforce or HubSpot.
- Reps own 50+ accounts each.
- Sales manager reviews dashboard weekly.
- RevOps owner available for field mapping.
- Clear goal around pipeline, reactivation, expansion, or retention.

## Entry criteria

- Prototype approved.
- P0 evals pass.
- Security review complete.
- CRM field mapping reviewed.
- Sponsor identified.
- Weekly feedback meeting scheduled.

## Success metrics

- 60%+ weekly active rep usage.
- 50%+ of top 10 recommendations actioned.
- 60%+ recommendation acceptance rate.
- 15%+ lift in qualified pipeline versus baseline/control.
- 25%+ improvement in CRM note completion.
- Manager dashboard reviewed at least once per week.

## Exclusion criteria

Reject beta if:

- CRM data unavailable.
- No manager sponsor.
- Customer expects autonomous outbound.
- Customer requires enterprise-grade compliance before prototype validation.
- Team cannot commit to feedback cadence.

## Stop / Loop

Loop if beta customer lacks baseline metrics or sponsor.


---

<!-- FILE: docs/features/13_claude_code_execution_prompt.md -->

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


---

<!-- FILE: docs/features/14_vercel_eve_agent_framework.md -->

# 14 Vercel Eve Agent Framework PRD

## Artifact-specific strict workflow

```text
Framework source review
→ architecture decision
→ agent directory contract
→ tool/skill/subagent/schedule/eval mapping
→ Python runtime boundary
→ Claude Code implementation gate
```

## Contract

Vercel Eve is the selected orchestration framework for the AI Account Prioritization Agent.

## Plan

The agent is represented as a directory:

```text
agent/
  agent.ts
  instructions.md
  tools/
  skills/
  subagents/
  schedules/
  evals/
  connections/
```

## Execute

### Eve responsibilities

- Orchestrate scheduled daily prioritization runs.
- Load agent instructions.
- Execute deterministic tools.
- Load skills by topic.
- Delegate review tasks to subagents.
- Pause for human approvals.
- Emit traces and eval results.
- Support future MCP/API connections.

### Product responsibilities

- Define scoring rules.
- Define CRM field normalization.
- Define permissions.
- Define UI.
- Define analytics events.
- Define acceptance criteria.

### Python runtime boundary

Python is optional support only for:

- scoring preview services.
- batch data-quality checks.
- eval fixture generation.

Python must not replace Vercel Eve as the agent orchestration framework.

## Verify

- `/agent/agent.ts` exists.
- `instructions.md` contains core product rules.
- tools are single-purpose.
- skills are Markdown.
- subagents have scoped instructions.
- schedule exists.
- evals map to acceptance criteria.

## Evaluate

Approved only if Claude Code can build the agent one file at a time without relying on a generic prompt loop.

## Stop / Loop

Loop if agent behavior is hidden in prose instead of files.
