import { createErrorMiddleware, serve } from "@serve";
import { getRequiredEnv } from "@utils";
import { mainHandler } from "./handler.ts";
import { PageServerError } from "./shared/jsx/PageServerError.tsx";

const port = getRequiredEnv("PORT");

const errorMid = createErrorMiddleware(PageServerError);

serve({
  port: Number(port),
  handler: mainHandler,
  middlewares: [errorMid],
});
