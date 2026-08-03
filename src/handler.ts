import { handleAccount } from "@/features/accounts/handlers/handler.tsx";
import { handleHomePage } from "@/features/homepage/handler.tsx";
import { handlePasskeys } from "@/features/passkeys/handlers/handler.ts";
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

  if (pathname.startsWith("/passkeys/")) {
    return handlePasskeys(ctx);
  }

  return handleNotFound(ctx);
}
