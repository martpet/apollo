import { MaybePromise } from "@lib/utils";
import { Method } from "@std/http/unstable-method";
import { VNode } from "preact";

export interface Context {
  req: Request;
  url: URL;
  method: Method;
}

export type ServerErrorContext = Context & { error: unknown };

export type Handler<T = Response> = (ctx: Context) => MaybePromise<T>;

export type JsxMaybeHandler = Handler<VNode | Response>;

export type Middleware<T = Handler> = (handler: T) => Handler;
