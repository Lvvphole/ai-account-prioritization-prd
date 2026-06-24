import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Generate a grounded call objective under 60 words from supplied context only.",
  inputSchema: z.object({ accountId: z.string(), recommendationId: z.string(), accountContext: z.any() }),
  async execute(input) {
    // TODO: Call guarded LLM generation in implementation.
    return { callObjective: "Call to confirm the next step based on the current recommendation.", approvalRequired: false };
  }
});
