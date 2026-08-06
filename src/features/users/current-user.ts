import { getCurrentSession } from "@/features/sessions/current-session.ts";
import { getUser } from "./kv.ts";

export async function getCurrentUser(request: Request) {
  const session = await getCurrentSession(request);
  if (!session?.userId) return null;
  return getUser(session.userId);
}
