import { STATUS_CODE } from "@std/http";
import { respondHtmlMaybe, RespondHtmlMaybeOptions } from "./res-html-maybe.ts";

export function respondServerError(
  options: Omit<RespondHtmlMaybeOptions, "status">,
) {
  const status = STATUS_CODE.InternalServerError;

  return respondHtmlMaybe({ ...options, status });
}
