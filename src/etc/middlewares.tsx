import { ForbiddenPage } from "@/shared/jsx/ForbiddenPage.tsx";
import { ServerErrorPage } from "@/shared/jsx/ServerErrorPage.tsx";
import { createCsrfMid, createErrorMid } from "@lib/serve";

export const csrfMid = createCsrfMid({ html: <ForbiddenPage /> });
export const errorMid = createErrorMid({ html: <ServerErrorPage /> });
