import { Middleware } from "../types.ts";

export const cacheMid: Middleware = (next) => async (ctx) => {
  const match = await caches.match(ctx.request);

  if (match) {
    match.headers.set("x-cache", "hit");
    return match;
  }

  return next(ctx);
};
