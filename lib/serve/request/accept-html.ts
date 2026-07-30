export function checkAcceptHtml(req: Request) {
  return req.headers.get("accept")?.includes("text/html");
}
