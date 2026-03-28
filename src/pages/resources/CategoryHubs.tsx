import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

interface HubConfig {
  title: string;
  metaTitle: string;
  desc: string;
  canonical: string;
  introContent: React.ReactNode;
  articles: { title: string; href: string; desc: string }[];
}

const HubPage = ({ title, metaTitle, desc, canonical, introContent, articles }: HubConfig) => (
  <>
    <SEOHead title={metaTitle} description={desc} canonical={canonical} />
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{title}</h1>
          <p className="text-lg text-muted-foreground">{desc}</p>
        </div>
        <div className="max-w-3xl mx-auto prose prose-lg mb-12">
          {introContent}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {articles.map((a) => (
            <Link key={a.href} to={a.href} className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all">
              <h2 className="font-semibold text-sm">{a.title}</h2>
              <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export const ReviewsHub = () => (
  <HubPage
    title="Reviews"
    metaTitle="Reviews – How to Collect & Leverage Customer Reviews"
    desc="Learn how to collect, manage, and leverage customer reviews to increase trust and conversions."
    canonical="https://notiproof.com/resources/reviews/"
    introContent={
      <>
        <p>Customer reviews are one of the most powerful forms of <Link to="/resources/social-proof/" className="text-primary hover:underline">social proof</Link>. Research shows that 93% of consumers say online reviews influence their purchasing decisions, making review management essential for any conversion-focused business.</p>
        <p>Whether you're aggregating reviews from Google, Yelp, or Trustpilot, or collecting first-party testimonials directly from customers, a strong review strategy builds the <Link to="/resources/website-trust/" className="text-primary hover:underline">website trust</Link> signals that drive conversions. Explore our guides below to learn how to turn customer feedback into a growth engine.</p>
      </>
    }
    articles={[
      { title: "Review Aggregation", href: "/product/review-aggregation-showcase-system/", desc: "Aggregate reviews from multiple platforms." },
      { title: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", desc: "Collect customer testimonials." },
      { title: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", desc: "Real examples of reviews in action." },
    ]}
  />
);

export const ConversionAnalyticsHub = () => (
  <HubPage
    title="Conversion Analytics"
    metaTitle="Conversion Analytics – Measure & Optimize Your Conversion Rates"
    desc="Learn how to measure, analyze, and optimize your conversion rates with data-driven insights and analytics."
    canonical="https://notiproof.com/resources/conversion-analytics/"
    introContent={
      <>
        <p>Understanding your conversion data is the foundation of effective <Link to="/resources/social-proof/social-proof-in-marketing/" className="text-primary hover:underline">social proof marketing</Link>. Without analytics, you're guessing which notifications, testimonials, and trust signals actually drive results.</p>
        <p>NotiProof's <Link to="/product/analytics-conversion-insights/" className="text-primary hover:underline">analytics and conversion insights</Link> dashboard helps you track exactly how social proof impacts your bottom line — from impression-to-click rates on notifications to revenue attribution from <Link to="/product/campaign-builder/" className="text-primary hover:underline">A/B tested campaigns</Link>.</p>
      </>
    }
    articles={[
      { title: "Analytics & Insights", href: "/product/analytics-conversion-insights/", desc: "Track social proof ROI." },
      { title: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", desc: "Measure marketing impact." },
      { title: "Campaign Builder", href: "/product/campaign-builder/", desc: "A/B test and optimize." },
    ]}
  />
);

export const WebsiteTrustHub = () => (
  <HubPage
    title="Website Trust"
    metaTitle="Website Trust – Build Credibility & Trust Signals Online"
    desc="Discover how to build trust on your website with social proof, reviews, testimonials, and trust badges."
    canonical="https://notiproof.com/resources/website-trust/"
    introContent={
      <>
        <p>Trust is the invisible currency of the internet. Visitors decide within seconds whether your website is credible enough to warrant their attention — and their money. Understanding the <Link to="/resources/social-proof/social-proof-psychology/" className="text-primary hover:underline">psychology behind social proof</Link> helps you design trust signals that actually convert.</p>
        <p>From displaying <Link to="/product/testimonials-widget-reviews-widget/" className="text-primary hover:underline">testimonial widgets</Link> and live visitor counts to showcasing real-time purchase activity, there are many <Link to="/resources/social-proof/types-of-social-proof/" className="text-primary hover:underline">types of social proof</Link> you can deploy to build credibility. Explore the guides below to strengthen trust on every page of your website.</p>
      </>
    }
    articles={[
      { title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", desc: "Implementation guide." },
      { title: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/", desc: "Trust signal types." },
      { title: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/", desc: "Display trust signals." },
    ]}
  />
);

export const TestimonialsResourceHub = () => (
  <HubPage
    title="Testimonials"
    metaTitle="Testimonials Guide – Collect, Display & Leverage Customer Stories"
    desc="Everything about collecting, displaying, and leveraging customer testimonials to build trust and increase conversions."
    canonical="https://notiproof.com/resources/testimonials/"
    introContent={
      <>
        <p>Customer testimonials are the backbone of any <Link to="/resources/social-proof/" className="text-primary hover:underline">social proof strategy</Link>. A single compelling testimonial can be more persuasive than pages of marketing copy because it provides authentic, third-party validation of your product's value.</p>
        <p>Modern testimonial strategies go beyond simple text quotes. With <Link to="/product/video-testimonial-recorder/" className="text-primary hover:underline">video testimonial recording</Link>, <Link to="/product/testimonials-collection-text-image-video/" className="text-primary hover:underline">multi-format collection</Link>, and embeddable widgets, you can capture and display customer stories wherever they'll have the most impact on your <Link to="/resources/conversion-analytics/" className="text-primary hover:underline">conversion rates</Link>.</p>
      </>
    }
    articles={[
      { title: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", desc: "Collect text, image & video testimonials." },
      { title: "Video Testimonial Recorder", href: "/product/video-testimonial-recorder/", desc: "Record video reviews." },
      { title: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/", desc: "Embeddable testimonial widgets." },
    ]}
  />
);
