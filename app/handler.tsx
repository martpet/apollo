import { respondMethodAllowed } from "@lib/response/res_method_allowed.ts";
import { respondStatic } from "@lib/response/res_static.ts";
import type { Context } from "@lib/types.ts";
import { HomePage } from "./jsx/HomePage.tsx";
import { respondPageNotFound } from "./utils/res_page_not_found.tsx";

export function appHandler(ctx: Context) {
  const { url, req } = ctx;
  const { method } = req;
  const { pathname } = url;

  if (pathname.startsWith("/assets/")) {
    return respondStatic(ctx, import.meta);
  }

  if (pathname === "/") {
    if (method !== "GET") return respondMethodAllowed("GET");
    return <HomePage url={url} />;
  }

  return respondPageNotFound(ctx);
}
