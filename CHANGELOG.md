# Changelog

## [1.0.0] - SEO, GEO, AEO & GA4 Optimization

### Added
- **Google Analytics 4**: Created `GoogleAnalytics.tsx` and injected it via `layout.tsx` using Next.js `next/script` with a `<Suspense>` wrapper.
- **Analytics Utilities**: Created `analytics.ts` to export helper functions (`trackEngagement`, `trackFormSubmit`, etc.) for GA4 custom events.
- **Google Search Console**: Added dynamic `verification.google` metadata in `layout.tsx`.
- **Breadcrumb Schema**: Added `BreadcrumbList` to `Schema.tsx` for enhanced GEO.

### Changed
- **FAQ Schema Centralization**: Moved `FAQPage` schema from `layout.tsx` into `Schema.tsx`'s unified `@graph` array for better AEO and semantic clustering.
- **Global Types**: Extended `Window` interface in `analytics.ts` to support TypeScript definitions for `window.gtag`.

### Verified
- **Cloudflare Compatibility**: All modifications were strictly scoped to Next.js source files (`src/`). No package manager, build script, or deployment config files were touched.
- **Crawlability**: `robots.ts` correctly permits AI bots (GPTBot, Google-Extended, PerplexityBot, etc.).
- **Indexability**: `sitemap.ts` correctly generates static and dynamic blog routes with priorities and change frequencies.
