---
Status: TODO
Epic_ID: EPC-008
---

# Epic 8: Advanced SEO & OG Automation

## 🎯 High-Level Goal
Maximize the platform's visibility and professional appeal by implementing a robust SEO and Open Graph (OG) strategy. This ensures that sharing "Efficiency Solutions" on WhatsApp, Twitter, or Google results in high-quality, service-specific previews that drive triple the click-through rates.

## 🧱 Architectural Principles
- **Dynamic-First**: Metadata should be generated server-side for every service page to reflect the specific category (e.g., "Luxury Logistics in Nigeria").
- **Asset Efficiency**: OG images should be lightweight but high-resolution, following the `1200x630` standard.
- **Micro-Optimization**: Use semantic HTML (h1-h6) and sitemaps to ensure search engines can index the five core verticals accurately.

## 📜 User Stories

### 1. **Story 8.1: Dynamic Metadata Implementation**
Create a unified metadata generator in `src/lib/metadata.ts`.
- **Acceptance Criteria**:
    - Each of the 5 service pages must have a unique Meta Title and Description.
    - Title format: "[Service Name] | Efficiency Solutions".
    - Description: Concise, value-driven copy optimized for search snippets.

### 2. **Story 8.2: Open Graph (OG) Automation**
Implement social media preview tags for all pages.
- **Acceptance Criteria**:
    - `og:image`, `twitter:card`, and `og:type` implemented site-wide.
    - Specific OG image for each service (e.g., a high-res Lexus for Logistics, a creative design for Digital).
    - Verified using the "WhatsApp Link Preview" and "Meta Sharing Debugger."

### 3. **Story 8.3: Sitemap & Search Indexing**
Automate the discovery and indexing of all routing paths.
- **Acceptance Criteria**:
    - `sitemap.xml` and `robots.txt` dynamically generated via Next.js 15 File APIs.
    - Inclusion of all service sub-paths (`/services/digital`, `/services/tailoring`, etc.).
    - Proper canonical URL mapping to prevent "duplicate content" flags.

## 🛠️ Detailed Requirements & Constraints
- **Performance**: Metadata generation must not add perceptible latency to the Time-to-First-Byte (TTFB).
- **Standards**: Adhere strictly to the Next.js `Metadata` type definitions.
- **Consistency**: Ensure all meta-descriptions align with the Nigerian agency "Premium" brand voice.

## 📈 Success Metrics
- **Verification**: Zero SEO errors in Lighthouse/Ahrefs audits.
- **Engagement**: Enhanced link previews visible on WhatsApp when sharing any service page.
