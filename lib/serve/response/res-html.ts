import { StatusCode } from "@std/http";
import { HEADER } from "@std/http/unstable-header";
import { JSX } from "preact";
import { renderToString } from "preact-render-to-string";
import { Context } from "../types.ts";

export interface RespondHtmlOptions {
  html: JSX.Element | string;
  ctx: Context;
  status?: StatusCode;
}

export function respondHtml({ html, ctx, status }: RespondHtmlOptions) {
  const headers = { [HEADER.ContentType]: 'text/html; charset=utf-8"' };

  const body = "<!DOCTYPE html>" +
    (typeof html === "string" ? html : renderToString(html, ctx));

  return new Response(body, { headers, status });
}
