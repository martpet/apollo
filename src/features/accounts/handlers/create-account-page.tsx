import { Context, respondMethodAllowed } from "@lib/serve";
import { CreateAccountPage } from "../jsx/CreateAccountPage.tsx";

export function handleCreateAccountPage(ctx: Context) {
  const { method } = ctx;

  if (method !== "GET") {
    return respondMethodAllowed("GET");
  }

  return <CreateAccountPage />;
}
