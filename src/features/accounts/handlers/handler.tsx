import { handleNotFound } from "@/shared/handlers/not-found.tsx";
import { Context, handleAsset } from "@lib/serve";
import { handleCreateAccount } from "./create-account.tsx";

export function handleAccount(ctx: Context) {
  const { pathname } = ctx.url;

  if (pathname.startsWith("/account/assets/")) {
    return handleAsset(ctx, import.meta);
  }

  if (pathname === "/account/create") {
    return handleCreateAccount(ctx);
  }

  return handleNotFound(ctx);
}
