import { FunctionComponent } from "preact";
import { respondServerError } from "../response/res-server-error.ts";
import { Middleware } from "../types.ts";

export function createErrorMiddleware(FC: FunctionComponent): Middleware {
  return (next) => async (ctx) => {
    try {
      const res = await next(ctx);
      return res;
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        ctx.error = err;
      }
      return respondServerError({ ctx, html: <FC /> });
    }
  };
}
