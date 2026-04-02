---
Status: DONE
---

# Epic 1: Infrastructure & Design Alignment

## 🎯 Goal
Establish the technical safety-net, design foundations, and the global visual shell (Navbar/Footer) before building feature-specific pages. This epic ensures that "deceptively simple" tasks like configuration and base layouts are built to last on Vercel's serverless environment.

## 🧱 Architectural Principles
- **Reliability First:** Using **Zod** to catch misconfigured environment variables during build rather than at runtime.
- **Design Tokens:** Strictly mapping Brand Colors (#32406a, #c69b59) to shadcn root variables in `globals.css` using Tailwind v4's CSS-first `@theme` block.
- **Atomic Layout:** Decoupling the Shell (Navbar/Footer) from the data-fetching logic in pages.
- **Luxury Aesthetics:** Standardizing on **Outfit** for headings and **Inter** for body text, with a consistent `0.75rem` (12px) rounding across all components.

## 🛠️ Constraints & Requirements
- **Next.js 15:** Use App Router conventions. Every page must use `loading.tsx` and `error.tsx`.
- **Tailwind v4:** CSS-only configuration (no `tailwind.config.ts`).
- **Serverless Limits:** Keep function payloads under 4.5MB (standard Vercel Hobby limits).
- **Responsive:** Mobile-first approach is mandatory. Navbar must implement a robust side-drawer or hamburger menu.

## 📜 User Stories
---
Status: DONE
---
1. **[Story 1.1: Environment Validation](../stories/story-1.1-env-validation.md)** - Singleton config pattern.
---
Status: DONE
---
2. **[Story 1.2: Design System Setup](../stories/story-1.2-design-system-setup.md)** - Token mapping and typography.
---
Status: DONE
---
3. **[Story 1.3: Global Layout Shell](../stories/story-1.3-global-layout-shell.md)** - Responsive Navbar, Footer, and WhatsApp Button.
