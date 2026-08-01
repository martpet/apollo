import { STATUS_CODE } from "@std/http";
import { respondHtmlMaybe, RespondHtmlMaybeOptions } from "./res-html-maybe.ts";

export function respondNotFound(
  options: Omit<RespondHtmlMaybeOptions, "status">,
) {
  const status = STATUS_CODE.NotFound;

  return respondHtmlMaybe({ ...options, status });
}
