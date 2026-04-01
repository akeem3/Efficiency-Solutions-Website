---
Status: TODO
Story_ID: STR-401
---

# Story 4.1: Logistics Fleet Discovery & Search

## 📝 Context & Technical Rationale
Luxury clients often start their journey with a specific need: "I need a G-Wagon" or "Show me Armored Vehicles." The global search in the Navbar must act as a high-speed index for the Logistics vertical to fulfill these intents instantly.

## 🎯 Deliverables
- [ ] Debounced Search Indexer logic.
- [ ] Result filtering for `/logistics` route using query params.
- [ ] No-Result state with "Service Alternative" recommendations.

## 🛠️ Detailed Requirements & Specifications
### 1. The Search Handshake
- **Trigger:** Typing in the Navbar `Search` input.
- **Logic:** Debounce input for `300ms` before filtering the fleet.
- **Redirect:** If the user is on the *Home* page and searches, redirect to `/logistics?search=[TERM]`. If already on `/logistics`, update the view in-place.

### 2. Search Scope
- Must index: `model`, `brand`, `category`, and `features` (e.g., searching "sunroof" or "ac" should reveal relevant cars).

### 3. UX Feedback
- Search result count: "Showing [count] Luxury Vehicles for [Search Term]".
- Result clearing: Simple "Clear Search" (LuX icon) that resets the `/logistics` view.

## ✅ Acceptance Criteria
- [ ] Entering "Lexus" filters the fleet to only Lexus vehicles.
- [ ] The search can find vehicles based on features (e.g., "Armed" for Security Escorts).
- [ ] The Navbar search bar doesn't lose focus during the redirect to the Logistics page.

## 🛡️ Edge Cases
- **Case Sensitivity:** Search must be 100% case-insensitive.
- **Typos:** Basic fuzzy matching (matched substrings) to ensure "Wagon" finds "G-Wagon."
