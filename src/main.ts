import { createErrorMiddleware, serve } from "@lib/serve";
import { getRequiredEnv } from "@lib/utils";
import { mainHandler } from "./handler.ts";
import { PageServerError } from "./shared/jsx/PageServerError.tsx";

const port = getRequiredEnv("PORT");

const errorMid = createErrorMiddleware(PageServerError);

serve({
  port: Number(port),
  handler: mainHandler,
  middlewares: [errorMid],
});
