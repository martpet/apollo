import { setFormInProgress } from "main";

const form = document.getElementById("reg-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  setFormInProgress(form);
});
