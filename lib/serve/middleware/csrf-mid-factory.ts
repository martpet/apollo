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
    | ((origin: string, req: Request) => boolean);

  secFetchSite?:
    | SecFetchSite
    | SecFetchSite[]
    | ((value: SecFetchSite, req: Request) => boolean);
}

export function createCsrfMid(
  options: CreateCsrfMidOptions = {},
): Middleware {
  return (next) => (ctx) => {
    const { req, url } = ctx;

    if (SAFE_METHODS.has(req.method)) {
      return next(ctx);
    }

    const allowedSecFetch = options.secFetchSite ?? ["same-origin"];
    const originHeader = req.headers.get(HEADER.Origin);
    const secFetchSiteHeader = req.headers.get("sec-fetch-site") as
      | SecFetchSite
      | null;

    let secFetchOk = false;

    if (secFetchSiteHeader) {
      if (typeof allowedSecFetch === "function") {
        secFetchOk = allowedSecFetch(secFetchSiteHeader, req);
      } else if (Array.isArray(allowedSecFetch)) {
        secFetchOk = allowedSecFetch.includes(secFetchSiteHeader);
      } else {
        secFetchOk = allowedSecFetch === secFetchSiteHeader;
      }
    }

    let originOk = false;

    if (originHeader) {
      if (typeof options.origin === "function") {
        originOk = options.origin(originHeader, req);
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
