import { Context, respondMethodAllowed } from "@lib/serve";

export function handleGenerateRegOptions(ctx: Context) {
  const { method } = ctx;

  if (method !== "GET") {
    return respondMethodAllowed("GET");
  }

  return new Response();
}
