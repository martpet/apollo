import { handleNotFound } from "@/shared/handlers/not-found.tsx";
import { Context, handleAsset } from "@lib/serve";

export function handlePasskeys(ctx: Context) {
  const { pathname } = ctx.url;

  if (pathname.startsWith("/passkeys/assets/")) {
    return handleAsset(ctx, import.meta);
  }

  return handleNotFound(ctx);
}
