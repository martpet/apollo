import { type JSX } from "preact";
import { respondServerError } from "../response/res-server-error.ts";
import type { Middleware } from "../types.ts";

export function createErrorMiddleware(jsx: JSX.Element): Middleware {
  return (next) => async (ctx) => {
    try {
      const resp = await next(ctx);
      return resp;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        ctx.error = error;
      }
      return respondServerError(ctx, jsx);
    }
  };
}
