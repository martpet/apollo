import { KV_PATH } from "@/etc/consts.ts";

export const kv = await Deno.openKv(KV_PATH);
