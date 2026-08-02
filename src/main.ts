import { PORT } from "@/shared/consts.ts";
import { ServerErrorPage } from "@/shared/jsx/ServerErrorPage.tsx";
import { createErrorMiddleware, serve } from "@lib/serve";
import { defaultHandler } from "./handler.ts";

const errorMid = createErrorMiddleware(ServerErrorPage);

serve({
  port: PORT,
  handler: defaultHandler,
  middlewares: [errorMid],
});
