export function getEnvName() {
  const envName = Deno.args[0] ?? "staging";

  if (envName !== "prod" && envName !== "staging") {
    console.error(
      `Error: Invalid environment '${envName}'. Must be 'prod' or 'staging'.`,
    );
    Deno.exit(1);
  }

  return envName;
}
