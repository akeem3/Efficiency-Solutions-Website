import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    DIRECT_URL: z.string().url(),
    ADMIN_EMAIL: z.string().email(),
    ADMIN_PASSWORD: z.string().min(8),
    SMTP_HOST: z.string().min(1),
    SMTP_PORT: z.string().min(1),
    SMTP_USER: z.string().min(1),
    SMTP_PASSWORD: z.string().min(1),
    UPSTASH_REDIS_REST_URL: z.string().url(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().min(1),
    NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  },
  // For Next.js >= 13.4.4, you should use experimental__runtimeEnv to only expose client variables.
  // This prevents 'Attempted to access server-side environment variable on the client' errors.
  experimental__runtimeEnv: {
    NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});
