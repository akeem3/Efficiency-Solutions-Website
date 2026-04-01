# Changelog

All notable changes to the **Efficiency Solutions** web application will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
