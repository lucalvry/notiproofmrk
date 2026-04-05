/**
 * Auto-generates sitemap.xml from route definitions.
 * Run: node scripts/generate-sitemap.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = 'https://notiproof.com';
const TODAY = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/pricing/', priority: '0.9', changefreq: 'monthly' },
  { path: '/integrations/', priority: '0.8', changefreq: 'monthly' },
  { path: '/use-cases/', priority: '0.8', changefreq: 'monthly' },
  { path: '/testimonials/', priority: '0.7', changefreq: 'monthly' },

  // Product
  { path: '/product/', priority: '0.8', changefreq: 'monthly' },
  { path: '/product/social-proof-notifications/', priority: '0.8', changefreq: 'monthly' },
  { path: '/product/testimonials-collection-text-image-video/', priority: '0.8', changefreq: 'monthly' },
  { path: '/product/video-testimonial-recorder/', priority: '0.7', changefreq: 'monthly' },
  { path: '/product/review-aggregation-showcase-system/', priority: '0.7', changefreq: 'monthly' },
  { path: '/product/campaign-builder/', priority: '0.7', changefreq: 'monthly' },
  { path: '/product/integrations-ecosystem/', priority: '0.7', changefreq: 'monthly' },
  { path: '/product/analytics-conversion-insights/', priority: '0.7', changefreq: 'monthly' },
  { path: '/product/visitor-counter-live-visitors/', priority: '0.7', changefreq: 'monthly' },
  { path: '/product/recent-activity-notifications/', priority: '0.7', changefreq: 'monthly' },
  { path: '/product/testimonials-widget-reviews-widget/', priority: '0.7', changefreq: 'monthly' },

  // Use cases
  { path: '/use-cases/ecommerce/', priority: '0.7', changefreq: 'monthly' },
  { path: '/use-cases/saas-social-proof-tools-drive-sign-ups/', priority: '0.7', changefreq: 'monthly' },
  { path: '/use-cases/social-proof-for-marketing-agencies-impress-clients/', priority: '0.7', changefreq: 'monthly' },
  { path: '/use-cases/local-business-social-proof-convert-website-visitors/', priority: '0.7', changefreq: 'monthly' },

  // Integrations
  { path: '/integrations/shopify/', priority: '0.7', changefreq: 'monthly' },
  { path: '/integrations/wordpress/', priority: '0.7', changefreq: 'monthly' },
  { path: '/integrations/zapier/', priority: '0.7', changefreq: 'monthly' },

  // Company
  { path: '/company/', priority: '0.6', changefreq: 'monthly' },
  { path: '/company/about/', priority: '0.6', changefreq: 'monthly' },
  { path: '/company/contact/', priority: '0.6', changefreq: 'monthly' },
  { path: '/company/careers/', priority: '0.5', changefreq: 'monthly' },

  // Resources — Social Proof cluster
  { path: '/resources/', priority: '0.8', changefreq: 'weekly' },
  { path: '/resources/blog/', priority: '0.8', changefreq: 'weekly' },
  { path: '/resources/guides/', priority: '0.7', changefreq: 'weekly' },
  { path: '/resources/social-proof/', priority: '0.9', changefreq: 'weekly' },
  { path: '/resources/social-proof/what-is-social-proof/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/social-proof/social-proof-example/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/social-proof/social-proof-in-marketing/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/social-proof/social-proof-for-websites/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/social-proof/types-of-social-proof/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/social-proof/social-proof-psychology/', priority: '0.8', changefreq: 'monthly' },

  // Resources — Reviews cluster
  { path: '/resources/reviews/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/reviews/how-to-collect-google-reviews/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/reviews/review-aggregation-guide/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/reviews/responding-to-negative-reviews/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/reviews/review-widgets-for-websites/', priority: '0.8', changefreq: 'monthly' },

  // Resources — Testimonials cluster
  { path: '/resources/testimonials/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/testimonials/how-to-collect-testimonials/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/testimonials/video-testimonial-guide/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/testimonials/testimonial-page-design/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/testimonials/testimonial-request-email-templates/', priority: '0.8', changefreq: 'monthly' },

  // Resources — Conversion Analytics cluster
  { path: '/resources/conversion-analytics/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/conversion-analytics/ab-testing-social-proof/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/conversion-analytics/conversion-rate-benchmarks/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/conversion-analytics/measuring-social-proof-roi/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/conversion-analytics/heatmap-analytics-guide/', priority: '0.8', changefreq: 'monthly' },

  // Resources — Website Trust cluster
  { path: '/resources/website-trust/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/website-trust/trust-signals-for-ecommerce/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/website-trust/trust-badges-guide/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/website-trust/building-website-credibility/', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/website-trust/fomo-marketing-guide/', priority: '0.8', changefreq: 'monthly' },

  // Resources — Other
  { path: '/resources/help-center/', priority: '0.6', changefreq: 'monthly' },
  { path: '/resources/glossary/', priority: '0.6', changefreq: 'monthly' },

  // SEO landing pages
  { path: '/best-social-proof-software/', priority: '0.8', changefreq: 'monthly' },
  { path: '/social-proof-notifications/', priority: '0.8', changefreq: 'monthly' },
  { path: '/conversion-optimization-tools/', priority: '0.8', changefreq: 'monthly' },

  // Legal
  { path: '/privacy-policy/', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-service/', priority: '0.3', changefreq: 'yearly' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${DOMAIN}${r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const outPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf-8');
console.log(`✅ Sitemap generated with ${routes.length} URLs → public/sitemap.xml`);
