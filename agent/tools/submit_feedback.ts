import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Record rep feedback on recommendation quality.",
  inputSchema: z.object({ recommendationId: z.string(), rating: z.string(), comment: z.string().optional() }),
  async execute(input) {
    return { status: "saved", feedback: input };
  }
});
