import { respondHtml } from "../response/res-html.ts";
import { JsxMaybeHandler, Middleware } from "../types.ts";

export const jsxMid: Middleware<JsxMaybeHandler> = (next) => {
  return async (ctx) => {
    const jsxOrRes = await next(ctx);

    if (jsxOrRes instanceof Response) {
      return jsxOrRes;
    }

    return respondHtml({ html: jsxOrRes, ctx });
  };
};
