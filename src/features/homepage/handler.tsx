import { Context, respondMethodAllowed } from "@lib/serve";
import { HomePage } from "./HomePage.tsx";

export function homepageHandler(ctx: Context) {
  const { method } = ctx.req;

  if (method !== "GET") {
    return respondMethodAllowed("GET");
  }

  return <HomePage />;
}
