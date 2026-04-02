---
Status: DONE
Story_ID: STR-503
---

# Story 5.3: Consultation Conversion Flow (WhatsApp)

## 📝 Context & Technical Rationale
For high-value financial services, the most effective conversion path is a direct conversation. This story focuses on wiring the Accounting page CTAs to a pre-filled WhatsApp message that identifies the service interest.

## 🎯 Deliverables
- [x] Consultation logic integrated into `AccountingPage`.
- [x] Dedicated WhatsApp message template for financial services.
- [x] CTA linking to WhatsApp for "Book Free Consultation" and "Start Now". buttons across the Accounting page.

## 🛠️ Detailed Requirements & Specifications
### 1. Formatting Template Logic
The message must be structured to sound professional:
```text
Hello Efficiency Solutions,

I am interested in scheduling a free consultation for Accounting / Financial Advisory services.
Please let me know your available times.
```
*Optional Enhancement:* If the user clicks "Book Consultation" while a specific tab (e.g., "Taxation") is active, inject that context:
```text
Hello Efficiency Solutions,

I am interested in scheduling a free consultation specifically regarding your Taxation services.
Please let me know your available times.
```

### 2. URL Generation Logic
- **Safety Base:** `https://wa.me/[WHATSAPP_NUMBER]?text=[MESSAGE]`.
- **Encoding:** Encode the entire template using `encodeURIComponent`.

## ✅ Acceptance Criteria
- [x] Clicking "Book Free Consultation" and "Start Now" opens a new tab with a WhatsApp link.
- [x] The WhatsApp message is formatted correctly (e.g., "Hi Efficiency Solutions! I would like to book a free consultation for your Taxation services...").
- [x] The service name in the message dynamically updates based on the service selected.
- [x] No cart operation is performed during this flow.active tab state, ensure the button component can access it (either via props if passed down, or a local React Context if necessary).

## 🛡️ Edge Cases
- **Component State:** If passing the active tab state, ensure the button component can access it (either via props if passed down, or a local React Context if necessary).
