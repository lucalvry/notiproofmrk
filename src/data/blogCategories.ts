import { BookOpen, Star, BarChart3, Shield, MessageSquare, type LucideIcon } from "lucide-react";

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
};

export const categoryAccents: Record<string, string> = {
  "social-proof": "border-l-blue-500",
  reviews: "border-l-amber-500",
  "conversion-analytics": "border-l-emerald-500",
  "website-trust": "border-l-violet-500",
  testimonials: "border-l-pink-500",
};

export const categories: CategoryData[] = [
  {
    id: "social-proof",
    icon: BookOpen,
    title: "Social Proof",
    desc: "The complete guide to social proof: what it is, the six types, the psychology behind it, and how to implement it on your website.",
    href: "/resources/blog/social-proof/",
    articles: [
      { title: "What Is Social Proof? The Complete Guide", href: "/resources/social-proof/what-is-social-proof/", desc: "A foundational overview of social proof, why it matters, and how businesses use it to build trust and increase conversions.", readTime: "12 min", date: "Jan 2025", isoDate: "2025-01-20", author: "Olayinka Olayokun" },
      { title: "6 Types of Social Proof (With Examples)", href: "/resources/social-proof/types-of-social-proof/", desc: "Expert, user, crowd wisdom, certification, celebrity, and friend — learn each type and when to use it.", readTime: "10 min", date: "Jan 2025", isoDate: "2025-01-25", author: "Olayinka Olayokun" },
      { title: "Social Proof Psychology: Why It Works", href: "/resources/social-proof/social-proof-psychology/", desc: "The cognitive biases — conformity, herd behavior, informational influence — that make social proof one of the most powerful persuasion tools.", readTime: "11 min", date: "Feb 2025", isoDate: "2025-02-05", author: "Olayinka Olayokun" },
      { title: "Social Proof Examples That Convert", href: "/resources/social-proof/social-proof-example/", desc: "Real-world examples from e-commerce, SaaS, and local businesses showing social proof driving measurable results.", readTime: "9 min", date: "Feb 2025", isoDate: "2025-02-15", author: "Olayinka Olayokun" },
      { title: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", desc: "How to integrate social proof into email campaigns, landing pages, ads, and your overall marketing funnel.", readTime: "10 min", date: "Mar 2025", isoDate: "2025-03-01", author: "Olayinka Olayokun" },
      { title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", desc: "A technical implementation guide: where to place notifications, widgets, and testimonials for maximum impact.", readTime: "11 min", date: "Mar 2025", isoDate: "2025-03-10", author: "Olayinka Olayokun" },
    ],
  },
  {
    id: "reviews",
    icon: Star,
    title: "Reviews",
    desc: "Learn how to collect, aggregate, and showcase customer reviews from Google, Trustpilot, and 15+ platforms.",
    href: "/resources/blog/reviews/",
    articles: [
      { title: "How to Get More Google Reviews", href: "/resources/reviews/how-to-collect-google-reviews/", desc: "Proven strategies to collect more Google reviews: email templates, automation tips, and direct review links.", readTime: "14 min", date: "Mar 2025", isoDate: "2025-03-15", author: "Olayinka Olayokun" },
      { title: "Review Aggregation Guide", href: "/resources/reviews/review-aggregation-guide/", desc: "How to combine reviews from Google, Trustpilot, G2, and more into a unified display on your website.", readTime: "12 min", date: "Mar 2025", isoDate: "2025-03-18", author: "Olayinka Olayokun" },
      { title: "Responding to Negative Reviews", href: "/resources/reviews/responding-to-negative-reviews/", desc: "Templates and strategies for responding to negative reviews professionally and turning them into trust signals.", readTime: "13 min", date: "Mar 2025", isoDate: "2025-03-20", author: "Olayinka Olayokun" },
      { title: "Best Review Widgets for Websites", href: "/resources/reviews/review-widgets-for-websites/", desc: "Compare review widget types, placement strategies, and design best practices for maximum conversion impact.", readTime: "12 min", date: "Mar 2025", isoDate: "2025-03-22", author: "Olayinka Olayokun" },
    ],
  },
  {
    id: "conversion-analytics",
    icon: BarChart3,
    title: "Conversion Analytics",
    desc: "Measure the ROI of every social proof element on your site with real-time dashboards and attribution.",
    href: "/resources/blog/conversion-analytics/",
    articles: [
      { title: "A/B Testing Social Proof", href: "/resources/conversion-analytics/ab-testing-social-proof/", desc: "What to test, how to run experiments, and how to interpret results for social proof optimization.", readTime: "13 min", date: "Mar 2025", isoDate: "2025-03-12", author: "Olayinka Olayokun" },
      { title: "Conversion Rate Benchmarks by Industry", href: "/resources/conversion-analytics/conversion-rate-benchmarks/", desc: "2025 benchmarks for e-commerce, SaaS, lead gen, and more — know where you stand and where to improve.", readTime: "11 min", date: "Mar 2025", isoDate: "2025-03-14", author: "Olayinka Olayokun" },
      { title: "Measuring Social Proof ROI", href: "/resources/conversion-analytics/measuring-social-proof-roi/", desc: "Formulas, attribution models, and dashboards to calculate the revenue impact of your social proof strategy.", readTime: "12 min", date: "Mar 2025", isoDate: "2025-03-16", author: "Olayinka Olayokun" },
      { title: "Heatmap Analytics for Social Proof", href: "/resources/conversion-analytics/heatmap-analytics-guide/", desc: "Use heatmaps and session recordings to optimize social proof placement and design for higher engagement.", readTime: "10 min", date: "Mar 2025", isoDate: "2025-03-19", author: "Olayinka Olayokun" },
    ],
  },
  {
    id: "website-trust",
    icon: Shield,
    title: "Website Trust",
    desc: "Build credibility signals that convert skeptical visitors into customers with trust badges and live activity.",
    href: "/resources/blog/website-trust/",
    articles: [
      { title: "Trust Signals Every E-commerce Site Needs", href: "/resources/website-trust/trust-signals-for-ecommerce/", desc: "The essential trust signals for online stores: reviews, badges, payment security, and social proof placement.", readTime: "13 min", date: "Mar 2025", isoDate: "2025-03-13", author: "Olayinka Olayokun" },
      { title: "Trust Badges: Which Ones Matter", href: "/resources/website-trust/trust-badges-guide/", desc: "Which trust badges actually increase conversions, where to place them, and which ones are just noise.", readTime: "11 min", date: "Mar 2025", isoDate: "2025-03-17", author: "Olayinka Olayokun" },
      { title: "Building Website Credibility From Scratch", href: "/resources/website-trust/building-website-credibility/", desc: "A step-by-step guide for new businesses to build trust when you have zero reviews and no brand recognition.", readTime: "12 min", date: "Mar 2025", isoDate: "2025-03-21", author: "Olayinka Olayokun" },
      { title: "FOMO Marketing: Ethical Urgency", href: "/resources/website-trust/fomo-marketing-guide/", desc: "How to create urgency with visitor counters, stock alerts, and activity notifications — without manipulating customers.", readTime: "11 min", date: "Mar 2025", isoDate: "2025-03-23", author: "Olayinka Olayokun" },
    ],
  },
  {
    id: "testimonials",
    icon: MessageSquare,
    title: "Testimonials",
    desc: "Everything about collecting, curating, and displaying customer testimonials — text, image, and video.",
    href: "/resources/blog/testimonials/",
    articles: [
      { title: "How to Collect Testimonials That Convert", href: "/resources/testimonials/how-to-collect-testimonials/", desc: "Automated workflows, timing strategies, and question prompts that produce compelling customer stories.", readTime: "13 min", date: "Mar 2025", isoDate: "2025-03-11", author: "Olayinka Olayokun" },
      { title: "Video Testimonials: Complete Guide", href: "/resources/testimonials/video-testimonial-guide/", desc: "Record, edit, and display video testimonials that convert 4× better than text — with zero friction for customers.", readTime: "14 min", date: "Mar 2025", isoDate: "2025-03-14", author: "Olayinka Olayokun" },
      { title: "Testimonial Page Design Guide", href: "/resources/testimonials/testimonial-page-design/", desc: "Design a testimonial page that builds trust: layouts, filtering, media formats, and conversion-optimized structure.", readTime: "11 min", date: "Mar 2025", isoDate: "2025-03-18", author: "Olayinka Olayokun" },
      { title: "Testimonial Request Email Templates", href: "/resources/testimonials/testimonial-request-email-templates/", desc: "Copy-paste email templates for requesting testimonials that get 3–5× higher response rates.", readTime: "10 min", date: "Mar 2025", isoDate: "2025-03-22", author: "Olayinka Olayokun" },
    ],
  },
];

export const allArticles = categories
  .flatMap((c) => c.articles.map((a) => ({ ...a, categoryId: c.id, categoryTitle: c.title })))
  .filter((a, i, arr) => arr.findIndex((x) => x.href === a.href) === i)
  .sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());

export const articleImages: Record<string, string> = {};

// Will be populated by importing images in the component that needs them
export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id);
}
