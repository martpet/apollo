import { Context } from "@lib/serve";
import { getRequiredEnv } from "@lib/utils";
import { Page } from "./Page.tsx";

export function PageServerError(_props: unknown, { error }: Context) {
  const envName = getRequiredEnv("ENV");

  return (
    <Page>
      <h1>Internal Server Error</h1>
      {envName === "dev" && error && <pre>{error.stack}</pre>}
    </Page>
  );
}
