---
Status: DONE
Story_ID: STR-303
---

# Story 3.3: WhatsApp Redirect & Message Formatter

## 📝 Context & Technical Rationale
The magic of Efficiency Solutions is its **Human-Centric Commerce**. To ensure the agent knows exactly what the user wants, the system must generate a perfectly balanced "Order Receipt" in a few milliseconds. We use the `wa.me` API for high-speed redirection.

## 🎯 Deliverables
- [x] `formatOrderMessage(cart: CartItem[])`: String builder utility.
- [x] `useWhatsAppCheckout` custom hook to handle the browser redirect logic.

## 🛠️ Detailed Requirements & Specifications
### 1. Formatting Template Logic
The message must be structured as follows:
```text
Hi Efficiency Solutions! 👋 
I'm ready to proceed with these services:

🛒 BRANDING ITEMS:
- [Name] x [Qty] (₦[Subtotal])
- [Name] x [Qty] (₦[Subtotal])

🚗 LOGISTICS BOOKING:
- [Vehicle Model] ([Days] days) @ ₦[Price/Day]

💰 TOTAL ESTIMATE: ₦[Grand Total]
---
Ref: ORD-[Timestamp]
```

### 2. URL Generation Logic
- **Safety Base:** `https://wa.me/[WHATSAPP_NUMBER]?text=[MESSAGE]`.
- **Encoding:** Encode the entire template using `encodeURIComponent` to preserve line breaks and Emojis.
- **Atomic Cleanup:** The cart MUST clear *immediately* after the `window.open` trigger to prevent double-checkout on tab return.

## ✅ Acceptance Criteria
- [x] The formatted message contains 0% formatting errors when viewed in WhatsApp.
- [x] Prices are correctly subtotalled per line and totaled at the bottom.
- [x] Emojis (👋, 🛒, 🚗, 💰) are preserved across all devices.
- [x] The redirect happens in less than 200ms after the button click.

## 🛡️ Edge Cases
- **Mobile Handshake:** Verify the logic works on iOS/Android "WhatsApp Web" vs "WhatsApp Mobile App."
- **Empty Section:** If the cart contains 0 branding items, the "BRANDING ITEMS" header must not appear.
