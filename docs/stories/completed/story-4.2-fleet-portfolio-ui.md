---
Status: DONE
Story_ID: STR-402
---

# Story 4.2: Premium Fleet Portfolio View (UI)

## 📝 Context & Technical Rationale
The logistics vertical represents a significantly higher ticket-price than branding items. The UI must feel more cinematic and weighted. We will use large, clear imagery and a spacious grid to achieve this "High-End Showroom" feel.

## 🎯 Deliverables
- [x] Responsive `LogisticsGrid` in `src/components/logistics/`.
- [x] Cinematic `VehicleCard` matching design system.
- [x] Left-hand filter sidebar for service categories.

## 🛠️ Detailed Requirements & Specifications
### 1. Cinematic Card Design
- **AspectRatio:** `aspect-video` (16:9) to showcase vehicles in a wide format.
- **Surface:** `bg-white` card on `bg-background` surface for subtle lift.
- **Branding Badge:** Subtle badge for status (e.g., "Available Today" or "Armed Escort Rated").
- **Typography:** Model name in **Outfit Bold** (Navy). Pricing in **Inter Medium** (Gold).

### 2. Responsive Breakpoints
- **Mobile:** 1 Column (Full-width for detail parity).
- **Tablet:** 2 Columns.
- **Desktop:** 3 Columns with a condensed filtering sidebar.

### 3. Image Performance
- **Next/Image:** Use `priority` for the top 3 vehicle images in the fleet.
- **Blur-placeholder:** Implement a shimmer effect while high-res vehicle imagery loads.

## ✅ Acceptance Criteria
- [x] Card interactions (hovers) feel smooth and premium via `framer-motion`.
- [x] The sidebar correctly switches categories (Rental vs. Escort) using URL parameters.
- [x] Multi-line feature lists (AC, Wifi, Bulletproof) are formatted cleanly with bullet points.

## 🛡️ Edge Cases
- **Missing Asset:** Fallback to a high-quality "Service Pattern" or placeholder if a specific vehicle image is missing.
- **Long Names:** Ensure vehicle names like "Mercedes-Benz G63 AMG Wagon" don't break the layout.
