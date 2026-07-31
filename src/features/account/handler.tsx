import { Context, respondMethodAllowed } from "@lib/serve";
import { RegistrationPage } from "./RegistrationPage.tsx";

export function accountHandler({ req }: Context) {
  if (req.method !== "GET") {
    return respondMethodAllowed("GET");
  }

  return <RegistrationPage />;
}
