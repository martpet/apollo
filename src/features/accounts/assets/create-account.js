import { setFormInProgress } from "/assets/main.js";

const regForm = document.getElementById("reg-form");

regForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  setFormInProgress(regForm);
  await fetch("/account/create", { method: "PUT" });
  setFormInProgress(regForm, false);
});
