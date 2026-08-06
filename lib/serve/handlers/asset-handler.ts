import { respondMethodAllowed } from "@lib/serve";
import { serveFile } from "@std/http";
import { basename, join } from "@std/path";
import { Context } from "../types.ts";

export function handleAsset(ctx: Context, meta: ImportMeta) {
  const { request, url } = ctx;

  if (request.method !== "GET") {
    return respondMethodAllowed("GET");
  }

  const fileName = basename(url.pathname);
  const filePath = join(meta.dirname!, "assets", fileName);

  return serveFile(request, filePath);
}
