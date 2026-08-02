import { PORT } from "@/shared/consts.ts";
import { csrfMid, errorMid } from "@/shared/middleware.tsx";
import { serve } from "@lib/serve";
import { defaultHandler } from "./handler.ts";

serve({
  port: PORT,
  handler: defaultHandler,
  middlewares: [errorMid, csrfMid],
});
