---
Status: DONE
---

# Story 1.2: Design System & Token Mapping

## 📝 Context
This story translates the Agency's luxury identity into CSS variables. We are using **Tailwind CSS v4** and **shadcn/ui**. The goal is to ensure that components like `Button`, `Input`, and `Card` automatically use our Brand Primary (#32406a) and Brand Secondary (#c69b59) colors without manual overrides.

## 🎯 Deliverables
- [x] Configured `globals.css` with shadcn root variables.
- [x] Typography scale initialization.
- [x] Standardized border-radius and spacing tokens.

## 🛠️ Requirements & Constraints
- **Color Mapping:**
    - `--background`: `#f5f6f8` (Off-white body)
    - `--primary`: `#32406a` (Navy)
    - `--secondary`: `#c69b59` (Mustard/Gold)
    - `--foreground`: `#1a1a1a` (Deep grey/black for readability)
    - `--color-brand-muted`: `#818286` (Grey — secondary text, input borders, dividers)
    - `--color-brand-surface`: `#f8f8f8` (Near-white — card/navbar/panel backgrounds)
- **Typography:**
    - **Headings:** **Outfit** (Geometric Sans-serif for a modern, high-end agency feel).
    - **Body:** **Inter** (Industry standard for UI readability).
- **Rounding:** The designs show a softer, premium feel. Use a base `--radius: 0.75rem` (12px) to ensure all components (cards, buttons, inputs) inherit a consistent `rounded-xl` look.

## ⚙️ Technical Implementation Notes
1. **Tailwind v4 CSS-First:** Use the `@theme` block in `globals.css` to define custom colors and map them to shadcn variables. This replaces the need for `tailwind.config.ts`.
2. **shadcn/ui Canary:** Initialize via `npx shadcn@canary init` for full Tailwind v4 and React 19 compatibility.
3. **Variable Mapping:** Ensure `--primary` is Navy (#32406a) and `--secondary` is Gold (#c69b59), with accessible foreground colors.
4. **Setup `sonner`** in the root layout to handle global notifications.

## ✅ Acceptance Criteria
- [x] Visual check: A shadcn `<Button>` component renders as Navy by default.
- [x] Typography check: Page headings use the designated brand font.
- [x] Spacing check: The layout uses standard Tailwind spacing units (e.g., `p-6`, `m-4`) consistently.
