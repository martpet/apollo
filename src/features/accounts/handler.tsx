import { handleCreateAccount } from "@/features/accounts/create-account.tsx";
import { handleNotFound } from "@/shared/handlers/not-found.tsx";
import { Context, handleAsset } from "@lib/serve";

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
