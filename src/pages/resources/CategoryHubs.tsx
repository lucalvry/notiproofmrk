import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Star, BarChart3, Shield, MessageSquare, Clock, Calendar, ArrowRight, Lightbulb } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AuthorCard from "@/components/AuthorCard";
import { LucideIcon } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

interface Article {
  title: string;
  href: string;
  desc: string;
  readTime?: string;
  date?: string;
}

interface HubConfig {
  title: string;
  metaTitle: string;
  desc: string;
  canonical: string;
  icon: LucideIcon;
  startHere?: { title: string; href: string; reason: string };
  introContent: React.ReactNode;
  articles: Article[];
  crossHubLinks?: { label: string; href: string }[];
}

const buildCollectionSchema = (title: string, desc: string, canonical: string, articles: Article[]) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description: desc,
  url: canonical,
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title,
      url: `https://notiproof.com${a.href}`,
    })),
  },
});

const HubPage = ({ title, metaTitle, desc, canonical, icon: Icon, startHere, introContent, articles, crossHubLinks }: HubConfig) => (
  <>
    <SEOHead
      title={metaTitle}
      description={desc}
      canonical={canonical}
      schema={buildCollectionSchema(metaTitle, desc, canonical, articles)}
    />

    <section className="section-padding">
      <div className="container-tight">
        {/* Hero */}
        <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <Link to="/resources/" className="text-xs text-muted-foreground hover:text-primary transition-colors">← Resources</Link>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{title}</h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">{desc}</p>
        </motion.div>

        {/* Start Here callout */}
        {startHere && (
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-10">
            <Link
              to={startHere.href}
              className="group flex items-start gap-4 bg-primary/5 border border-primary/20 rounded-xl p-5 hover:shadow-md hover:border-primary/40 transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Start Here</p>
                <p className="text-sm font-bold group-hover:text-primary transition-colors">{startHere.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{startHere.reason}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1 ml-auto group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}

        {/* Table of Contents */}
        <motion.nav {...fadeUp} className="max-w-3xl mx-auto mb-10 bg-card border border-border rounded-xl p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Articles in this topic</p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {articles.map((a) => (
              <li key={a.href} className="flex items-center justify-between gap-2">
                <Link to={a.href} className="text-sm text-primary hover:underline leading-snug">{a.title}</Link>
                {a.readTime && <span className="text-xs text-muted-foreground shrink-0">{a.readTime}</span>}
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Intro content — left-aligned prose */}
        <motion.div {...fadeUp} className="max-w-3xl mx-auto prose prose-lg mb-12">
          {introContent}
        </motion.div>

        {/* Cross-hub links */}
        {crossHubLinks && crossHubLinks.length > 0 && (
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-12 flex flex-wrap gap-2">
            <span className="text-xs font-semibold text-muted-foreground mr-1 self-center">Related topics:</span>
            {crossHubLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-xs font-medium text-primary bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}

        {/* Rich article cards */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6">All Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {articles.map((a, i) => (
              <motion.div key={a.href} {...fadeUp} transition={{ delay: i * 0.05 }}>
                <Link
                  to={a.href}
                  className="group block bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all h-full"
                >
                  <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors leading-snug">{a.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{a.desc}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border/50">
                    {a.readTime && <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>}
                    {a.date && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Author */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-4">About the Author</h2>
          <AuthorCard />
        </div>
      </div>
    </section>
  </>
);

/* ───────────────── REVIEWS HUB ───────────────── */
export const ReviewsHub = () => (
  <HubPage
    title="Reviews"
    metaTitle="Reviews – How to Collect & Leverage Customer Reviews"
    desc="Learn how to collect, manage, and leverage customer reviews to increase trust and conversions."
    canonical="https://notiproof.com/resources/reviews/"
    icon={Star}
    startHere={{ title: "Review Aggregation System", href: "/product/review-aggregation-showcase-system/", reason: "Start by understanding how to aggregate reviews from 15+ platforms into one place." }}
    crossHubLinks={[
      { label: "Testimonials", href: "/resources/testimonials/" },
      { label: "Website Trust", href: "/resources/website-trust/" },
      { label: "Social Proof Guide", href: "/resources/social-proof/" },
    ]}
    introContent={
      <>
        <p>Customer reviews are one of the most powerful forms of <Link to="/resources/social-proof/" className="text-primary hover:underline">social proof</Link>. Research shows that 93% of consumers say online reviews influence their purchasing decisions, making review management essential for any conversion-focused business.</p>
        <p>Whether you're aggregating reviews from Google, Yelp, or Trustpilot, or collecting first-party <Link to="/resources/testimonials/" className="text-primary hover:underline">testimonials</Link> directly from customers, a strong review strategy builds the <Link to="/resources/website-trust/" className="text-primary hover:underline">website trust</Link> signals that drive conversions. The key is making your best reviews visible exactly where buying decisions are made.</p>
        <p>Reviews work because they provide <Link to="/resources/social-proof/social-proof-psychology/" className="text-primary hover:underline">psychological validation</Link> from peers. When a potential customer reads that someone in a similar situation had a positive experience, it reduces perceived risk and accelerates the decision. This is why <Link to="/product/review-aggregation-showcase-system/" className="text-primary hover:underline">review aggregation</Link> — pulling reviews from multiple platforms into one place — is so effective.</p>
        <p>Beyond collection, the format matters. Text reviews are good, but <Link to="/product/video-testimonial-recorder/" className="text-primary hover:underline">video testimonials</Link> convert up to 4× better because they're harder to fake and create a stronger emotional connection. Use NotiProof's <Link to="/product/analytics-conversion-insights/" className="text-primary hover:underline">analytics dashboard</Link> to measure which review format drives the most conversions on your site.</p>
      </>
    }
    articles={[
      { title: "Review Aggregation System", href: "/product/review-aggregation-showcase-system/", desc: "Aggregate reviews from 15+ platforms into one unified widget.", readTime: "6 min", date: "Mar 2025" },
      { title: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", desc: "Collect text, image, and video testimonials from customers.", readTime: "6 min", date: "Mar 2025" },
      { title: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", desc: "Real-world examples of reviews driving conversions.", readTime: "9 min", date: "Feb 2025" },
      { title: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/", desc: "How reviews fit into the broader social proof landscape.", readTime: "10 min", date: "Jan 2025" },
    ]}
  />
);

/* ───────────── CONVERSION ANALYTICS HUB ───────────── */
export const ConversionAnalyticsHub = () => (
  <HubPage
    title="Conversion Analytics"
    metaTitle="Conversion Analytics – Measure & Optimize Your Conversion Rates"
    desc="Learn how to measure, analyze, and optimize your conversion rates with data-driven insights and analytics."
    canonical="https://notiproof.com/resources/conversion-analytics/"
    icon={BarChart3}
    startHere={{ title: "Analytics & Conversion Insights", href: "/product/analytics-conversion-insights/", reason: "Understand NotiProof's real-time analytics dashboard and what metrics matter most." }}
    crossHubLinks={[
      { label: "Social Proof Guide", href: "/resources/social-proof/" },
      { label: "Reviews", href: "/resources/reviews/" },
      { label: "Website Trust", href: "/resources/website-trust/" },
    ]}
    introContent={
      <>
        <p>Understanding your conversion data is the foundation of effective <Link to="/resources/social-proof/social-proof-in-marketing/" className="text-primary hover:underline">social proof marketing</Link>. Without analytics, you're guessing which notifications, testimonials, and trust signals actually drive results — and guesswork doesn't scale.</p>
        <p>NotiProof's <Link to="/product/analytics-conversion-insights/" className="text-primary hover:underline">analytics and conversion insights</Link> dashboard helps you track exactly how social proof impacts your bottom line — from impression-to-click rates on notifications to revenue attribution from <Link to="/product/campaign-builder/" className="text-primary hover:underline">A/B tested campaigns</Link>.</p>
        <p>The most effective conversion optimization starts with baseline measurement. Before adding any social proof element, know your current conversion rate, average order value, and bounce rate. Then, when you deploy <Link to="/product/social-proof-notifications/" className="text-primary hover:underline">social proof notifications</Link> or <Link to="/product/testimonials-widget-reviews-widget/" className="text-primary hover:underline">testimonial widgets</Link>, you can measure the exact lift each element provides.</p>
        <p>Advanced teams use NotiProof's A/B testing to compare different <Link to="/resources/social-proof/types-of-social-proof/" className="text-primary hover:underline">types of social proof</Link> against each other. Do purchase notifications outperform <Link to="/resources/reviews/" className="text-primary hover:underline">review widgets</Link> on your pricing page? Only data can answer that — and NotiProof provides it in real-time.</p>
      </>
    }
    articles={[
      { title: "Analytics & Insights", href: "/product/analytics-conversion-insights/", desc: "Track impressions, clicks, and conversion lift in real-time.", readTime: "7 min", date: "Mar 2025" },
      { title: "Campaign Builder", href: "/product/campaign-builder/", desc: "A/B test campaigns and optimize based on data.", readTime: "6 min", date: "Mar 2025" },
      { title: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", desc: "Measure the marketing impact of social proof.", readTime: "10 min", date: "Mar 2025" },
      { title: "Social Proof Psychology", href: "/resources/social-proof/social-proof-psychology/", desc: "Understand why certain metrics matter more than others.", readTime: "11 min", date: "Feb 2025" },
    ]}
  />
);

/* ───────────── WEBSITE TRUST HUB ───────────── */
export const WebsiteTrustHub = () => (
  <HubPage
    title="Website Trust"
    metaTitle="Website Trust – Build Credibility & Trust Signals Online"
    desc="Discover how to build trust on your website with social proof, reviews, testimonials, and trust badges."
    canonical="https://notiproof.com/resources/website-trust/"
    icon={Shield}
    startHere={{ title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", reason: "The best starting point for understanding where and how to place trust signals." }}
    crossHubLinks={[
      { label: "Reviews", href: "/resources/reviews/" },
      { label: "Testimonials", href: "/resources/testimonials/" },
      { label: "Conversion Analytics", href: "/resources/conversion-analytics/" },
    ]}
    introContent={
      <>
        <p>Trust is the invisible currency of the internet. Visitors decide within seconds whether your website is credible enough to warrant their attention — and their money. Understanding the <Link to="/resources/social-proof/social-proof-psychology/" className="text-primary hover:underline">psychology behind social proof</Link> helps you design trust signals that actually convert.</p>
        <p>From displaying <Link to="/product/testimonials-widget-reviews-widget/" className="text-primary hover:underline">testimonial widgets</Link> and <Link to="/product/visitor-counter-live-visitors/" className="text-primary hover:underline">live visitor counts</Link> to showcasing real-time purchase activity, there are many <Link to="/resources/social-proof/types-of-social-proof/" className="text-primary hover:underline">types of social proof</Link> you can deploy to build credibility. The most effective approach layers multiple trust signals across the customer journey.</p>
        <p>Research from the Nielsen Norman Group shows that trust is built incrementally: visual design credibility, content credibility, and then social credibility — where <Link to="/resources/social-proof/" className="text-primary hover:underline">social proof</Link> plays its most critical role. When visitors see real people buying, signing up, and leaving positive <Link to="/resources/reviews/" className="text-primary hover:underline">reviews</Link>, the trust gap closes rapidly.</p>
        <p>For <Link to="/use-cases/local-business-social-proof-convert-website-visitors/" className="text-primary hover:underline">local businesses</Link>, trust signals like Google review aggregation and recent booking activity are particularly powerful. For <Link to="/use-cases/saas-social-proof-tools-drive-sign-ups/" className="text-primary hover:underline">SaaS companies</Link>, showing real-time signup activity addresses the specific trust gap of "is anyone actually using this product?" Use <Link to="/product/analytics-conversion-insights/" className="text-primary hover:underline">conversion analytics</Link> to measure which signals work best for your audience.</p>
      </>
    }
    articles={[
      { title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", desc: "Complete implementation guide for website trust signals.", readTime: "11 min", date: "Mar 2025" },
      { title: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/", desc: "All the trust signal types you can deploy.", readTime: "10 min", date: "Jan 2025" },
      { title: "Social Proof Psychology", href: "/resources/social-proof/social-proof-psychology/", desc: "The science behind why trust signals work.", readTime: "11 min", date: "Feb 2025" },
      { title: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/", desc: "Display trust-building testimonial widgets.", readTime: "5 min", date: "Mar 2025" },
    ]}
  />
);

/* ───────────── TESTIMONIALS HUB ───────────── */
export const TestimonialsResourceHub = () => (
  <HubPage
    title="Testimonials"
    metaTitle="Testimonials Guide – Collect, Display & Leverage Customer Stories"
    desc="Everything about collecting, displaying, and leveraging customer testimonials to build trust and increase conversions."
    canonical="https://notiproof.com/resources/testimonials/"
    icon={MessageSquare}
    startHere={{ title: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", reason: "Learn how to set up automated testimonial collection workflows." }}
    crossHubLinks={[
      { label: "Reviews", href: "/resources/reviews/" },
      { label: "Website Trust", href: "/resources/website-trust/" },
      { label: "Social Proof Guide", href: "/resources/social-proof/" },
    ]}
    introContent={
      <>
        <p>Customer testimonials are the backbone of any <Link to="/resources/social-proof/" className="text-primary hover:underline">social proof strategy</Link>. A single compelling testimonial can be more persuasive than pages of marketing copy because it provides authentic, third-party validation of your product's value.</p>
        <p>Modern testimonial strategies go beyond simple text quotes. With <Link to="/product/video-testimonial-recorder/" className="text-primary hover:underline">video testimonial recording</Link>, <Link to="/product/testimonials-collection-text-image-video/" className="text-primary hover:underline">multi-format collection</Link>, and embeddable widgets, you can capture and display customer stories wherever they'll have the most impact on your <Link to="/resources/conversion-analytics/" className="text-primary hover:underline">conversion rates</Link>.</p>
        <p>The most effective testimonials follow a specific structure: they describe the problem the customer faced before, the solution your product provided, and the measurable result. This "before → after → result" framework makes testimonials far more persuasive than generic "Great product!" quotes. Combine with <Link to="/resources/reviews/" className="text-primary hover:underline">review aggregation</Link> for maximum trust impact.</p>
        <p>Timing is everything in testimonial collection. The best moment to ask is right after a positive experience — a successful onboarding, a support resolution, or a milestone achievement. NotiProof's automated collection workflows trigger requests at exactly the right moment, dramatically increasing response rates. Track the performance of each testimonial with <Link to="/product/analytics-conversion-insights/" className="text-primary hover:underline">conversion analytics</Link>.</p>
      </>
    }
    articles={[
      { title: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", desc: "Collect text, image & video testimonials automatically.", readTime: "6 min", date: "Mar 2025" },
      { title: "Video Testimonial Recorder", href: "/product/video-testimonial-recorder/", desc: "Browser-based video recording for customers.", readTime: "5 min", date: "Mar 2025" },
      { title: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/", desc: "Embeddable, customizable testimonial widgets.", readTime: "5 min", date: "Mar 2025" },
      { title: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", desc: "See how testimonials drive real-world results.", readTime: "9 min", date: "Feb 2025" },
    ]}
  />
);
