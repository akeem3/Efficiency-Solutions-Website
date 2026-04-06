# Epic 8 Implementation Plan: Advanced SEO & OG Automation

This plan outlines the systematic implementation of automated metadata, Open Graph (OG) social tags, and indexing configurations as defined in Epic-008.

## Phase 1: Environment Configuration (USER ACTION REQUIRED)
To implement dynamic metadata effectively, the application needs to know its own production URL (or local URL during testing) so that `og:url`, `og:image`, and sitemap links can be formatted absolutely as required by search engines.

1. **Update `src/env.ts`**: We will add `NEXT_PUBLIC_SITE_URL: z.string().url()` to the client-side validation schema.
2. **Update `.env`**: You will need to add `NEXT_PUBLIC_SITE_URL=http://localhost:3000` locally, and explicitly set it in your Vercel deployment variables.

## Phase 2: Dynamic Metadata Factory
1. **Create `src/lib/metadata.ts`**:
   - Construct a `constructMetadata` helper function that wraps Next.js `Metadata` types.
   - It will take parameters like `title`, `description`, `image`, and `noIndex`.
   - It will output a standardized formatting schema (`title: "[Title] | Efficiency Solutions"`) and correctly configured `openGraph` and `twitter` card objects.

2. **Integration across Service Pages**:
   - Refactor `src/app/page.tsx`, `src/app/services/branding/page.tsx`, `logistics`, `accounting`, `digital`, and `tailoring` to export a `generateMetadata` function utilizing the central helper.

## Phase 3: Open Graph Image Management
1. **Directory Structure**: Create a `public/og/` directory.
2. **Asset Assignment**: Assign default high-fidelity images for each service (we can utilize free high-res placeholder images mapped to the `constructMetadata` calls).
3. **Validation**: Ensure `twitter:card` is set to `summary_large_image` to guarantee maximal visible real estate on social platforms.

## Phase 4: Search Indexing (Sitemap & Robots)
1. **Create `src/app/sitemap.ts`**:
   - Generate automated XML linking to the root path and all 5 primary service verticals.
   - Set priority values dynamically (`1.0` for home, `0.8` for services).
2. **Create `src/app/robots.ts`**:
   - Allow broad web crawler indexing while specifically disallowing `\/admin\*` to prevent CMS leaks to Google.
