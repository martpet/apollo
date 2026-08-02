import { STATUS_CODE } from "@std/http";
import { respondHtmlMaybe, RespondHtmlMaybeOptions } from "./res-html-maybe.ts";

export type RespondServerErrorOptions = Omit<RespondHtmlMaybeOptions, "status">;

export function respondServerError(options: RespondServerErrorOptions) {
  return respondHtmlMaybe({
    ...options,
    status: STATUS_CODE.InternalServerError,
  });
}
