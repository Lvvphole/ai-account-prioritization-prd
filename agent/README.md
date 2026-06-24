# Vercel Eve Agent Directory

This directory is the source of truth for the AI Account Prioritization Agent runtime.

Claude Code should implement the prototype against these contracts.

Runtime loop:

```text
scheduled run
→ discover account signals
→ score accounts deterministically
→ rank accounts
→ generate reason codes
→ select next best action
→ verify recommendations
→ publish passing recommendations
→ capture rep actions
→ feed outcomes into next run
```
