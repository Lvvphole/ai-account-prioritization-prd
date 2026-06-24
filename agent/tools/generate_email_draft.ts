import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Generate editable B2B email draft. Customer-facing use requires human approval.",
  needsApproval: () => true,
  inputSchema: z.object({ accountId: z.string(), recommendationId: z.string(), accountContext: z.any() }),
  async execute(input) {
    return { subject: "Following up", body: "Hi, I wanted to follow up on the next step.", approvalRequired: true };
  }
});
