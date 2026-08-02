import { STATUS_CODE } from "@std/http";
import { ServerErrorContext } from "../types.ts";
import { respondHtmlMaybe, RespondHtmlMaybeOptions } from "./res-html-maybe.ts";

type RespondServerError =
  & Omit<RespondHtmlMaybeOptions, "status" | "ctx">
  & { ctx: ServerErrorContext };

export function respondServerError(options: RespondServerError) {
  const status = STATUS_CODE.InternalServerError;

  return respondHtmlMaybe({ ...options, status });
}
