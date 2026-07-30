import { createErrorMiddleware } from "@lib/middleware/error-mid-factory.ts";
import { respondNotFound } from "@lib/response/res-not-found.ts";
import type { Context } from "@lib/types.ts";
import { PageNotFound } from "./jsx/PageNotFound.tsx";
import { PageServerError } from "./jsx/PageServerError.tsx";

export const errorMiddleware = createErrorMiddleware(<PageServerError />);

export function respondPageNotFound(ctx: Context) {
  return respondNotFound(ctx, <PageNotFound />);
}
