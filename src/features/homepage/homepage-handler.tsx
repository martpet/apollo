import { respondMethodAllowed } from "@lib/response/res-method-allowed.ts";
import type { Context } from "@lib/types.ts";
import { HomePage } from "./HomePage.tsx";

export function homepageHandler({ req }: Context) {
  if (req.method !== "GET") return respondMethodAllowed("GET");

  return <HomePage />;
}
