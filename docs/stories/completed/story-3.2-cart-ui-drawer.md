---
Status: DONE
Story_ID: STR-302
---

# Story 3.2: Interactive Cart Drawer (UI)

## 📝 Context & Technical Rationale
The cart drawer is the user's last touchpoint before the WhatsApp conversion. It must look **premium**, feel **fast**, and clearly communicate the total investment. Utilizing the `Sheet` component from `shadcn/ui` based on **Radix UI** primitives ensures accessibility (ARIA roles) and a frictionless experience.

## 🎯 Deliverables
- [x] A dedicated `CartDrawer` component in `src/components/layout/`.
- [x] Animated item list (Framer Motion `LayoutGroup`).
- [x] Empty state with "Continue Discovery" call-to-action.

## 🛠️ Detailed Requirements & Specifications
### 1. UI Components (Desktop & Mobile)
- **Responsive Width:** `w-full` (Mobile), `max-w-[450px]` (Desktop).
- **Background:** `bg-surface` (#f8f8f8) to distinguish from the main content.
- **Item Card Design:**
    - Thumbnail: Small square image (`rounded-lg`).
    - Title: **Outfit** font, font-semibold.
    - Actions: Small horizontal quantity toggles (`+`, `-`).
    - Remove Button: Subtle Trash icon (`brand-muted` color).

### 2. Sticky Footer Logic
- The **"Total"** must be frozen at the bottom of the drawer.
- **Pricing:** Format via `Intl.NumberFormat('en-NG')`. No hardcoded symbols.
- **Button:** Call-to-action "Check Out to WhatsApp" with a secondary **Gold** icon on a **Navy** background.

### 3. Animations
- Item entry/exit: Use `staggerChildren` from `framer-motion` for a smooth cascade.
- Slide-in: Standard ease-out Radix transition.

## ✅ Acceptance Criteria
- [x] Cart drawer is fully accessible via keyboard (`Esc` to close, `Tab` focus for items).
- [x] The "Empty Cart" view appears if `totalCount` is 0.
- [x] Swipe-to-dismiss works intuitively on mobile devices.
- [x] Item quantities can be manipulated directly from within the drawer.

## 🛡️ Edge Cases
- **Bespoke Logic:** Items with `type: 'logistics'` should say "Days" next to their count instead of "Qty".
- **Scrolling:** Long carts must scroll internally without scrolling the main body content.
