---
Status: TODO
Story_ID: STR-304
---

# Story 3.4: Cart Feedback & Success Loops (Sonner)

## 📝 Context & Technical Rationale
Good software feels "alive." Every interaction should prove to the user that their action was recorded. Using **Sonner**, we provide non-intrusive feedack that guides the user toward the next step in the journey: discovery or checkout.

## 🎯 Deliverables
- [ ] Standardized `cartToast` utility.
- [ ] Integration into the `CatalogCard` components.

## 🛠️ Detailed Requirements & Specifications
### 1. User Feedback Flows
- **Action:** Add to Cart.
- **Toast Result:** "Added to Cart: [Item Name]".
- **Rich Interaction:** Toast must include a "VIEW CART" button that instantly opens the `CartDrawer`.
- **Duration:** 3000ms.

### 2. Styling Tokens
- **Navy Frame:** The core toast container should use the brand's Primary Navy.
- **Gold Accents:** The action button and success checkmark should use the brand's Secondary Gold.
- **Rich Colors:** Enable `richColors` in the `Toaster` component for high-end visual feedback on errors.

### 3. Logic & Deduplication
- If the same item is added twice within 1 second, update the existing toast rather than stack new ones (Prevents "Toast Spam").

## ✅ Acceptance Criteria
- [ ] Toast is visible on both Desktop (Top-Right) and Mobile (Top-Center).
- [ ] Clicking "VIEW CART" inside the toast triggers the drawer successfully.
- [ ] Contrast ratios for text within the Navy frame pass accessibility standards (WCAG).

## 🛡️ Edge Cases
- **Multi-Toast:** Ensure that adding different items in rapid succession doesn't hide previous feedback too quickly.
- **Click Through:** Ensure toasts don't block the "Contact" button or Navbar during their display phase.
