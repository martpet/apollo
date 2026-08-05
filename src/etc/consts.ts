import { getRequiredEnv } from "@lib/utils";

export const ENV = getRequiredEnv("ENV");
export const APP_PORT = Number(getRequiredEnv("APP_PORT"));
export const KV_PATH = getRequiredEnv("KV_PATH");
export const WEBSITE_ORIGIN = getRequiredEnv("WEBSITE_ORIGIN");
export const WEBSITE_NAME = "Apollo";
