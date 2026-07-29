import { checkAcceptHtml } from "@lib/request/accept-html.ts";
import { respondHtml } from "@lib/response/res-html.ts";
import type { JSX } from "preact";
import type { Context } from "../types.ts";

export function respondServerError(ctx: Context, jsx?: JSX.Element) {
  const resInit = { status: 500 };

  return jsx && checkAcceptHtml(ctx.req)
    ? respondHtml({ jsx, ctx, resInit })
    : new Response("Internal Server Error", resInit);
}
