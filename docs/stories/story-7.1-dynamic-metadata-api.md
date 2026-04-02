---
Status: TODO
Story_ID: STR-701
---

# Story 7.1: Dynamic Metadata API Implementation

## 📝 Context & Technical Rationale
Hardcoding `<title>` and `<meta>` tags is inefficient and impossible for database-driven pages. Next.js 15 provides a powerful Metadata API that allows us to define SEO data on the server before the page is sent to the client, ensuring crawlers immediately read the correct info.

## 🎯 Deliverables
- [ ] Base `metadata` export in `src/app/layout.tsx`.
- [ ] Custom `metadata` exports for static verticals (Accounting).
- [ ] `generateMetadata` function on dynamic catalog pages (Branding / Logistics).

## 🛠️ Detailed Requirements & Specifications
### 1. Global Base Metadata
- **Title Template:** `%s | Efficiency Solutions`
- **Default Title:** "Efficiency Solutions | Premium Agency Services in Nigeria"
- **Description:** "Luxury logistics, premium branding, and expert accounting services for professionals."

### 2. Dynamic Route Metadata (Logistics/Branding)
- Read the URL parameters or fetch the category/product from Prisma.
- Inject the specific detail into the title (e.g., "Car Rental & Chauffeurs | Efficiency Solutions").

## ✅ Acceptance Criteria
- [ ] Inspecting the page source (`Ctrl+U`) on the homepage shows the correct `<title>` and `<meta name="description">` tags.
- [ ] Navigating to a specific category updates the `<title>` dynamically without a hard page reload.
- [ ] All pages define a standard `canonical` URL to prevent duplicate content penalties.

## 🛡️ Edge Cases
- **Fallback Data:** If a dynamic route fails to find data (e.g., a deleted product), `generateMetadata` must return entirely generic fallback metadata rather than throwing an error that crashes the entire route.
