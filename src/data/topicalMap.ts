/**
 * NotiProof Topical Map — Koray Tuğberk GÜBÜR Pillar 1 Deliverable
 *
 * Documented hierarchy of every topic, subtopic, and the macro/micro entities
 * each page covers. This is the single source of truth for content planning,
 * topical authority audits, and contextual coverage gap analysis.
 *
 * Structure:
 *   pillar (macro topic) → clusters (subtopics) → entities (Wikipedia/Wikidata refs)
 *
 * When adding new content:
 *   1. Find or add the pillar in `topicalMap`
 *   2. Add the cluster slug + URL + macro entity
 *   3. Pass `about` and `mentions` to ResourceArticle from the entries here
 */

export interface TopicalEntity {
  name: string;
  /** Canonical Wikipedia / Wikidata URL — feeds Article.about[].sameAs */
  sameAs?: string;
}

export interface ClusterArticle {
  slug: string;
  title: string;
  url: string;
  /** Primary macro entity this article covers (Article.about) */
  about: TopicalEntity;
  /** Secondary entities mentioned in the body (Article.mentions) */
  mentions?: TopicalEntity[];
  /** Keyword vector reinforcement (Article.keywords) */
  keywords?: string[];
  /** Coverage status — used for audit reports */
  status: "published" | "planned" | "needs-update";
}

export interface TopicalPillar {
  /** Pillar name (e.g. "Social Proof") */
  name: string;
  /** Pillar URL — the hub page */
  url: string;
  /** Macro entity for the entire pillar */
  about: TopicalEntity;
  /** Short description of the topical authority claim */
  description: string;
  /** All cluster articles under this pillar */
  clusters: ClusterArticle[];
}

// ============================================================================
// Canonical entities (single source of truth — reuse across articles)
// ============================================================================

export const ENTITIES = {
  socialProof: { name: "Social Proof", sameAs: "https://en.wikipedia.org/wiki/Social_proof" },
  cro: { name: "Conversion Rate Optimization", sameAs: "https://en.wikipedia.org/wiki/Conversion_rate_optimization" },
  testimonial: { name: "Testimonial", sameAs: "https://en.wikipedia.org/wiki/Testimonial" },
  customerReview: { name: "Customer Review", sameAs: "https://en.wikipedia.org/wiki/Customer_review" },
  trustSignal: { name: "Trust (Social Science)", sameAs: "https://en.wikipedia.org/wiki/Trust_(social_science)" },
  webAnalytics: { name: "Web Analytics", sameAs: "https://en.wikipedia.org/wiki/Web_analytics" },
  abTesting: { name: "A/B Testing", sameAs: "https://en.wikipedia.org/wiki/A/B_testing" },
  fomo: { name: "Fear of Missing Out", sameAs: "https://en.wikipedia.org/wiki/Fear_of_missing_out" },
  ecommerce: { name: "E-commerce", sameAs: "https://en.wikipedia.org/wiki/E-commerce" },
  saas: { name: "Software as a Service", sameAs: "https://en.wikipedia.org/wiki/Software_as_a_service" },
  landingPage: { name: "Landing Page", sameAs: "https://en.wikipedia.org/wiki/Landing_page" },
  shoppingCartAbandonment: { name: "Shopping Cart Abandonment", sameAs: "https://en.wikipedia.org/wiki/Abandoned_shopping_cart" },
  callToAction: { name: "Call to Action (Marketing)", sameAs: "https://en.wikipedia.org/wiki/Call_to_action_(marketing)" },
  googleReviews: { name: "Google Reviews", sameAs: "https://en.wikipedia.org/wiki/Google_Maps#Google_Reviews" },
  trustpilot: { name: "Trustpilot", sameAs: "https://en.wikipedia.org/wiki/Trustpilot" },
  yelp: { name: "Yelp", sameAs: "https://en.wikipedia.org/wiki/Yelp" },
  g2: { name: "G2 (company)", sameAs: "https://en.wikipedia.org/wiki/G2_(company)" },
  ugc: { name: "User-Generated Content", sameAs: "https://en.wikipedia.org/wiki/User-generated_content" },
  heatmap: { name: "Heat Map", sameAs: "https://en.wikipedia.org/wiki/Heat_map" },
  ga4: { name: "Google Analytics", sameAs: "https://en.wikipedia.org/wiki/Google_Analytics" },
  starRating: { name: "Star (rating system)", sameAs: "https://en.wikipedia.org/wiki/Star_(classification)" },
  caseStudy: { name: "Case Study", sameAs: "https://en.wikipedia.org/wiki/Case_study" },
  trustBadge: { name: "Trustmark", sameAs: "https://en.wikipedia.org/wiki/Trustmark" },
} as const;

// ============================================================================
// Topical Map — 6 Pillars
// ============================================================================

export const topicalMap: TopicalPillar[] = [
  {
    name: "Social Proof",
    url: "/resources/social-proof/",
    about: ENTITIES.socialProof,
    description: "Macro pillar covering the psychology, types, statistics, and applications of social proof in marketing.",
    clusters: [
      { slug: "what-is-social-proof", title: "What Is Social Proof?", url: "/resources/social-proof/what-is-social-proof/", about: ENTITIES.socialProof, mentions: [ENTITIES.testimonial, ENTITIES.customerReview, ENTITIES.trustSignal], status: "published" },
      { slug: "social-proof-psychology", title: "Social Proof Psychology", url: "/resources/social-proof/social-proof-psychology/", about: ENTITIES.socialProof, mentions: [ENTITIES.fomo], status: "published" },
      { slug: "types-of-social-proof", title: "Types of Social Proof", url: "/resources/social-proof/types-of-social-proof/", about: ENTITIES.socialProof, mentions: [ENTITIES.testimonial, ENTITIES.customerReview, ENTITIES.ugc, ENTITIES.caseStudy], status: "published" },
      { slug: "social-proof-examples", title: "Social Proof Examples", url: "/resources/social-proof/social-proof-examples/", about: ENTITIES.socialProof, status: "published" },
      { slug: "social-proof-statistics", title: "Social Proof Statistics", url: "/resources/social-proof/social-proof-statistics/", about: ENTITIES.socialProof, mentions: [ENTITIES.cro], status: "published" },
      { slug: "social-proof-notifications", title: "Social Proof Notifications", url: "/resources/social-proof/social-proof-notifications/", about: ENTITIES.socialProof, mentions: [ENTITIES.fomo], status: "published" },
      { slug: "social-proof-for-websites", title: "Social Proof for Websites", url: "/resources/social-proof/social-proof-for-websites/", about: ENTITIES.socialProof, mentions: [ENTITIES.trustBadge], status: "published" },
      { slug: "social-proof-landing-pages", title: "Social Proof on Landing Pages", url: "/resources/social-proof/social-proof-landing-pages/", about: ENTITIES.landingPage, mentions: [ENTITIES.socialProof, ENTITIES.cro], status: "published" },
      { slug: "social-proof-ecommerce", title: "Social Proof for E-commerce", url: "/resources/social-proof/social-proof-ecommerce/", about: ENTITIES.socialProof, mentions: [ENTITIES.ecommerce], status: "published" },
      { slug: "social-proof-b2b-saas", title: "Social Proof for B2B SaaS", url: "/resources/social-proof/social-proof-b2b-saas/", about: ENTITIES.socialProof, mentions: [ENTITIES.saas], status: "published" },
      { slug: "social-proof-local-business", title: "Social Proof for Local Business", url: "/resources/social-proof/social-proof-local-business/", about: ENTITIES.socialProof, status: "published" },
      { slug: "social-proof-restaurants", title: "Social Proof for Restaurants", url: "/resources/social-proof/social-proof-restaurants/", about: ENTITIES.socialProof, status: "published" },
      { slug: "social-proof-agencies", title: "Social Proof for Agencies", url: "/resources/social-proof/social-proof-agencies/", about: ENTITIES.socialProof, status: "published" },
      { slug: "social-proof-coaches-creators", title: "Social Proof for Coaches & Creators", url: "/resources/social-proof/social-proof-coaches-creators/", about: ENTITIES.socialProof, status: "published" },
      { slug: "social-proof-in-marketing", title: "Social Proof in Marketing", url: "/resources/social-proof/social-proof-in-marketing/", about: ENTITIES.socialProof, status: "published" },
      { slug: "social-proof-social-media", title: "Social Proof on Social Media", url: "/resources/social-proof/social-proof-social-media/", about: ENTITIES.socialProof, status: "published" },
      { slug: "negative-social-proof", title: "Negative Social Proof", url: "/resources/social-proof/negative-social-proof/", about: ENTITIES.socialProof, status: "published" },
      { slug: "ai-generated-social-proof", title: "AI-Generated Social Proof", url: "/resources/social-proof/ai-generated-social-proof/", about: ENTITIES.socialProof, status: "published" },
      { slug: "user-generated-content", title: "UGC as Social Proof", url: "/resources/social-proof/user-generated-content-social-proof/", about: ENTITIES.ugc, mentions: [ENTITIES.socialProof], status: "published" },
      { slug: "reviews-and-social-proof", title: "Reviews and Social Proof", url: "/resources/social-proof/reviews-and-social-proof/", about: ENTITIES.customerReview, mentions: [ENTITIES.socialProof], status: "published" },
    ],
  },
  {
    name: "Conversion Rate Optimization",
    url: "/resources/cro/",
    about: ENTITIES.cro,
    description: "Macro pillar covering CRO methodology, page-level optimization, and behavioral testing.",
    clusters: [
      { slug: "above-the-fold", title: "Above-the-Fold Optimization", url: "/resources/cro/above-the-fold-optimization/", about: ENTITIES.cro, mentions: [ENTITIES.landingPage], status: "published" },
      { slug: "cta-optimization", title: "CTA Optimization", url: "/resources/cro/cta-optimization/", about: ENTITIES.callToAction, mentions: [ENTITIES.cro], status: "published" },
      { slug: "landing-page-optimization", title: "Landing Page Optimization", url: "/resources/cro/landing-page-optimization/", about: ENTITIES.landingPage, mentions: [ENTITIES.cro], status: "published" },
      { slug: "product-page-cro", title: "Product Page CRO", url: "/resources/cro/product-page-cro/", about: ENTITIES.cro, mentions: [ENTITIES.ecommerce], status: "published" },
      { slug: "checkout-optimization", title: "Checkout Optimization", url: "/resources/cro/checkout-optimization/", about: ENTITIES.cro, mentions: [ENTITIES.ecommerce, ENTITIES.shoppingCartAbandonment], status: "published" },
      { slug: "cart-abandonment", title: "Cart Abandonment", url: "/resources/cro/cart-abandonment/", about: ENTITIES.shoppingCartAbandonment, mentions: [ENTITIES.cro], status: "published" },
      { slug: "exit-intent-strategies", title: "Exit Intent Strategies", url: "/resources/cro/exit-intent-strategies/", about: ENTITIES.cro, status: "published" },
      { slug: "pricing-page-optimization", title: "Pricing Page Optimization", url: "/resources/cro/pricing-page-optimization/", about: ENTITIES.cro, mentions: [ENTITIES.saas], status: "published" },
      { slug: "mobile-cro", title: "Mobile CRO", url: "/resources/cro/mobile-cro/", about: ENTITIES.cro, status: "published" },
      { slug: "ecommerce-cro", title: "E-commerce CRO", url: "/resources/cro/ecommerce-cro/", about: ENTITIES.cro, mentions: [ENTITIES.ecommerce], status: "published" },
      { slug: "saas-cro", title: "SaaS CRO", url: "/resources/cro/saas-cro/", about: ENTITIES.cro, mentions: [ENTITIES.saas], status: "published" },
      { slug: "cro-for-agencies", title: "CRO for Agencies", url: "/resources/cro/cro-for-agencies/", about: ENTITIES.cro, status: "published" },
      { slug: "ga4-social-proof-tracking", title: "GA4 Social Proof Tracking", url: "/resources/cro/ga4-social-proof-tracking/", about: ENTITIES.ga4, mentions: [ENTITIES.socialProof, ENTITIES.cro], status: "published" },
    ],
  },
  {
    name: "Customer Reviews",
    url: "/resources/reviews/",
    about: ENTITIES.customerReview,
    description: "Macro pillar covering review collection, aggregation, response, and platform-specific guides.",
    clusters: [
      { slug: "how-to-collect-google-reviews", title: "How to Collect Google Reviews", url: "/resources/reviews/how-to-collect-google-reviews/", about: ENTITIES.googleReviews, mentions: [ENTITIES.customerReview], status: "published" },
      { slug: "review-generation-strategies", title: "Review Generation Strategies", url: "/resources/reviews/review-generation-strategies/", about: ENTITIES.customerReview, status: "published" },
      { slug: "responding-to-negative-reviews", title: "Responding to Negative Reviews", url: "/resources/reviews/responding-to-negative-reviews/", about: ENTITIES.customerReview, status: "published" },
      { slug: "fake-reviews-detection", title: "Fake Reviews Detection", url: "/resources/reviews/fake-reviews-detection/", about: ENTITIES.customerReview, status: "published" },
      { slug: "review-aggregation-guide", title: "Review Aggregation Guide", url: "/resources/reviews/review-aggregation-guide/", about: ENTITIES.customerReview, status: "published" },
      { slug: "embed-google-reviews", title: "Embed Google Reviews", url: "/resources/reviews/embed-google-reviews/", about: ENTITIES.googleReviews, status: "published" },
      { slug: "review-widgets-for-websites", title: "Review Widgets for Websites", url: "/resources/reviews/review-widgets-for-websites/", about: ENTITIES.customerReview, status: "published" },
      { slug: "trustpilot-reviews-guide", title: "Trustpilot Reviews Guide", url: "/resources/reviews/trustpilot-reviews-guide/", about: ENTITIES.trustpilot, mentions: [ENTITIES.customerReview], status: "published" },
      { slug: "yelp-reviews-guide", title: "Yelp Reviews Guide", url: "/resources/reviews/yelp-reviews-guide/", about: ENTITIES.yelp, mentions: [ENTITIES.customerReview], status: "published" },
      { slug: "g2-reviews-guide", title: "G2 Reviews Guide", url: "/resources/reviews/g2-reviews-guide/", about: ENTITIES.g2, mentions: [ENTITIES.customerReview, ENTITIES.saas], status: "published" },
      { slug: "online-review-statistics", title: "Online Review Statistics", url: "/resources/reviews/online-review-statistics/", about: ENTITIES.customerReview, status: "published" },
      { slug: "star-rating-psychology", title: "Star Rating Psychology", url: "/resources/reviews/star-rating-psychology/", about: ENTITIES.starRating, mentions: [ENTITIES.customerReview], status: "published" },
    ],
  },
  {
    name: "Testimonials",
    url: "/resources/testimonials/",
    about: ENTITIES.testimonial,
    description: "Macro pillar covering testimonial collection, formats, design, and conversion impact.",
    clusters: [
      { slug: "how-to-collect-testimonials", title: "How to Collect Testimonials", url: "/resources/testimonials/how-to-collect-testimonials/", about: ENTITIES.testimonial, status: "published" },
      { slug: "video-testimonial-guide", title: "Video Testimonial Guide", url: "/resources/testimonials/video-testimonial-guide/", about: ENTITIES.testimonial, status: "published" },
      { slug: "video-testimonial-examples", title: "Video Testimonial Examples", url: "/resources/testimonials/video-testimonial-examples/", about: ENTITIES.testimonial, status: "published" },
      { slug: "ask-for-video-testimonials", title: "Ask for Video Testimonials", url: "/resources/testimonials/ask-for-video-testimonials/", about: ENTITIES.testimonial, status: "published" },
      { slug: "video-vs-text-testimonials", title: "Video vs Text Testimonials", url: "/resources/testimonials/video-vs-text-testimonials/", about: ENTITIES.testimonial, status: "published" },
      { slug: "testimonial-page-design", title: "Testimonial Page Design", url: "/resources/testimonials/testimonial-page-design/", about: ENTITIES.testimonial, status: "published" },
      { slug: "wall-of-love-guide", title: "Wall of Love Guide", url: "/resources/testimonials/wall-of-love-guide/", about: ENTITIES.testimonial, status: "published" },
      { slug: "testimonial-request-email-templates", title: "Testimonial Request Email Templates", url: "/resources/testimonials/testimonial-request-email-templates/", about: ENTITIES.testimonial, status: "published" },
      { slug: "testimonial-ab-testing", title: "Testimonial A/B Testing", url: "/resources/testimonials/testimonial-ab-testing/", about: ENTITIES.abTesting, mentions: [ENTITIES.testimonial], status: "published" },
      { slug: "testimonials-for-saas", title: "Testimonials for SaaS", url: "/resources/testimonials/testimonials-for-saas/", about: ENTITIES.testimonial, mentions: [ENTITIES.saas], status: "published" },
      { slug: "case-study-vs-testimonial", title: "Case Study vs Testimonial", url: "/resources/testimonials/case-study-vs-testimonial/", about: ENTITIES.caseStudy, mentions: [ENTITIES.testimonial], status: "published" },
    ],
  },
  {
    name: "Website Trust",
    url: "/resources/website-trust/",
    about: ENTITIES.trustSignal,
    description: "Macro pillar covering trust signals, badges, FOMO marketing, and credibility engineering.",
    clusters: [
      { slug: "building-website-credibility", title: "Building Website Credibility", url: "/resources/website-trust/building-website-credibility/", about: ENTITIES.trustSignal, status: "published" },
      { slug: "trust-badges-guide", title: "Trust Badges Guide", url: "/resources/website-trust/trust-badges-guide/", about: ENTITIES.trustBadge, mentions: [ENTITIES.trustSignal], status: "published" },
      { slug: "trust-signals-for-ecommerce", title: "Trust Signals for E-commerce", url: "/resources/website-trust/trust-signals-for-ecommerce/", about: ENTITIES.trustSignal, mentions: [ENTITIES.ecommerce], status: "published" },
      { slug: "testimonials-as-trust-signals", title: "Testimonials as Trust Signals", url: "/resources/website-trust/testimonials-as-trust-signals/", about: ENTITIES.testimonial, mentions: [ENTITIES.trustSignal], status: "published" },
      { slug: "fomo-marketing-guide", title: "FOMO Marketing Guide", url: "/resources/website-trust/fomo-marketing-guide/", about: ENTITIES.fomo, mentions: [ENTITIES.socialProof], status: "published" },
    ],
  },
  {
    name: "Conversion Analytics",
    url: "/resources/conversion-analytics/",
    about: ENTITIES.webAnalytics,
    description: "Macro pillar covering analytics, ROI measurement, A/B testing, and benchmarks.",
    clusters: [
      { slug: "ab-testing-social-proof", title: "A/B Testing Social Proof", url: "/resources/conversion-analytics/ab-testing-social-proof/", about: ENTITIES.abTesting, mentions: [ENTITIES.socialProof], status: "published" },
      { slug: "conversion-rate-benchmarks", title: "Conversion Rate Benchmarks", url: "/resources/conversion-analytics/conversion-rate-benchmarks/", about: ENTITIES.cro, mentions: [ENTITIES.webAnalytics], status: "published" },
      { slug: "measuring-social-proof-roi", title: "Measuring Social Proof ROI", url: "/resources/conversion-analytics/measuring-social-proof-roi/", about: ENTITIES.webAnalytics, mentions: [ENTITIES.socialProof], status: "published" },
      { slug: "testimonial-review-roi", title: "Testimonial & Review ROI", url: "/resources/conversion-analytics/testimonial-review-roi/", about: ENTITIES.webAnalytics, mentions: [ENTITIES.testimonial, ENTITIES.customerReview], status: "published" },
      { slug: "heatmap-analytics-guide", title: "Heatmap Analytics Guide", url: "/resources/conversion-analytics/heatmap-analytics-guide/", about: ENTITIES.heatmap, mentions: [ENTITIES.webAnalytics], status: "published" },
    ],
  },
];

// ============================================================================
// Helpers — used by ResourceArticle pages to look up their semantic context
// ============================================================================

/** Resolve a cluster article's `about`, `mentions`, `keywords` by URL. */
export function getTopicalContext(url: string) {
  for (const pillar of topicalMap) {
    const match = pillar.clusters.find((c) => c.url === url);
    if (match) {
      return {
        about: match.about,
        mentions: match.mentions,
        keywords: match.keywords,
        articleSection: pillar.name,
      };
    }
  }
  return null;
}

/** Audit helper: list every cluster slug under a pillar. */
export function getPillarClusters(pillarName: string) {
  return topicalMap.find((p) => p.name === pillarName)?.clusters ?? [];
}

/** Audit helper: total cluster count per pillar (topical authority breadth). */
export function getTopicalCoverage() {
  return topicalMap.map((p) => ({
    pillar: p.name,
    url: p.url,
    clusterCount: p.clusters.length,
    publishedCount: p.clusters.filter((c) => c.status === "published").length,
    plannedCount: p.clusters.filter((c) => c.status === "planned").length,
  }));
}
