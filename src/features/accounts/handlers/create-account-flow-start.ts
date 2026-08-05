import { generatePasskeyRegOptions } from "@/features/passkeys/reg-options.ts";
import { USERNAME_PATTERN } from "@/features/users/consts.ts";
import { getUserByUsername } from "@/features/users/kv.ts";
import { Context, respondBadRequest, respondMethodAllowed } from "@lib/serve";

export async function handleCreateAccountFlowStart(ctx: Context) {
  const { req, method } = ctx;

  if (method !== "POST") {
    return respondMethodAllowed("POST");
  }

  const { username } = await req.json();
  if (!username) {
    return respondBadRequest("Username is missing");
  }

  const user = await getUserByUsername(username);
  if (user) {
    return Response.json({ error: `Username "${username}" is taken` });
  }

  const usernameRegex = new RegExp(USERNAME_PATTERN);
  if (!usernameRegex.test(username)) {
    return Response.json({ error: "Username format is bad" });
  }

  const regOptions = await generatePasskeyRegOptions(username);

  return Response.json(regOptions);
}
