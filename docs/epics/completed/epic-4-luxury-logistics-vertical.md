---
Status: DONE
Epic_ID: EPC-004
---

# Epic 4: Luxury Logistics Vertical (Fleet & Discovery)

## 🎯 High-Level Goal
Deploy the "Luxury Logistics" vertical as a premium, interactive fleet showroom. This epic focuses on high-impact visual storytelling for high-end vehicles (Lexus, Benz, G-Wagon) and security escort services, integrated with a search-discovery system that allows elite clients to find the perfect transport solution within seconds.

## 🧱 Architectural Principles
- **Visual-First Gallery:** High-resolution vehicle assets prioritized via `next/image` to emphasize luxury.
- **Discovery-First Discovery:** A global search index that allows clients to search by brand, category, or service level.
- **Deep-Link State:** Rental categories (e.g., "Car Rental + Driver") must be synced to the URL, making specific service segments easily shareable with stakeholders.
- **Breadcrumb Context:** A hierarchical navigation path to ensure deep-site structure is always visible to the user and search engines.

## 🛠️ Detailed Requirements & Constraints
- **Logistics Domain Model:**
    ```typescript
    interface LogisticFleetItem {
      id: string;
      model: string;
      brand: 'Mercedes-Benz' | 'Lexus' | 'Land Rover' | 'G-Wagon';
      category: 'Car Rental' | 'Driver Included' | 'Security Escort';
      pricePerDay: number;
      securityGrade?: 'Standard' | 'Armored' | 'Armed Escort';
      features: string[];
    }
    ```
- **Asset Strategy:** Use `object-cover` and `aspect-video` for vehicle cards to maintain a cinematic, wide-format aesthetic.
- **Search Latency:** Implement debounced search with a `300ms` window to prevent UI stutter during heavy filtering.

## 📜 User Stories (Deep-Dive)

### 1. **[Story 4.1: Global Fleet Search & Discovery](../stories/story-4.1-logistics-fleet-discovery.md)**
Connecting the Navbar search to the catalog filtering logic.
- **Scope:** Fuzzy search logic, debounced input, URL parameter synchronization.

### 2. **[Story 4.2: Premium Fleet Portfolio View](../stories/story-4.2-fleet-portfolio-ui.md)**
The high-end grid layout for vehicle fleet display.
- **Scope:** Responsive CSS Grid (1/2/3 columns), card design tokens, optimized image loading.

### 3. **[Story 4.3: Rental Configuration Logic](../stories/story-4.3-logistics-parameters-ui.md)**
Specialized UI for Logistics-specific parameters.
- **Scope:** Date/Day selectors, security escort toggles, price-multiplication logic.

### 4. **[Story 4.4: Breadcrumb Navigation System](../stories/story-4.4-breadcrumb-system.md)**
Hierarchical navigation and SEO structure for the site's deeper routes.
- **Scope:** Path parsing, accessible Nav roles, SEO JSON-LD integration.

## 📈 Success Metrics
- **Visuals:** 100% of vehicle cards pass the brand aesthetic review.
- **Discovery:** User can find and filter a specific car model in less than 3 seconds.
- **SEO:** Breadcrumbs are correctly identified as "ListItems" in Google Search Console previews.
