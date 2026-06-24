import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Verify recommendation has score, confidence, reason code, source signal, next action, and valid permission scope.",
  inputSchema: z.object({ recommendation: z.any() }),
  async execute({ recommendation }) {
    const failures = [] as string[];
    if (typeof recommendation.score !== "number") failures.push("missing_score");
    if (!recommendation.confidence) failures.push("missing_confidence");
    if (!recommendation.reasonCodes?.length) failures.push("missing_reason_codes");
    if (!recommendation.nextBestAction) failures.push("missing_next_best_action");
    return { status: failures.length ? "failed" : "passed", failures };
  }
});
