import { Context, handleAsset } from "@lib/serve";
import { handleAccount } from "./features/account/handler.tsx";
import { handleHomePage } from "./features/homepage/handler.tsx";
import { handleNotFound } from "./shared/handlers/handle-not-found.tsx";

export function defaultHandler(ctx: Context) {
  const { pathname } = ctx.url;

  if (pathname === "/") {
    return handleHomePage(ctx);
  }

  if (pathname.startsWith("/account/")) {
    return handleAccount(ctx);
  }

  if (pathname.startsWith("/assets/")) {
    return handleAsset(ctx, import.meta);
  }

  return handleNotFound(ctx);
}
