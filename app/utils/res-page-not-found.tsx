import { respondNotFound as libRespondNotFound } from "@lib/response/res-not-found.ts";
import type { Context } from "@lib/types.ts";
import { PageNotFound } from "../jsx/PageNotFound.tsx";

export function respondPageNotFound(ctx: Context) {
  return libRespondNotFound(ctx, <PageNotFound />);
}
