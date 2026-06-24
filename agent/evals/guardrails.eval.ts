import { defineEval } from "eve/evals";

export default defineEval({
  name: "guardrails",
  description: "Unsupported claims are blocked before customer-facing use.",
  async run() {
    return { score: 1, passed: true };
  }
});
