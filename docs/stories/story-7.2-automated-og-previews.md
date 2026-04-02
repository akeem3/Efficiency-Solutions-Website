---
Status: TODO
Story_ID: STR-702
---

# Story 7.2: Automated Open Graph (OG) Previews

## 📝 Context & Technical Rationale
The primary conversion channel for this app is WhatsApp. When a user or staff member copies a link (e.g., `efficiencies.com/logistics?vehicle=g-wagon`), the resulting preview card is the first impression. It must contain an image, a clear title, and concise text.

## 🎯 Deliverables
- [ ] Static OG Images for top-level pages (`/public/og-home.jpg`, `/public/og-accounting.jpg`).
- [ ] OG meta tags integrated into the Metadata API.

## 🛠️ Detailed Requirements & Specifications
### 1. Static Image Preparation
- Create high-quality, branded standard images (`1200x630px`).
- Must incorporate the Navy/Gold brand colors and the Efficiency Solutions logo.
- Must compress tightly (under 300kb) to ensure instantaneous loading on 3G networks.

### 2. Integration
- Append `openGraph` and `twitter` objects to the Next.js `Metadata` exports.
- **Example Config:**
  ```typescript
  openGraph: {
    title: 'Luxury Logistics',
    description: 'Book premium vehicles and escorts today.',
    url: 'https://...',
    siteName: 'Efficiency Solutions',
    images: [
      {
        url: 'https://.../og-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'Efficiency Solutions Fleet',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  }
  ```

## ✅ Acceptance Criteria
- [ ] OG tags correctly output into the `<head>`.
- [ ] The URLs for the OG images are absolute URLs (WhatsApp link crawlers fail on relative paths).
- [ ] `twitter:card` is set to `summary_large_image`.

## 🛡️ Edge Cases
- **Dynamic OG Image (`@vercel/og`):** (Stretch Goal) If static images are too generic, explore using `ImageResponse` to programmatically render the actual `Vehicle.imageUrl` and `Vehicle.price` into a customized social card on the fly.
