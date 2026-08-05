import { handleAccount } from "@/features/accounts/handler.tsx";
import { handleHomePage } from "@/features/pages/homepage/handler.tsx";
import { handleNotFound } from "@/shared/handlers/not-found.tsx";
import { Context, handleAsset } from "@lib/serve";

export function rootHandler(ctx: Context) {
  const { pathname } = ctx.url;

  if (pathname.startsWith("/assets/")) {
    return handleAsset(ctx, import.meta);
  }

  if (pathname === "/") {
    return handleHomePage(ctx);
  }

  if (pathname.startsWith("/account/")) {
    return handleAccount(ctx);
  }

  return handleNotFound(ctx);
}
