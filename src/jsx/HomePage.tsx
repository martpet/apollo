import type { Context } from "@lib/types.ts";
import { Page } from "./Page.tsx";

export function HomePage(_props: unknown, ctx: Context) {
  return (
    <Page htmlHead={<link rel="stylesheet" href="/assets/homepage.css" />}>
      <h1>Hello</h1>
      <span class="url">{ctx.url.href}</span>
    </Page>
  );
}
