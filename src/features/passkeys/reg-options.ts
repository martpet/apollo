import { generateRegistrationOptions } from "@simplewebauthn/server";
import { RP_ID, RP_NAME } from "./consts.ts";

export function generatePasskeyRegOptions(username: string) {
  return generateRegistrationOptions({
    rpName: RP_NAME,
    rpID: RP_ID,
    userName: username,
    attestationType: "none",
    authenticatorSelection: {
      residentKey: "required",
      userVerification: "preferred",
    },
  });
}
