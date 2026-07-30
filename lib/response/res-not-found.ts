import type { JSX } from "preact";
import { checkAcceptHtml } from "../request/accept-html.ts";
import type { Context } from "../types.ts";
import { respondHtml } from "./res-html.ts";

export function respondNotFound(ctx: Context, jsx?: JSX.Element) {
  const resInit = { status: 404 };

  return jsx && checkAcceptHtml(ctx.req)
    ? respondHtml({ jsx, ctx, resInit })
    : new Response("Not Found", resInit);
}
