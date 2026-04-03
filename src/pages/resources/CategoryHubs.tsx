import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import AuthorCard from "@/components/AuthorCard";

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

        {/* Table of Contents */}
        <nav className="max-w-3xl mx-auto mb-10 bg-card border border-border rounded-xl p-5">
          <p className="text-sm font-semibold mb-3">In this guide:</p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {articles.map((a) => (
              <li key={a.href}>
                <Link to={a.href} className="text-sm text-primary hover:underline">{a.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-3xl mx-auto prose prose-lg mb-12">
          {introContent}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          {articles.map((a) => (
            <Link key={a.href} to={a.href} className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all">
              <h2 className="font-semibold text-sm">{a.title}</h2>
              <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
            </Link>
          ))}
        </div>

        {/* Author Attribution */}
        <div className="max-w-3xl mx-auto">
          <AuthorCard />
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
        <p>Whether you're aggregating reviews from Google, Yelp, or Trustpilot, or collecting first-party testimonials directly from customers, a strong review strategy builds the <Link to="/resources/website-trust/" className="text-primary hover:underline">website trust</Link> signals that drive conversions. The key is making your best reviews visible exactly where buying decisions are made — on your own website.</p>
        <p>Reviews work because they provide <Link to="/resources/social-proof/social-proof-psychology/" className="text-primary hover:underline">psychological validation</Link> from peers. When a potential customer reads that someone in a similar situation had a positive experience, it reduces perceived risk and accelerates the decision to buy. This is why <Link to="/product/review-aggregation-showcase-system/" className="text-primary hover:underline">review aggregation</Link> — pulling reviews from multiple platforms into one place — is so effective: it concentrates social proof where it matters most.</p>
        <p>Beyond collection, the format matters. Text reviews are good, but <Link to="/product/video-testimonial-recorder/" className="text-primary hover:underline">video testimonials</Link> convert up to 4x better because they're harder to fake and create a stronger emotional connection. A comprehensive review strategy combines text, photos, and video across multiple touchpoints to build trust at every stage of the buyer's journey.</p>
      </>
    }
    articles={[
      { title: "Review Aggregation", href: "/product/review-aggregation-showcase-system/", desc: "Aggregate reviews from 15+ platforms into one unified widget." },
      { title: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", desc: "Collect text, image, and video testimonials from customers." },
      { title: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", desc: "Real-world examples of reviews driving conversions." },
      { title: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/", desc: "How reviews fit into the broader social proof landscape." },
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
        <p>Understanding your conversion data is the foundation of effective <Link to="/resources/social-proof/social-proof-in-marketing/" className="text-primary hover:underline">social proof marketing</Link>. Without analytics, you're guessing which notifications, testimonials, and trust signals actually drive results — and guesswork doesn't scale.</p>
        <p>NotiProof's <Link to="/product/analytics-conversion-insights/" className="text-primary hover:underline">analytics and conversion insights</Link> dashboard helps you track exactly how social proof impacts your bottom line — from impression-to-click rates on notifications to revenue attribution from <Link to="/product/campaign-builder/" className="text-primary hover:underline">A/B tested campaigns</Link>.</p>
        <p>The most effective conversion optimization starts with baseline measurement. Before adding any social proof element, you need to know your current conversion rate, average order value, and bounce rate. Then, when you deploy <Link to="/product/social-proof-notifications/" className="text-primary hover:underline">social proof notifications</Link> or <Link to="/product/testimonials-widget-reviews-widget/" className="text-primary hover:underline">testimonial widgets</Link>, you can measure the exact lift each element provides.</p>
        <p>Advanced teams use NotiProof's A/B testing to compare different <Link to="/resources/social-proof/types-of-social-proof/" className="text-primary hover:underline">types of social proof</Link> against each other. For example, do purchase notifications outperform review widgets on your pricing page? Only data can answer that question — and NotiProof provides it in real-time.</p>
      </>
    }
    articles={[
      { title: "Analytics & Insights", href: "/product/analytics-conversion-insights/", desc: "Track impressions, clicks, and conversion lift in real-time." },
      { title: "Campaign Builder", href: "/product/campaign-builder/", desc: "A/B test campaigns and optimize based on data." },
      { title: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", desc: "Measure the marketing impact of social proof." },
      { title: "Social Proof Psychology", href: "/resources/social-proof/social-proof-psychology/", desc: "Understand why certain metrics matter more than others." },
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
        <p>From displaying <Link to="/product/testimonials-widget-reviews-widget/" className="text-primary hover:underline">testimonial widgets</Link> and live visitor counts to showcasing real-time purchase activity, there are many <Link to="/resources/social-proof/types-of-social-proof/" className="text-primary hover:underline">types of social proof</Link> you can deploy to build credibility. The most effective approach layers multiple trust signals across the customer journey.</p>
        <p>Research from the Nielsen Norman Group shows that trust is built incrementally: it starts with visual design credibility (professional layout, consistent branding), progresses through content credibility (expertise, accuracy), and culminates in social credibility — which is where <Link to="/resources/social-proof/" className="text-primary hover:underline">social proof</Link> plays its most critical role. When visitors see that real people are buying, signing up, and leaving positive reviews, the trust gap closes rapidly.</p>
        <p>For <Link to="/use-cases/local-business-social-proof-convert-website-visitors/" className="text-primary hover:underline">local businesses</Link>, trust signals like Google review aggregation and recent booking activity are particularly powerful because they combine social proof with geographic relevance. For <Link to="/use-cases/saas-social-proof-tools-drive-sign-ups/" className="text-primary hover:underline">SaaS companies</Link>, showing real-time signup activity and user milestones addresses the specific trust gap of "is anyone actually using this product?"</p>
      </>
    }
    articles={[
      { title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", desc: "Complete implementation guide for website trust signals." },
      { title: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/", desc: "All the trust signal types you can deploy." },
      { title: "Social Proof Psychology", href: "/resources/social-proof/social-proof-psychology/", desc: "The science behind why trust signals work." },
      { title: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/", desc: "Display trust-building testimonial widgets." },
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
        <p>The most effective testimonials follow a specific structure: they describe the problem the customer faced before, the solution your product provided, and the measurable result they achieved. This "before → after → result" framework gives potential buyers a story they can relate to, making the testimonial far more persuasive than a generic "Great product!" quote.</p>
        <p>Timing is everything in testimonial collection. The best moment to ask is right after a positive experience — a successful onboarding, a support resolution, or a milestone achievement. NotiProof's <Link to="/product/testimonials-collection-text-image-video/" className="text-primary hover:underline">automated collection workflows</Link> trigger requests at exactly the right moment, dramatically increasing response rates compared to manual outreach.</p>
      </>
    }
    articles={[
      { title: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", desc: "Collect text, image & video testimonials automatically." },
      { title: "Video Testimonial Recorder", href: "/product/video-testimonial-recorder/", desc: "Browser-based video recording for customers." },
      { title: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/", desc: "Embeddable, customizable testimonial widgets." },
      { title: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", desc: "See how testimonials drive real-world results." },
    ]}
  />
);
