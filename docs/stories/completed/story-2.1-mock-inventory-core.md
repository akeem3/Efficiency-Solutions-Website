---
Status: DONE
---

# Story 2.1: Mock Inventory Core & Schema

## 📝 Context
To build the Branding service vertical without a live database, we need a robust mock data layer. This story defines the "source of truth" for products and categories using Zod for future type-compatibility with Prisma.

## 🎯 Deliverables
- [x] `Product` and `Category` Zod schemas.
- [x] `src/lib/mock/products.ts` repository.
- [x] Centralized `getBrandingProducts` helper.

## 🛠️ Requirements & Constraints
- **Data Model:**
    ```typescript
    interface Product {
      id: string;
      name: string;
      description: string;
      price: number;
      category: 'Apparel' | 'Corporate Gifts' | 'Promotional' | 'Office';
      imageUrl: string;
      isFeatured?: boolean;
    }
    ```
- **Image Sourcing:** Use Unsplash URLs that match the designs (T-shirts, Mugs, Cars). For specific luxury cars, if Unsplash is generic, use sample professional placeholders.

## ⚙️ Technical Implementation Notes
1. Place mock data in `src/lib/mock/products.ts`.
2. Ensure the `imageUrl` points to high-resolution assets.
3. Pricing must be integers to simplify the `Intl.NumberFormat` utility usage later.
4. Export a `BRANDING_CATEGORIES` array to power the Sidebar dynamically.

## ✅ Acceptance Criteria
- [x] Mock repository contains at least 8 varied branding products.
- [x] All products pass the Zod validation check.
- [x] Products are correctly categorized according to the sidebar requirements in the design.
