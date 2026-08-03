import { kv } from "@/etc/kv.ts";
import { User } from "./types.ts";

export const usersKey = ["users"];
export const usersByUsernameKey = ["users_by_username"];

export function getUserByUsername(username: string) {
  return kv.get<User>(usersByUsernameKey.concat(username));
}
