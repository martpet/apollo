import { Context, respondNotFound } from "@lib/serve";
import { NotFoundPage } from "../jsx/NotFoundPage.tsx";

export function handleNotFound(ctx: Context) {
  return respondNotFound({ ctx, html: <NotFoundPage /> });
}
