

## NotiProof: Full Page Recreation + Koray's Semantic SEO

### Current State
The React app has 5 routes: `/`, `/pricing`, `/integrations`, `/use-cases`, `/testimonials`.

### WordPress Sitemap — All URLs to Recreate

From the sitemap, **44 unique URLs** exist. Here is the full mapping of missing pages organized by section:

```text
EXISTING (5):
  /                    → Index.tsx
  /pricing             → Pricing.tsx
  /integrations        → Integrations.tsx
  /use-cases           → UseCases.tsx
  /testimonials        → Testimonials.tsx

MISSING — Product Pages (11):
  /product/                                        → Product overview hub
  /product/social-proof-notifications/
  /product/testimonials-collection-text-image-video/
  /product/video-testimonial-recorder/
  /product/review-aggregation-showcase-system/
  /product/campaign-builder/
  /product/integrations-ecosystem/
  /product/analytics-conversion-insights/
  /product/visitor-counter-live-visitors/
  /product/recent-activity-notifications/
  /product/testimonials-widget-reviews-widget/

MISSING — Use Case Sub-Pages (4):
  /use-cases/ecommerce/
  /use-cases/saas-social-proof-tools-drive-sign-ups/
  /use-cases/social-proof-for-marketing-agencies-impress-clients/
  /use-cases/local-business-social-proof-convert-website-visitors/

MISSING — Integration Sub-Pages (3):
  /integrations/shopify/
  /integrations/wordpress/
  /integrations/zapier/

MISSING — Company Pages (4):
  /company/                → Company hub
  /company/about/
  /company/contact/
  /company/careers/

MISSING — Resources (Pillar + Cluster) (10):
  /resources/                          → Resource hub
  /resources/social-proof/             → Pillar page
  /resources/social-proof/what-is-social-proof/
  /resources/social-proof/social-proof-example/
  /resources/social-proof/social-proof-in-marketing/
  /resources/social-proof/social-proof-for-websites/
  /resources/social-proof/types-of-social-proof/
  /resources/social-proof/social-proof-psychology/
  /resources/reviews/
  /resources/conversion-analytics/
  /resources/website-trust/
  /resources/testimonials/

MISSING — SEO Landing Pages (3):
  /conversion-optimization-tools/
  /best-social-proof-software/
  /social-proof-notifications/

MISSING — Legal (2):
  /privacy-policy/
  /terms-of-service/

REDIRECT:
  /home/ → redirect to /
```

### Koray's Semantic SEO Principles Applied

1. **Topical Authority via Content Clusters**: The `/resources/social-proof/` pillar page links to all cluster articles (what-is, types, psychology, examples, marketing, websites). Each cluster article links back to the pillar and cross-links siblings. This creates a semantic content network.

2. **Entity Optimization**: Each page defines its primary entity clearly in the H1 and first paragraph. Product pages define the feature entity. Resource pages define the concept entity.

3. **Hierarchical Heading Structure**: Every page follows strict H1 > H2 > H3 hierarchy. No skipped levels. H1 contains the primary keyword naturally.

4. **JSON-LD Schema Markup**: Add structured data per page type:
   - Homepage: `Organization` + `WebSite` + `SiteNavigationElement`
   - Product pages: `SoftwareApplication` + `Product`
   - Pricing: `Product` with `Offer` arrays
   - Resources: `Article` + `BreadcrumbList`
   - FAQ sections: `FAQPage`
   - About: `Organization` + `Person` for team
   - Contact: `ContactPage`

5. **Breadcrumbs**: Add `BreadcrumbList` schema + visible breadcrumb UI on all sub-pages.

6. **Internal Linking Strategy**: Every page includes contextual links to related pages. Footer includes full sitemap links. Product pages link to relevant use cases and resources.

7. **Semantic HTML**: Use `<article>`, `<section>`, `<nav>`, `<aside>`, `<header>`, `<footer>` appropriately. Add `aria-label` attributes.

8. **Meta Tags**: Each page gets unique `<title>` and `<meta description>` via `react-helmet-async`. Titles follow pattern: `Primary Keyword – Brand | Context`.

9. **Contextual Vectors**: Use semantically related terms throughout content (not just primary keywords). E.g., "social proof" pages also reference "trust signals," "conversion psychology," "behavioral validation," "FOMO triggers."

10. **FAQ Schema on Every Commercial Page**: Pricing, product, and use case pages include FAQ sections with `FAQPage` schema.

### Implementation Plan

Due to the scale (37+ new pages), this will be broken into phases:

**Phase 1 — Infrastructure & SEO Foundation**
- Install `react-helmet-async` for per-page meta tags
- Create `SEOHead` component (title, description, schema JSON-LD, canonical)
- Create `Breadcrumbs` component with schema markup
- Create `SchemaMarkup` component for JSON-LD injection
- Update `Layout.tsx` with semantic HTML elements
- Update `Navbar.tsx` with mega-menu for Product, Use Cases, Resources, Company sections
- Update `Footer.tsx` with full sitemap links
- Update `index.html` with Organization schema and proper base meta

**Phase 2 — Product Pages (11 pages)**
- Create `/product/` hub with feature grid linking to sub-pages
- Create 10 individual feature pages using a shared `ProductFeaturePage` template component
- Each page: H1, feature description, benefits, how it works, use cases, FAQ, CTA
- Content sourced from WordPress site

**Phase 3 — Use Case Sub-Pages (4 pages)**
- Create individual use case pages for ecommerce, SaaS, agencies, local business
- Each page: industry-specific hero, pain points, solution, results metrics, testimonials, CTA
- Update `/use-cases` hub to link to sub-pages

**Phase 4 — Integration Sub-Pages (3 pages)**
- Create pages for Shopify, WordPress, Zapier
- Each page: platform-specific setup guide, benefits, features, CTA
- Update `/integrations` hub to link to sub-pages

**Phase 5 — Company Pages (4 pages)**
- `/company/` hub
- `/company/about/` with team, timeline, mission (content from WordPress)
- `/company/contact/` with form, email, FAQ
- `/company/careers/` placeholder

**Phase 6 — Resources / Content Hub (10 pages)**
- `/resources/` hub listing all categories
- `/resources/social-proof/` pillar page (long-form, ~3000 words from WordPress)
- 6 cluster articles under social-proof (what-is, types, psychology, examples, marketing, websites)
- `/resources/reviews/`, `/resources/conversion-analytics/`, `/resources/website-trust/`, `/resources/testimonials/` category hubs
- Use `ResourceArticle` template component with TOC, reading time, breadcrumbs

**Phase 7 — SEO Landing Pages + Legal (5 pages)**
- `/best-social-proof-software/` — comparison/listicle page
- `/social-proof-notifications/` — feature-focused landing page
- `/conversion-optimization-tools/` — tool category page
- `/privacy-policy/` and `/terms-of-service/` — legal content from WordPress
- `/home/` redirect to `/`

**Phase 8 — Cross-cutting SEO**
- Add SEOHead to all existing pages (Index, Pricing, Integrations, UseCases, Testimonials)
- Add breadcrumbs to all sub-pages
- Add FAQ schema to all pages with FAQ sections
- Add internal contextual links throughout content
- Update `robots.txt` and generate XML sitemap component
- Ensure all heading hierarchies are correct

### Technical Notes
- All pages use the existing `Layout.tsx` wrapper (Navbar + Footer)
- Template components (`ProductFeaturePage`, `ResourceArticle`, `UseCasePage`) reduce code duplication
- Routes registered in `App.tsx` with lazy loading via `React.lazy` + `Suspense` for performance
- Content is hardcoded (no CMS) matching WordPress content
- `react-helmet-async` handles per-page `<title>`, `<meta>`, and JSON-LD `<script>` tags

