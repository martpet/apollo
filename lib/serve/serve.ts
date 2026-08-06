import { Method } from "@std/http/unstable-method";
import { PORT } from "./consts.ts";
import { jsxMid } from "./middlewares/jsx-mid.ts";
import { JsxMaybeHandler, Middleware } from "./types.ts";

interface ServeOptions {
  handler: JsxMaybeHandler;
  middlewares?: Middleware[];
}

export function serve({ handler, middlewares = [] }: ServeOptions) {
  Deno.serve({ port: PORT }, (request) => {
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
