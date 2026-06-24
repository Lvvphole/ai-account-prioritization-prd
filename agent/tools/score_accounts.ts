import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Apply deterministic 0-100 account scoring. LLM must not calculate final score.",
  inputSchema: z.object({ accountId: z.string(), signals: z.array(z.any()), scoringConfigId: z.string().optional() }),
  async execute(input) {
    // TODO: Implement deterministic scoring formula from docs/features/05_scoring_logic.md.
    return { accountId: input.accountId, score: 0, categoryScores: {}, confidence: "low" };
  }
});
