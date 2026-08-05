import { USERNAME_PATTERN } from "@/features/users/consts.ts";
import { Page } from "@/shared/jsx/Page.tsx";

export function CreateAccountPage() {
  return (
    <Page
      htmlHead={
        <>
          <script type="module" src="/account/assets/create-account.js" />
          <link rel="modulepreload" href="/assets/utils.js" />
        </>
      }
    >
      <h1>Create an Account</h1>

      <noscript>JavaScript is required for account creation.</noscript>

      <form id="reg-form" class="basic">
        <label for="username">Username:</label>
        <input id="username" required pattern={USERNAME_PATTERN} />
        <button>Create</button>
      </form>
      <p>
        <a href="/">Back to home</a>
      </p>
    </Page>
  );
}
