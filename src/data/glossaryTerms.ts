export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  relatedLinks?: { label: string; href: string }[];
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "A/B Testing",
    slug: "ab-testing",
    definition: "A method of comparing two versions of a webpage, notification, or campaign element to determine which performs better based on conversion metrics.",
    relatedLinks: [
      { label: "Campaign Builder", href: "/product/campaign-builder/" },
      { label: "A/B Testing Social Proof", href: "/resources/conversion-analytics/ab-testing-social-proof/" },
    ],
  },
  {
    term: "Bandwagon Effect",
    slug: "bandwagon-effect",
    definition: "A psychological phenomenon where people adopt behaviors or beliefs because others are doing so. A core mechanism behind social proof's effectiveness.",
    relatedLinks: [{ label: "Social Proof Psychology", href: "/resources/social-proof/social-proof-psychology/" }],
  },
  {
    term: "Conversion Rate",
    slug: "conversion-rate",
    definition: "The percentage of website visitors who complete a desired action (purchase, signup, form submission). Calculated as (conversions ÷ total visitors) × 100.",
    relatedLinks: [{ label: "Analytics & Insights", href: "/product/analytics-conversion-insights/" }],
  },
  {
    term: "Conversion Rate Optimization (CRO)",
    slug: "conversion-rate-optimization",
    definition: "The systematic process of increasing the percentage of website visitors who take a desired action, using data analysis, testing, and UX improvements.",
    relatedLinks: [{ label: "Free CRO Tools", href: "/free-tools/" }],
  },
  {
    term: "Expert Social Proof",
    slug: "expert-social-proof",
    definition: "Endorsements or approval from recognized authorities, industry experts, or thought leaders that lend credibility to a product or service.",
    relatedLinks: [{ label: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/" }],
  },
  {
    term: "FOMO (Fear of Missing Out)",
    slug: "fomo",
    definition: "The anxiety that others are enjoying rewarding experiences from which one is absent. Used in marketing via limited-time offers, live visitor counts, and recent purchase notifications.",
    relatedLinks: [
      { label: "Visitor Counter", href: "/product/visitor-counter-live-visitors/" },
      { label: "Social Proof Notifications", href: "/product/social-proof-notifications/" },
      { label: "FOMO Marketing Guide", href: "/resources/website-trust/fomo-marketing-guide/" },
    ],
  },
  {
    term: "Herd Behavior",
    slug: "herd-behavior",
    definition: "The tendency for individuals to mimic the actions of a larger group, whether rational or irrational. A foundational concept in social proof theory.",
    relatedLinks: [{ label: "Social Proof Psychology", href: "/resources/social-proof/social-proof-psychology/" }],
  },
  {
    term: "Informational Social Influence",
    slug: "informational-social-influence",
    definition: "The tendency to accept information from others as evidence about reality, especially in ambiguous situations. Drives the effectiveness of reviews and testimonials.",
    relatedLinks: [{ label: "What Is Social Proof?", href: "/resources/social-proof/what-is-social-proof/" }],
  },
  {
    term: "Live Visitor Count",
    slug: "live-visitor-count",
    definition: "A real-time display of the number of people currently viewing a webpage or product, creating urgency and social validation through crowd wisdom.",
    relatedLinks: [
      { label: "Visitor Counter", href: "/product/visitor-counter-live-visitors/" },
      { label: "FOMO Marketing Guide", href: "/resources/website-trust/fomo-marketing-guide/" },
    ],
  },
  {
    term: "Notification Widget",
    slug: "notification-widget",
    definition: "A small, non-intrusive popup that appears on a website to display real-time activity such as recent purchases, signups, or reviews.",
    relatedLinks: [{ label: "Social Proof Notifications", href: "/product/social-proof-notifications/" }],
  },
  {
    term: "Purchase Notification",
    slug: "purchase-notification",
    definition: "A real-time alert shown to website visitors when another customer makes a purchase, creating urgency and social validation.",
    relatedLinks: [{ label: "Recent Activity Notifications", href: "/product/recent-activity-notifications/" }],
  },
  {
    term: "Review Aggregation",
    slug: "review-aggregation",
    definition: "The process of collecting and consolidating customer reviews from multiple platforms (Google, Trustpilot, Yelp, etc.) into a single, unified display.",
    relatedLinks: [
      { label: "Review Aggregation System", href: "/product/review-aggregation-showcase-system/" },
      { label: "Review Aggregation Guide", href: "/resources/reviews/review-aggregation-guide/" },
    ],
  },
  {
    term: "Social Proof",
    slug: "social-proof",
    definition: "A psychological and social phenomenon where people copy the actions of others in an attempt to reflect correct behavior in a given situation. In marketing, it refers to leveraging customer behavior, reviews, and endorsements to build trust.",
    relatedLinks: [
      { label: "What Is Social Proof?", href: "/resources/social-proof/what-is-social-proof/" },
      { label: "Social Proof Guide", href: "/resources/social-proof/" },
    ],
  },
  {
    term: "Testimonial",
    slug: "testimonial",
    definition: "A statement from a customer or user endorsing a product or service, typically including their experience and results. Can be text, image, or video format.",
    relatedLinks: [
      { label: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/" },
      { label: "How to Collect Testimonials", href: "/resources/testimonials/how-to-collect-testimonials/" },
    ],
  },
  {
    term: "Trust Badge",
    slug: "trust-badge",
    definition: "A visual indicator (icon, seal, or logo) placed on a website to signal security, credibility, or third-party verification, reducing buyer anxiety.",
    relatedLinks: [
      { label: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/" },
      { label: "Trust Badges Guide", href: "/resources/website-trust/trust-badges-guide/" },
    ],
  },
  {
    term: "Trust Signal",
    slug: "trust-signal",
    definition: "Any element on a website that helps build visitor confidence — including reviews, testimonials, security badges, live activity counters, and social proof notifications.",
    relatedLinks: [
      { label: "Website Trust Guide", href: "/resources/website-trust/" },
      { label: "Trust Signals for E-commerce", href: "/resources/website-trust/trust-signals-for-ecommerce/" },
    ],
  },
  {
    term: "User-Generated Content (UGC)",
    slug: "ugc",
    definition: "Content created by customers rather than the brand — reviews, testimonials, photos, videos, and social media posts that serve as authentic social proof.",
    relatedLinks: [
      { label: "Video Testimonial Recorder", href: "/product/video-testimonial-recorder/" },
      { label: "Video Testimonial Guide", href: "/resources/testimonials/video-testimonial-guide/" },
    ],
  },
  {
    term: "Wisdom of the Crowd",
    slug: "wisdom-of-the-crowd",
    definition: "The idea that large groups of people are collectively smarter than individual experts. In social proof, this manifests as '10,000+ customers trust us' or high review counts.",
    relatedLinks: [{ label: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/" }],
  },
];

export default glossaryTerms;
