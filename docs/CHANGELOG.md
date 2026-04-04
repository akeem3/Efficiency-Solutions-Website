# Changelog

All notable changes to the **Efficiency Solutions** web application will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.0] - 2026-04-04

### Added
- **Epic 6: Supabase Database & Admin Integration**:
  - Implemented **Prisma ORM** with a singleton pattern for type-safe database interactions.
  - Configured **Supabase PostgreSQL** connection with PgBouncer support (Transaction Mode) for serverless stability.
  - Built a **Bespoke Admin Dashboard** at `/admin` for direct inventory management.
  - Created **Server Actions** for full CRUD operations (Create, Read, Update, Delete) on Branding Products and Logistics Vehicles.
  - Implemented **Secure Admin Login** flow at `/login` with dual-credential validation (Email & Password).
  - Added **Middleware-based Route Protection** to restrict `/admin` access to authenticated staff only.
  - Integrated **Base UI** primitives via Shadcn's `base-nova` style for higher-density, high-performance admin interfaces.
  - Automated database population via a custom **Prisma Seed** script.

### Changed
- **Production Data Migration**: Successfully transitioned the Branding and Logistics verticals from local mock data to live Server Component queries.
- **Type System Refinement**: Refactored the entire catalog system to use auto-generated `@prisma/client` types instead of static mock definitions.
- **Improved Routing**: Relocated admin login to a top-level `/login` route to isolate it from the restricted admin layout and site-wide navigation.

## [1.5.0] - 2026-04-02

### Added
- **Design System: Border Radius Normalization**:
  - Implemented a global design rule to restrict border radii to a professional **10px-12px** range.
  - Updated the global `--radius` CSS token to `0.625rem` (10px).
  - Refactored all Hero sections, Service Cards, and Sidebars to eliminate "pill" and "bubble" shapes in favor of a refined, premium aesthetic.
  - Documented the "Do Not Over-Round Elements" mandate in the PRD to prevent design regression.

### Changed
- **Accounting Service Strategy Pivot**:
  - Eliminated the calendar-based consultation booking feature in favor of high-conversion WhatsApp CTAs.
  - Standardized all Call-to-Action (CTA) elements in the Accounting vertical to trigger pre-filled WhatsApp consultation requests.
  - Improved mobile-first positioning and element hierarchy for the Accounting service details and process stepper.

## [1.4.1] - 2026-04-02

### Changed
- **Mobile-First Navigation**: Implemented horizontal category sliders for Branding and Logistics pages to provide full functionality on mobile viewports.
- **Enriched Mobile Menu**: Transformed the static "Services" link into a dynamic, icon-rich accordion in the mobile drawer for improved service discovery.
- **Responsive Typography & Spacing**: Optimized hero heading scales (4xl to 7xl) to ensure readability and aesthetic balance across all screen sizes.
- **Global Button Sizing**: Adjusted large hero and checkout buttons to scale down on mobile (h-14/12), improving thumb-reach comfort and layout stability.
- **Mobile Cart Sidebar Refinement**: Overhauled the **CartDrawer** with micro-sized iconography, adaptive padding, and fluid typography to eliminate layout constraints and improve usability on narrow mobile screens.
- **Accounting Vertical Overhaul**: Transformed the **Accounting Service** into a high-tier consultancy experience with glassmorphic switchers, bento-grid feature displays, and structural "onboarding flow" Steppers.

## [1.4.0] - 2026-04-02

### Added
- **Epic 5: Accounting & Financial Intelligence Vertical**:
  - Implemented the third major service vertical with a trust-driven, consultation-based flow.
  - Built interactive **Accounting Sidebar** with sticky navigation for distinct advisory sub-services.
  - Created **Process Stepper** ("How It Works") to visually guide users through the engagement lifecycle.
  - Integrated **WhatsApp Consultation CTAs** across the hero and service detail sections with automated professional message templates.
  - Added dedicated **WhatsApp Logo CTA** for instant consultation booking.

## [1.3.1] - 2026-04-02

### Changed
- **Branding Hero Optimization**: Removed the "Luxury Quality" floating sticker to prioritize a clean, professional aesthetic.
- **Enhanced Navigation Menu**: Transformed the "Services" link into a dynamic hover dropdown with visual icon previews for Branding, Logistics, and Accounting verticals.
- **Cart Checkout UI**: Replaced the default icon in the "Checkout to WhatsApp" button with the official brand iconography (`whatsapp.png`).
- **Global Notification Strategy**: Relocated `Sonner` toasts to the `bottom-left` corner and reduced display duration to 2000ms to prevent occlusion of Navbar controls and provide a snappier user experience.

### Fixed
- Improved Navbar usability by ensuring global toasts do not overlap with Cart and Contact triggers.

## [1.3.0] - 2026-04-02

### Added
- **Global Documentation & State Sync**:
  - Synchronized and finalized all project **Epics and User Stories** (1.1 through 4.4) to 100% completion status.
  - Standardized all story files with `Status: DONE` metadata and completed acceptance criteria.
  - Updated **Project Roadmap** to reflect the transition from "Mock-First" foundations to "Database-Integrated" production phase.
  - Verified visual alignment with the premium design system across all documented verticals.

## [1.2.0] - 2026-04-01

### Added
- **Epic 2 & 3: Unified Service Verticals & Cart**:
  - Implemented **Zustand-based Cart** with `localStorage` persistence and support for polymorphic items (Branding/Logistics).
  - Created **Premium Branding Vertical** with responsive product catalog, category sidebars, and mock inventory.
  - Created **Luxury Logistics Vertical** with elite fleet catalog and duration-based rental calculations.
  - Implemented **WhatsApp Checkout logic** that generates structured order messages for conversion.
  - Built **CartDrawer UI** with Base UI and Framer Motion for a premium, slide-out customer experience.
- **Navigation & UX Refinement**:
  - Enabled **Global Smooth Scrolling** via `scroll-behavior: smooth`.
  - Implemented **Intelligent Section-Scrolling** for Navbar "Services" and "Home" links.
  - Simplified **Navigation Breadcrumbs** to a direct "Home > [Category]" path.
  - Updated **Logistics Iconography** on the homepage to reflect "Luxury Fleet" (SUV).
  - Integrated **Sonner (Toasts)** for real-time customer feedback on cart actions.

### Fixed
- Resolved **Hydration Mismatches** and invalid HTML nesting in the `Navbar` and `CartDrawer`.
- Fixed **Next.js Image Host** errors by configuring remote patterns for Unsplash.
- Resolved **TypeScript 'implicit any'** errors across the cart and catalog components.

## [1.1.0] - 2026-03-29

### Added
- Story 1.1 (Build-Time Environment Validation) implemented and verified.
- Story 1.2 (Design System & Token Mapping) foundations established.
- Story 1.3 (Responsive Global Layout Shell) implemented - Navbar, Footer, and Floating WhatsApp components integrated.
- Overhauled Icon system in `src/components/ui/icons.tsx` to source brand icons from `react-icons/fa6`.
- Implemented centered menu layout in `Navbar`.
- Created `docs/TECH_STACK.md` to track project architecture and libraries.
- Migrated database provider to **Supabase** for built-in PgBouncer support.
- Integrated **Sonner**, **Zod**, and **Supabase Storage** requirements into the PRD.
- Added **Section 6: Vercel Deployment & Prisma Architecture Standards** to `PRD.md`.
- Integrated 12 new production-grade requirements into PRD and Tech Stack.

### Changed
- Cleaned out default Next.js `page.tsx` and `globals.css` boilerplate to provide a clean starting workspace.
