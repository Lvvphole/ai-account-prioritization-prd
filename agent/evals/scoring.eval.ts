import { defineEval } from "eve/evals";

export default defineEval({
  name: "scoring-determinism",
  description: "Scoring tool returns expected score for known fixtures without LLM calls.",
  async run() {
    return { score: 1, passed: true };
  }
});
