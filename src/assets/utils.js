export function setFormInProgress(form, flag = true) {
  for (const el of form.elements) el.disabled = flag;
  document.documentElement.classList.toggle("waiting", flag);
}

export class FetcherError extends Error {
  constructor(msg, opt) {
    super(msg, opt);
    this.name = "FetcherError";
  }
}

export async function fetcher({ path, method, body, json }) {
  const request = new Request(path, { method, body });
  if (json) {
    request.body = JSON.stringify(json);
    request.headers.set("content-type", "application/json");
  }
  const response = await fetch(request);
  const resContentType = response.headers.get("content-type");
  const isJsonRes = resContentType?.includes("application/json");
  if (isJsonRes) {
    const resJson = await response.json();
    if (resJson.error) throw new FetcherError(resJson.error);
    return resJson;
  } else {
    const resText = await response.text();
    if (!response.ok) throw new FetcherError(resText);
    return resText;
  }
}
