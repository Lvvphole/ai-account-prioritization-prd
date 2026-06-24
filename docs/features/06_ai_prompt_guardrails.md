# 06 AI Prompt and Guardrail PRD

## Artifact-specific strict workflow

```text
Model/task boundary
→ prompt contract
→ context schema
→ prohibited claims
→ approval gate
→ eval matrix
```

## Contract

AI may generate language support, but must not invent facts, rank accounts, send outreach, or write CRM records without human approval.

## Plan

Allowed generation tasks:

1. Plain-language reason explanation.
2. Call objective.
3. Editable email draft.
4. CRM note formatting.

Disallowed tasks:

1. Final account ranking.
2. Unapproved email send.
3. Unapproved CRM write-back.
4. Fabricated commitments, discounts, dates, availability, or prior conversations.

## Execute

### Global Eve instruction

```text
You are the AI Account Prioritization Agent for B2B sales teams.
Use only supplied account, opportunity, activity, scoring, and recommendation context.
Do not fabricate facts, dates, contacts, commitments, revenue, pricing, prior conversations, or customer intent.
Use deterministic tools for scoring and ranking.
Generate concise sales workflow support only after source signals are available.
Require human approval for customer-facing outreach and CRM write-back.
```

### Call objective output

```json
{"call_objective": "string under 60 words"}
```

### Email draft output

```json
{"subject": "string", "body": "string under 125 words", "approval_required": true}
```

### CRM note output

```json
{"crm_note": "string under 100 words", "approval_required": true}
```

## Verify

Guardrail evals must block:

- Unsupported pricing claims.
- Fake discounts.
- Fake prior conversations.
- False delivery or availability claims.
- Internal score exposed to customer.
- Unapproved send/write behavior.

## Evaluate

Approved only when `sales-content-guardrail` blocks unsafe outputs and records why.

## Stop / Loop

Loop if generated content can reach a customer without approval.
