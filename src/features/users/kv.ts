import { kv } from "@/etc/kv.ts";
import { User } from "./types.ts";

export const USERS_BY_ID = "users";
export const USERS_BY_USERNAME = "users_by_username";

export function setUser(user: User, atomic = kv.atomic()) {
  const keys = [
    [USERS_BY_ID, user.id],
    [USERS_BY_USERNAME, user.username],
  ];
  for (const key of keys) atomic.set(key, user);
  return atomic;
}

export async function getUser(id: User["id"]) {
  const entry = await kv.get<User>([USERS_BY_ID, id]);
  return entry.value;
}

export async function getUserByUsername(username: User["username"]) {
  const entry = await kv.get<User>([USERS_BY_USERNAME, username]);
  return entry.value;
}
