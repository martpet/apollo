import { handleNotFound } from "@/shared/handlers/not-found.tsx";
import { Context, handleAsset } from "@lib/serve";
import { handleCreateAccountFlowEnd } from "./handlers/create-account-flow-end.ts";
import { handleCreateAccountFlowStart } from "./handlers/create-account-flow-start.ts";
import { handleCreateAccountPage } from "./handlers/create-account-page.tsx";

export function handleAccount(ctx: Context) {
  const { pathname } = ctx.url;

  if (pathname.startsWith("/account/assets/")) {
    return handleAsset(ctx, import.meta);
  }

  if (pathname === "/account/create") {
    return handleCreateAccountPage(ctx);
  }

  if (pathname === "/account/create/flow-start") {
    return handleCreateAccountFlowStart(ctx);
  }

  if (pathname === "/account/create/flow-end") {
    return handleCreateAccountFlowEnd(ctx);
  }

  return handleNotFound(ctx);
}
