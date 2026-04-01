---
Status: TODO
Epic_ID: EPC-003
---

# Epic 3: Unified Cart & WhatsApp Checkout System

## 🎯 High-Level Goal
This epic implements the backbone of the application's profitability: the **WhatsApp Conversion Engine**. We are replacing the standard "Payment Gateway" with a highly-polished, client-side Cart that aggregates diverse service types (Branding products & Luxury vehicle bookings) and transforms them into a structured message that initiates a real human-to-human transaction.

## 🧱 Architectural Principles
- **State Sovereignty:** The `useCart` store (Zustand) is the single source of truth. No data is stored in a database during this stage.
- **Local Persistence (Persistence Middleware):** The cart must survive page refreshes, browser restarts, and tab closures via `localStorage` hydration.
- **Service Polymorphism:** The system must handle different attribute schemas (e.g., *Apparel Size* vs *Vehicle Rental Days*) within a single array of items.
- **Latency-Free Handshake:** The transition from the web application to the WhatsApp interface must be under 300ms to maintain conversion momentum.

## 🛠️ Detailed Requirements & Constraints
- **Universal Item Schema:**
    ```typescript
    interface CartItem {
      id: string;
      slug: string;
      name: string;
      price: number;
      quantity: number;
      type: 'branding' | 'logistics';
      image: string;
      metadata: Record<string, string | number | boolean>;
    }
    ```
- **Naira Formatting Policy:** All currency calculations must be computed as integers (to avoid floating-point errors) and formatted using the global `en-NG` utility.
- **Message Integrity:** The resulting WhatsApp URL must be properly encoded to prevent breaking on special characters or Nigerian phone prefixes.

## 📜 User Stories (Deep-Dive)

### 1. **[Story 3.1: Global Cart State Management (Zustand)](../stories/story-3.1-cart-state-zustand.md)**
Implementation of the persistent store, state hydration logic, and core actions.
- **Scope:** Typing, persistent middleware, item merging logic.

### 2. **[Story 3.2: Interactive Cart Drawer (UI)](../stories/story-3.2-cart-ui-drawer.md)**
Building the premium side-sheet that allows users to review their "Bill of Materials."
- **Scope:** Responsive Sheet (shadcn), quantity counters, item summary cards with image previews.

### 3. **[Story 3.3: WhatsApp Redirect & Message Formatter](../stories/story-3.3-whatsapp-conversion-logic.md)**
The engineering of a structured data-to-string pipeline.
- **Scope:** URL encoding, structured template generation, conversion tracking prep.

### 4. **[Story 3.4: Cart Feedback & Success Loops](../stories/story-3.4-cart-feedback-sonner.md)**
Using micro-interactions to drive "Cart-Adding" behavior.
- **Scope:** Toast notifications, "View Cart" triggers, empty-state recovery.

## 📈 Success Metrics
- **Performance:** Cart drawer opens in <100ms.
- **Stability:** Cart data remains intact after 100% of page refreshes.
- **Conversion:** No malformed WhatsApp messages produced during testing.
