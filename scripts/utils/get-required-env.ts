export function getRequiredEnv(key: string): string {
  const value = Deno.env.get(key);

  if (!value) {
    console.error(`Error: Missing required environment variable: ${key}`);
    Deno.exit(1);
  }

  return value;
}
