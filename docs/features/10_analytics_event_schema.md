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
