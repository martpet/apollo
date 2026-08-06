export const PORT = Number(Deno.env.get("PORT")) || undefined;
export const SAFE_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
