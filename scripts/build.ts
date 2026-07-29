import { getEnvName } from "./utils/get-env-name.ts";
import { runCommand } from "./utils/run-command.ts";

const envName = getEnvName();
const envTag = `[${envName.toUpperCase()}]`;
const appName = `apollo.${envName}`;
const outputFile = `dist/${envName}`;

console.log(`🔨 Building binary for ${envTag}...`);
console.time("✨ Total build time");

try {
  await runCommand("deno", [
    "compile",
    "-P",
    "-o",
    outputFile,
    "--app-name",
    appName,
    "--target=aarch64-unknown-linux-gnu",
    "main.ts",
  ]);

  console.log(
    `✅ Build for ${envTag} finished successfully! Output file: '${outputFile}'`,
  );
} catch (error) {
  console.error(`❌ Build failed!`, error);
  Deno.exit(1);
} finally {
  console.timeEnd("✨ Total build time");
}
