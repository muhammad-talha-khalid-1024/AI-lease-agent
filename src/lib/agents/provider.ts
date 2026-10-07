import { stubProvider } from "./provider.stub";
import type { ModelProvider } from "./types";

export function getProvider(): ModelProvider {
  const which = process.env.MODEL_PROVIDER ?? "stub";
  if (which === "openai") {
    // Lazy-load so the app runs without an API key.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { openAIProvider } = require("./provider.openai");
    return openAIProvider;
  }
  return stubProvider;
}