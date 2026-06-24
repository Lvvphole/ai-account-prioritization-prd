import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Detect account signals from normalized CRM-style data and return source fields for every signal.",
  inputSchema: z.object({ accountId: z.string(), ownerId: z.string() }),
  async execute(input) {
    // TODO: Implement from seeded data repository.
    return { accountId: input.accountId, signals: [], dataQualityFlags: [] };
  }
});
