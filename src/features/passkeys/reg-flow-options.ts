import { WEBSITE_NAME } from "@/etc/consts.ts";
import { generateRegistrationOptions } from "@simplewebauthn/server";

export function generatePasskeyRegOptions(
  { url, username }: { url: URL; username: string },
) {
  return generateRegistrationOptions({
    rpName: WEBSITE_NAME,
    rpID: url.hostname,
    userName: username,
    attestationType: "none",
    authenticatorSelection: {
      residentKey: "required",
      userVerification: "preferred",
    },
  });
}
