type Env = typeof envs[number];

const envs = ["prod", "staging"] as const;
const defaultEnv = "staging" satisfies Env;

function isEnv(value: unknown): value is Env {
  return envs.includes(value as Env);
}

const listFormat = new Intl.ListFormat("en", {
  style: "long",
  type: "disjunction",
});

export function getEnvName() {
  const envName = Deno.args[0] ?? defaultEnv;

  if (!isEnv(envName)) {
    const envList = listFormat.format(envs.map((it) => `'${it}'`));
    const msg = `Error: Invalid environment '${envName}'. Must be ${envList}.`;
    console.error(msg);
    Deno.exit(1);
  }

  return envName;
}
