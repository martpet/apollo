import { getRequiredEnv } from "@lib/get-required-env.ts";
import { serve } from "@lib/serve.ts";
import { appHandler } from "./app/handler.tsx";

const port = getRequiredEnv("PORT");

serve({
  port: Number(port),
  handler: appHandler,
});
