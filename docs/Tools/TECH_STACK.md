# Project Tech Stack: Efficiency Solutions

This document acts as a living record of the technology, libraries, and tools used to build the application. It explains *what* we installed and *why* we are using it—with a focus on high-performance, build-time safety.

## 🚀 Core Architecture
- **Framework:** Next.js 15 (App Router)
    - *Why:* Leverages **React Server Components (RSC)** by default, which drastically reduces the amount of JavaScript the client has to download, ensuring a "lag-free" initial load.
- **Language:** TypeScript
    - *Why:* Strict type safety throughout the codebase. Paired with our environment validation to provide full Intellisense into application config.
- **Runtime:** Node.js (Vercel)

## 🎨 Styling & UI System
- **CSS Framework:** Tailwind CSS v4 (CSS-First)
    - *Why:* A "Zero-Runtime" CSS engine. All design tokens are defined in `globals.css` using the `@theme` block, allowing for native CSS variable performance and zero jank.
- **Branding Tokens:** Mustard/Gold (#c69b59) & Navy (#32406a)
    - *Mapping:* These brand colors are mapped directly to shadcn's `--primary` and `--secondary` root variables, ensuring all components are automatically branded.
- **Typography:**
    - **Headings:** Outfit (via `next/font/google`) - Geometric sans-serif for luxury agency feel.
    - **Body:** Inter (via `next/font/google`) - Optimized for high UI readability.
- **Animations:** Framer Motion
    - *Why:* Hardware-accelerated animations (using the GPU) for premium mobile drawer transitions and floating action buttons without CPU bottleneck.
- **Icons:** Hybrid System (Lucide React + React Icons FA6)
    - *Optimization:* Icons are static SVGs in Server Components where possible, minimizing the hydration cost.

## 🛡️ Stability & Validation
- **Environment Safety:** Zod + @t3-oss/env-nextjs
    - *Game Changer:* **Build-Time Validation.** The application will crash at build-time if any required `.env` key is missing, preventing broken deployments.
- **Forms:** React Hook Form + Zod
    - *Why:* Performant form state management with schema-based validation.
- **Notifications:** Sonner
    - *Why:* A lightweight, promise-based notification system integrated with our design system.

## 📦 Data & Backend
- **Database:** Supabase (PostgreSQL)
    - *Why:* Built-in PgBouncer on port `6543` prevents connection exhaustion in serverless environments.
- **Database ORM:** Prisma
    - *Why:* Provides a type-safe database layer that matches our TypeScript-first philosophy.
- **Admin Dashboard:** AdminJS *(Planned)*
    - *Why:* Auto-generates a secure full-CRUD panel at `/admin` for product management.
- **Rate Limiting:** Upstash Redis
    - *Why:* Protects critical routes (Admin login, API) using an edge-compatible Redis store.

## 🖼️ Media & SEO
- **Image Optimization:** `next/image`
    - *Why:* Automatic lazy-loading, WebP conversion, and sizing to prevent Cumulative Layout Shift (CLS).
- **SEO/Metadata:** Next.js Metadata API
    - *Why:* Unified management of titles, OG tags, and sitemaps for best-in-class Google and WhatsApp previews.

---
*Created: April 2026 | Last Updated: April 2026*
