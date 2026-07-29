import { getRequiredEnv } from "@lib/get-required-env.ts";
import { serve } from "@lib/serve.ts";
import { appHandler } from "./handler.tsx";
import { errorMiddleware } from "./utils/error_mid.tsx";

const port = getRequiredEnv("PORT");

serve({
  port: Number(port),
  handler: appHandler,
  middlewares: [errorMiddleware],
});
