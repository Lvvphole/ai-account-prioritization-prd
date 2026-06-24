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
