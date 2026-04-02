---
Status: DONE
Story_ID: STR-501
---

# Story 5.1: Accounting Service Showcase UI

## 📝 Context & Technical Rationale
The Accounting vertical uses a distinct layout from the other verticals. It requires a trust-building Hero section and a detailed tabbed interface to explain complex services like Taxation and Auditing without a wall of text.

## 🎯 Deliverables
- [x] `AccountingHero` component.
- [x] `ServiceShowcaseTabs` component (Custom Left-Sidebar Navigation).
- [x] Static data block for Accounting Services text.

## 🛠️ Detailed Requirements & Specifications
### 1. Hero Section
- **Headline:** "Accounting - Advisory - Tax - Audit".
- **Subheadline:** "Helping You Stay Financially Secure & Compliant".
- **CTA:** "Book Free Consultation" (Navy button with right arrow).
- **Image:** High-quality professional accounting imagery (e.g., from Unsplash) using `next/image` with rounded corners.

### 2. Service Tabs Interface
- **Left Column (Sidebar):** Dark Navy background (`bg-brand-primary`). Lists services: Accounting, Business Advisory, Taxation, Internal Audit.
- **Active State:** Selected tab should have a distinct visual indicator (e.g., gold underline or text highlighted in `brand-secondary`).
- **Main Column:** Displays the content for the selected service. Includes bullet points with checkmark icons.

### 3. Data Structure
- Mock the content directly in a constant variable or `src/mock/accounting.ts`. No database required for this static promotional content.

## ✅ Acceptance Criteria
- [x] Layout pixel-perfectly matches the top half of `docs/designs/Screenshot 2026-03-29 100110.png`.
- [x] Clicking different services in the sidebar instantly changes the main content.
- [x] Content uses `framer-motion` for a subtle fade-in when switching tabs.
- [x] On mobile, the sidebar becomes a horizontal scrollable tab list or standard dropdown to preserve vertical space.

## 🛡️ Edge Cases
- **Mobile Readability:** Ensure font sizes remain legible on small screens and the side-by-side layout collapses cleanly to a stacked layout.
