# Recommendation Verifier Subagent

Purpose: verify recommendation readiness before publish.

Required pass criteria:

- score exists and is 0-100.
- confidence exists.
- at least one reason code exists.
- reason code maps to source signal.
- next best action exists.
- owner scope is valid.
- no guardrail failure.
