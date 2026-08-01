import { STATUS_CODE, STATUS_TEXT } from "@std/http/status";

export function respondNotImplemented() {
  const status = STATUS_CODE.NotImplemented;

  return new Response(STATUS_TEXT[status], { status });
}
