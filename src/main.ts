import { errorMid } from "@/middleware/error-mid.tsx";
import { PORT } from "@/shared/consts.ts";
import { serve } from "@lib/serve";
import { defaultHandler } from "./handler.ts";

serve({
  port: PORT,
  handler: defaultHandler,
  middlewares: [errorMid],
});
