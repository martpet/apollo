export function setFormInProgress(form, flag = true) {
  for (const el of form.elements) el.disabled = flag;
  document.documentElement.classList.toggle("waiting", flag);
}

export async function fetchJson({ path, method, data }) {
  const res = await fetch(path, { method, body: JSON.stringify(data) });
  if (!res.ok) throw new Error(await res.text());
  const json = await res.json();
  if (json.error) throw new Error(json.error);
  return json;
}
