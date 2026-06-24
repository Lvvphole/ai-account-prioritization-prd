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
