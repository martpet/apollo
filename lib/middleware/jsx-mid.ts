import { respondHtml } from "..//response/res-html.ts";
import type { MaybeJsxHandler, Middleware } from "../types.ts";

export const jsxMiddleware: Middleware<MaybeJsxHandler> = (next) => {
  return async (ctx) => {
    const jsxOrRes = await next(ctx);

    if (jsxOrRes instanceof Response) {
      return jsxOrRes;
    }

    return respondHtml({ jsx: jsxOrRes, ctx });
  };
};
