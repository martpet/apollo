import { serveFile } from "@std/http";
import { basename, join } from "@std/path";
import type { Context } from "../types.ts";

export function respondStatic(ctx: Context, meta: ImportMeta) {
  const fileName = basename(ctx.url.pathname);
  const filePath = join(meta.dirname!, "assets", fileName);

  return serveFile(ctx.req, filePath);
}
