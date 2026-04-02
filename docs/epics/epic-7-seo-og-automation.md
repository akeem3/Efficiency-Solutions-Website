---
Status: TODO
Epic_ID: EPC-007
---

# Epic 7: Advanced SEO & OG Automation

## 🎯 High-Level Goal
Ensure "Efficiency Solutions" dominates local Nigerian search results and presents a premium, flawless face when shared on social media or WhatsApp. This epic moves beyond basic titles and implements programmatic, dynamic Metadata, structured JSON-LD schemas, and visually striking Open Graph (OG) image automation.

## 🧱 Architectural Principles
- **Programmatic SEO:** Next.js Metadata API must be used dynamically on product and service pages to read the database and inject exact titles/descriptions without manual HTML updates.
- **Viral Readiness:** When an agent or client shares a link to a G-Wagon or a Branding package via WhatsApp, the URL preview must load instantly with a high-res image and clear pricing info.
- **Zero-Config Crawling:** Search engines must naturally discover every product via an auto-updating sitemap, dropping the reliance on manual crawler submission.

## 🛠️ Detailed Requirements & Constraints
- **Next.js `Metadata` Object:** All base pages need static Metadata. All dynamic routes (`[slug]` or `[categoryId]`) must use `generateMetadata`.
- **Open Graph Layout:** Ensure OG Images fit the standard `1200x630` aspect ratio. Text on OG images must be legible and centrally aligned so it isn't cropped by WhatsApp's square previews.
- **Next.js System Files:** Must utilize `sitemap.ts` and `robots.ts` in the App router root naturally.

## 📜 User Stories (Deep-Dive)

### 1. **[Story 7.1: Dynamic Metadata API Implementation](../stories/story-7.1-dynamic-metadata-api.md)**
Injecting title, description, and keyword tags for every route.
- **Scope:** Base layout metadata, dynamic `generateMetadata` for Logistics and Branding categories.

### 2. **[Story 7.2: Automated Open Graph (OG) Previews](../stories/story-7.2-automated-og-previews.md)**
Ensuring rich link sharing.
- **Scope:** Static OG images for Homepage/Accounting. Dynamic Next.js Image Response (`@vercel/og` or standard static routing) for products.

### 3. **[Story 7.3: Sitemap & Robots Optimization](../stories/story-7.3-sitemap-robots-optimization.md)**
Guiding search engine crawlers dynamically.
- **Scope:** Programmatic `sitemap.ts` that includes database entities, strict `robots.ts` disallowing `/admin`.

## 📈 Success Metrics
- **Validation:** 100% pass rate when run through the official `Facebook Sharing Debugger` or `WhatsApp Link Preview` testing.
- **Lighthouse:** SEO Score consistently hits 100 on desktop and mobile.
