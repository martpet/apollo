import { getRequiredEnv } from "@lib/utils";

export const ENV = getRequiredEnv("ENV");
export const APP_PORT = Number(getRequiredEnv("APP_PORT"));
export const WEBSITE_URL = getRequiredEnv("WEBSITE_URL");
export const WEBSITE_NAME = "Apollo";
