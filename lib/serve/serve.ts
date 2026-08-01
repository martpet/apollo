import { Method } from "@std/http/unstable-method";
import { jsxMid } from "./middleware/jsx-mid.ts";
import { JsxMaybeHandler, Middleware } from "./types.ts";

interface ServeOptions {
  port: number;
  handler: JsxMaybeHandler;
  middlewares?: Middleware[];
}

export function serve({ port, handler, middlewares = [] }: ServeOptions) {
  Deno.serve({ port }, (req) => {
    const composed = middlewares.reduceRight(
      (prev, current) => current(prev),
      jsxMid(handler),
    );

    const context = {
      req,
      url: new URL(req.url),
      method: req.method as Method,
    };

    return composed(context);
  });
}
