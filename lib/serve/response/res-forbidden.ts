import { STATUS_CODE } from "@std/http";
import { respondHtmlMaybe, RespondHtmlMaybeOptions } from "./res-html-maybe.ts";

export type RespondForbiddenOptions = Omit<RespondHtmlMaybeOptions, "status">;

export function respondForbidden(options: RespondForbiddenOptions) {
  return respondHtmlMaybe({ ...options, status: STATUS_CODE.NotFound });
}
