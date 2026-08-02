import { STATUS_CODE } from "@std/http";
import { ServerErrorContext } from "../types.ts";
import { respondHtmlMaybe, RespondHtmlMaybeOptions } from "./res-html-maybe.ts";

export type RespondServerErrorOptions =
  & Omit<RespondHtmlMaybeOptions, "status" | "ctx">
  & { ctx: ServerErrorContext };

export function respondServerError(options: RespondServerErrorOptions) {
  const status = STATUS_CODE.InternalServerError;

  return respondHtmlMaybe({ ...options, status });
}
