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
