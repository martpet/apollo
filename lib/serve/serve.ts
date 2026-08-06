import { Method } from "@std/http/unstable-method";
import { jsxMid } from "./middlewares/jsx-mid.ts";
import { JsxMaybeHandler, Middleware } from "./types.ts";

interface ServeOptions {
  port: number;
  handler: JsxMaybeHandler;
  middlewares?: Middleware[];
}

export function serve({ port, handler, middlewares = [] }: ServeOptions) {
  Deno.serve({ port }, (request) => {
    const composed = middlewares.reduceRight(
      (prev, current) => current(prev),
      jsxMid(handler),
    );

    const context = {
      request,
      url: new URL(request.url),
      method: request.method as Method,
    };

    return composed(context);
  });
}
