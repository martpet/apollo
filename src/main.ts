import { ServerErrorPage } from "@/shared/jsx/ServerErrorPage.tsx";
import { createErrorMiddleware, serve } from "@lib/serve";
import { getRequiredEnv } from "@lib/utils";
import { defaultHandler } from "./handler.ts";

const port = getRequiredEnv("PORT");

const errorMid = createErrorMiddleware(ServerErrorPage);

serve({
  port: Number(port),
  handler: defaultHandler,
  middlewares: [errorMid],
});
