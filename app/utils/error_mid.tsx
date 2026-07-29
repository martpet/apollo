import { creatErrorMiddleware } from "@lib/middleware/error_mid_factory.ts";
import { PageServerError } from "../jsx/PageServerError.tsx";

export const errorMiddleware = creatErrorMiddleware(<PageServerError />);
