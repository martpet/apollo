import type { Context } from "../lib/types.ts";

export function appHandler(ctx: Context) {
  return <h1>Hello {ctx.url.pathname}</h1>;
}
