export function checkAcceptHtml(request: Request) {
  return request.headers.get("accept")?.includes("text/html");
}
