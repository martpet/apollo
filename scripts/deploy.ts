import { getRequiredEnv } from "@lib/required-env.ts";
import { load } from "@std/dotenv";
import { exists } from "@std/fs/exists";
import { getEnvArg } from "./utils/env-arg.ts";
import { runCommand } from "./utils/run-command.ts";

const envName = getEnvArg();

await load({
  envPath: `scripts/env/.env.deploy.${envName}`,
  export: true,
});

const remoteHost = getRequiredEnv("REMOTE_HOST");
const remoteBinary = getRequiredEnv("REMOTE_BINARY");
const service = getRequiredEnv("SERVICE");
const remoteBinaryTemp = `${remoteBinary}_${(new Date()).toISOString()}`;
const localBinary = `dist/bin-${envName}`;
const envBadge = `[${envName.toUpperCase()}]`;

if (!await exists(localBinary)) {
  console.log(`Error: File '${localBinary}' doesn't exist!`);
  Deno.exit(1);
}

console.log(`🚀 Starting deployment to ${envBadge}...`);
console.time("✨ Total deployment time");

try {
  console.log(
    `📦 Copying '${localBinary}' to '${remoteHost}:${remoteBinaryTemp}'...`,
  );

  await runCommand("scp", [
    localBinary,
    `${remoteHost}:${remoteBinaryTemp}`,
  ]);

  console.log(
    `⚙️  Updating file and restarting '${service}' service on '${remoteHost}'...`,
  );
  await runCommand("ssh", [
    "-n",
    remoteHost,
    `
      mv ${remoteBinaryTemp} ${remoteBinary}
      sudo systemctl restart ${service}
    `,
  ]);

  console.log(
    `✅ Deployment to ${envBadge} completed successfully!`,
  );
} catch (error) {
  console.error(`❌ Deployment failed!`, error);
  Deno.exit(1);
} finally {
  console.timeEnd("✨ Total deployment time");
}
