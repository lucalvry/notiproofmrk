/**
 * Submit all sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver).
 *
 * Run after each production deploy:
 *   node scripts/submit-indexnow.js
 *
 * Reads URLs from the same source-of-truth list as generate-sitemap.js.
 * Pass --only-noindex-fix to submit only the 60 URLs that were previously
 * deployed as NotFound pages (the prerender coverage fix targets).
 */
import https from 'https';

const HOST = 'notiproof.com';
const KEY = '905adab9f38a727f66639d9432cba03b';
const KEY_LOCATION = `https://${HOST}/notiproof-indexnow-${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const PATHS = [
  '/', '/pricing/', '/integrations/', '/use-cases/', '/testimonials/',
  '/product/', '/product/social-proof-notifications/',
  '/product/testimonials-collection-text-image-video/',
  '/product/video-testimonial-recorder/',
  '/product/review-aggregation-showcase-system/',
  '/product/campaign-builder/', '/product/integrations-ecosystem/',
  '/product/analytics-conversion-insights/',
  '/product/visitor-counter-live-visitors/',
  '/product/recent-activity-notifications/',
  '/product/testimonials-widget-reviews-widget/',
  '/use-cases/ecommerce/',
  '/use-cases/saas-social-proof-tools-drive-sign-ups/',
  '/use-cases/social-proof-for-marketing-agencies-impress-clients/',
  '/use-cases/local-business-social-proof-convert-website-visitors/',
  '/integrations/shopify/', '/integrations/wordpress/', '/integrations/zapier/',
  '/integrations/woocommerce/', '/integrations/webflow/', '/integrations/wix/',
  '/integrations/squarespace/', '/integrations/bigcommerce/',
  '/integrations/hubspot/', '/integrations/stripe/', '/integrations/framer/',
  '/integrations/gohighlevel/', '/integrations/kajabi/',
  '/company/', '/company/about/', '/company/contact/', '/company/careers/',
  '/comparisons/', '/comparisons/notiproof-vs-fomo/',
  '/comparisons/notiproof-vs-trustpulse/', '/comparisons/notiproof-vs-proof/',
  '/comparisons/notiproof-vs-provesource/',
  '/comparisons/best-fomo-alternatives/',
  '/comparisons/best-trustpulse-alternatives/',
  '/comparisons/best-provesource-alternatives/',
  '/comparisons/social-proof-pricing-comparison/',
  '/comparisons/notiproof-vs-yotpo/', '/comparisons/notiproof-vs-trustmary/',
  '/comparisons/free-social-proof-tools/',
  '/free-tools/', '/free-tools/ab-test-calculator/',
  '/free-tools/social-proof-roi-calculator/',
  '/free-tools/google-review-link-generator/',
  '/free-tools/testimonial-email-generator/',
  '/free-tools/website-trust-score-checker/',
  '/free-tools/conversion-rate-calculator/',
  '/free-tools/social-proof-audit-checklist/',
  '/free-tools/cart-abandonment-calculator/',
  '/free-tools/review-response-generator/',
  '/resources/', '/resources/blog/', '/resources/guides/',
  '/resources/social-proof/',
  '/resources/social-proof/what-is-social-proof/',
  '/resources/social-proof/social-proof-example/',
  '/resources/social-proof/social-proof-in-marketing/',
  '/resources/social-proof/social-proof-for-websites/',
  '/resources/social-proof/types-of-social-proof/',
  '/resources/social-proof/social-proof-psychology/',
  '/resources/social-proof/social-proof-statistics/',
  '/resources/social-proof/social-proof-ecommerce/',
  '/resources/social-proof/social-proof-local-business/',
  '/resources/social-proof/social-proof-agencies/',
  '/resources/social-proof/social-proof-coaches-creators/',
  '/resources/social-proof/social-proof-restaurants/',
  '/resources/social-proof/ai-generated-social-proof/',
  '/resources/social-proof/negative-social-proof/',
  '/resources/social-proof/social-proof-social-media/',
  '/resources/reviews/',
  '/resources/reviews/how-to-collect-google-reviews/',
  '/resources/reviews/review-aggregation-guide/',
  '/resources/reviews/responding-to-negative-reviews/',
  '/resources/reviews/review-widgets-for-websites/',
  '/resources/reviews/trustpilot-reviews-guide/',
  '/resources/reviews/g2-reviews-guide/',
  '/resources/reviews/yelp-reviews-guide/',
  '/resources/reviews/online-review-statistics/',
  '/resources/reviews/embed-google-reviews/',
  '/resources/reviews/fake-reviews-detection/',
  '/resources/reviews/review-generation-strategies/',
  '/resources/reviews/star-rating-psychology/',
  '/resources/testimonials/',
  '/resources/testimonials/how-to-collect-testimonials/',
  '/resources/testimonials/video-testimonial-guide/',
  '/resources/testimonials/testimonial-page-design/',
  '/resources/testimonials/testimonial-request-email-templates/',
  '/resources/testimonials/video-vs-text-testimonials/',
  '/resources/testimonials/ask-for-video-testimonials/',
  '/resources/testimonials/video-testimonial-examples/',
  '/resources/testimonials/testimonials-for-saas/',
  '/resources/testimonials/case-study-vs-testimonial/',
  '/resources/testimonials/testimonial-ab-testing/',
  '/resources/testimonials/wall-of-love-guide/',
  '/resources/conversion-analytics/',
  '/resources/conversion-analytics/ab-testing-social-proof/',
  '/resources/conversion-analytics/conversion-rate-benchmarks/',
  '/resources/conversion-analytics/measuring-social-proof-roi/',
  '/resources/conversion-analytics/heatmap-analytics-guide/',
  '/resources/conversion-analytics/testimonial-review-roi/',
  '/resources/cro/',
  '/resources/cro/landing-page-optimization/',
  '/resources/cro/ecommerce-conversion-optimization/',
  '/resources/cro/saas-conversion-optimization/',
  '/resources/cro/cart-abandonment/',
  '/resources/cro/cta-optimization/',
  '/resources/cro/exit-intent-strategies/',
  '/resources/cro/product-page-cro/',
  '/resources/cro/checkout-optimization/',
  '/resources/cro/pricing-page-optimization/',
  '/resources/cro/mobile-cro/',
  '/resources/cro/above-the-fold-optimization/',
  '/resources/cro/cro-for-agencies/',
  '/resources/cro/ga4-social-proof-tracking/',
  '/resources/website-trust/',
  '/resources/website-trust/trust-signals-for-ecommerce/',
  '/resources/website-trust/trust-badges-guide/',
  '/resources/website-trust/building-website-credibility/',
  '/resources/website-trust/fomo-marketing-guide/',
  '/resources/website-trust/testimonials-as-trust-signals/',
  '/resources/author/olayinka-olayokun/',
  '/resources/help-center/', '/resources/glossary/', '/resources/topical-map/',
  '/case-studies/', '/case-studies/ecommerce-stylehaven/',
  '/case-studies/saas-conversion/', '/case-studies/agency-brightpath/',
  '/case-studies/local-business-greenleaf/',
  '/privacy-policy/', '/terms-of-service/',
];

const urlList = PATHS.map((p) => `https://${HOST}${p}`);

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
});

console.log(`📤 Submitting ${urlList.length} URLs to IndexNow...`);
console.log(`   Endpoint: ${ENDPOINT}`);
console.log(`   Key location: ${KEY_LOCATION}`);

const req = https.request(
  ENDPOINT,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(body),
    },
  },
  (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      const ok = res.statusCode === 200 || res.statusCode === 202;
      console.log(`\n${ok ? '✅' : '❌'} HTTP ${res.statusCode}`);
      if (data) console.log(`   Response: ${data.slice(0, 500)}`);
      if (!ok) {
        console.error(
          '\nCommon causes:\n' +
            '  • Key file not yet deployed at keyLocation (publish first).\n' +
            '  • Domain mismatch between host and urlList entries.\n' +
            '  • Invalid URLs in the batch.\n'
        );
        process.exit(1);
      }
      console.log('\nBing, Yandex, Seznam, and Naver have been notified.');
      console.log('Recrawl typically begins within minutes to a few hours.');
    });
  }
);

req.on('error', (err) => {
  console.error('❌ Request failed:', err.message);
  process.exit(1);
});

req.write(body);
req.end();
