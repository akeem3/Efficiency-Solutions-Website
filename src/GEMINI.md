# Frontend & Development Standards

This file defines the implementation standards for the `src/` directory to ensure consistency and maintainability.

## Component Architecture
- **Thin Pages**: Files in `app/**/page.tsx` must only handle data fetching/injection and component assembly. No deep JSX or business logic.
- **Atomic Components**: Favor small, reusable components in `src/components/`.
- **Shadcn/UI**: Use `shadcn/ui` components but map their tokens to our brand colors (`#32406a` for Navy, `#c69b59` for Gold) in `globals.css`.

## Styling Conventions
- **Tailwind CSS v4**: Use utility classes. Avoid arbitrary values; prefer theme tokens.
- **Brand Colors**:
  - Primary: `bg-brand-navy` / `text-brand-navy` (#32406a)
  - Secondary: `bg-brand-gold` / `text-brand-gold` (#c69b59)
  - Background: `bg-brand-offwhite` (#f5f6f8)

## Data Handling
- **Mocking**: Until the backend is ready, all data must come from `src/constants/mockData.ts`.
- **Zustand**: Use for client-side state like the shopping cart.
- **Forms**: Always use `react-hook-form` + `zod` for validation.

## SEO & Metadata
- Every page must export a `metadata` object.
- Use the Metadata API for Open Graph (OG) tags to ensure beautiful link previews on WhatsApp.
