# 04 CRM Field Mapping PRD

## Artifact-specific strict workflow

```text
CRM object inventory
→ product field normalization
→ required/optional classification
→ quality checks
→ source signal mapping
→ live integration readiness
```

## Contract

Define how Salesforce and HubSpot fields map into the product model and Vercel Eve signal discovery tools.

## Plan

Prototype uses seeded data with Salesforce/HubSpot-shaped fields. Live CRM integration is deferred.

## Execute

### Salesforce mapping

| Product Field | Salesforce Object | Field | Required |
|---|---|---|---|
| account.crm_account_id | Account | Id | Yes |
| account.name | Account | Name | Yes |
| account.owner_id | Account | OwnerId | Yes |
| account.industry | Account | Industry | No |
| account.account_tier | Account | Account_Tier__c | No |
| account.annual_revenue | Account | AnnualRevenue | No |
| account.last_activity_date | Account | LastActivityDate | Yes |
| opportunity.id | Opportunity | Id | Yes |
| opportunity.account_id | Opportunity | AccountId | Yes |
| opportunity.amount | Opportunity | Amount | Yes |
| opportunity.stage | Opportunity | StageName | Yes |
| opportunity.close_date | Opportunity | CloseDate | Yes |
| activity.account_id | Task/Event | WhatId | Yes |
| activity.type | Task/Event | Type | Yes |
| activity.occurred_at | Task/Event | ActivityDate | Yes |

### HubSpot mapping

| Product Field | HubSpot Object | Field | Required |
|---|---|---|---|
| account.crm_account_id | Company | hs_object_id | Yes |
| account.name | Company | name | Yes |
| account.owner_id | Company | hubspot_owner_id | Yes |
| account.industry | Company | industry | No |
| opportunity.id | Deal | hs_object_id | Yes |
| opportunity.amount | Deal | amount | Yes |
| opportunity.stage | Deal | dealstage | Yes |
| opportunity.close_date | Deal | closedate | Yes |

### Eve signal mapping

`discover_account_signals.ts` must consume normalized fields only. CRM-specific field names must not leak into scoring logic.

## Verify

- Required fields missing creates `bad_data_detected`.
- Field mapping changes are audit logged.
- Signal tool returns source field for each signal.
- Seeded data includes both valid and bad-data examples.

## Evaluate

Mapping is approved if seeded data can generate all MVP reason codes.

## Stop / Loop

Loop if scoring logic depends on raw CRM field names.
