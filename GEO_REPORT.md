# GEO (Generative Engine Optimization) Report

## Files Modified
- `src/components/seo/Schema.tsx`

## Reason for Change
To optimize the website for Large Language Models (LLMs) and Answer Engines (ChatGPT, Gemini, Perplexity) by providing clear entity relationships and site hierarchy.

## Before
- The site had standard `Organization` and `LocalBusiness` schemas, but lacked a structured map of the site's hierarchy (`BreadcrumbList`).

## After
- Added `BreadcrumbList` schema to explicitly define the relationship between Home, Logistics, Products, and Distribution.
- Integrated `FAQPage` directly into the unified JSON-LD graph.

## Expected SEO Impact
- **Medium**: Google uses BreadcrumbList for rich snippets in SERPs, which can improve click-through rates (CTR).

## Expected GEO Impact
- **High**: LLMs rely heavily on structured data to understand context. Explicitly linking the brand's services into a BreadcrumbList establishes authority and semantic clustering.

## Expected AEO Impact
- **High**: Answer Engines will use the integrated FAQPage and unified schema to confidently extract precise answers for queries like "Does Lauls Private Limited do logistics?".

## Rollback Instructions
To rollback these changes:
1. Revert `src/components/seo/Schema.tsx` by removing the `BreadcrumbList` and `FAQPage` objects from the `@graph` array.

## Remaining Recommendations
- Add specific `Service` schemas for EV Trucks and logistics to explicitly define the exact offerings to AI models.
