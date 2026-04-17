/**
 * Auto-generates sitemap.xml from route definitions.
 * Run: node scripts/generate-sitemap.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = 'https://notiproof.com';

// Differentiated lastmod dates by page type
const dates = {
  core: '2026-04-17',      // Homepage, pricing, product hub
  product: '2026-04-17',   // Product feature pages
  resource: '2026-04-17',  // Resource articles
  comparison: '2026-04-17',// Comparison pages
  legal: '2025-12-01',     // Privacy, terms
  company: '2026-04-17',   // About, contact, careers
  tool: '2026-04-17',      // Free tools
};

const d = (type) => dates[type] || dates.core;

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: d('core') },
  { path: '/pricing/', priority: '0.9', changefreq: 'monthly', lastmod: d('core') },
  { path: '/integrations/', priority: '0.8', changefreq: 'monthly', lastmod: d('product') },
  { path: '/use-cases/', priority: '0.8', changefreq: 'monthly', lastmod: d('product') },
  { path: '/testimonials/', priority: '0.7', changefreq: 'monthly', lastmod: d('core') },

  // Product
  { path: '/product/', priority: '0.8', changefreq: 'monthly', lastmod: d('core') },
  { path: '/product/social-proof-notifications/', priority: '0.8', changefreq: 'monthly', lastmod: d('product') },
  { path: '/product/testimonials-collection-text-image-video/', priority: '0.8', changefreq: 'monthly', lastmod: d('product') },
  { path: '/product/video-testimonial-recorder/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/product/review-aggregation-showcase-system/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/product/campaign-builder/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/product/integrations-ecosystem/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/product/analytics-conversion-insights/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/product/visitor-counter-live-visitors/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/product/recent-activity-notifications/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/product/testimonials-widget-reviews-widget/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },

  // Use cases
  { path: '/use-cases/ecommerce/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/use-cases/saas-social-proof-tools-drive-sign-ups/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/use-cases/social-proof-for-marketing-agencies-impress-clients/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/use-cases/local-business-social-proof-convert-website-visitors/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },

  // Integrations
  { path: '/integrations/shopify/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/wordpress/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/zapier/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/woocommerce/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/webflow/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/wix/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/squarespace/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/bigcommerce/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/hubspot/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/stripe/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/framer/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/gohighlevel/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },
  { path: '/integrations/kajabi/', priority: '0.7', changefreq: 'monthly', lastmod: d('product') },

  // Company
  { path: '/company/', priority: '0.6', changefreq: 'monthly', lastmod: d('company') },
  { path: '/company/about/', priority: '0.6', changefreq: 'monthly', lastmod: d('company') },
  { path: '/company/contact/', priority: '0.6', changefreq: 'monthly', lastmod: d('company') },
  { path: '/company/careers/', priority: '0.5', changefreq: 'monthly', lastmod: d('company') },

  // Comparisons
  { path: '/comparisons/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },
  { path: '/comparisons/notiproof-vs-fomo/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },
  { path: '/comparisons/notiproof-vs-trustpulse/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },
  { path: '/comparisons/notiproof-vs-proof/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },
  { path: '/comparisons/notiproof-vs-provesource/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },

  // Free Tools
  { path: '/free-tools/', priority: '0.8', changefreq: 'monthly', lastmod: d('tool') },
  { path: '/free-tools/ab-test-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: d('tool') },
  { path: '/free-tools/social-proof-roi-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: d('tool') },
  { path: '/free-tools/google-review-link-generator/', priority: '0.7', changefreq: 'monthly', lastmod: d('tool') },
  { path: '/free-tools/testimonial-email-generator/', priority: '0.7', changefreq: 'monthly', lastmod: d('tool') },
  { path: '/free-tools/website-trust-score-checker/', priority: '0.7', changefreq: 'monthly', lastmod: d('tool') },
  { path: '/free-tools/conversion-rate-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: d('tool') },
  { path: '/free-tools/social-proof-audit-checklist/', priority: '0.7', changefreq: 'monthly', lastmod: d('tool') },
  { path: '/free-tools/cart-abandonment-calculator/', priority: '0.7', changefreq: 'monthly', lastmod: d('tool') },
  { path: '/free-tools/review-response-generator/', priority: '0.7', changefreq: 'monthly', lastmod: d('tool') },

  // Resources — Social Proof cluster
  { path: '/resources/', priority: '0.8', changefreq: 'weekly', lastmod: d('resource') },
  { path: '/resources/blog/', priority: '0.8', changefreq: 'weekly', lastmod: d('resource') },
  { path: '/resources/guides/', priority: '0.7', changefreq: 'weekly', lastmod: d('resource') },
  { path: '/resources/social-proof/', priority: '0.9', changefreq: 'weekly', lastmod: d('resource') },
  { path: '/resources/social-proof/what-is-social-proof/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-20' },
  { path: '/resources/social-proof/social-proof-example/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-22' },
  { path: '/resources/social-proof/social-proof-in-marketing/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-25' },
  { path: '/resources/social-proof/social-proof-for-websites/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-01' },
  { path: '/resources/social-proof/types-of-social-proof/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-03' },
  { path: '/resources/social-proof/social-proof-psychology/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { path: '/resources/social-proof/social-proof-statistics/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-01-15' },
  { path: '/resources/social-proof/social-proof-ecommerce/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-01' },
  { path: '/resources/social-proof/social-proof-local-business/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-10' },
  { path: '/resources/social-proof/social-proof-agencies/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-15' },
  { path: '/resources/social-proof/social-proof-coaches-creators/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-20' },
  { path: '/resources/social-proof/social-proof-restaurants/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-25' },
  { path: '/resources/social-proof/ai-generated-social-proof/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-01' },
  { path: '/resources/social-proof/negative-social-proof/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-10' },
  { path: '/resources/social-proof/social-proof-social-media/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-15' },

  // Resources — Reviews cluster
  { path: '/resources/reviews/', priority: '0.8', changefreq: 'monthly', lastmod: d('resource') },
  { path: '/resources/reviews/how-to-collect-google-reviews/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-15' },
  { path: '/resources/reviews/review-aggregation-guide/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-18' },
  { path: '/resources/reviews/responding-to-negative-reviews/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-20' },
  { path: '/resources/reviews/review-widgets-for-websites/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-22' },
  { path: '/resources/reviews/trustpilot-reviews-guide/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-01' },
  { path: '/resources/reviews/g2-reviews-guide/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-02' },
  { path: '/resources/reviews/yelp-reviews-guide/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-03' },
  { path: '/resources/reviews/online-review-statistics/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-04' },
  { path: '/resources/reviews/embed-google-reviews/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-05' },
  { path: '/resources/reviews/fake-reviews-detection/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-06' },
  { path: '/resources/reviews/review-generation-strategies/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-07' },
  { path: '/resources/reviews/star-rating-psychology/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-08' },

  // Resources — Testimonials cluster
  { path: '/resources/testimonials/', priority: '0.8', changefreq: 'monthly', lastmod: d('resource') },
  { path: '/resources/testimonials/how-to-collect-testimonials/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-01-28' },
  { path: '/resources/testimonials/video-testimonial-guide/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-01' },
  { path: '/resources/testimonials/testimonial-page-design/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-05' },
  { path: '/resources/testimonials/testimonial-request-email-templates/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-08' },
  { path: '/resources/testimonials/video-vs-text-testimonials/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-01' },
  { path: '/resources/testimonials/ask-for-video-testimonials/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-02' },
  { path: '/resources/testimonials/video-testimonial-examples/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-03' },
  { path: '/resources/testimonials/testimonials-for-saas/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-04' },
  { path: '/resources/testimonials/case-study-vs-testimonial/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-05' },
  { path: '/resources/testimonials/testimonial-ab-testing/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-06' },
  { path: '/resources/testimonials/wall-of-love-guide/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-07' },

  // Resources — Conversion Analytics cluster
  { path: '/resources/conversion-analytics/', priority: '0.8', changefreq: 'monthly', lastmod: d('resource') },
  { path: '/resources/conversion-analytics/ab-testing-social-proof/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-08' },
  { path: '/resources/conversion-analytics/conversion-rate-benchmarks/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-10' },
  { path: '/resources/conversion-analytics/measuring-social-proof-roi/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-12' },
  { path: '/resources/conversion-analytics/heatmap-analytics-guide/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-14' },
  { path: '/resources/conversion-analytics/testimonial-review-roi/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-01' },

  // Resources — CRO cluster
  { path: '/resources/cro/', priority: '0.8', changefreq: 'monthly', lastmod: d('resource') },
  { path: '/resources/cro/landing-page-optimization/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-02' },
  { path: '/resources/cro/ecommerce-conversion-optimization/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-03' },
  { path: '/resources/cro/saas-conversion-optimization/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-03' },
  { path: '/resources/cro/cart-abandonment/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-04' },
  { path: '/resources/cro/cta-optimization/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-04' },
  { path: '/resources/cro/exit-intent-strategies/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-05' },
  { path: '/resources/cro/product-page-cro/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-01' },
  { path: '/resources/cro/checkout-optimization/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-02' },
  { path: '/resources/cro/pricing-page-optimization/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-03' },
  { path: '/resources/cro/mobile-cro/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-04' },
  { path: '/resources/cro/above-the-fold-optimization/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-05' },
  { path: '/resources/cro/cro-for-agencies/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-06' },
  { path: '/resources/cro/ga4-social-proof-tracking/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-07' },

  // Resources — Website Trust cluster (+ testimonials-as-trust-signals)
  { path: '/resources/website-trust/', priority: '0.8', changefreq: 'monthly', lastmod: d('resource') },
  { path: '/resources/website-trust/trust-signals-for-ecommerce/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-01-20' },
  { path: '/resources/website-trust/trust-badges-guide/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-01-22' },
  { path: '/resources/website-trust/building-website-credibility/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-01-25' },
  { path: '/resources/website-trust/fomo-marketing-guide/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-01-28' },
  { path: '/resources/website-trust/testimonials-as-trust-signals/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-04-01' },

  // Resources — Other
  { path: '/resources/author/olayinka-olayokun/', priority: '0.6', changefreq: 'monthly', lastmod: d('resource') },
  { path: '/resources/help-center/', priority: '0.6', changefreq: 'monthly', lastmod: d('company') },
  { path: '/resources/glossary/', priority: '0.6', changefreq: 'monthly', lastmod: d('resource') },
  { path: '/resources/topical-map/', priority: '0.7', changefreq: 'monthly', lastmod: d('resource') },


  // Alternatives pages
  { path: '/comparisons/best-fomo-alternatives/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },
  { path: '/comparisons/best-trustpulse-alternatives/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },
  { path: '/comparisons/best-provesource-alternatives/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },
  { path: '/comparisons/social-proof-pricing-comparison/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },
  { path: '/comparisons/notiproof-vs-yotpo/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },
  { path: '/comparisons/notiproof-vs-trustmary/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },
  { path: '/comparisons/free-social-proof-tools/', priority: '0.8', changefreq: 'monthly', lastmod: d('comparison') },

  // Case Studies
  { path: '/case-studies/', priority: '0.8', changefreq: 'monthly', lastmod: d('resource') },
  { path: '/case-studies/ecommerce-stylehaven/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-12' },
  { path: '/case-studies/saas-conversion/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-14' },
  { path: '/case-studies/agency-brightpath/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-01' },
  { path: '/case-studies/local-business-greenleaf/', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },

  // Legal
  { path: '/privacy-policy/', priority: '0.3', changefreq: 'yearly', lastmod: d('legal') },
  { path: '/terms-of-service/', priority: '0.3', changefreq: 'yearly', lastmod: d('legal') },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${DOMAIN}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
const outPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf-8');
console.log(`✅ Sitemap generated with ${routes.length} URLs → public/sitemap.xml`);
