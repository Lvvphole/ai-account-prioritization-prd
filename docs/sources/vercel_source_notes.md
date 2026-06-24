# Vercel Source Notes

## Vercel Eve

Sources:

- https://vercel.com/docs/eve
- https://vercel.com/blog/introducing-eve

Use in PRD:

- Eve is the selected agent framework.
- Agent behavior is defined under an `agent/` directory.
- Key Eve concepts used in this handoff: `agent.ts`, `instructions.md`, tools, skills, subagents, schedules, connections, approvals, sandboxed compute, traces, and evals.
- This package treats Eve as the runtime orchestration layer and Claude Code as the implementation agent.

## Vercel Python Runtime

Source:

- https://vercel.com/docs/functions/runtimes/python

Use in PRD:

- Python is optional support only.
- Python may run ASGI/WSGI apps, including FastAPI-style services.
- The prototype should keep Vercel Eve / TypeScript as the primary agent runtime.
- Python support can be used for scoring preview, data quality checks, or eval fixture generation if needed.
