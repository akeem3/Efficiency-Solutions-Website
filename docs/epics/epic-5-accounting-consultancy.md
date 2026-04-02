---
Status: DONE
Epic_ID: EPC-005
---

# Epic 5: Accounting & Financial Intelligence Vertical

## 🎯 High-Level Goal
Deploy the "Accounting Services" vertical. Unlike Logistics or Branding which rely on a cart-based ecommerce flow, Accounting relies on a **Consultation-based** flow. The primary objective is to present a highly professional, trustworthy overview of financial services (Taxation, Auditing, Bookkeeping) and successfully convert users into a consultation via a structured WhatsApp process.

## 🧱 Architectural Principles
- **Trust & Authority:** UI must emphasize readability, clean typography, and professional imagery.
- **Service Disclosure:** Use a structured side-tab or accordion layout to cleanly separate Tax, Audit, and Advisory services without overwhelming the user.
- **Conversion Flow:** The primary Call to Action (CTA) changes from "Add to Cart" to "Book Free Consultation".
- **Process Transparency:** Visually explain the "How It Works" pipeline (Consult -> Access -> Set up -> Ongoing) to reduce friction.

## 🛠️ Detailed Requirements & Constraints
- **Design Alignment:** Must strictly follow `Screenshot 2026-03-29 100110.png` in the `docs/designs` directory.
- **Service Sidebar:** Sticky left sidebar outlining "Accounting", "Business Advisory", "Taxation", and "Internal Audit", switching the main content pane when clicked.
- **Progressive Disclosure:** Use smooth `framer-motion` transitions when switching tabs in the service showcase.
- **Responsive:** The sidebar should convert to a horizontal scrollable tab-bar or dropdown on mobile devices.

## 📜 User Stories (Deep-Dive)

### 1. **[Story 5.1: Accounting Service Showcase UI](../stories/story-5.1-accounting-service-showcase.md)**
Building the hero section and the interactive tabbed service description area.
- **Scope:** Layout skeleton, sticky sidebar, dynamic content rendering based on selected service tab.

### 2. **[Story 5.2: "How It Works" Stepper Component](../stories/story-5.2-step-process-ui.md)**
Creating the visual timeline/stepper at the bottom of the page that explains the engagement process.
- **Scope:** Horizontal stepper UI, mobile vertical stack fallback, consistent typography.

### 3. **[Story 5.3: Consultation Conversion Flow](../stories/story-5.3-consultation-conversion-whatsapp.md)**
Wiring up the "Book Free Consultation" button to a bespoke WhatsApp template tailored for professional services.
- **Scope:** Pre-filled WhatsApp message generation (e.g., "I would like to schedule a consultation regarding [Service Name]").

## 📈 Success Metrics
- **Visual Accuracy:** Pixel-perfect matching of the Accounting design reference.
- **Performance:** Tab switching is instant (no network requests, all text content loaded on initial render).
- **Conversion:** WhatsApp link correctly formats the requested service area.
