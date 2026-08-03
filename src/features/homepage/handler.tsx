import { Context, respondMethodAllowed } from "@lib/serve";
import { HomePage } from "./HomePage.tsx";

export function handleHomePage(ctx: Context) {
  const { method } = ctx;

  if (method === "GET") {
    return <HomePage />;
  } else {
    return respondMethodAllowed("GET");
  }
}
