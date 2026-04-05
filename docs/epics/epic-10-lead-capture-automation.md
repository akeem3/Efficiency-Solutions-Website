---
Status: TODO
Epic_ID: EPC-010
---

# Epic 10: Lead Capture Automation

## 🎯 High-Level Goal
Optimize the agency's sales funnel by "Pre-Capturing" customer intent. This epic eliminates the single point of failure (the WhatsApp redirect) by saving lead data to our private database *before* the user leaves the site. This enables re-engagement with high-value customers who may not complete the WhatsApp chat.

## 🧱 Architectural Principles
- **Friction-Free Capture**: The pre-capture step must be seamless and not add more than 2-3 seconds to the conversion flow.
- **Privacy First**: Encrypted lead storage in Supabase with restricted access via the Admin Dashboard.
- **Resilience**: The WhatsApp redirect should still trigger even if the pre-capture background task fails, ensuring zero conversion blocks.

## 📜 User Stories

### 1. **Story 10.1: Lead Pre-Capture Logic**
Capture intent *during* the checkout/consultation flow.
- **Acceptance Criteria**:
    - **Inquiry Table**: New data structure in Supabase for `Inquiries` (Name, Phone/Email, Service Category, Timestamp).
    - **Trigger Point**: Logic in the "Checkout" and "Book Consultation" buttons that saves a partial lead record *before* the `window.open(wa_link)` call.

### 2. **Story 10.2: Lead Dashboard UI**
Visualize the sales funnel for the agency director.
- **Acceptance Criteria**:
    - **Leads Tab** in Admin Dashboard featuring a clean table of all site inquiries.
    - Status badges (NEW, CONTACTED, CONVERTED).
    - Quick-copy buttons for phone numbers and email addresses.

### 3. **Story 10.3: High-Value Recovery (Optional V2)**
Identify lost leads.
- **Acceptance Criteria**:
    - Tracking of "WhatsApp Intent" vs. "Completed Orders" (where possible in the branding vertical).
    - Identification of high-value cart abandonments directly in the admin panel.

## 🛠️ Detailed Requirements & Constraints
- **Performance**: Pre-capture must happen as a **Server Action** or an optimized background fetch.
- **UX**: If we add a name/contact field, it must be minimalist and follow the "Rounded [10px]" branding.

## 📈 Success Metrics
- **Conversion**: Increase in "Trackable Leads" by 100%.
- **Retention**: Admin ability to follow up with 10+ previous site visitors per week who hadn't finished their chat.
