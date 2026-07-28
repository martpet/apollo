import { getEnvArg } from "./utils/get-env.ts";
import { runCommand } from "./utils/run-command.ts";

const env = getEnvArg();
const appName = `apollo.${env}`;
const targetFile = `dist/${env}`;

console.log(`🔨 Building binary for [${env.toUpperCase()}]...`);
console.time("✨ Total build time");

try {
  await runCommand("deno", [
    "compile",
    "-P",
    "-o",
    targetFile,
    "--app-name",
    appName,
    "--target=aarch64-unknown-linux-gnu",
    "main.ts",
  ]);

  console.log(
    `✅ Build for [${env.toUpperCase()}] finished successfully! Target file: '${targetFile}'`,
  );
} catch (error) {
  console.error(`❌ Build failed!`, error);
  Deno.exit(1);
} finally {
  console.timeEnd("✨ Total build time");
}
