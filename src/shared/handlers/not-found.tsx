import { NotFoundPage } from "@/shared/jsx/NotFoundPage.tsx";
import { Context, respondNotFound } from "@lib/serve";

export function handleNotFound(ctx: Context) {
  return respondNotFound({ ctx, html: <NotFoundPage /> });
}
