import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import ExpertAttribution from "@/components/ExpertAttribution";
import TableOfContents from "@/components/TableOfContents";
import StatCallout from "@/components/StatCallout";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  { title: "Social Proof Notifications", desc: "Show real-time purchase alerts, signups, and reviews to create urgency and trust.", href: "/product/social-proof-notifications/" },
  { title: "Testimonials Collection", desc: "Collect text, image, and video testimonials from customers with automated workflows.", href: "/product/testimonials-collection-text-image-video/" },
  { title: "Video Testimonial Recorder", desc: "Let customers record video reviews directly from their browser — no app needed.", href: "/product/video-testimonial-recorder/" },
  { title: "Review Aggregation System", desc: "Pull reviews from Google, Trustpilot, G2, and more into a unified showcase.", href: "/product/review-aggregation-showcase-system/" },
  { title: "Campaign Builder", desc: "Create targeted notification campaigns with smart rules, scheduling, and A/B testing.", href: "/product/campaign-builder/" },
  { title: "Integrations Ecosystem", desc: "Connect with 38+ platforms including Shopify, WordPress, Stripe, and Zapier.", href: "/product/integrations-ecosystem/" },
  { title: "Analytics & Conversion Insights", desc: "Track impressions, clicks, and conversion lift with a real-time analytics dashboard.", href: "/product/analytics-conversion-insights/" },
  { title: "Visitor Counter", desc: "Show live visitor counts to demonstrate popularity and increase engagement.", href: "/product/visitor-counter-live-visitors/" },
  { title: "Recent Activity Notifications", desc: "Display a live feed of recent purchases, signups, and actions on your site.", href: "/product/recent-activity-notifications/" },
  { title: "Testimonials & Reviews Widget", desc: "Embed beautiful, customizable testimonial and review widgets anywhere on your site.", href: "/product/testimonials-widget-reviews-widget/" },
];

const pillarFaqs = [
  { q: "What is NotiProof?", a: "NotiProof is a complete social proof and testimonials platform that helps websites increase conversions through real-time notifications, customer testimonials, review aggregation, visitor counters, and conversion analytics. It serves e-commerce stores, SaaS companies, agencies, and local businesses." },
  { q: "How much does NotiProof cost?", a: "NotiProof offers a free plan with core features, plus Standard ($19/mo), Pro ($49/mo), and Business ($99/mo) plans with increasing notification volume, advanced targeting, and priority support. All 38+ integrations are included on every plan." },
  { q: "How long does setup take?", a: "Most businesses are fully set up in under 10 minutes. Add one line of JavaScript to your website, connect your data sources (Shopify, Stripe, etc.), and configure your first campaign in the dashboard." },
  { q: "Does NotiProof slow down my website?", a: "No. NotiProof's embed script is under 15KB gzipped, loads asynchronously, and has zero impact on Core Web Vitals (LCP, FID, CLS). Notification data is served from a global CDN with edge caching." },
  { q: "Is NotiProof GDPR compliant?", a: "Yes. NotiProof offers privacy-compliant tracking options, customer data anonymization controls, and data processing that complies with GDPR Article 6(1)(f). You control exactly what customer information is displayed." },
  { q: "Can I use NotiProof with Shopify, WordPress, or other platforms?", a: "Yes. NotiProof integrates with 38+ platforms including Shopify, WordPress, WooCommerce, BigCommerce, Stripe, HubSpot, Zapier, and more. Custom webhooks and REST API are available for any platform." },
];

const tocSections = [
  { id: "what-is-notiproof", label: "What Is NotiProof?" },
  { id: "how-increase-conversions", label: "How Does NotiProof Increase Conversions?" },
  { id: "features", label: "What Features Does NotiProof Include?" },
  { id: "who-is-it-for", label: "Who Is NotiProof For?" },
  { id: "why-choose", label: "Why Teams Choose NotiProof" },
];

const stats = [
  { icon: TrendingUp, stat: "10–35%", label: "Conversion increase" },
  { icon: Zap, stat: "38+", label: "Platform integrations" },
  { icon: Users, stat: "4,000+", label: "Websites powered" },
  { icon: Shield, stat: "GDPR", label: "Fully compliant" },
];

export default function ProductHub() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pillarFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "NotiProof Product – Complete Social Proof & Testimonial Platform",
    description: "Explore NotiProof's full suite of social proof tools: real-time notifications, testimonial collection, video reviews, analytics, campaign builder, and 38+ integrations.",
    url: "https://notiproof.com/product/",
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  };

  return (
    <>
      <SEOHead
        title="Product – Complete Social Proof & Testimonial Platform"
        description="Explore NotiProof's full suite of social proof tools: real-time notifications, testimonial collection, video reviews, analytics, campaign builder, and 38+ integrations."
        canonical="https://notiproof.com/product/"
        schema={[webPageSchema, faqSchema]}
      />

      <Breadcrumbs />

      {/* Hero */}
      <section className="section-padding pt-4">
        <div className="container-tight">
          <SectionHeading
            badge="Product"
            title="The Complete Social Proof Platform"
            description="Everything you need to increase conversions with social proof, testimonials, and trust signals — in one platform."
          />
        </div>
      </section>

      {/* Expert Attribution + TOC + Content */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <ExpertAttribution />
          <div className="flex gap-10">
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />
              </div>
            </aside>
            <div className="min-w-0 flex-1">
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} />
              </div>

              {/* What Is NotiProof? */}
              <div className="mb-16">
                <h2 id="what-is-notiproof" className="text-3xl md:text-4xl font-bold mb-4 scroll-mt-28">What Is NotiProof?</h2>
                <p className="text-lg font-medium text-foreground/80 mb-4">
                  NotiProof is a unified social proof platform that combines real-time notifications, testimonial collection, review aggregation, visitor counting, and conversion analytics into a single tool.
                </p>
                <p className="text-muted-foreground mb-4">
                  The platform addresses a fundamental challenge in online business: visitors don't trust websites they've never heard of. Studies from the <em>Journal of Consumer Research</em> show that 92% of consumers hesitate to purchase when there's no social proof present. NotiProof solves this by surfacing real customer actions — purchases, signups, reviews, and testimonials — as visible trust signals throughout your website.
                </p>
                <p className="text-muted-foreground">
                  Unlike point solutions that handle only notifications or only reviews, NotiProof provides the entire social proof stack: <Link to="/product/social-proof-notifications/" className="text-primary font-semibold hover:underline">real-time notifications</Link>, <Link to="/product/testimonials-collection-text-image-video/" className="text-primary font-semibold hover:underline">testimonial collection</Link>, <Link to="/product/review-aggregation-showcase-system/" className="text-primary font-semibold hover:underline">review aggregation</Link>, and <Link to="/product/analytics-conversion-insights/" className="text-primary font-semibold hover:underline">analytics</Link> — all connected through <Link to="/product/integrations-ecosystem/" className="text-primary font-semibold hover:underline">38+ integrations</Link>.
                </p>
              </div>

              {/* How Does NotiProof Increase Conversions? */}
              <div className="mb-16">
                <h2 id="how-increase-conversions" className="text-3xl md:text-4xl font-bold mb-4 scroll-mt-28">How Does NotiProof Increase Conversions?</h2>
                <p className="text-lg font-medium text-foreground/80 mb-4">
                  NotiProof increases conversions by leveraging three psychological principles: social validation, urgency through scarcity, and trust through third-party endorsement.
                </p>
                <StatCallout stat="10–35% conversion lift" context="Average across NotiProof customers, depending on traffic volume and product category." />
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Social validation</strong> is powered by <Link to="/product/social-proof-notifications/" className="text-primary font-semibold hover:underline">real-time notifications</Link> and <Link to="/product/recent-activity-notifications/" className="text-primary font-semibold hover:underline">activity feeds</Link>. When visitors see "Sarah from Austin just purchased this item," they receive confirmation that others trust your product.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Urgency</strong> is created by the <Link to="/product/visitor-counter-live-visitors/" className="text-primary font-semibold hover:underline">visitor counter</Link> ("47 people viewing this right now") and purchase velocity alerts, triggering loss aversion.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Trust</strong> is built through <Link to="/product/testimonials-collection-text-image-video/" className="text-primary font-semibold hover:underline">customer testimonials</Link>, <Link to="/product/video-testimonial-recorder/" className="text-primary font-semibold hover:underline">video reviews</Link>, and <Link to="/product/review-aggregation-showcase-system/" className="text-primary font-semibold hover:underline">aggregated reviews</Link> displayed via <Link to="/product/testimonials-widget-reviews-widget/" className="text-primary font-semibold hover:underline">embeddable widgets</Link>. The Spiegel Research Center found that displaying reviews increases conversion rates by up to 270% for higher-priced products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="features" className="section-padding scroll-mt-28">
        <div className="container-tight">
          <SectionHeading title="What Features Does NotiProof Include?" description="Ten integrated tools that work together to maximize your website's conversion rate." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <Link
                  to={f.href}
                  className="block bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <h3 className="font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
                  <span className="text-sm font-semibold text-primary">Learn more →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is NotiProof For? */}
      <section id="who-is-it-for" className="section-padding bg-surface scroll-mt-28">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Is NotiProof For?</h2>
            <p className="text-lg font-medium text-foreground/80 mb-6">
              NotiProof serves any business that converts visitors on a website — from solo founders to enterprise teams across four primary segments.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "E-commerce Stores", desc: "Display purchase alerts, product reviews, and visitor counts to reduce cart abandonment and increase average order value.", href: "/use-cases/ecommerce/" },
                { title: "SaaS Companies", desc: "Show trial signups, user milestones, and customer testimonials to build credibility and drive free trial conversions.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
                { title: "Marketing Agencies", desc: "Manage social proof campaigns across multiple client websites from a single dashboard with white-label options.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
                { title: "Local Businesses", desc: "Aggregate Google and Yelp reviews, display booking activity, and show local customer testimonials.", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
              ].map((uc) => (
                <Link key={uc.title} to={uc.href} className="block bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all">
                  <h3 className="font-bold mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground">{uc.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Teams Choose NotiProof — Stat Cards */}
      <section id="why-choose" className="section-padding scroll-mt-28">
        <div className="container-tight">
          <SectionHeading title="Why Teams Choose NotiProof" description="Trusted by thousands of businesses to increase conversions and build trust." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            {stats.map((s) => (
              <motion.div key={s.label} {...fadeUp} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-2xl font-extrabold text-primary">{s.stat}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "1-line install, no developers needed",
              "Testimonial collection & walls",
              "A/B testing built in",
              "White label available",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <SectionHeading title="Frequently Asked Questions" description="Common questions about the NotiProof platform." />
          <div className="max-w-3xl mx-auto grid gap-4">
            {pillarFaqs.map((faq) => (
              <details key={faq.q} className="group bg-card border border-border rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-sm list-none">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
