---
Status: TODO
Story_ID: STR-703
---

# Story 7.3: Sitemap & Robots Optimization

## 📝 Context & Technical Rationale
Google and other search engines require a road map. Rather than hardcoding an XML file that inevitably becomes out of date, Next.js allows us to generate a live `sitemap.xml` based on our actual routes and database entries.

## 🎯 Deliverables
- [ ] Programmatic `src/app/sitemap.ts`.
- [ ] Static `src/app/robots.ts`.

## 🛠️ Detailed Requirements & Specifications
### 1. Sitemap Logic
- The sitemap function must return an array of objects containing `url`, `lastModified`, `changeFrequency`, and `priority`.
- **Static Routes:** Include `/`, `/about`, `/services/accounting`, `/services/branding`, `/logistics`. (Priority: `1.0` - `0.8`).
- **Dynamic Routes:** If categories or specific items exist, loop through the Prisma database and append those specific URLs (Priority: `0.6`).

### 2. Robots.txt Configuration
- **Allow:** Everything public (`/`).
- **Disallow:**
  - `/admin/` (Critical - prevent exposing the login portal).
  - `/api/` (Prevent bots from scraping API routes).
- Instruct bots where to find the dynamic sitemap.

## ✅ Acceptance Criteria
- [ ] Navigating to `/sitemap.xml` in the browser returns a perfectly formatted, dynamic XML document.
- [ ] Navigating to `/robots.txt` explicitly blocks `/admin`.
- [ ] Adding a new Product to the database automatically adds it to the sitemap (if specific product pages are implemented).

## 🛡️ Edge Cases
- **URL Base:** Ensure the `sitemap.ts` correctly pulls the current production domain (via env variable) rather than returning `localhost:3000` links in production.
