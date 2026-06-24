# Daily Prioritization Schedule

```yaml
cron: "0 8 * * 1-5"
timezone: "America/New_York"
max_retries: 2
retry_strategy: weakest_failed_step_first
on_final_failure: BLOCKED_REVIEW_REQUIRED
```

Workflow:

1. discover_account_signals
2. score_accounts
3. rank_accounts
4. generate_reason_codes
5. select_next_best_action
6. verify_recommendation
7. publish_priority_list
8. write_audit_log
9. emit analytics events
