import { respondHtml } from "../response/res-html.ts";
import { MaybeJsxHandler, Middleware } from "../types.ts";

export const jsxMid: Middleware<MaybeJsxHandler> = (next) => {
  return async (ctx) => {
    const jsxOrRes = await next(ctx);

    if (jsxOrRes instanceof Response) {
      return jsxOrRes;
    }

    return respondHtml({ jsx: jsxOrRes, ctx });
  };
};
