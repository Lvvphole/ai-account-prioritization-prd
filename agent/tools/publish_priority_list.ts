import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Publish passing recommendations and exclude failed or blocked recommendations.",
  inputSchema: z.object({ agentRunId: z.string(), recommendations: z.array(z.any()) }),
  async execute({ agentRunId, recommendations }) {
    const published = recommendations.filter((r) => r.verificationStatus === "passed");
    const blocked = recommendations.filter((r) => r.verificationStatus !== "passed");
    return { agentRunId, publishedCount: published.length, blockedCount: blocked.length };
  }
});
