import { STATUS_CODE, STATUS_TEXT } from "@std/http";
import { Optional } from "../../utils/types.ts";
import { checkAcceptHtml } from "../request/accept-html.ts";
import { respondHtml, RespondHtmlOptions } from "./res-html.ts";

export type RespondHtmlMaybeOptions = Optional<RespondHtmlOptions, "html">;

export function respondHtmlMaybe(options: RespondHtmlMaybeOptions) {
  const { html, ctx, status = STATUS_CODE.OK } = options;

  if (html && checkAcceptHtml(ctx.req)) {
    return respondHtml({ html, ctx, status });
  }

  return new Response(STATUS_TEXT[status], { status });
}
