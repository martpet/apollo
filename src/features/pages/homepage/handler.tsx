import { HomePage } from "@/features/pages/homepage/HomePage.tsx";
import { Context, respondMethodAllowed } from "@lib/serve";

export function handleHomePage(ctx: Context) {
  const { method } = ctx;

  if (method !== "GET") {
    return respondMethodAllowed("GET");
  }

  return <HomePage />;
}
