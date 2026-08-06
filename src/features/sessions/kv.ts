import { kv } from "@/etc/kv.ts";
import { SESSION_DURATION } from "./consts.ts";
import { Session } from "./types.ts";

export const SESSIONS_BY_ID = "sessions";
export const SESSIONS_BY_USER = "sessions_by_user";

export function setSession(session: Session, atomic = kv.atomic()) {
  const keys = [[SESSIONS_BY_ID, session.id]];

  if (session.userId) {
    keys.push([SESSIONS_BY_USER, session.userId, session.id]);
  }
  for (const key of keys) {
    atomic.set(key, session, { expireIn: SESSION_DURATION });
  }
  return atomic;
}

export function deleteSession(session: Session, atomic = kv.atomic()) {
  const keys = [[SESSIONS_BY_ID, session.id]];

  if (session.userId) {
    keys.push([SESSIONS_BY_USER, session.userId, session.id]);
  }
  for (const key of keys) {
    atomic.delete(key);
  }
  return atomic;
}

export async function getSession(id: Session["id"]) {
  const entry = await kv.get<Session>([SESSIONS_BY_ID, id]);
  return entry.value;
}
