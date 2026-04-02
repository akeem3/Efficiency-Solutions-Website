---
Status: TODO
Story_ID: STR-603
---

# Story 6.3: Secure Admin CRUD Panel

## 📝 Context & Technical Rationale
The agency staff must have the ability to upload new branding catalog items or adjust vehicle daily rental prices without touching code. Given our requirements, a bespoke Shadcn-based dashboard within Next.js App Router is cleaner than forcing in a heavy framework like AdminJS.

## 🎯 Deliverables
- [ ] Basic authentication middleware.
- [ ] `/admin` route group containing an overview dashboard.
- [ ] Data-tables (using Shadcn UI) for both Branding and Logistics.
- [ ] "Add/Edit" forms using React Hook Form + Zod.

## 🛠️ Detailed Requirements & Specifications
### 1. Basic Authentication
- Create a `src/middleware.ts` that intercepts `/admin/*` routes.
- If no valid session/cookie exists, redirect to `/admin/login`.
- A simple `/admin/login` page checking a password against `process.env.ADMIN_PASSWORD`.

### 2. Dashboard UI
- **Sidebar:** Dark Navy. Links to "Overview", "Branding Products", "Logistics Fleet".
- **Data Table:** Use Shadcn's Data Table (based on Tanstack Table) for sorting and pagination.
- **Actions:** Each row needs an "Edit" and "Delete" action.

### 3. Server Actions for Mutations
- Forms must submit to Next.js **Server Actions** (e.g., `async function createProduct(formData: FormData)`).
- Actions must call `revalidatePath('/services/branding')` to instantly update the public site Cache when a change is made.

## ✅ Acceptance Criteria
- [ ] Attempting to visit `/admin` redirects to login if unauthenticated.
- [ ] Admin can successfully create, edit, and delete a vehicle.
- [ ] Changes made in the admin panel instantly reflect on the public, visitor-facing pages.
- [ ] Forms validate correctly (e.g., preventing a product with negative price or missing name).

## 🛡️ Edge Cases
- **Cache Invalidation:** The most common bug in Next.js App Router CRUD is forgetting to call `revalidatePath`. This must be tested rigorously.
- **Security Leak:** Ensure Server Actions themselves check authentication, not just the page middleware.
