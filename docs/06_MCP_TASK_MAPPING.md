# MCP Task Mapping

## Contract

The PRD handoff must be convertible into implementation tasks without manual copy-paste.

## Task mapping workflow

```text
Modular PRD file
→ feature slug
→ MCP task map item
→ GitHub issue seed
→ Claude Code execution step
→ eval gate
```

## Required task fields

- `id`
- `title`
- `source_doc`
- `owner_role`
- `priority`
- `dependencies`
- `implementation_steps`
- `acceptance_criteria`
- `evals_required`
- `blocked_until`

## Automation commands

- `/prd-create` creates or updates modular PRD files.
- `/prd-start` turns an approved PRD file into tasks.
- `/prd-validate` runs tests, evals, schema checks, and file completeness checks.
