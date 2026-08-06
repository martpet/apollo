const kvPath = Deno.env.get("KV_PATH") || "./db/kv.sqlite";

export const kv = await Deno.openKv(kvPath);
