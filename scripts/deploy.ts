import { getEnvName } from "./utils/get-env-name.ts";
import { runCommand } from "./utils/run-command.ts";

const envName = getEnvName();
const remoteHost = "apollo";
const remoteBin = `/mnt/store/web/${envName}/bin`;
const service = `web.${envName}`;
const localBin = `dist/${envName}`;

try {
  const fileInfo = await Deno.stat(localBin);
  if (!fileInfo.isFile) throw new Error();
} catch {
  console.error(`Error: File '${localBin}' doesn't exist!`);
  Deno.exit(1);
}

console.log(`🚀 Starting deployment to [${envName.toUpperCase()}]...`);
console.time("✨ Total deployment time");

try {
  console.log(
    `📦 Copying '${localBin}' to '${remoteHost}:${remoteBin}_new'...`,
  );
  await runCommand("scp", [
    localBin,
    `${remoteHost}:${remoteBin}_new`,
  ]);

  console.log(
    `⚙️ Updating file and restarting '${service}' service on '${remoteHost}'...`,
  );
  await runCommand("ssh", [
    "-n",
    remoteHost,
    `
      mv ${remoteBin}_new ${remoteBin}
      sudo systemctl restart ${service}
    `,
  ]);

  console.log(
    `✅ Deployment to [${envName.toUpperCase()}] completed successfully!`,
  );
} catch (error) {
  console.error(`❌ Deployment failed!`, error);
  Deno.exit(1);
} finally {
  console.timeEnd("✨ Total deployment time");
}
