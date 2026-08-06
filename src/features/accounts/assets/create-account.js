// import { startRegistration } from "https://unpkg.com/@simplewebauthn/browser/dist/bundle/index.es5.umd.min.js";
import { FetcherError, fetcher, setFormInProgress } from "/assets/utils.js";

const form = document.getElementById("reg-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  setFormInProgress(form);

  const username = form.username.value;

  try {
    const passkeyOptions = await fetcher({
      path: "/account/create/flow-start",
      method: "POST",
      json: { username },
    });

    // await startRegistration(passkeyOptions);
  } catch (error) {
    console.error(error);
    setFormInProgress(form, false);
    displayFriendlyError(error);
  }
});

function displayFriendlyError(error) {
  let displayMsg;
  if (!navigator.onLine) {
    displayMsg = "Network is offline";
  } else if (error instanceof FetcherError) {
    displayMsg = error.message;
  } else {
    displayMsg = "The website is broken";
  }

  alert(`Account was not created: ${displayMsg}`);
}
