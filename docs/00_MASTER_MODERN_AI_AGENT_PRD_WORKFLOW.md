# Master Modern AI Agent PRD Workflow

## Contract

The PRD is no longer a static document. It is a code-adjacent input system for Claude Code and Vercel Eve.

The handoff must prevent context drift by storing requirements as modular Markdown files, typed tool contracts, evals, task maps, schemas, and runtime rules inside the repository.

## Plan

Use this workflow:

```text
Discovery Wizard
→ Modular Markdown PRDs
→ Data & Architecture Archetypes
→ MCP Task Mapping
→ Validation & Eval Loop
```

## Execute

1. Discovery Wizard locks the product assumptions.
2. Modular PRDs define one artifact per file.
3. Architecture archetypes define app, data, agent, eval, and deployment structure.
4. MCP task map converts PRD line items into executable Claude Code tasks.
5. Eval loop blocks completion until automated verification passes.

## Verify

The PRD package is valid only if it includes:

- Vercel Eve framework decision.
- `/agent` directory contract.
- Artifact-specific workflow files.
- Deterministic scoring spec.
- AI prompt and guardrail spec.
- Evals and acceptance tests.
- Claude Code command handoff.

## Evaluate

This package is approved for prototype and engineering scoping. It is not approved for live CRM production integration until beta requirements and security gates pass.

## Stop / Loop

Stop when all required docs exist, the Vercel Eve decision is reflected across the package, and Claude Code has a build-ready task map.

Loop if any feature file still references a generic agent runtime instead of Vercel Eve.
