# Product Requirements Document (PRD): Efficiency Solutions

## 1. Product Overview
Efficiency Solutions is a Nigerian-style agency web application designed to connect users with trusted professionals across three primary service verticals: 
1. **Premium Branding & Printing**
2. **Luxury Logistics (Ride & Escort)**
3. **Accounting Services**

The core conversion strategy centers around WhatsApp. Rather than a traditional integrated checkout (Stripe/PayPal), users will build a cart or schedule a consultation and be seamlessly redirected to a WhatsApp chat with a pre-filled, formatted message to complete their transaction.

## 2. Design System & User Interface
The UI strives for a clean, professional, and trustworthy aesthetic, balancing a corporate feel with premium accents.
*(Reference images located in `docs/designs/`)*

*   **Primary Brand Color (Navy):** `#32406a` - Used for primary headings, backgrounds of sidebars, and primary call-to-action buttons.
*   **Secondary Brand Color (Mustard/Gold):** `#c69b59` - Used for accents, secondary text, and secondary interactive elements to signify premium service.
*   **Background Color (Off-White):** `#f5f6f8` - Used for the main body background to keep the interface clean and readable.
*   **Muted Color (Grey):** `#818286` - Used for secondary text, input borders, placeholder text, and subtle dividers throughout the UI.
*   **Surface Color (Near-White):** `#f8f8f8` - Used for card backgrounds, navbar surface, and elevated UI panel backgrounds to create soft depth.
*   **Typography:** A bold, structural font for headings (e.g., standard defaults or Inter/Roboto) and clean sans-serif for body text.
*   **Layout:**
    *   **Navbar:** Top navigation containing links to Home, Services (scroll-to anchor), About, and a prominent WhatsApp/Cart conversion point.
    *   **Breadcrumbs:** A shared component (`Home > Category`) optimized for flat, efficient navigation by removing redundant intermediate levels.
    *   **Navigation Experience:** Uses global `scroll-behavior: smooth` for single-page segment transitions when clicking 'Services' or 'Home' from the landing page.
    *   **Sidebar Navigation:** Used heavily in the e-commerce-style pages (Branding, Logistics) for easy category filtering.
*   **Currency Formatting:** All pricing must be consistently formatted as **Nigerian Naira (₦)** using a global utility (`Intl.NumberFormat('en-NG')`). hardcoded ₦ symbols are prohibited.
*   **Border Radius Normalization:** To maintain a professional, refined agency aesthetic, strict border-radius limits are enforced. All primary UI elements (Buttons, Cards, Search Inputs, Hero Sections) MUST use a normalized border radius of **10px to 12px** (`rounded-[10px]` or `rounded-lg`). Overly rounded "pill" shapes (`rounded-full`) and extreme corner radii (`rounded-3xl`, `rounded-4xl`) are prohibited for structural containers to prevent a "toy-like" or "overly bubbly" appearance. Small functional icons (Socials, Cart Count, WhatsApp Float) are the Only exceptions.

## 3. Core Features & User Stories

### 3.1. Premium Branding & Printing
*   **Functionality:** An e-commerce catalog layout. Users can browse items (e.g., T-Shirts, Mugs, Caps), filter by categories in the left sidebar (Apparel, Corporate Gifts, etc.), and sort items.
*   **Conversion:** Users click "Add to Cart". The cart aggregates selected items and total estimated cost. Checking out redirects the user to WhatsApp with a summary of their cart.

### 3.2. Luxury Logistics
*   **Functionality:** Similar catalog layout to the Branding page but focused on vehicle rentals (e.g., Lexus, Benz, G-Wagon). Users can filter by categories (Car Rental, Car Rental + Driver, Security Escort).
*   **Conversion:** Users add vehicles to their cart. Checking out redirects to WhatsApp with vehicle selection, rental duration (implicitly or explicitly gathered), and required services.

    *   The user is simultaneously redirected to WhatsApp to confirm the booking directly with an agent via text.

### 3.4. Checkout & WhatsApp Messaging
*   **Cart Logic:** Aggregates selected branding items or vehicles. No user account required.
*   **WhatsApp Redirect:** Upon checkout, the user is redirected to WhatsApp via a `wa.me` link with a **structured message template**:
    ```text
    Hi Efficiency Solutions!
    I'd like to order:
    - [Item Name] x [Qty] (₦[Price])
    Total Estimate: ₦[Total]
    ```

## 4. Technical Architecture

This tech stack is designed for current needs while maintaining high scalability for future features (e.g., user authentication, dynamic inventory management).

### Frontend
*   **Framework:** Next.js 15 (App Router) for hybrid static/server-rendered performance.
*   **Styling:** Tailwind CSS v4 for utility-first styling.
*   **UI Components:** shadcn/ui for accessible, unstyled components that we can theme tightly to our design system.
*   **State Management:** Zustand (for client-side Cart management across pages).
*   **Animations:** framer-motion (for smooth transitions, e.g., the accounting progress bar).

### Backend & Data
*   **API Layer:** Node.js (leveraging Next.js API Route handlers for seamless frontend/backend integration).
*   **Database Engine:** Supabase (managed PostgreSQL). The ONLY data to be persistently stored is the **Products** (inventory/pricing for branding and vehicles). Supabase is chosen explicitly for its built-in PgBouncer to prevent Vercel serverless connection pooling issues. There is no public user registration or user data storage.
*   **ORM:** Prisma, to provide type-safe database queries.
*   **Admin Dashboard:** A dedicated, secure dashboard used exclusively for CRUD operations on the Products database.
*   **Email Systems:** **Nodemailer**, utilized to fire off automated transaction emails.
*   **Monitoring & Analytics:** 
    *   **Sentry:** For real-time error tracking and session replays.
    *   **Vercel Analytics:** For privacy-friendly traffic and performance monitoring.

### 4.3. Image Hosting Strategy
*   **Hybrid Approach:** 
    *   **Unsplash:** Used for general decorative and stock product images (via direct URL).
    *   **Supabase Storage:** Used for a "few specific" custom product images uploaded by the admin (1 GB free tier, no card required).
*   **Optimization:** all images must use `next/image` with `remotePatterns` configured for `res.cloudinary.com` (if used) or `images.unsplash.com`.

## 5. Frontend Architecture & Standards

To ensure a pristine, scalable, and maintainable codebase, the development will strictly adhere to the following rules:

### 5.1. Component-Based Architecture (No Page Hardcoding)
*   **Zero Hardcoding in Pages:** Page files (`app/**/page.tsx`) will act purely as containers. They will only serve to fetch data (or import mock data) and assemble independent components. No raw text or deep HTML structures should be hardcoded directly inside a `page.tsx`.
*   **Global Layouts:** Elements like the Navbar, Footer, and Sidebars will be constructed as independent layout components and injected at the layout level, guaranteeing there is no hardcoding or duplication across routes.

### 5.2. Production Data Strategy
*   The application has successfully transitioned from a "Mock-First" phase to a live **Production Database**.
*   All product data, categories, and fleet inventory are managed via **Supabase PostgreSQL** and queried through **Prisma Server Components**.
*   The `src/lib/mock/` directory is maintained for legacy reference and static content (e.g., Accounting) but is bypassed for Branding and Logistics verticals.

### 5.3. Reliability & Validation
*   **Environment Validation:** All critical `process.env` variables (Database, WhatsApp, Email, Redis) must be validated at **build-time** using **Zod**. The app must fail to build if config is missing.
*   **Form Strategy:** All forms (Admin CRUD, Booking, Account Queries) must use **React Hook Form** + **Zod** for type-safe validation and performance.
*   **Admin Security:** The Admin Dashboard (`/admin`) is protected via middleware and a secure dual-credential login (`/login`), validating against `ADMIN_EMAIL` and `ADMIN_PASSWORD`.
*   **Page States:** Every route must implement `loading.tsx` (skelton UI), `error.tsx` (graceful recovery), and `not-found.tsx` for a consistent, professional user experience.

### 5.4. Shadcn UI Styling & Conflict Resolution
*   To prevent design conflicts when injecting shadcn/ui components, we will implement **strict token mapping**.
*   Rather than letting shadcn's default semantic colors (like `bg-primary`) dictate the design, we will map shadcn's root CSS variables directly to our custom brand colors in `globals.css` (e.g., setting shadcn's `--primary` to our `#32406a`).
*   Where mapped variables are insufficient, shadcn component files will be manually adjusted to use our specific bespoke `text-brand-primary` and `bg-brand-secondary` Tailwind classes, discarding any default styles that conflict with the provided reference designs.
*   **Notifications:** Use **Sonner** (included with shadcn) for all success/error toasts.

## 6. SEO & Metadata Strategy

Search discoverability is prioritized through the following mandatory implementations:
*   **Metadata API:** Every page must export an SEO `metadata` object (Title, Description, Keywords).
*   **Open Graph (OG):** Every product and service page must have pre-configured Open Graph images (1200x630) to ensure beautiful link previews on WhatsApp and social media.
*   **Automatic Generation:** Use `sitemap.ts` and `robots.ts` in the root `app/` directory to facilitate search indexing. All `/admin` and `/api` routes must be explicitly disallowed in `robots.ts`.

## 6. Vercel Deployment & Prisma Architecture Standards

The following standards are **mandatory** and must be applied before any Vercel deployment. They exist to prevent well-documented serverless deployment failures with Next.js and Prisma.

### 6.1. Connection Pooling (Critical)
*   **Problem:** Vercel Serverless Functions spin up and tear down rapidly. Each function can open a new direct connection to the database, quickly exhausting Postgres connection limits (~100 concurrent) and causing catastrophic timeouts.
*   **Mandatory Fix:** We use **Supabase's built-in PgBouncer (Transaction Mode)**. The `DATABASE_URL` environment variable in Vercel **must** use Supabase's pooled connection string on **port `6543`** (not the default `5432`). Never use a direct connection URL for the main `DATABASE_URL` on Vercel.

### 6.2. Prisma Client Singleton (Critical)
*   **Problem:** During local development, Next.js hot-reloading creates a new `PrismaClient` instance on every file save, leaking connections and crashing the local pool.
*   **Mandatory Fix:** Prisma must be instantiated as a **Singleton** in `src/lib/prisma.ts` using a `globalThis` cache. This file is the **only** import point for the Prisma client across the entire codebase.
    ```typescript
    // src/lib/prisma.ts
    import { PrismaClient } from '@prisma/client';
    const globalForPrisma = globalThis as { prisma?: PrismaClient };
    export const prisma = globalForPrisma.prisma ?? new PrismaClient();
    if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
    ```

### 6.3. Build-Time Client Regeneration (Critical)
*   **Problem:** Vercel caches `node_modules`. If the Prisma schema changes but the client isn't regenerated, the deployed app will crash with client-mismatch errors.
*   **Mandatory Fix:** The `package.json` must contain a `postinstall` script: `"postinstall": "prisma generate"`. This forces Vercel to always regenerate the type-safe client on every deploy.

### 6.4. Region Co-location
*   **Problem:** If the Vercel project is hosted in one region (e.g., `iad1` – US East) but the Supabase database is in another (e.g., EU), every database query incurs high cross-region latency, frequently causing Vercel's 10-second serverless timeout to be hit.
*   **Mandatory Fix:** When creating the Supabase project, the region **must match** the Vercel deployment region. Both should be set to the same geographic region.

## 7. Future Scalability & Pipeline

To ensure the PRD remains a living document, the following areas are identified for future expansion:
*   **Automated WhatsApp Bot:** Transitioning from simple `wa.me` URL redirects to integrating a WhatsApp Business API webhook (e.g., Meta Graph API) to parse incoming requests and automatically reply.
