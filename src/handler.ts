import { Context, respondStatic } from "@serve";
import { accountHandler } from "./features/account/handler.tsx";
import { homepageHandler } from "./features/homepage/handler.tsx";
import { respondPageNotFound } from "./shared/res-not-found.tsx";

export function mainHandler(ctx: Context) {
  const { pathname } = ctx.url;

  if (pathname === "/") {
    return homepageHandler(ctx);
  }

  if (pathname === "/registration") {
    return accountHandler(ctx);
  }

  if (pathname.startsWith("/assets/")) {
    return respondStatic(ctx, import.meta);
  }

  return respondPageNotFound(ctx);
}
