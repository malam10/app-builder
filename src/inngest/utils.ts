import Sandbox from "@e2b/code-interpreter";
import { AgentResult, TextMessage } from "@inngest/agent-kit";

export async function getSandbox(sandboxId: string) {
  const sandbox = await Sandbox.connect(sandboxId);
  return sandbox;
}

export function lastAssistantTextMesageContent(result: AgentResult) {
  const lastAssistantTextMesageIndex = result.output.findLastIndex(
    (message) => message.role === "assistant",
  );

  const message = result.output[lastAssistantTextMesageIndex] as
    | TextMessage
    | undefined;

  return message?.content ?
    typeof message.content === "string" ?
    message.content :
    message.content.map((c) => c.text).join("") :
    undefined; // Corrected 'undefin' to 'undefined'
}