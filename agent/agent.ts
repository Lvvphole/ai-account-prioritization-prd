import { defineAgent } from "eve";

export default defineAgent({
  // Model provider should be routed through Vercel AI Gateway in implementation.
  // Final model selection is environment-configured.
  model: process.env.EVE_PRIMARY_MODEL || "anthropic/claude-sonnet-4.5",
  description: "AI Account Prioritization Agent for B2B sales teams. Orchestrates daily account ranking with deterministic scoring, guarded generation, approvals, and evals."
});
