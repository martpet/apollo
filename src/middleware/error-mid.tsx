import { ServerErrorPage } from "@/shared/jsx/ServerErrorPage.tsx";
import { createErrorMid } from "@lib/serve";

export const errorMid = createErrorMid({ html: <ServerErrorPage /> });
