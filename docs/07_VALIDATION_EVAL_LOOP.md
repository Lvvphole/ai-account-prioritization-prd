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
