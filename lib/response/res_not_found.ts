import { checkAcceptHtml } from "@lib/request/accept_html.ts";
import type { JSX } from "preact";
import type { Context } from "../types.ts";
import { respondHtml } from "./res_html.ts";

export function respondNotFound(ctx: Context, jsx: JSX.Element) {
  const resInit = { status: 404 };

  return checkAcceptHtml(ctx.req)
    ? respondHtml(jsx, resInit)
    : new Response("Not Found", resInit);
}
