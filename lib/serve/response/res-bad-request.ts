import { STATUS_CODE, STATUS_TEXT } from "@std/http";

export function respondBadRequest(message?: string) {
  const status = STATUS_CODE.BadRequest;

  return new Response(message || STATUS_TEXT[status], { status });
}
