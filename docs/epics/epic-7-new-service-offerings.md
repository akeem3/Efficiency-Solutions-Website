---
Status: DONE
Epic_ID: EPC-007
---

# Epic 7: Expand Service Offerings (Tailoring & Digital)

## 🎯 High-Level Goal
Expand the platform's service spectrum from 3 to 5 verticals by integrating "Tailoring & Fashion Design" and "Digital Product Development." This epic focuses on high-conversion landing pages that showcase portfolio samples and drive users directly to WhatsApp consultations.

## 🧱 Architectural Principles
- **Conversion-First**: No complex multi-step forms. Every CTA points directly to a pre-filled WhatsApp message.
- **Mobile-First Samples**: Portfolio grids must be optimized for mobile "scrolling through work" behavior.
- **Minimalist Consistency**: New service pages must strictly follow the Hero → Samples → Benefits → CTA layout to maintain brand coherence.

## 🛠️ Detailed Requirements & Constraints
- **WhatsApp Templates**: Must use unique, encoded messages for each service.
- **Image Optimization**: Portfolio samples should use `next/image` with proper priority for hero assets.
- **Navigation**: Update both Desktop and Mobile navbar menus to include the new services.

## 📜 User Stories

### 1. **Story 7.1: Service Page Infrastructure**
Implement the 4-section layout component used across both new verticals.
- **Acceptance Criteria**:
    - Hero section with clear H1 and WhatsApp CTA.
    - Responsive Image Grid for "Samples."
    - "What You Get" bullet point list with icons.
    - Final "Strong Conversion" CTA section.

### 2. **Story 7.2: Tailoring & Fashion Launch**
Draft and implement the content for the Tailoring vertical.
- **Acceptance Criteria**:
    - WhatsApp message: "Hello Efficiency Solutions, I am interested in your Tailoring & Fashion Design service..."
    - Showcase samples of traditional and western couture.

### 3. **Story 7.3: Digital Product Development Launch**
Draft and implement the content for the Digital vertical.
- **Acceptance Criteria**:
    - WhatsApp message: "Hello Efficiency Solutions, I am interested in your Digital Product Development service..."
    - Showcase samples of apps and web platforms.

### 4. **Story 7.4: Global Navigation & Homepage Update**
Integrate the new services into the site's entry points.
- **Acceptance Criteria**:
    - Homepage `Services` section updated with 2 new cards.
    - Navbar dropdown/menu updated to reflect 5 services.

## 📈 Success Metrics
- **Performance**: New pages maintain a 95+ Lighthouse Performance score.
- **Conversion**: WhatsApp CTA click-through rate exceeds 5% on initial user testing.
