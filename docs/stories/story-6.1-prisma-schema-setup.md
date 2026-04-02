---
Status: TODO
Story_ID: STR-601
---

# Story 6.1: Prisma Schema & Local Database Setup

## 📝 Context & Technical Rationale
To make the application dynamic, we need an ORM to communicate with Supabase Postgres. Prisma is chosen for its superior TypeScript integration. We must design schemas that cover the specifics of both Branding Products and Logistics Vehicles.

## 🎯 Deliverables
- [ ] `schema.prisma` file with `BrandingProduct` and `LogisticsVehicle` models.
- [ ] `src/lib/prisma.ts` strict Singleton client.
- [ ] Successful connection to the Supabase pooling URL.

## 🛠️ Detailed Requirements & Specifications
### 1. Models
**BrandingProduct:**
- `id` (UUID, default uuid())
- `name` (String)
- `description` (String)
- `price` (Int - important: integer for kobo/naira exactness)
- `category` (String - e.g., 'Apparel', 'Mugs')
- `imageUrl` (String)
- `createdAt`, `updatedAt`

**LogisticsVehicle:**
- `id` (UUID, default uuid())
- `model` (String)
- `brand` (String - e.g., 'Lexus', 'Benz')
- `pricePerDay` (Int)
- `category` (String - e.g., 'Car Rental', 'Security Escort')
- `features` (String[] - Array of features)
- `imageUrl` (String)
- `createdAt`, `updatedAt`

### 2. URL Strategy
- `DATABASE_URL` -> Supabase Transaction connection (Port 6543).
- `DIRECT_URL` -> Supabase Session connection (Port 5432) for running migrations.

## ✅ Acceptance Criteria
- [ ] `npx prisma generate` successfully creates the Prisma Client.
- [ ] `npx prisma db push` or `npx prisma migrate dev` successfully creates tables in the Supabase backend.
- [ ] `src/lib/prisma.ts` uses the `globalThis` cache strategy correctly to prevent Vercel hot-reload exhaustion.

## 🛡️ Edge Cases
- **Array Storage:** PostgreSQL supports arrays natively. Ensure Prisma `String[]` is used for vehicle features rather than a complex relational join table to keep querying simple.
