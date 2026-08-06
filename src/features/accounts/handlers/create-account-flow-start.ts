import { generatePasskeyRegOptions } from "@/features/passkeys/reg-flow-options.ts";
import { patchCurrentSession } from "@/features/sessions/current-session.ts";
import { USERNAME_PATTERN } from "@/features/users/consts.ts";
import { getUserByUsername } from "@/features/users/kv.ts";
import { Context, respondBadRequest, respondMethodAllowed } from "@lib/serve";

export async function handleCreateAccountFlowStart(ctx: Context) {
  const { request, method, url } = ctx;

  if (method !== "POST") {
    return respondMethodAllowed("POST");
  }

  const { username } = await request.json();
  if (!username) {
    return respondBadRequest("Username is missing");
  }

  const usernameRegex = new RegExp(USERNAME_PATTERN);
  if (!usernameRegex.test(username)) {
    return respondBadRequest("Username format is bad");
  }

  const user = await getUserByUsername(username);
  if (user) {
    return Response.json({ error: `Username "${username}" is taken` });
  }

  const passkeyOptions = await generatePasskeyRegOptions({ url, username });
  const response = Response.json(passkeyOptions);

  const sessionPatch = { passkeyChallenge: passkeyOptions.challenge };
  const atomic = await patchCurrentSession(sessionPatch, request, response);
  await atomic.commit();

  return response;
}
