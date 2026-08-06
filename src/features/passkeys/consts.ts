import { WEBSITE_NAME, WEBSITE_URL } from "@/etc/consts.ts";

const url = new URL(WEBSITE_URL);

export const RP_ID = url.hostname;
export const RP_NAME = WEBSITE_NAME;
export const EXPECTED_ORIGIN = WEBSITE_URL;
