# 01 Clickable Wireframe PRD

## Artifact-specific strict workflow

```text
User role inventory
→ critical journey map
→ screen-state matrix
→ interaction contract
→ clickable prototype acceptance review
→ Claude Code UI handoff
```

## Contract

Create a clickable prototype that demonstrates the AI Account Prioritization Agent across Rep, Manager, and Admin flows using seeded account data and Vercel Eve-generated recommendation states.

## Plan

Required screens:

1. Mock login / role selector.
2. Rep Daily Priority Dashboard.
3. Account Detail Panel.
4. Manager Dashboard.
5. Coaching Queue.
6. Admin Scoring Configuration.
7. Agent Run / Eval Status Panel.
8. Blocked Recommendation Review Queue.

## Execute

### Rep flow

```text
Login as Rep
→ view Today’s Priority Accounts
→ open account detail
→ inspect score, confidence, reason codes, and source signals
→ generate call objective
→ generate email draft
→ generate CRM note
→ complete, skip, or reject recommendation
→ submit feedback
```

### Manager flow

```text
Login as Manager
→ view team activity
→ inspect accounts actioned, skipped, rejected, and blocked
→ open coaching queue
→ view rep-level acceptance rate
```

### Admin flow

```text
Login as Admin
→ open scoring config
→ adjust weights
→ preview ranking changes
→ save or reject config
→ audit log entry created
```

### Eve-specific UI requirements

- Show `agent_run_status`: scheduled, discovering, planning, verifying, published, blocked.
- Show `verification_report_id` for each published list.
- Show blocked recommendation count.
- Show human approval state for email drafts and CRM notes.

## Verify

Acceptance criteria:

- Each role routes to the correct dashboard.
- Account list sorts by score descending.
- Account detail shows reason codes mapped to source signals.
- Rep can complete, skip, or reject.
- Manager dashboard updates after action state changes.
- Admin scoring preview blocks weights that do not total 100.
- Agent run status appears on the UI.

## Evaluate

The wireframe is approved only when a software engineer can identify every required UI route, state, and data dependency without asking for a separate meeting.

## Stop / Loop

Stop when all screens are represented and every interaction has acceptance criteria. Loop if blocked states or approval states are missing.
