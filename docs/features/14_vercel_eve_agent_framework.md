# 14 Vercel Eve Agent Framework PRD

## Artifact-specific strict workflow

```text
Framework source review
→ architecture decision
→ agent directory contract
→ tool/skill/subagent/schedule/eval mapping
→ Python runtime boundary
→ Claude Code implementation gate
```

## Contract

Vercel Eve is the selected orchestration framework for the AI Account Prioritization Agent.

## Plan

The agent is represented as a directory:

```text
agent/
  agent.ts
  instructions.md
  tools/
  skills/
  subagents/
  schedules/
  evals/
  connections/
```

## Execute

### Eve responsibilities

- Orchestrate scheduled daily prioritization runs.
- Load agent instructions.
- Execute deterministic tools.
- Load skills by topic.
- Delegate review tasks to subagents.
- Pause for human approvals.
- Emit traces and eval results.
- Support future MCP/API connections.

### Product responsibilities

- Define scoring rules.
- Define CRM field normalization.
- Define permissions.
- Define UI.
- Define analytics events.
- Define acceptance criteria.

### Python runtime boundary

Python is optional support only for:

- scoring preview services.
- batch data-quality checks.
- eval fixture generation.

Python must not replace Vercel Eve as the agent orchestration framework.

## Verify

- `/agent/agent.ts` exists.
- `instructions.md` contains core product rules.
- tools are single-purpose.
- skills are Markdown.
- subagents have scoped instructions.
- schedule exists.
- evals map to acceptance criteria.

## Evaluate

Approved only if Claude Code can build the agent one file at a time without relying on a generic prompt loop.

## Stop / Loop

Loop if agent behavior is hidden in prose instead of files.
