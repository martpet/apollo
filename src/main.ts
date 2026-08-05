import { APP_PORT } from "@/etc/consts.ts";
import { csrfMid, errorMid } from "@/etc/mids.tsx";
import { serve } from "@lib/serve";
import { rootHandler } from "./handler.ts";

serve({
  port: APP_PORT,
  handler: rootHandler,
  middlewares: [errorMid, csrfMid],
});
