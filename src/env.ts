import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    DATABASE_URL_POOLED: z.string().url(),
    ADMIN_EMAIL: z.string().email(),
    ADMIN_PASSWORD: z.string().min(8),
    SMTP_HOST: z.string().min(1),
    SMTP_PORT: z.string().min(1), // Often read as a string from process.env
    SMTP_USER: z.string().min(1),
    SMTP_PASSWORD: z.string().min(1),
    UPSTASH_REDIS_REST_URL: z.string().url(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().min(1),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  // For Next.js >= 13.4.4, you should use experimental__fallback or map explicitly.
  // Explicit mapping is safer and recommended for full compatibility.
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_URL_POOLED: process.env.DATABASE_URL_POOLED,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  },
});
