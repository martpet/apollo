import { kv } from "@/etc/kv.ts";
import { ulid } from "@std/ulid";
import { User } from "./types.ts";

export const USERS_BY_ID = "users";
export const USERS_BY_USERNAME = "users_by_username";

export function createUser(user: Omit<User, "id">, atomic = kv.atomic()) {
  return setUser({ ...user, id: ulid() }, atomic)
    .check({ key: [USERS_BY_USERNAME, user.username], versionstamp: null });
}

export function setUser(user: User, atomic = kv.atomic()) {
  return atomic
    .set([USERS_BY_ID, user.id], user)
    .set([USERS_BY_USERNAME, user.username], user);
}

export async function getUser(id: string) {
  const entry = await kv.get<User>([USERS_BY_ID, id]);
  return entry.value;
}

export async function getUserByUsername(username: string) {
  const entry = await kv.get<User>([USERS_BY_USERNAME, username]);
  return entry.value;
}
