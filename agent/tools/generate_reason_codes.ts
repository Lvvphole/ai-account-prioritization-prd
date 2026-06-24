import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Map source signals to reason codes. Every code must be grounded in a source signal.",
  inputSchema: z.object({ accountId: z.string(), signals: z.array(z.any()) }),
  async execute(input) {
    // TODO: Map signals to reason codes from scoring PRD.
    return { accountId: input.accountId, reasonCodes: [], sourceSignals: input.signals };
  }
});
