import { respondStatic } from "@lib/response/res-static.ts";
import type { Context } from "@lib/types.ts";
import { homepageHandler } from "./features/homepage/homepage-handler.tsx";
import { registrationHandler } from "./features/registration/registration-handler.tsx";
import { respondPageNotFound } from "./shared/utils.tsx";

export function appHandler(ctx: Context) {
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
