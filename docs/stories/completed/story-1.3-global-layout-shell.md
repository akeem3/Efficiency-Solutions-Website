---
Status: DONE
---

# Story 1.3: Responsive Global Layout Shell

## 📝 Context
The Layout Shell provides the first impression of the Efficiency Solutions brand. It must be perfectly responsive and provide a high-end "App-like" feel. The Navbar and Footer are the primary interaction points for the entire site.

## 🎯 Deliverables
- [x] `Navbar` component with mobile drawer.
- [x] `Footer` component with structured links.
- [x] `FloatingWhatsApp` button with persistent positioning.

## 🛠️ Requirements & Constraints
- **Navbar Layout:**
    - **Logo:** "Efficiency Solutions" (Navy/Gold mix).
    - **Links:** Home, Services (Dropdown?), About, Search.
    - **CTA:** "Contact" button with small WhatsApp icon.
- **Mobile Behavior:** Use a sheet or drawer for the mobile menu. Do not use standard browser alerts for navigation.
- **Floating Button:**
    - Fixed at `bottom-6 right-6`.
    - Z-index must be higher than any other UI element (e.g., `z-50`).
    - Subtle pulse animation or hover scale effect.

## ⚙️ Technical Implementation Notes
1. Use `lucide-react` for industrial-standard icons.
2. Use `framer-motion` for the mobile menu transition (fade and slide).
3. The Search bar in the Navbar should be a non-functional placeholder for now (building the UI only).
4. The "Contact" button should link to `https://wa.me/[number]`.

## ✅ Acceptance Criteria
- [x] Mobile Check: Hamburger menu opens and closes smoothly on small screens.
- [x] Desktop Check: Navbar sticks to the top of the viewport (fixed) or follows scroll as per design.
- [x] Interactivity: Hover states on links show a subtle color shift to `brand-secondary` (`#c69b59`).
