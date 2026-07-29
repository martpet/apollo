import { respondServerError } from "@lib/response/res-server-error.ts";
import { type JSX } from "preact";
import type { Middleware } from "../types.ts";

export function creatErrorMiddleware(jsx: JSX.Element): Middleware {
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
