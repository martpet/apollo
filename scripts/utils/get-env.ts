export function getEnvArg() {
  const env = Deno.args[0] ?? "stage";

  if (env !== "prod" && env !== "stage") {
    console.error(
      `Error: Invalid environment '${env}'. Must be 'prod' or 'stage'.`,
    );
    Deno.exit(1);
  }

  return env;
}
