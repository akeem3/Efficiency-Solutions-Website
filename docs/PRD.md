# Product Requirements Document (PRD): Efficiency Solutions

## 1. Product Overview
Efficiency Solutions is a Nigerian-style agency web application designed to connect users with trusted professionals across five primary service verticals: 
1. **Premium Branding & Printing**
2. **Luxury Logistics (Ride & Escort)**
3. **Accounting Services**
4. **Tailoring & Fashion Design**
5. **Digital Product Development**

The core conversion strategy centers around WhatsApp. Rather than a traditional integrated checkout (Stripe/PayPal), users will build a cart or schedule a consultation and be seamlessly redirected to a WhatsApp chat with a pre-filled, formatted message to complete their transaction.

## 2. Design System & User Interface
- **Aesthetic**: Premium, minimalist, "High-End Agency" feel.
- **Color Palette**: 
    - Secondary: `#000000` (Deep Onyx)
    - Primary: `#4F46E5` (Indigo-600) / `#EA580C` (Orange-600) for accents.
- **Components**: Rounded corners (`rounded-[10px]`), glassmorphism effects, and professional typography (`Outfit` for headings).
- **Mobile-First**: Every page is optimized for mobile navigation and conversion.

## 3. Core Features & User Stories

*   **Functionality:** An e-commerce catalog layout. Users can browse items (e.g., T-Shirts, Mugs, Caps), filter by dynamic categories fetched from the database via a relational model (`BrandingCategory`), and sort items.
*   **Administration:** Admins can manage categories (Create, Update, Delete) via the dashboard. Deleting a category containing products is protected by an admin password to prevent accidental data loss (Cascade Delete).
*   **Conversion:** Users click "Add to Cart". The cart aggregates selected items and total estimated cost. Checking out redirects the user to WhatsApp with a summary of their cart.

### 3.2. Luxury Logistics
*   **Functionality:** Catalog layout focused on elite vehicle rentals (e.g., Lexus, Benz, G-Wagon). Users can filter by dynamic categories fetched from the database via a relational model (`LogisticsCategory`).
*   **Administration:** Admins can securely manage logistics categories (Create, Update, Delete). Password validation correctly secures deletions of categories populated with fleet vehicles (Cascade Delete). The Admin interface utilizes a Mobile-First responsive card design.
*   **Conversion:** Users add vehicles to their cart. Checking out redirects to WhatsApp with vehicle selection, rental duration (implicitly or explicitly gathered), and required services.

### 3.3. Accounting Services
*   **Functionality:** Interactive consultation flow. Users can browse accounting categories (Tax, Audit, Advisory) and start a direct inquiry.
*   **Conversion:** Users click "Book Consultation" which redirects to WhatsApp with a pre-filled professional inquiry template.

### 3.4. Tailoring & Fashion Design
*   **Functionality:** High-visual showcase of bespoke garment construction and fashion consultancy.
*   **Page Structure:** Hero Section → What We Do → Portfolio Gallery (Samples) → Service Benefits (What You Get) → Final Conversion CTA.
*   **Conversion:** WhatsApp-based booking for measurements and styling consultations.

### 3.5. Digital Product Development
*   **Functionality:** Technical portfolio and service description for modern software solutions (Web, Mobile, UX).
*   **Page Structure:** Hero Section → What We Do → Product Showcase (Case Study Samples) → Development Benefits → Direct Strategy CTA.
*   **Conversion:** High-intent WhatsApp inquiry for discovery calls and project estimations.

### 3.6. Checkout & WhatsApp Messaging
*   **Cart Logic:** Aggregates selected branding items or vehicles. No user account required.
*   **WhatsApp Redirect:** Upon checkout, the user is redirected to WhatsApp via a `wa.me` link with a **structured message template**.

## 4. Technical Architecture
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS v4.
- **Database**: Supabase (PostgreSQL) via Prisma ORM.
- **State Management**: Zustand (Client-side Cart).

## 5. Future Scale & Social Proof (V2 Suggestion)

### 5.1. Admin-Managed Google Reviews
*   **Objective**: Build trust by displaying real Google testimonials categorized by service.
*   **Implementation**: A `Review` table in Supabase where the admin can manually copy/paste high-quality Google reviews, assign a `service_category`, and manage them via the existing Admin Dashboard.
*   **Outcome**: Service-specific social proof component for each landing page.

### 5.2. Lead Pre-Capture
*   **Objective**: Prevent "Inquiry Loss" by capturing user intent before the WhatsApp redirect.
*   **Implementation**: A "Discovery Form" (Email/Name) that triggers just before the `wa.me` redirection, saving the lead to Supabase for follow-up if the user doesn't complete the WhatsApp chat.
