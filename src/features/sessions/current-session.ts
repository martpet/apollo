import { ulid } from "@std/ulid";
import { getSession, setSession } from "./kv.ts";
import { getSessionCookie, setSessionCookie } from "./session-cookie.ts";
import { Session } from "./types.ts";

export async function patchCurrentSession(
  patch: Partial<Session>,
  request: Request,
  response: Response,
  atomic?: Deno.AtomicOperation,
) {
  const currentSession = await getCurrentSession(request);
  const session = { ...currentSession, patch };
  session.id ??= ulid();
  setSessionCookie(session.id, response.headers);
  return setSession({ id: session.id, ...session }, atomic);
}

export function getCurrentSession(request: Request) {
  const id = getSessionCookie(request.headers);
  if (!id) return null;
  return getSession(id);
}
