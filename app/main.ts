import { getRequiredEnv } from "@lib/get-required-env.ts";
import { serve } from "@lib/serve.ts";
import { appHandler } from "./handler.tsx";

const port = getRequiredEnv("PORT");

serve({
  port: Number(port),
  handler: appHandler,
});
