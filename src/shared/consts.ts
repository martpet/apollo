import { getRequiredEnv } from "@lib/utils";

export const ENV = getRequiredEnv("ENV");
export const PORT = Number(getRequiredEnv("PORT"));
