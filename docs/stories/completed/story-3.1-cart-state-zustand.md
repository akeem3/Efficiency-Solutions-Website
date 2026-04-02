---
Status: DONE
Story_ID: STR-301
---

# Story 3.1: Global Cart State Management (Zustand)

## 📝 Context & Technical Rationale
The application requires a **unified ecommerce engine** that can handle items from both the *Premium Branding* (Quantity-based) and *Luxury Logistics* (Day/Duration-based) services. Using **Zustand** allows us to maintain a lean, highly-performant state without the "boilerplate" overhead of Redux or the context-rerendering issues of the native React Context API.

## 🎯 Deliverables
- [x] Optimized `useCart` store in `src/hooks/useCart.ts`.
- [x] Cross-tab sync middleware (built-in Zustand `persist`).
- [x] Computed state selectors for total item count and formatted subtotal.

## 🛠️ Detailed Requirements & Specifications
### 1. Store State Types
```typescript
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  metadata: {
    size?: string;
    days?: number;
    hasSecurity?: boolean;
    type: 'branding' | 'logistics';
  };
}
```
### 2. Core Actions
- `addItem(product: CartItem)`: If ID matches, increment quantity. If not, add new item object.
- `removeItem(id: string)`: Decrement quantity; if quantity falls below 1, remove item from array.
- `updateQuantity(id: string, qty: number)`: Manual override for item quantity/duration.
- `clearCart()`: Atomic reset of state.

### 3. Middleware Configuration
- Enable `persist` with `name: "es-application-cart"`.
- Use a `storage` option that defaults to `localStorage`.
- Handshake with `onRehydrateStorage` to prevent hydration mismatches (flash of empty cart) in Next.js.

## ✅ Acceptance Criteria
- [x] State survives page refreshes 100% of the time.
- [x] Items from different categories can coexist in the same array.
- [x] Adding an existing item in Branding correctly increments `quantity`.
- [x] Adding an existing item in Logistics (e.g., G-Wagon) correctly increments `metadata.days`.

## 🛡️ Edge Cases
- **Hydration Sync:** Ensure the "Cart Count" badge is zero until the server-client sync is complete to avoid Hydration Error.
- **Price Mismatch:** Ensure local prices don't drift if global mock data changes (Storage migration strategy).
