---
Status: DONE
Story_ID: STR-502
---

# Story 5.2: "How It Works" Stepper Component

## 📝 Context & Technical Rationale
Financial services require high trust. A structured process timeline ("How It Works") demystifies the engagement process for the client, reducing hesitation to convert.

## 🎯 Deliverables
- [x] `ProcessStepper` component.
- [x] Responsive layout adaptation for the steps.

## 🛠️ Detailed Requirements & Specifications
### 1. UI Components (Desktop & Mobile)
- **Container:** Dark Navy background (`bg-brand-primary`) spanning the full width of its container.
- **Headline:** "How It Works" in bold Gold (`text-brand-secondary`).
- **Steps:** 4 distinct phases:
  1. **Consult:** Book a call
  2. **Access:** We review your needs
  3. **Set up:** We Setup your system
  4. **Ongoing:** Continuous Support
- **Connectors:** Horizontal arrows (`lucide-react` ArrowRight) between steps on Desktop.

### 2. Responsive Behavior
- **Desktop:** Display steps horizontally in a flex row with `justify-between` or `justify-evenly`.
- **Mobile/Tablet:** Stack the steps vertically. Replace the horizontal arrows with vertical ones, or remove them and use a numbered list indicator.

### 3. Final Conversion Point
- A secondary "Start Now" button (Gold background, Navy text) centered below the steps.

## ✅ Acceptance Criteria
- [x] The stepper perfectly mirrors the bottom section of `docs/designs/Screenshot 2026-03-29 100110.png`.
- [x] The layout adapts smoothly from horizontal (desktop) to vertical (mobile) without horizontal scrolling artifacts.
- [x] The "Start Now" button handles hover states correctly (e.g., slight brightness increase or scaling).

## 🛡️ Edge Cases
- **Alignment:** Ensure the text for each step is perfectly center-aligned below its title, and arrows are vertically centered with the titles.
