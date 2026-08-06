import { getRequiredEnv } from "@lib/utils";
import { exists } from "@std/fs/exists";
import { loadEnv } from "./utils/load-env.ts";
import { runCommand } from "./utils/run-command.ts";

const envName = await loadEnv("deploy");
const envBadge = `[${envName.toUpperCase()}]`;
const remoteHost = getRequiredEnv("REMOTE_HOST");
const remoteBinary = getRequiredEnv("REMOTE_BINARY");
const remoteService = getRequiredEnv("REMOTE_SERVICE");
const remoteBinaryTemp = `${remoteBinary}-temp`;
const localBinary = `dist/bin-${envName}`;

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
    `⚙️  Updating file and restarting '${remoteService}' service on '${remoteHost}'...`,
  );

  await runCommand("ssh", [
    "-n",
    remoteHost,
    `
      mv ${remoteBinaryTemp} ${remoteBinary}
      sudo systemctl restart ${remoteService}
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
