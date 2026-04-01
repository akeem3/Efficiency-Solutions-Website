---
Status: TODO
---

# Epic 2: Branding Service Vertical (Mock-First)

## 🎯 Goal
Implement the first full service catalog ("Premium Branding") using a "Mock-First" architecture. This enables us to finalize UI/UX, responsive behavior, and cart interactions before touching a single database record.

## 🧱 Architectural Principles
- **Data Repositories:** Centralize all mock product fetches in `src/lib/mock/` to allow for easy "one-line" swapping for Prisma queries later.
- **Declarative UI:** Component styling driven by data state (e.g., product availability or category filtering).
- **URL-Synced State:** Using search parameters (`?category=Apparel`) to drive filtering, making catalog states shareable.

## 🛠️ Constraints & Requirements
- **Mock Data First:** No direct database calls in Epic 2 components.
- **Luxury Aesthetic:** Product grids must use a clean, spacious 3-column layout on desktop, dropping to 1-column on mobile.
- **Image Optimization:** All mock assets must use `next/image` with proper `priority` for above-the-fold content.

## 📜 User Stories
---
Status: TODO
---
1. **[Story 2.1: Mock Inventory Core](../stories/story-2.1-mock-inventory-core.md)** - Schema and repository pattern.
---
Status: TODO
---
2. **[Story 2.2: Catalog UI Components](../stories/story-2.2-catalog-ui-components.md)** - Sidebar, cards, and grid.
---
Status: TODO
---
3. **[Story 2.3: Filtering & Sorting Logic](../stories/story-2.3-filtering-sorting-logic.md)** - Logic and URL synchronization.
