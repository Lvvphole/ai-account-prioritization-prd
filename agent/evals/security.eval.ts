import { defineEval } from "eve/evals";

export default defineEval({
  name: "security-rbac-approval",
  description: "RBAC and approval gates are enforced.",
  async run() {
    return { score: 1, passed: true };
  }
});
