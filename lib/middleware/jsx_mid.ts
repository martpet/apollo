import { respondHtml } from "../response/res_html.ts";
import type { MaybeJsxHandler, Middleware } from "../types.ts";

export const jsxMiddleware: Middleware<MaybeJsxHandler> = (next) => {
  return async (req) => {
    const res = await next(req);

    if (res instanceof Response) {
      return res;
    }

    return respondHtml(res);
  };
};
