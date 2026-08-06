import { getCookies, setCookie } from "@std/http";
import { SESSION_DURATION } from "./consts.ts";

const SESSION_COOKIE_NAME = "session";

export function setSessionCookie(sessionId: string, headers: Headers) {
  setCookie(headers, {
    name: SESSION_COOKIE_NAME,
    value: sessionId,
    httpOnly: true,
    secure: true,
    sameSite: "Lax",
    maxAge: SESSION_DURATION / 1000,
    path: "/",
  });
}

export function getSessionCookie(headers: Headers) {
  return getCookies(headers)[SESSION_COOKIE_NAME];
}
