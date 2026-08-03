import { ENV } from "@/etc/consts.ts";
import { Context } from "@lib/serve";
import { Page } from "./Page.tsx";

export function ServerErrorPage(_props: unknown, ctx: Context) {
  const { error } = ctx;

  return (
    <Page>
      <h1>Internal Server Error</h1>
      {ENV === "dev" && error instanceof Error && <pre>{error.stack}</pre>}
    </Page>
  );
}
