import { ServerErrorContext } from "@lib/serve";
import { getRequiredEnv } from "@lib/utils";
import { Page } from "./Page.tsx";

export function ServerErrorPage(_props: unknown, ctx: ServerErrorContext) {
  const { error } = ctx;
  const envName = getRequiredEnv("ENV");

  return (
    <Page>
      <h1>Internal Server Error</h1>
      {envName === "dev" && error instanceof Error && <pre>{error.stack}</pre>}
    </Page>
  );
}
