import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Select one primary next best action from reason codes and account status.",
  inputSchema: z.object({ accountId: z.string(), reasonCodes: z.array(z.string()), sourceSignals: z.array(z.any()) }),
  async execute(input) {
    return { accountId: input.accountId, nextBestAction: "Review account data before outreach" };
  }
});
