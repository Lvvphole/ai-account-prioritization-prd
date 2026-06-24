# Playwright Acceptance Flow Spec

## Flow 1: Rep completes recommendation

1. Login as rep.
2. Open priority list.
3. Open first account.
4. Confirm score, reason code, and next best action render.
5. Generate call objective.
6. Mark recommendation completed.
7. Confirm analytics event exists.

## Flow 2: Unsafe email blocked

1. Open account detail.
2. Generate email draft with unsupported pricing fixture.
3. Confirm guardrail blocks output.
4. Confirm `guardrail_blocked_output` event fires.

## Flow 3: Manager reviews dashboard

1. Login as manager.
2. Confirm team metrics render.
3. Confirm unauthorized team accounts are absent.

## Flow 4: Admin scoring config

1. Login as admin.
2. Change scoring weights to invalid total.
3. Confirm save is blocked.
4. Change weights to 100 total.
5. Confirm preview updates and audit log writes.
