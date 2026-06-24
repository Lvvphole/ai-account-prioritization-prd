# ADR-001: Select Vercel Eve as Agent Orchestration Framework

## Status

Accepted for prototype and engineering scoping.

## Context

The product requires a modern AI agent runtime that supports code-adjacent agent definitions, tools, skills, schedules, subagents, human approval gates, traces, and evals.

## Decision

Use **Vercel Eve** as the orchestration framework for the AI Account Prioritization Agent.

## Source-based rationale

Vercel describes Eve as an open-source framework for building, running, and scaling agents. The Eve launch material describes durable execution, sandboxed compute, human-in-the-loop approvals, subagents, evals, tools, skills, schedules, connections, traces, and the idea that an agent is a directory.

## Consequences

### Positive

- Agent behavior becomes file-based and reviewable.
- Claude Code can modify tools, skills, evals, and schedules one file at a time.
- The product can run a weekday morning prioritization schedule.
- Human approval gates are first-class in the architecture.
- Evals become part of the acceptance process.

### Constraints

- The prototype should use TypeScript-first Eve tools.
- Python should only support scoring/data-quality/eval services where useful.
- Live CRM integration is deferred until seeded-data loop passes.

## Rejected alternatives

| Alternative | Reason rejected for prototype |
|---|---|
| LangGraph | Strong runtime option, but not selected because the app platform and handoff are Vercel-centered. |
| CrewAI | More role-agent oriented than necessary for this bounded workflow. |
| AutoGen | Heavier multi-agent conversational pattern than needed for deterministic scoring and eval gates. |
| Temporal only | Useful later for durable enterprise workflows, but Eve already supplies the agent shape needed for prototype. |
| Generic cron only | Insufficiently explicit for tools, skills, approvals, subagents, and evals. |

## Final decision statement

```text
Vercel Eve is the selected orchestration framework.
Next.js on Vercel is the app platform.
Claude Code is the build executor.
Deterministic TypeScript tools perform scoring and ranking.
LLM calls are limited to guarded generation and explanation.
```
