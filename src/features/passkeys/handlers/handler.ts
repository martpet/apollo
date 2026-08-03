import { handleNotFound } from "@/shared/handlers/not-found.tsx";
import { Context, handleAsset } from "@lib/serve";
import { handleGenerateRegOptions } from "./generate-reg-options.ts";

export function handlePasskeys(ctx: Context) {
  const { pathname } = ctx.url;

  if (pathname.startsWith("/passkeys/assets/")) {
    return handleAsset(ctx, import.meta);
  }

  if (pathname === "/passkeys/generate-reg-options") {
    return handleGenerateRegOptions(ctx);
  }

  return handleNotFound(ctx);
}
