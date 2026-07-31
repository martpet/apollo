import { Context, respondStatic } from "@lib/serve";
import { CreateAccountPage } from "./CreateAccountPage.tsx";

export function accountHandler(ctx: Context) {
  const { pathname } = ctx.url;

  if (pathname.includes("/assets/")) {
    return respondStatic(ctx, import.meta);
  }

  return <CreateAccountPage />;
}
