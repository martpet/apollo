import { fetchJson, setFormInProgress } from "/assets/utils.js";

const form = document.getElementById("reg-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  setFormInProgress(form);

  try {
    const passkeyOptions = await fetchJson({
      path: "/account/create/flow-start",
      method: "POST",
      data: { username: form.username.value },
    });
  } catch (error) {
    setFormInProgress(form, false);

    if (!navigator.onLine) {
      alert("Network is offline");
    } else {
      alert(error.message);
      console.error(error);
    }
  }
});
