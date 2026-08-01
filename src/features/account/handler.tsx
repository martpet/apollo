import {
  Context,
  handleAsset,
  respondMethodAllowed,
  respondNotImplemented,
} from "@lib/serve";
import { handleNotFound } from "../../shared/handlers/handle-not-found.tsx";
import { CreateAccountPage } from "./CreateAccountPage.tsx";

export function handleAccount(ctx: Context) {
  const { method } = ctx;
  const { pathname } = ctx.url;

  if (pathname.includes("/assets/")) {
    return handleAsset(ctx, import.meta);
  }

  if (pathname === "/account/create") {
    if (method === "GET") {
      return <CreateAccountPage />;
    } else if (method === "PUT") {
      return respondNotImplemented();
    } else {
      return respondMethodAllowed("GET", "PUT");
    }
  }

  return handleNotFound(ctx);
}
