---
Status: DONE
---

# Story 2.3: Client-Side Filter & Sort Logic

## 📝 Context
This story brings the catalog to life. Users need to filter through the branding inventory by category, search by name, and sort by price. All logic must be handled on the client for instant responsiveness.

## 🎯 Deliverables
- [x] Filtering logic for the Sidebar.
- [x] Sorting functionality for the "Sort By" dropdown.
- [x] Real-time search in the catalog header.
- [x] URL State Synchronization.

## 🛠️ Requirements & Constraints
- **URL Sync:** If a user selects "Apparel", the URL should update to `/services/branding?category=apparel`. This allows users to share filtered links.
- **Sorting Logic:**
    - Price: Low to High.
    - Price: High to Low.
    - Alphabetical (A-Z).
- **Search:** Implement a simple filter that checks `name` and `description`.

## ⚙️ Technical Implementation Notes
1. Use `useSearchParams` from `next/navigation` to read and write filters to the URL.
2. Process the mock data inside a `useMemo` block to ensure sorting/filtering doesn't lag the UI during renders.
3. Add a "Clear Filters" button that appears only when active filters exist.

## ✅ Acceptance Criteria
- [x] Performance check: Filtering 8+ products feels "instant" (< 50ms).
- [x] URL check: Refreshing the page with `?category=Apparel` in the URL preserves the filter state.
- [x] Search check: Typing "Mug" instantly hides everything except your mug products.
