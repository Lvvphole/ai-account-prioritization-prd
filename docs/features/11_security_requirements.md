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
