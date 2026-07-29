import type { VNode } from "preact";

export type MaybePromise<T> = T | Promise<T>;

export interface Context {
  req: Request;
  url: URL;
  error?: Error;
}

export type Handler<T = Response> = (ctx: Context) => MaybePromise<T>;

export type MaybeJsxHandler = Handler<VNode | Response>;

export type Middleware<T = Handler> = (handler: T) => Handler;
