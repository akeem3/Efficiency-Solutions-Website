# Efficiency Solutions: Project Context & Rules

Efficiency Solutions is a Nigerian-style agency web application providing Premium Branding, Luxury Logistics, and Accounting Services. The core conversion strategy is a WhatsApp-based checkout system.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Database**: Supabase (PostgreSQL) + Prisma ORM
- **State Management**: Zustand (Client-side Cart)
- **Validation**: Zod (Env & Forms)

## Critical Architectural Mandates
- **Prisma Singleton**: All Prisma interactions MUST use the singleton instance in `src/lib/prisma.ts`. Never instantiate `new PrismaClient()` elsewhere.
- **Connection Pooling**: Use Supabase's PgBouncer on port `6543` for `DATABASE_URL` in production.
- **Environment Validation**: Critical variables must be validated at build-time using Zod in `src/env.mjs` (or equivalent).
- **Currency**: ALWAYS format Naira using `Intl.NumberFormat('en-NG')`. Never hardcode the ₦ symbol.

## Directory Structure
- `src/app/`: Next.js App Router (Pages as thin containers).
- `src/components/`: Reusable UI components (shadcn/ui and bespoke).
- `src/lib/`: Utilities, Prisma client, and business logic.
- `src/constants/`: Mock data and static configuration.
- `docs/`: PRD, Epics, and Design references.

## AI Interaction Guidelines
- Adhere strictly to the standards in `docs/PRD.md`.
- Prioritize clean, professional Nigerian-style aesthetics.
- Ensure all images use `next/image` with proper remote patterns.
