import { getRequiredEnv } from "@lib/required-env.ts";
import { serve } from "@lib/serve.ts";
import { appHandler } from "./handler.tsx";
import { errorMiddleware } from "./utils/error-mid.tsx";

const port = getRequiredEnv("PORT");

serve({
  port: Number(port),
  handler: appHandler,
  middlewares: [errorMiddleware],
});
