import { type JSX } from "preact";
import { respondServerError } from "../response/res_server_error.ts";
import type { Middleware } from "../types.ts";

export function creatErrorMiddleware(jsx: JSX.Element): Middleware {
  return (next) => async (ctx) => {
    try {
      const resp = await next(ctx);
      return resp;
    } catch (err) {
      console.log(err);
      return respondServerError(ctx, jsx);
    }
  };
}
