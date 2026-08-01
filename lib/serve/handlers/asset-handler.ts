import { respondMethodAllowed } from "@lib/serve";
import { serveFile } from "@std/http";
import { basename, join } from "@std/path";
import { Context } from "../types.ts";

export function handleAsset(ctx: Context, meta: ImportMeta) {
  const { method } = ctx.req;

  if (method !== "GET") {
    return respondMethodAllowed("GET");
  }

  const fileName = basename(ctx.url.pathname);
  const filePath = join(meta.dirname!, "assets", fileName);

  return serveFile(ctx.req, filePath);
}
