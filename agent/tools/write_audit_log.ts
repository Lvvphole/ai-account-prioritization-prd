import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Write audit event for critical agent, user, approval, or scoring actions.",
  inputSchema: z.object({ action: z.string(), entityType: z.string(), entityId: z.string().optional(), afterState: z.any().optional() }),
  async execute(input) {
    return { status: "logged", event: input };
  }
});
