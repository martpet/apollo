import { jsxMiddleware } from "./middleware/jsx-mid.ts";
import type { MaybeJsxHandler, Middleware } from "./types.ts";

interface ServeOptions {
  port: number;
  handler: MaybeJsxHandler;
  middlewares?: Middleware[];
}

export function serve({ port, handler, middlewares = [] }: ServeOptions) {
  Deno.serve({ port }, (req) => {
    const composedHandler = middlewares.reduceRight(
      (prev, current) => current(prev),
      jsxMiddleware(handler),
    );

    const context = {
      req,
      url: new URL(req.url),
    };

    return composedHandler(context);
  });
}
