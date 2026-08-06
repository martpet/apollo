import { load } from "@std/dotenv";
import { exists } from "@std/fs/exists";

type Env = typeof envs[number];
const envs = ["prod", "staging"] as const;
const defaultEnv = "staging" satisfies Env;

const envsListFmt = new Intl.ListFormat("en", {
  style: "long",
  type: "disjunction",
});

export async function loadEnv(taskName: "build" | "deploy") {
  const envName = Deno.args[0] ?? defaultEnv;
  const envPath = `./tasks/envs/.env.${taskName}.${envName}`;

  if (!envs.includes(envName as Env)) {
    const envsList = envsListFmt.format(envs.map((item) => `'${item}'`));
    const msg = `Error: Invalid env arg '${envName}'. Must be ${envsList}.`;
    console.error(msg);
    Deno.exit(1);
  }

  if (!await exists(envPath)) {
    console.log(`Error: File '${envPath}' doesn't exist`);
    Deno.exit(1);
  }
  await load({ envPath, export: true });
  return envName;
}
