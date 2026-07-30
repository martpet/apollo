import { JSX } from "preact";
import { checkAcceptHtml } from "../request/accept-html.ts";
import { Context } from "../types.ts";
import { respondHtml } from "./res-html.ts";

export function respondServerError(ctx: Context, jsx?: JSX.Element) {
  const resInit = { status: 500 };

  return jsx && checkAcceptHtml(ctx.req)
    ? respondHtml({ jsx, ctx, resInit })
    : new Response("Internal Server Error", resInit);
}
