import {
  respondServerError,
  RespondServerErrorOptions,
} from "../response/res-server-error.ts";
import { Middleware } from "../types.ts";

type CreateErrorMidOptions = Pick<RespondServerErrorOptions, "html">;

export function createErrorMid(
  options: CreateErrorMidOptions = {},
): Middleware {
  return (next) => async (ctx) => {
    try {
      const response = await next(ctx);
      return response;
    } catch (error) {
      console.log(error);
      return respondServerError({
        ctx: { ...ctx, error },
        html: options.html,
      });
    }
  };
}
