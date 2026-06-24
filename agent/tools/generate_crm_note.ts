import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Format raw rep notes into clean CRM notes. Write-back requires human approval.",
  needsApproval: () => true,
  inputSchema: z.object({ accountId: z.string(), rawNote: z.string() }),
  async execute({ rawNote }) {
    return { crmNote: rawNote.trim(), approvalRequired: true };
  }
});
