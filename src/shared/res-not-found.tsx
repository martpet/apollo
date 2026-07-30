import { Context, respondNotFound } from "@serve";
import { PageNotFound } from "./jsx/PageNotFound.tsx";

export function respondPageNotFound(ctx: Context) {
  return respondNotFound(ctx, <PageNotFound />);
}
