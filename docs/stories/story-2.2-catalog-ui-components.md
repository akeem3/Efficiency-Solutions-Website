---
Status: TODO
---

# Story 2.2: Branding Catalog UI Components

## 📝 Context
This story turns the mock data into a visual catalog. We are building the specific layout for the Branding page, which features a sidebar-heavy navigation structure typical of high-end e-commerce.

## 🎯 Deliverables
- [ ] `ProductGrid` component (Responsive).
- [ ] `ProductCard` component (Luxury variant).
- [ ] `CategorySidebar` (Sticky).
- [ ] `Breadcrumbs` (Dynamic).

## 🛠️ Requirements & Constraints
- **Product Card Anatomy:**
    - Fixed aspect ratio for images (e.g., `aspect-square` or `aspect-[4/5]`).
    - Subtle shadow on hover.
    - Clearly displayed Price in ₦.
    - "Add to Cart" button (secondary variant).
- **Sidebar:**
    - Must be sticky on desktop (`sticky top-24`).
    - Displays category names with active/inactive states.
- **Grid:**
    - Gap of `gap-6` or `gap-8` to maintain the "Luxury" spacious feel.

## ⚙️ Technical Implementation Notes
1. Use `next/image` for all product photos.
2. The Sidebar should use `lucide-react` icons for categories if appropriate.
3. The Breadcrumbs should generate the path using the current route.
4. Implementation must be purely PRESENTATIONAL (connecting to mock data state comes in Story 2.3).

## ✅ Acceptance Criteria
- [ ] Layout pixel-perfectly matches `docs/designs/Screenshot 2026-03-29 100023.png`.
- [ ] Hovering a product card shows a smooth transition/elevation.
- [ ] The catalog is fully readable on a mobile screen (1-column grid).
