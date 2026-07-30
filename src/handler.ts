import { Context, respondStatic } from "@serve";
import { homepageHandler } from "./features/homepage/handler.tsx";
import { registrationHandler } from "./features/registration/handler.tsx";
import { respondPageNotFound } from "./shared/res-not-found.tsx";

export function mainHandler(ctx: Context) {
  const { pathname } = ctx.url;

  if (pathname === "/") {
    return homepageHandler(ctx);
  }

  if (pathname === "/registration") {
    return registrationHandler(ctx);
  }

  if (pathname.startsWith("/assets/")) {
    return respondStatic(ctx, import.meta);
  }

  return respondPageNotFound(ctx);
}
