---
Status: TODO
Story_ID: STR-403
---

# Story 4.3: Logistics Booking Parameters (UI)

## 📝 Context & Technical Rationale
Logistics commerce is not about "quantity" but "duration" and "service intensity." We need to capture the number of rental days and optional add-ons like security escorts directly in the discovery flow.

## 🎯 Deliverables
- [ ] Rental Duration Selector (1-30 days).
- [ ] "Security Level" toggle for applicable vehicles.
- [ ] Live price estimator within the card/modal.

## 🛠️ Detailed Requirements & Specifications
### 1. Duration Logic
- Use a plus/minus incrementer similar to Branding, but label it **"Days"**.
- Default to **1 Day**.
- Cap at **30 Days** (Policy constraint).

### 2. Service Toggles
- For "Security Escort" services, add a checkbox/switch for "Include Armed Driver."
- **Markup Logic:** Adding an Armed Driver adds a static daily fee (e.g., +₦20,000) to the estimate.

### 3. Estimate Calculation
- `(Base Day Price + Add-on Fees) * Number of Days`.
- Update the estimate in **real-time** on the UI before the user clicks "Add to Booking."

## ✅ Acceptance Criteria
- [ ] Clicking "Add to Booking" sends the custom `days` count to the `useCart` store.
- [ ] Toggling security fees immediately updates the visual "NairaTotal" on the card.
- [ ] Validation prevents selecting zero days.

## 🛡️ Edge Cases
- **Cart Merging:** If a user adds a G-Wagon for 2 days, then adds it again for 3 days, the system should ask to "Over-write" or "Append" (Default: Append/Update to new value).
- **Price Drift:** Ensure that toggled fees are included in the final `CartItem.price` passed to the store.
