import { Context, respondMethodAllowed } from "@lib/serve";
import { HomePage } from "./HomePage.tsx";

export function homepageHandler({ req }: Context) {
  if (req.method !== "GET") {
    return respondMethodAllowed("GET");
  }

  return <HomePage />;
}
