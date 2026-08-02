import { ForbiddenPage } from "@/shared/jsx/ForbiddenPage.tsx";
import { Context, respondNotFound } from "@lib/serve";

export function handleForbidden(ctx: Context) {
  return respondNotFound({ ctx, html: <ForbiddenPage /> });
}
