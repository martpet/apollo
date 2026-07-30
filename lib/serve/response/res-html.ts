import { JSX } from "preact";
import { renderToString } from "preact-render-to-string";
import { Context } from "../types.ts";

interface RespondHtmlOptions {
  jsx: JSX.Element;
  ctx: Context;
  resInit?: ResponseInit;
}

export function respondHtml({ jsx, ctx, resInit = {} }: RespondHtmlOptions) {
  resInit.headers = new Headers(resInit.headers);
  resInit.headers.set("content-type", "text/html; charset=utf-8");

  return new Response(
    "<!DOCTYPE html>" + renderToString(jsx, ctx),
    resInit,
  );
}
