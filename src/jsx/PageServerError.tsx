import { getRequiredEnv } from "@lib/required-env-var.ts";
import type { Context } from "@lib/types.ts";
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
