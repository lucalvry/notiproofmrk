import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
const makeHub = (title: string, metaTitle: string, desc: string, canonical: string, articles: { title: string; href: string; desc: string }[]) => () => (
  <>
    <SEOHead title={metaTitle} description={desc} canonical={canonical} />
    <section className="section-padding"><div className="container-tight">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{title}</h1>
        <p className="text-lg text-muted-foreground">{desc}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {articles.map((a) => (
          <Link key={a.href} to={a.href} className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all">
            <h2 className="font-semibold text-sm">{a.title}</h2>
            <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
          </Link>
        ))}
      </div>
    </div></section>
  </>
);
export const ReviewsHub = makeHub("Reviews", "Reviews – How to Collect & Leverage Customer Reviews", "Learn how to collect, manage, and leverage customer reviews to increase trust and conversions.", "https://notiproof.com/resources/reviews/", [
  { title: "Review Aggregation", href: "/product/review-aggregation-showcase-system/", desc: "Aggregate reviews from multiple platforms." },
  { title: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", desc: "Collect customer testimonials." },
  { title: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", desc: "Real examples of reviews in action." },
]);
export const ConversionAnalyticsHub = makeHub("Conversion Analytics", "Conversion Analytics – Measure & Optimize Your Conversion Rates", "Learn how to measure, analyze, and optimize your conversion rates with data-driven insights and analytics.", "https://notiproof.com/resources/conversion-analytics/", [
  { title: "Analytics & Insights", href: "/product/analytics-conversion-insights/", desc: "Track social proof ROI." },
  { title: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", desc: "Measure marketing impact." },
  { title: "Campaign Builder", href: "/product/campaign-builder/", desc: "A/B test and optimize." },
]);
export const WebsiteTrustHub = makeHub("Website Trust", "Website Trust – Build Credibility & Trust Signals Online", "Discover how to build trust on your website with social proof, reviews, testimonials, and trust badges.", "https://notiproof.com/resources/website-trust/", [
  { title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", desc: "Implementation guide." },
  { title: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/", desc: "Trust signal types." },
  { title: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/", desc: "Display trust signals." },
]);
export const TestimonialsResourceHub = makeHub("Testimonials", "Testimonials Guide – Collect, Display & Leverage Customer Stories", "Everything about collecting, displaying, and leveraging customer testimonials to build trust and increase conversions.", "https://notiproof.com/resources/testimonials/", [
  { title: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", desc: "Collect text, image & video testimonials." },
  { title: "Video Testimonial Recorder", href: "/product/video-testimonial-recorder/", desc: "Record video reviews." },
  { title: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/", desc: "Embeddable testimonial widgets." },
]);
