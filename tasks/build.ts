import { getRequiredEnv } from "@lib/utils";
import { loadEnv } from "./utils/load-env.ts";
import { runCommand } from "./utils/run-command.ts";

const envName = await loadEnv("build");
const envBadge = `[${envName.toUpperCase()}]`;
const appName = getRequiredEnv("APP_NAME");
const targetPlatform = getRequiredEnv("TARGET_PLATFORM");
const outputBinary = `./dist/bin-${envName}`;

console.time("✨ Total build time");
console.log(`🔨 Building binary for ${envBadge}...`);

try {
  await runCommand("deno", [
    "compile",
    "--permission-set",
    `--output=${outputBinary}`,
    `--target=${targetPlatform}`,
    `--app-name=${appName}`,
    "--include=src/", // used for "assests" dirs (glob pattern feature request https://github.com/denoland/deno/issues/35037)
    "src/main.ts",
  ]);

  console.log(
    `✅ Build for ${envBadge} finished successfully! Output binary: '${outputBinary}'`,
  );
} catch (error) {
  console.error(`❌ Build failed!`, error);
  Deno.exit(1);
} finally {
  console.timeEnd("✨ Total build time");
}
