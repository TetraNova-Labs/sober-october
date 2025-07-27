import * as z from 'zod';

export const envSchema = z.object({
  // NODE_ENV: z.enum(['dev', 'prod', 'staging']),
  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  JWT_SECRET: z.string(),
});

export type EnvSchema = z.infer<typeof envSchema>;
