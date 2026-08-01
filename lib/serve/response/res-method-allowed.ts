import { STATUS_CODE, STATUS_TEXT } from "@std/http";
import { Method } from "@std/http/unstable-method";

export function respondMethodAllowed(...methods: Method[]) {
  const headers = { Allow: methods.join(", ") };
  const status = STATUS_CODE.MethodNotAllowed;

  return new Response(STATUS_TEXT[status], { headers, status });
}
