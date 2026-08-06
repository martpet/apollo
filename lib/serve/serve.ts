import { Method } from "@std/http/unstable-method";
import { jsxMid } from "./middlewares/jsx-mid.ts";
import { JsxMaybeHandler, Middleware } from "./types.ts";

interface ServeOptions {
  handler: JsxMaybeHandler;
  middlewares?: Middleware[];
}

const port = Number(Deno.env.get("PORT")) || undefined;

export function serve({ handler, middlewares = [] }: ServeOptions) {
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
