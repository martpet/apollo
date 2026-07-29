import { respondNotFound as libRespondNotFound } from "@lib/response/res_not_found.ts";
import type { Context } from "@lib/types.ts";
import { Page404 } from "../jsx/Page404.tsx";

export function respondPageNotFound(ctx: Context) {
  return libRespondNotFound(ctx, <Page404 />);
}
