export function getEnvArg() {
  const env = Deno.args[0] ?? "staging";

  if (env !== "prod" && env !== "staging") {
    console.error(
      `Error: Invalid environment '${env}'. Must be 'prod' or 'staging'.`,
    );
    Deno.exit(1);
  }

  return env;
}
