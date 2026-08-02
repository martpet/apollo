export function setFormInProgress(form, flag = true) {
  document.documentElement.classList.toggle("waiting", flag);

  for (const element of form.elements) {
    element.disabled = flag;
  }
}
