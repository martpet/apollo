import { Context, respondNotFound } from "@lib/serve";
import { PageNotFound } from "./jsx/PageNotFound.tsx";

export function respondPageNotFound(ctx: Context) {
  return respondNotFound(ctx, <PageNotFound />);
}
