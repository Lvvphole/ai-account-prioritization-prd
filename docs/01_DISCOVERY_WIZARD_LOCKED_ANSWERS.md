# Discovery Wizard Locked Answers

## Artifact-specific workflow

```text
Rough product brief
→ 5-8 guided discovery answers
→ locked assumptions
→ open risks
→ prototype scope
→ handoff-ready decisions
```

## Product brief

Build an AI Account Prioritization Agent for B2B sales teams that ranks accounts every weekday morning, explains why each account matters, recommends the next best action, supports rep execution, verifies recommendations, captures outcomes, and feeds results into the next run.

## Locked answers

1. **Primary user:** Account Manager / Sales Rep.
2. **Primary buyer:** VP Sales, CRO, RevOps leader, or Sales Enablement leader.
3. **Primary problem:** Reps have too many accounts and insufficient clarity on which accounts to work first.
4. **Primary outcome:** More qualified pipeline, faster follow-up, cleaner CRM notes, improved manager visibility.
5. **Data source for prototype:** Seeded CRM-style dataset.
6. **First live CRM:** Salesforce first, HubSpot second.
7. **Agent framework:** Vercel Eve.
8. **Ranking approach:** Deterministic scoring, not LLM ranking.
9. **LLM use:** Explanations, call objectives, editable email drafts, CRM note formatting.
10. **Approval posture:** Human-in-the-loop for emails and CRM write-back.

## Assumptions

- The prototype validates with seeded data before CRM OAuth work.
- Next.js remains the app shell.
- Claude Code reads this package as the source of truth.
- Vercel Eve is the selected orchestration framework.

## Open risks

- Vercel Eve API details may change as docs evolve.
- Python runtime is optional support, not the primary agent loop.
- Live CRM field quality may weaken scoring confidence.
- Recommendation trust depends on transparent reason codes.
