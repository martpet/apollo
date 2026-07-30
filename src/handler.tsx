import { respondMethodAllowed } from "@lib/response/res-method-allowed.ts";
import { respondStatic } from "@lib/response/res-static.ts";
import type { Context } from "@lib/types.ts";
import { HomePage } from "./jsx/HomePage.tsx";
import { respondPageNotFound } from "./utils/res-page-not-found.tsx";

export function appHandler(ctx: Context) {
  const { url, req } = ctx;
  const { method } = req;
  const { pathname } = url;

  if (pathname.startsWith("/assets/")) {
    return respondStatic(ctx, import.meta);
  }

  if (pathname === "/") {
    if (method !== "GET") return respondMethodAllowed("GET");
    return <HomePage />;
  }

  return respondPageNotFound(ctx);
}
