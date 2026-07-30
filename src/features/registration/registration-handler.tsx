import { respondMethodAllowed } from "@lib/response/res-method-allowed.ts";
import type { Context } from "@lib/types.ts";
import { RegistrationPage } from "./RegistrationPage.tsx";

export function registrationHandler({ req }: Context) {
  if (req.method !== "GET") return respondMethodAllowed("GET");

  return <RegistrationPage />;
}
