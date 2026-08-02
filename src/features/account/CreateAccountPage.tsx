import { Page } from "@/shared/jsx/Page.tsx";

export function CreateAccountPage() {
  return (
    <Page htmlHead={<script type="module" src="/account/assets/reg-form.js" />}>
      <h1>Create an Account</h1>
      <form id="reg-form">
        <label for="username">Username</label>
        <input type="text" id="username" required />
        <button>Create</button>
      </form>
      <p>
        <a href="/">Home</a>
      </p>
    </Page>
  );
}
