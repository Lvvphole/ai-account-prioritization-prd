import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Sort scored accounts by score descending with deterministic tie-breaks.",
  inputSchema: z.object({ scoredAccounts: z.array(z.any()) }),
  async execute({ scoredAccounts }) {
    return { rankedAccounts: scoredAccounts.sort((a, b) => (b.score ?? 0) - (a.score ?? 0)) };
  }
});
