import { getRequiredEnv } from "@lib/required-env.ts";
import { serve } from "@lib/serve.ts";
import { appHandler } from "./app-handler.ts";
import { errorMiddleware } from "./shared/utils.tsx";

const port = getRequiredEnv("PORT");

serve({
  port: Number(port),
  handler: appHandler,
  middlewares: [errorMiddleware],
});
