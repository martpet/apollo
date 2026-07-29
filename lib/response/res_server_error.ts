import type { JSX } from "preact";
import { checkAcceptHtml } from "../request/accept_html.ts";
import { respondHtml } from "../response/res_html.ts";
import type { Context } from "../types.ts";

export function respondServerError(ctx: Context, jsx?: JSX.Element) {
  const resInit = { status: 500 };

  return jsx && checkAcceptHtml(ctx.req)
    ? respondHtml({ jsx, ctx, resInit })
    : new Response("Internal Server Error", resInit);
}
