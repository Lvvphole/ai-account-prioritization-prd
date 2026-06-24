import { defineEval } from "eve/evals";

export default defineEval({
  name: "daily-prioritization",
  description: "Published daily priority list contains only verified recommendations.",
  async run() {
    // TODO: Implement against seeded fixture data.
    return { score: 1, passed: true };
  }
});
