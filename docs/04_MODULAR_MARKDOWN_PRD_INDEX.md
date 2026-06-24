# Modular Markdown PRD Index

## Contract

Each requirement must live in a single-intent Markdown file that Claude Code can read without loading one massive PRD into context.

## Required artifacts

| File | Artifact |
|---|---|
| `docs/features/01_clickable_wireframe.md` | Clickable wireframe |
| `docs/features/02_data_model.md` | Data model |
| `docs/features/03_api_contract.md` | API contract |
| `docs/features/04_crm_field_mapping.md` | CRM field mapping |
| `docs/features/05_scoring_logic.md` | Scoring logic document |
| `docs/features/06_ai_prompt_guardrails.md` | AI prompt and guardrail document |
| `docs/features/07_user_story_backlog.md` | User story backlog |
| `docs/features/08_sprint_plan.md` | Sprint plan |
| `docs/features/09_qa_eval_test_cases.md` | QA test cases and evals |
| `docs/features/10_analytics_event_schema.md` | Analytics event schema |
| `docs/features/11_security_requirements.md` | Security requirements |
| `docs/features/12_beta_customer_requirements.md` | Beta customer requirements |
| `docs/features/13_claude_code_execution_prompt.md` | Claude Code execution prompt |
| `docs/features/14_vercel_eve_agent_framework.md` | Vercel Eve framework addendum |

## Syncing rule

When a requirement changes, update the smallest file that owns that requirement. Do not change the combined document first.
