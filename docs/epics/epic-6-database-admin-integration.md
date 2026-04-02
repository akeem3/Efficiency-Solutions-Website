---
Status: TODO
Epic_ID: EPC-006
---

# Epic 6: Supabase Database & Admin Dashboard

## 🎯 High-Level Goal
Transition the application from a "Mock-First" frontend to a fully dynamic, database-backed system. This involves migrating the mocked inventory data for Branding and Logistics over to an actual Supabase PostgreSQL database, wrapping it in type-safe Prisma ORM queries, and building a secure, internal Admin Dashboard for CRUD operations.

## 🧱 Architectural Principles
- **Vercel/Serverless Safety:** Absolute adherence to Supabase PgBouncer (Transaction Mode) connection pooling on Port 6543 to avoid connection exhaustion on Vercel.
- **Single Source of Truth:** `src/lib/prisma.ts` must maintain a Singleton pattern. Direct `new PrismaClient()` calls anywhere else in the app are strictly forbidden.
- **Secure by Default:** The Admin route (`/admin`) must be protected by a strict middleware/authentication layer so public users cannot modify inventory.
- **Type-Safety End-to-End:** Prisma models must directly inform the TypeScript interfaces used in the React components, eliminating the need for `src/lib/mock` definitions.

## 🛠️ Detailed Requirements & Constraints
- **Prisma Schema:** Models for `Product` (Branding) and `Vehicle` (Logistics). Need careful consideration of polymorphic traits versus separate distinct tables. (Two distinct tables is recommended for simplicity and separation of concerns).
- **Admin Authentication:** Hardcoded environment variables (`ADMIN_EMAIL`, `ADMIN_PASSWORD`) checked via basic auth or simple cookie-based session. Do NOT build a full public Auth system (e.g. NextAuth) as this is for agency staff only.
- **Admin UI:** Use Shadcn/UI for a clean, premium dashboard. It doesn't need to be complex, just completely functional for CRUD (Create, Read, Update, Delete).

## 📜 User Stories (Deep-Dive)

### 1. **[Story 6.1: Prisma Schema & Local Database Setup](../stories/story-6.1-prisma-schema-setup.md)**
Defining the actual schema and pushing it to Supabase.
- **Scope:** Schema definitions, singleton setup, initial `npx prisma db push`.

### 2. **[Story 6.2: Production Seed & Inventory Migration](../stories/story-6.2-product-inventory-migration.md)**
Moving data from `mockData.ts` to `seed.ts` and swapping front-end queries.
- **Scope:** Seed script, replacing front-end mock imports with Prisma queries, ensuring Server Components remain fast.

### 3. **[Story 6.3: Secure Admin CRUD Panel](../stories/story-6.3-secure-admin-crud-panel.md)**
Building the interface to manage the database without writing SQL.
- **Scope:** `/admin` route group, basic authentication, Data Table (shadcn), and form modals for adding/editing products.

## 📈 Success Metrics
- **Performance:** DB queries execute in < 50ms locally (or rely on Next.js Data Cache to be instant on production).
- **Reliability:** 0 connection pool errors during local development hot-reloading.
- **Security:** Hitting `/admin` directly in an incognito window redirects back to the home page or a login prompt.
