import { USERNAME_PATTERN } from "@/features/users/consts.ts";
import { Page } from "@/shared/jsx/Page.tsx";

export function CreateAccountPage() {
  return (
    <Page
      htmlHead={
        <>
          <script type="module" src="/account/assets/create-account.js" />
          {/* <link rel="modulepreload" href="/passkeys/assets/simplewebauthn.js" /> */}
          <link rel="modulepreload" href="/assets/utils.js" />
        </>
      }
    >
      <h1>Create an Account</h1>

      <noscript>Please enable JavaScript to create an account.</noscript>

      <form id="reg-form" class="basic">
        <label for="username">Username:</label>
        <input id="username" required pattern={USERNAME_PATTERN} />
        <button>Create</button>
      </form>

      <a href="/">Back to home</a>
    </Page>
  );
}
