---
Status: DONE
---

# Story 1.1: Build-Time Environment Validation

## 📝 Context
Next.js applications often fail in production due to missing environment variables. By using **Zod**, we can validate `process.env` at build-time. If a key is missing, the build will crash intentionally, preventing a broken app from ever reaching the user.

## 🎯 Deliverables
- [x] A validated configuration singleton in `src/env.ts`.
- [x] Integration with `next.config.ts` to trigger validation.

## 🛠️ Requirements & Constraints
- **Type Safety:** The configuration must export a typed object, so developers get autocompletion for `env.DATABASE_URL` instead of opaque strings.
- **Client vs Server:** Differentiate between `server` (private) and `client` (prefixed with `NEXT_PUBLIC_`) variables to prevent leaking secrets.

### 🔑 Required Variables to Validate:
- **Database:** `DATABASE_URL` (Direct) & `DATABASE_URL_POOLED` (PgBouncer).
- **Admin:** `ADMIN_EMAIL`, `ADMIN_PASSWORD`.
- **Communications:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`.
- **WhatsApp:** `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- **Redis:** `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`.

## ⚙️ Technical Implementation Notes
1. Use `zod`'s `object` and `string().url()` or `string().min(1)` for validation.
2. Implement a `createEnv` utility or use a library like `@t3-oss/env-nextjs` (if preferred, or roll custom logic).
3. If validation fails, `console.error` the missing keys and call `process.exit(1)`.

## ✅ Acceptance Criteria
- [x] `npm run build` fails with a clear error if `DATABASE_URL` is removed from `.env`.
- [x] Typing `env.` in any component provides IntelliSense for all validated variables.
- [x] The app successfully starts only when all required variables are present.
