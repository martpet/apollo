import { creatErrorMiddleware } from "@lib/middleware/error-mid-factory.ts";
import { PageServerError } from "../jsx/PageServerError.tsx";

export const errorMiddleware = creatErrorMiddleware(<PageServerError />);
