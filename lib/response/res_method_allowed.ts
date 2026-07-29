export function respondMethodAllowed(...methods: ("GET" | "POST")[]) {
  const resInit = {
    status: 405,
    headers: {
      Allow: methods.join(", "),
    },
  };

  return new Response("Method Not Allowed", resInit);
}
