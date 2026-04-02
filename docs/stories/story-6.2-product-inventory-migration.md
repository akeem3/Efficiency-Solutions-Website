---
Status: TODO
Story_ID: STR-602
---

# Story 6.2: Production Seed & Inventory Migration

## 📝 Context & Technical Rationale
With the database ready, we must populate it. Relying on manual entry for the initial deployment is error-prone. A programmatic seed script ensures the database can be rebuilt from scratch anytime. Furthermore, we must rip out the mock data calls in our components and replace them with Prisma queries.

## 🎯 Deliverables
- [ ] `prisma/seed.ts` script.
- [ ] Migration of `src/app/services/branding/page.tsx` (or layouts) to server-fetch via Prisma.
- [ ] Migration of `src/app/logistics/page.tsx` to server-fetch via Prisma.

## 🛠️ Detailed Requirements & Specifications
### 1. The Seed Script
- Read from the existing `src/lib/mock/products.ts` and `vehicles.ts`.
- Use `prisma.brandingProduct.createMany` and `prisma.logisticsVehicle.createMany`.
- Ensure it resets/clears existing data before seeding to avoid duplicates.

### 2. Frontend Query Refactor
- Inside the Next.js Server Components, replace `const products = MOCK_PRODUCTS` with `const products = await prisma.brandingProduct.findMany()`.
- Ensure the components correctly await the data.
- Ensure the Next.js Cache is utilized correctly (e.g., revalidate paths when admin changes data).

## ✅ Acceptance Criteria
- [ ] Running `npx prisma db seed` locally populates the database and outputs a success log.
- [ ] The Branding and Logistics pages successfully render data from Supabase instead of the mock file.
- [ ] The UI looks 100% identical to the mock-phase; only the data source has changed.
- [ ] The `src/lib/mock` files are safely deleted or renamed to `old_mock_reference`.

## 🛡️ Edge Cases
- **Image URLs:** Ensure the remote image URLs exist and domain patterns remain correctly configured in `next.config.js`.
