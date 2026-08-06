import { HEADER } from "@std/http/unstable-header";
import { SAFE_METHODS } from "../consts.ts";
import {
  respondForbidden,
  RespondForbiddenOptions,
} from "../response/res-forbidden.ts";
import { Middleware, SecFetchSite } from "../types.ts";

export interface CreateCsrfMidOptions
  extends Pick<RespondForbiddenOptions, "html"> {
  origin?:
    | string
    | string[]
    | ((origin: string, request: Request) => boolean);

  secFetchSite?:
    | SecFetchSite
    | SecFetchSite[]
    | ((value: SecFetchSite, request: Request) => boolean);
}

export function createCsrfMid(
  options: CreateCsrfMidOptions = {},
): Middleware {
  return (next) => (ctx) => {
    const { request, url } = ctx;

    if (SAFE_METHODS.has(request.method)) {
      return next(ctx);
    }

    const allowedSecFetch = options.secFetchSite ?? ["same-origin"];
    const originHeader = request.headers.get(HEADER.Origin);
    const secFetchSiteHeader = request.headers.get("sec-fetch-site") as
      | SecFetchSite
      | null;

    let secFetchOk = false;

    if (secFetchSiteHeader) {
      if (typeof allowedSecFetch === "function") {
        secFetchOk = allowedSecFetch(secFetchSiteHeader, request);
      } else if (Array.isArray(allowedSecFetch)) {
        secFetchOk = allowedSecFetch.includes(secFetchSiteHeader);
      } else {
        secFetchOk = allowedSecFetch === secFetchSiteHeader;
      }
    }

    let originOk = false;

    if (originHeader) {
      if (typeof options.origin === "function") {
        originOk = options.origin(originHeader, request);
      } else if (Array.isArray(options.origin)) {
        originOk = options.origin.includes(originHeader);
      } else if (options.origin) {
        originOk = options.origin === originHeader;
      } else {
        originOk = originHeader === url.origin;
      }
    }

    if (secFetchOk || originOk) {
      return next(ctx);
    }

    console.log("CSRF validation failed");

    return respondForbidden({ ctx, html: options.html });
  };
}
