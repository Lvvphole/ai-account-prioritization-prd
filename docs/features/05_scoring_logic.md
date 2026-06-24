# 05 Scoring Logic PRD

## Artifact-specific strict workflow

```text
Signal inventory
→ category weighting
→ deterministic formula
→ reason-code mapping
→ test vectors
→ calibration review
```

## Contract

Scoring must be deterministic, reproducible, explainable, and implemented as a Vercel Eve TypeScript tool. The LLM must not rank accounts.

## Plan

Score categories:

| Category | Weight |
|---|---:|
| Revenue potential | 25 |
| Urgency | 20 |
| Engagement | 15 |
| Risk | 15 |
| Opportunity status | 15 |
| Strategic fit | 10 |

## Execute

Formula:

```text
priority_score =
(revenue_potential_score * 0.25) +
(urgency_score * 0.20) +
(engagement_score * 0.15) +
(risk_score * 0.15) +
(opportunity_status_score * 0.15) +
(strategic_fit_score * 0.10)
```

Reason codes:

| Reason Code | Trigger |
|---|---|
| open_opportunity_stale | Open opportunity has no update in 7+ days |
| no_recent_activity | Account has no activity in 14+ days |
| high_revenue_potential | Account spend or opportunity amount is top quartile |
| renewal_approaching | Renewal date is within 60 days |
| spend_decline_detected | Spend declined 20%+ vs comparable period |
| recent_engagement | Reply, meeting, website, or activity in last 7 days |
| quote_follow_up_overdue | Quote/proposal open more than 3 days |
| dormant_high_value_account | High-value account with no purchase/activity in 30+ days |
| expansion_opportunity | Strong spend in one category and low adjacent attach |
| bad_data_detected | Missing owner, duplicate, stale close date, or missing required field |

Next best action mapping:

| Top condition | Action |
|---|---|
| stale open opportunity | Call to confirm decision timeline |
| quote overdue | Send quote follow-up |
| renewal approaching | Schedule renewal review |
| spend decline | Call to understand buying change |
| dormant high-value account | Call to reactivate account |
| bad data | Review account data before outreach |

## Verify

Test vectors must prove:

- Same input always returns same score.
- Score is 0-100.
- Weights total 100.
- Reason codes map to source signals.
- Blocked/bad-data accounts do not publish as outreach recommendations.

## Evaluate

Approved only when `score_accounts.ts` can pass all scoring evals without an LLM call.

## Stop / Loop

Loop if any scoring output cannot be explained by source signals.
