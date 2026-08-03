import { PORT } from "@/etc/consts.ts";
import { csrfMid, errorMid } from "@/etc/mids.tsx";
import { serve } from "@lib/serve";
import { rootHandler } from "./handler.ts";

serve({
  port: PORT,
  handler: rootHandler,
  middlewares: [errorMid, csrfMid],
});
