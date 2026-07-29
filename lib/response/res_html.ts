import { type JSX } from "preact";
import { renderToString } from "preact-render-to-string";

export function respondHtml(jsx: JSX.Element, resInit: ResponseInit = {}) {
  resInit.headers = new Headers(resInit.headers);
  resInit.headers.set("content-type", "text/html; charset=utf-8");

  return new Response("<!DOCTYPE html>" + renderToString(jsx), resInit);
}
