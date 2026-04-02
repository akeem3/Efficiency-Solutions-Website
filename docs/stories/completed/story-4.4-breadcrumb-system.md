---
Status: DONE
Story_ID: STR-404
---

# Story 4.4: Breadcrumb Navigation System (SEO)

## 📝 Context & Technical Rationale
In a multi-vertical agency, breadcrumbs serve two critical functions: (1) Navigational orientation for the user and (2) **Structured Data for Google Search Console**. We use the Next.js path structure to automatically generate a SEO-friendly trail.

## 🎯 Deliverables
- [x] `Breadcrumb` component using Radix UI/shadcn `Breadcrumb` primitives.
- [x] Dynamic path mapping utility.

## 🛠️ Requirements & Specifications
### 1. Trail Logic
- **Structure:** `Home > [Service Vertical] > [Category] > [Product (Optional)]`.
- **Mapping:**
    - `/logistics` -> "Luxury Logistics"
    - `/branding` -> "Premium Branding"
    - `?category=Apparel` -> "Apparel"

### 2. Styling Standards
- Active Link (Previous): `brand-muted` (#818286), underline on hover.
- Current Page (Static): `brand-primary` (#32406a), **Outfit-Medium**.
- Separator: Subtle right arrow (`LuChevronRight`) or slash in `brand-muted`.

### 3. SEO Integration
- Component must output valid **JSON-LD Schema.org** markup into the head of the page to generate Google search "Rich Results".

## ✅ Acceptance Criteria
- [x] Navigating depth increases breadcrumb levels automatically.
- [x] Keyboard navigation (Tab) through the breadcrumbs works perfectly.
- [x] Mobile view collapses long breadcrumbs using ellipsis (...) if they exceed viewport width.

## 🛡️ Edge Cases
- **Home Route:** Do not show breadcrumbs on the homepage.
- **Search Result Context:** If the trail is started from a search result, handle accordingly (e.g., `Logistics > Search Results`).
