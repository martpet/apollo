import { csrfMid, errorMid } from "@/etc/middlewares.tsx";
import { serve } from "@lib/serve";
import { rootHandler } from "./handler.ts";

serve({
  handler: rootHandler,
  middlewares: [errorMid, csrfMid],
});
