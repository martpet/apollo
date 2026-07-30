import { getRequiredEnv } from "@lib/required-env.ts";
import { load } from "@std/dotenv";
import { getEnvArg } from "./utils/env-arg.ts";
import { runCommand } from "./utils/run-command.ts";

const envName = getEnvArg();

await load({
  envPath: `scripts/env/.env.build.${envName}`,
  export: true,
});

const appName = getRequiredEnv("APP_NAME");
const targetPlatform = getRequiredEnv("TARGET_PLATFORM");
const outputBinary = `dist/bin-${envName}`;
const envBadge = `[${envName.toUpperCase()}]`;

console.time("✨ Total build time");
console.log(`🔨 Building binary for ${envBadge}...`);

try {
  await runCommand("deno", [
    "compile",
    "-P",
    "-o",
    outputBinary,
    `--app-name=${appName}`,
    `--target=${targetPlatform}`,
    "--include",
    "src/", // needed for "assests/" (glob pattern https://github.com/denoland/deno/issues/35037)
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
