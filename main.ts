import { appHandler } from "./app/handler.tsx";
import { serve } from "./lib/serve.ts";

const PORT = Deno.env.get("PORT");

if (!PORT) {
  throw new Error('Missing "PORT" env var!');
}

serve({
  port: Number(PORT),
  handler: appHandler,
});
