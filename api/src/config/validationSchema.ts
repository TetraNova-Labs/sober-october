import * as z from "zod"

export const envSchema = z.object({
    // NODE_ENV: z.enum(['dev', 'prod', 'staging']),
    DB_URL: z.string().url(),
})

export type EnvSchema = z.infer<typeof envSchema>;

