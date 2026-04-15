import { BookOpen, Star, BarChart3, Shield, MessageSquare, TrendingUp, type LucideIcon } from "lucide-react";

export interface ArticleData {
  title: string;
  href: string;
  desc: string;
  readTime: string;
  date: string;
  isoDate: string;
  author: string;
}

export interface CategoryData {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  articles: ArticleData[];
}

export const categoryGradients: Record<string, string> = {
  "social-proof": "from-blue-500/20 to-indigo-500/20",
  reviews: "from-amber-500/20 to-orange-500/20",
  "conversion-analytics": "from-emerald-500/20 to-teal-500/20",
  "website-trust": "from-violet-500/20 to-purple-500/20",
  testimonials: "from-pink-500/20 to-rose-500/20",
  cro: "from-cyan-500/20 to-blue-500/20",
};

export const categoryAccents: Record<string, string> = {
  "social-proof": "border-l-blue-500",
  reviews: "border-l-amber-500",
  "conversion-analytics": "border-l-emerald-500",
  "website-trust": "border-l-violet-500",
  testimonials: "border-l-pink-500",
  cro: "border-l-cyan-500",
};

export const categories: CategoryData[] = [
  {
    id: "social-proof",
    icon: BookOpen,
    title: "Social Proof",
    desc: "The complete guide to social proof: what it is, the six types, the psychology behind it, and how to implement it on your website.",
    href: "/resources/social-proof/",
    articles: [
      { title: "What Is Social Proof? The Complete Guide", href: "/resources/social-proof/what-is-social-proof/", desc: "A foundational overview of social proof, why it matters, and how businesses use it to build trust and increase conversions.", readTime: "12 min", date: "Jan 2025", isoDate: "2025-01-20", author: "Olayinka Olayokun" },
      { title: "6 Types of Social Proof (With Examples)", href: "/resources/social-proof/types-of-social-proof/", desc: "Expert, user, crowd wisdom, certification, celebrity, and friend — learn each type and when to use it.", readTime: "10 min", date: "Jan 2025", isoDate: "2025-01-25", author: "Olayinka Olayokun" },
      { title: "Social Proof Psychology: Why It Works", href: "/resources/social-proof/social-proof-psychology/", desc: "The cognitive biases — conformity, herd behavior, informational influence — that make social proof one of the most powerful persuasion tools.", readTime: "11 min", date: "Feb 2025", isoDate: "2025-02-05", author: "Olayinka Olayokun" },
      { title: "Social Proof Examples That Convert", href: "/resources/social-proof/social-proof-example/", desc: "Real-world examples from e-commerce, SaaS, and local businesses showing social proof driving measurable results.", readTime: "9 min", date: "Feb 2025", isoDate: "2025-02-15", author: "Olayinka Olayokun" },
      { title: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", desc: "How to integrate social proof into email campaigns, landing pages, ads, and your overall marketing funnel.", readTime: "10 min", date: "Mar 2025", isoDate: "2025-03-01", author: "Olayinka Olayokun" },
      { title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", desc: "A technical implementation guide: where to place notifications, widgets, and testimonials for maximum impact.", readTime: "11 min", date: "Mar 2025", isoDate: "2025-03-10", author: "Olayinka Olayokun" },
      { title: "How Reviews Amplify Social Proof", href: "/resources/social-proof/reviews-and-social-proof/", desc: "How customer reviews function as the most powerful form of social proof and how to amplify them.", readTime: "12 min", date: "Apr 2025", isoDate: "2025-04-01", author: "Olayinka Olayokun" },
      { title: "Social Proof Notifications: Complete Guide", href: "/resources/social-proof/social-proof-notifications-guide/", desc: "How real-time purchase and activity notifications drive 10–35% conversion lifts.", readTime: "15 min", date: "Apr 2025", isoDate: "2025-04-05", author: "Olayinka Olayokun" },
      { title: "Social Proof for B2B & SaaS", href: "/resources/social-proof/social-proof-b2b-saas/", desc: "How B2B and SaaS companies deploy social proof for longer sales cycles and enterprise buyers.", readTime: "14 min", date: "Apr 2025", isoDate: "2025-04-06", author: "Olayinka Olayokun" },
      { title: "User-Generated Content as Social Proof", href: "/resources/social-proof/user-generated-content-social-proof/", desc: "Collect, curate, and display customer content that converts — reviews, photos, and videos.", readTime: "13 min", date: "Apr 2025", isoDate: "2025-04-06", author: "Olayinka Olayokun" },
      { title: "Social Proof for Landing Pages", href: "/resources/social-proof/social-proof-for-landing-pages/", desc: "Where to place trust signals on landing pages for maximum conversion impact.", readTime: "12 min", date: "Apr 2025", isoDate: "2025-04-07", author: "Olayinka Olayokun" },
      { title: "Social Proof Statistics 2026", href: "/resources/social-proof/social-proof-statistics/", desc: "50+ data points proving social proof ROI across reviews, notifications, and trust signals.", readTime: "18 min", date: "Jan 2026", isoDate: "2026-01-15", author: "Olayinka Olayokun" },
      { title: "Social Proof for E-commerce", href: "/resources/social-proof/social-proof-ecommerce/", desc: "How to use reviews, purchase notifications, and trust badges to increase online store sales.", readTime: "16 min", date: "Feb 2026", isoDate: "2026-02-01", author: "Olayinka Olayokun" },
      { title: "Social Proof for Local Businesses", href: "/resources/social-proof/social-proof-local-business/", desc: "Google reviews, community proof, and website trust signals for local customer acquisition.", readTime: "14 min", date: "Feb 2026", isoDate: "2026-02-10", author: "Olayinka Olayokun" },
      { title: "Social Proof for Agencies", href: "/resources/social-proof/social-proof-agencies/", desc: "Win more clients and offer social proof as a white-label service.", readTime: "14 min", date: "Feb 2026", isoDate: "2026-02-15", author: "Olayinka Olayokun" },
      { title: "Social Proof for Coaches & Creators", href: "/resources/social-proof/social-proof-coaches-creators/", desc: "Transformation stories, student counts, and launch strategies for digital education.", readTime: "14 min", date: "Feb 2026", isoDate: "2026-02-20", author: "Olayinka Olayokun" },
      { title: "Social Proof for Restaurants", href: "/resources/social-proof/social-proof-restaurants/", desc: "Review management, food photography proof, and reservation notifications for hospitality.", readTime: "13 min", date: "Feb 2026", isoDate: "2026-02-25", author: "Olayinka Olayokun" },
      { title: "AI-Generated Social Proof: Risks & Best Practices", href: "/resources/social-proof/ai-generated-social-proof/", desc: "Is AI social proof ethical? Risks of fake reviews, legal issues, and legitimate AI uses.", readTime: "13 min", date: "Mar 2026", isoDate: "2026-03-01", author: "Olayinka Olayokun" },
      { title: "Negative Social Proof: What It Is & How to Avoid It", href: "/resources/social-proof/negative-social-proof/", desc: "How well-meaning messages accidentally normalize the wrong behavior and hurt conversions.", readTime: "12 min", date: "Mar 2026", isoDate: "2026-03-10", author: "Olayinka Olayokun" },
      { title: "Social Proof on Social Media", href: "/resources/social-proof/social-proof-social-media/", desc: "Leverage likes, shares, UGC, and influencer endorsements to drive website conversions.", readTime: "14 min", date: "Mar 2026", isoDate: "2026-03-15", author: "Olayinka Olayokun" },
    ],
  },
  {
    id: "reviews",
    icon: Star,
    title: "Reviews",
    desc: "Learn how to collect, aggregate, and showcase customer reviews from Google, Trustpilot, and 15+ platforms.",
    href: "/resources/reviews/",
    articles: [
      { title: "How to Get More Google Reviews", href: "/resources/reviews/how-to-collect-google-reviews/", desc: "Proven strategies to collect more Google reviews: email templates, automation tips, and direct review links.", readTime: "14 min", date: "Mar 2025", isoDate: "2025-03-15", author: "Olayinka Olayokun" },
      { title: "Review Aggregation Guide", href: "/resources/reviews/review-aggregation-guide/", desc: "How to combine reviews from Google, Trustpilot, G2, and more into a unified display on your website.", readTime: "12 min", date: "Mar 2025", isoDate: "2025-03-18", author: "Olayinka Olayokun" },
      { title: "Responding to Negative Reviews", href: "/resources/reviews/responding-to-negative-reviews/", desc: "Templates and strategies for responding to negative reviews professionally and turning them into trust signals.", readTime: "13 min", date: "Mar 2025", isoDate: "2025-03-20", author: "Olayinka Olayokun" },
      { title: "Best Review Widgets for Websites", href: "/resources/reviews/review-widgets-for-websites/", desc: "Compare review widget types, placement strategies, and design best practices for maximum conversion impact.", readTime: "12 min", date: "Mar 2025", isoDate: "2025-03-22", author: "Olayinka Olayokun" },
      { title: "Trustpilot Reviews Guide", href: "/resources/reviews/trustpilot-reviews-guide/", desc: "How to set up, manage, and maximize your Trustpilot presence for trust and conversions.", readTime: "14 min", date: "Apr 2026", isoDate: "2026-04-01", author: "Olayinka Olayokun" },
      { title: "G2 Reviews Guide for B2B", href: "/resources/reviews/g2-reviews-guide/", desc: "Leverage G2 reviews to build credibility in the B2B software market.", readTime: "13 min", date: "Apr 2026", isoDate: "2026-04-02", author: "Olayinka Olayokun" },
      { title: "Yelp Reviews Guide", href: "/resources/reviews/yelp-reviews-guide/", desc: "Optimize your Yelp profile and manage reviews for local business success.", readTime: "12 min", date: "Apr 2026", isoDate: "2026-04-03", author: "Olayinka Olayokun" },
      { title: "Online Review Statistics 2026", href: "/resources/reviews/online-review-statistics/", desc: "40+ statistics on how online reviews influence purchasing decisions.", readTime: "16 min", date: "Apr 2026", isoDate: "2026-04-04", author: "Olayinka Olayokun" },
      { title: "How to Embed Google Reviews on Your Website", href: "/resources/reviews/embed-google-reviews/", desc: "Step-by-step methods for displaying Google reviews on any website platform.", readTime: "11 min", date: "Apr 2026", isoDate: "2026-04-05", author: "Olayinka Olayokun" },
      { title: "Fake Reviews Detection Guide", href: "/resources/reviews/fake-reviews-detection/", desc: "How to spot, report, and protect your business from fake reviews.", readTime: "13 min", date: "Apr 2026", isoDate: "2026-04-06", author: "Olayinka Olayokun" },
      { title: "Review Generation Strategies", href: "/resources/reviews/review-generation-strategies/", desc: "Proven systems to generate a consistent flow of authentic customer reviews.", readTime: "14 min", date: "Apr 2026", isoDate: "2026-04-07", author: "Olayinka Olayokun" },
      { title: "Star Rating Psychology", href: "/resources/reviews/star-rating-psychology/", desc: "How star ratings influence buying decisions and what rating sweet spot drives the most sales.", readTime: "12 min", date: "Apr 2026", isoDate: "2026-04-08", author: "Olayinka Olayokun" },
    ],
  },
  {
    id: "conversion-analytics",
    icon: BarChart3,
    title: "Conversion Analytics",
    desc: "Measure the ROI of every social proof element on your site with real-time dashboards and attribution.",
    href: "/resources/conversion-analytics/",
    articles: [
      { title: "A/B Testing Social Proof", href: "/resources/conversion-analytics/ab-testing-social-proof/", desc: "What to test, how to run experiments, and how to interpret results for social proof optimization.", readTime: "13 min", date: "Mar 2025", isoDate: "2025-03-12", author: "Olayinka Olayokun" },
      { title: "Conversion Rate Benchmarks by Industry", href: "/resources/conversion-analytics/conversion-rate-benchmarks/", desc: "2025 benchmarks for e-commerce, SaaS, lead gen, and more — know where you stand and where to improve.", readTime: "11 min", date: "Mar 2025", isoDate: "2025-03-14", author: "Olayinka Olayokun" },
      { title: "Measuring Social Proof ROI", href: "/resources/conversion-analytics/measuring-social-proof-roi/", desc: "Formulas, attribution models, and dashboards to calculate the revenue impact of your social proof strategy.", readTime: "12 min", date: "Mar 2025", isoDate: "2025-03-16", author: "Olayinka Olayokun" },
      { title: "Heatmap Analytics for Social Proof", href: "/resources/conversion-analytics/heatmap-analytics-guide/", desc: "Use heatmaps and session recordings to optimize social proof placement and design for higher engagement.", readTime: "10 min", date: "Mar 2025", isoDate: "2025-03-19", author: "Olayinka Olayokun" },
      { title: "Measuring Testimonial & Review ROI", href: "/resources/conversion-analytics/testimonial-review-roi/", desc: "Calculate the revenue impact of testimonials and reviews with attribution models and key metrics.", readTime: "13 min", date: "Apr 2025", isoDate: "2025-04-01", author: "Olayinka Olayokun" },
    ],
  },
  {
    id: "website-trust",
    icon: Shield,
    title: "Website Trust",
    desc: "Build credibility signals that convert skeptical visitors into customers with trust badges and live activity.",
    href: "/resources/website-trust/",
    articles: [
      { title: "Trust Signals Every E-commerce Site Needs", href: "/resources/website-trust/trust-signals-for-ecommerce/", desc: "The essential trust signals for online stores: reviews, badges, payment security, and social proof placement.", readTime: "13 min", date: "Mar 2025", isoDate: "2025-03-13", author: "Olayinka Olayokun" },
      { title: "Trust Badges: Which Ones Matter", href: "/resources/website-trust/trust-badges-guide/", desc: "Which trust badges actually increase conversions, where to place them, and which ones are just noise.", readTime: "11 min", date: "Mar 2025", isoDate: "2025-03-17", author: "Olayinka Olayokun" },
      { title: "Building Website Credibility From Scratch", href: "/resources/website-trust/building-website-credibility/", desc: "A step-by-step guide for new businesses to build trust when you have zero reviews and no brand recognition.", readTime: "12 min", date: "Mar 2025", isoDate: "2025-03-21", author: "Olayinka Olayokun" },
      { title: "FOMO Marketing: Ethical Urgency", href: "/resources/website-trust/fomo-marketing-guide/", desc: "How to create urgency with visitor counters, stock alerts, and activity notifications — without manipulating customers.", readTime: "11 min", date: "Mar 2025", isoDate: "2025-03-23", author: "Olayinka Olayokun" },
      { title: "Testimonials as Trust Signals", href: "/resources/website-trust/testimonials-as-trust-signals/", desc: "How testimonials function as trust signals and how to combine them with other credibility elements.", readTime: "11 min", date: "Apr 2025", isoDate: "2025-04-01", author: "Olayinka Olayokun" },
    ],
  },
  {
    id: "testimonials",
    icon: MessageSquare,
    title: "Testimonials",
    desc: "Everything about collecting, curating, and displaying customer testimonials — text, image, and video.",
    href: "/resources/testimonials/",
    articles: [
      { title: "How to Collect Testimonials That Convert", href: "/resources/testimonials/how-to-collect-testimonials/", desc: "Automated workflows, timing strategies, and question prompts that produce compelling customer stories.", readTime: "13 min", date: "Mar 2025", isoDate: "2025-03-11", author: "Olayinka Olayokun" },
      { title: "Video Testimonials: Complete Guide", href: "/resources/testimonials/video-testimonial-guide/", desc: "Record, edit, and display video testimonials that convert 4× better than text — with zero friction for customers.", readTime: "14 min", date: "Mar 2025", isoDate: "2025-03-14", author: "Olayinka Olayokun" },
      { title: "Testimonial Page Design Guide", href: "/resources/testimonials/testimonial-page-design/", desc: "Design a testimonial page that builds trust: layouts, filtering, media formats, and conversion-optimized structure.", readTime: "11 min", date: "Mar 2025", isoDate: "2025-03-18", author: "Olayinka Olayokun" },
      { title: "Testimonial Request Email Templates", href: "/resources/testimonials/testimonial-request-email-templates/", desc: "Copy-paste email templates for requesting testimonials that get 3–5× higher response rates.", readTime: "10 min", date: "Mar 2025", isoDate: "2025-03-22", author: "Olayinka Olayokun" },
      { title: "Video vs Text Testimonials", href: "/resources/testimonials/video-vs-text-testimonials/", desc: "Which format converts better? Data-driven comparison of video and text testimonials.", readTime: "11 min", date: "Apr 2026", isoDate: "2026-04-01", author: "Olayinka Olayokun" },
      { title: "How to Ask for Video Testimonials", href: "/resources/testimonials/ask-for-video-testimonials/", desc: "Scripts, timing, and incentives that get customers to record video testimonials.", readTime: "12 min", date: "Apr 2026", isoDate: "2026-04-02", author: "Olayinka Olayokun" },
      { title: "Video Testimonial Examples", href: "/resources/testimonials/video-testimonial-examples/", desc: "15 outstanding video testimonial examples and what makes each one effective.", readTime: "14 min", date: "Apr 2026", isoDate: "2026-04-03", author: "Olayinka Olayokun" },
      { title: "Testimonials for SaaS Companies", href: "/resources/testimonials/testimonials-for-saas/", desc: "How SaaS companies collect and display testimonials to reduce trial-to-paid friction.", readTime: "13 min", date: "Apr 2026", isoDate: "2026-04-04", author: "Olayinka Olayokun" },
      { title: "Case Study vs Testimonial", href: "/resources/testimonials/case-study-vs-testimonial/", desc: "When to use case studies vs testimonials and how to create each for maximum impact.", readTime: "11 min", date: "Apr 2026", isoDate: "2026-04-05", author: "Olayinka Olayokun" },
      { title: "Testimonial A/B Testing", href: "/resources/testimonials/testimonial-ab-testing/", desc: "How to test testimonial placement, format, and content for higher conversions.", readTime: "12 min", date: "Apr 2026", isoDate: "2026-04-06", author: "Olayinka Olayokun" },
      { title: "Wall of Love Guide", href: "/resources/testimonials/wall-of-love-guide/", desc: "How to create a stunning wall of love page that overwhelms visitors with social proof.", readTime: "11 min", date: "Apr 2026", isoDate: "2026-04-07", author: "Olayinka Olayokun" },
    ],
  },
  {
    id: "cro",
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    desc: "The complete CRO guide: frameworks, tactics, and tools to systematically increase your website conversion rate.",
    href: "/resources/cro/",
    articles: [
      { title: "Landing Page Optimization Guide", href: "/resources/cro/landing-page-optimization/", desc: "Optimize every element of your landing pages for maximum conversion rates.", readTime: "14 min", date: "Apr 2025", isoDate: "2025-04-02", author: "Olayinka Olayokun" },
      { title: "E-commerce Conversion Optimization", href: "/resources/cro/ecommerce-conversion-optimization/", desc: "Increase online store revenue with product page, checkout, and social proof tactics.", readTime: "13 min", date: "Apr 2025", isoDate: "2025-04-03", author: "Olayinka Olayokun" },
      { title: "SaaS Conversion: Trial to Paid", href: "/resources/cro/saas-conversion-optimization/", desc: "Optimize the SaaS funnel from visitor to trial to paid customer.", readTime: "14 min", date: "Apr 2025", isoDate: "2025-04-03", author: "Olayinka Olayokun" },
      { title: "Cart Abandonment: Causes & Solutions", href: "/resources/cro/cart-abandonment/", desc: "Why 70% of carts are abandoned and how to recover lost revenue.", readTime: "13 min", date: "Apr 2025", isoDate: "2025-04-04", author: "Olayinka Olayokun" },
      { title: "CTA Optimization Guide", href: "/resources/cro/cta-optimization/", desc: "Button copy, color, placement, and psychology for higher click-through rates.", readTime: "12 min", date: "Apr 2025", isoDate: "2025-04-04", author: "Olayinka Olayokun" },
      { title: "Exit Intent Strategies", href: "/resources/cro/exit-intent-strategies/", desc: "Recover 3–15% of leaving visitors with smart exit-intent triggers.", readTime: "12 min", date: "Apr 2025", isoDate: "2025-04-05", author: "Olayinka Olayokun" },
      { title: "Product Page CRO", href: "/resources/cro/product-page-cro/", desc: "Optimize product pages with reviews, imagery, and social proof for higher add-to-cart rates.", readTime: "14 min", date: "Apr 2026", isoDate: "2026-04-01", author: "Olayinka Olayokun" },
      { title: "Checkout Optimization Guide", href: "/resources/cro/checkout-optimization/", desc: "Reduce checkout friction with trust signals, form optimization, and guest checkout.", readTime: "13 min", date: "Apr 2026", isoDate: "2026-04-02", author: "Olayinka Olayokun" },
      { title: "Pricing Page Optimization", href: "/resources/cro/pricing-page-optimization/", desc: "Design pricing pages that convert with anchoring, social proof, and plan comparison.", readTime: "12 min", date: "Apr 2026", isoDate: "2026-04-03", author: "Olayinka Olayokun" },
      { title: "Mobile CRO Guide", href: "/resources/cro/mobile-cro/", desc: "Optimize mobile conversions with touch-friendly design, speed, and mobile social proof.", readTime: "13 min", date: "Apr 2026", isoDate: "2026-04-04", author: "Olayinka Olayokun" },
      { title: "Above-the-Fold Optimization", href: "/resources/cro/above-the-fold-optimization/", desc: "Maximize impact in the first viewport with hero copy, trust signals, and CTAs.", readTime: "11 min", date: "Apr 2026", isoDate: "2026-04-05", author: "Olayinka Olayokun" },
      { title: "CRO for Agencies", href: "/resources/cro/cro-for-agencies/", desc: "How agencies can offer CRO services and deliver measurable results for clients.", readTime: "14 min", date: "Apr 2026", isoDate: "2026-04-06", author: "Olayinka Olayokun" },
      { title: "GA4 Social Proof Tracking", href: "/resources/cro/ga4-social-proof-tracking/", desc: "Set up GA4 events and reports to measure social proof notification performance.", readTime: "12 min", date: "Apr 2026", isoDate: "2026-04-07", author: "Olayinka Olayokun" },
    ],
  },
];

export const allArticles = categories
  .flatMap((c) => c.articles.map((a) => ({ ...a, categoryId: c.id, categoryTitle: c.title })))
  .filter((a, i, arr) => arr.findIndex((x) => x.href === a.href) === i)
  .sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());

export const articleImages: Record<string, string> = {};

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id);
}
