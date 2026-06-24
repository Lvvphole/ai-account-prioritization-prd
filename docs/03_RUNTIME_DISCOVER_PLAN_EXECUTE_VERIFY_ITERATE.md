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
