import { CreateAccountPage } from "@/features/accounts/jsx/CreateAccountPage.tsx";
import {
  Context,
  respondMethodAllowed,
  respondNotImplemented,
} from "@lib/serve";

export function handleCreateAccount(ctx: Context) {
  const { method } = ctx;

  if (method === "GET") {
    return <CreateAccountPage />;
  }

  if (method === "PUT") {
    return respondNotImplemented();
  }

  return respondMethodAllowed("GET", "PUT");
}
