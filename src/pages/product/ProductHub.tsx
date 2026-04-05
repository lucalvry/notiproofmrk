import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap, Shield, Bell, Video, Star as StarIcon, BarChart3, Eye, Activity, Layout, Plug } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  { title: "Social Proof Notifications", desc: "Show real-time purchase alerts, signups, and reviews to create urgency and trust.", href: "/product/social-proof-notifications/", icon: Bell },
  { title: "Testimonials Collection", desc: "Collect text, image, and video testimonials from customers with automated workflows.", href: "/product/testimonials-collection-text-image-video/", icon: StarIcon },
  { title: "Video Testimonial Recorder", desc: "Let customers record video reviews directly from their browser — no app needed.", href: "/product/video-testimonial-recorder/", icon: Video },
  { title: "Review Aggregation System", desc: "Pull reviews from Google, Trustpilot, G2, and more into a unified showcase.", href: "/product/review-aggregation-showcase-system/", icon: Layout },
  { title: "Campaign Builder", desc: "Create targeted notification campaigns with smart rules, scheduling, and A/B testing.", href: "/product/campaign-builder/", icon: Zap },
  { title: "Integrations Ecosystem", desc: "Connect with 38+ platforms including Shopify, WordPress, Stripe, and Zapier.", href: "/product/integrations-ecosystem/", icon: Plug },
  { title: "Analytics & Conversion Insights", desc: "Track impressions, clicks, and conversion lift with a real-time analytics dashboard.", href: "/product/analytics-conversion-insights/", icon: BarChart3 },
  { title: "Visitor Counter", desc: "Show live visitor counts to demonstrate popularity and increase engagement.", href: "/product/visitor-counter-live-visitors/", icon: Eye },
  { title: "Recent Activity Notifications", desc: "Display a live feed of recent purchases, signups, and actions on your site.", href: "/product/recent-activity-notifications/", icon: Activity },
  { title: "Testimonials & Reviews Widget", desc: "Embed beautiful, customizable testimonial and review widgets anywhere on your site.", href: "/product/testimonials-widget-reviews-widget/", icon: Layout },
];

const pillarFaqs = [
  { q: "What is NotiProof?", a: "NotiProof is a complete social proof and testimonials platform that helps websites increase conversions through real-time notifications, customer testimonials, review aggregation, visitor counters, and conversion analytics. It serves e-commerce stores, SaaS companies, agencies, and local businesses." },
  { q: "How much does NotiProof cost?", a: "NotiProof offers a free plan with core features, plus Standard ($19/mo), Pro ($49/mo), and Business ($99/mo) plans with increasing notification volume, advanced targeting, and priority support. All 38+ integrations are included on every plan." },
  { q: "How long does setup take?", a: "Most businesses are fully set up in under 10 minutes. Add one line of JavaScript to your website, connect your data sources (Shopify, Stripe, etc.), and configure your first campaign in the dashboard." },
  { q: "Does NotiProof slow down my website?", a: "No. NotiProof's embed script is under 15KB gzipped, loads asynchronously, and has zero impact on Core Web Vitals (LCP, FID, CLS). Notification data is served from a global CDN with edge caching." },
  { q: "Is NotiProof GDPR compliant?", a: "Yes. NotiProof offers privacy-compliant tracking options, customer data anonymization controls, and data processing that complies with GDPR Article 6(1)(f). You control exactly what customer information is displayed." },
  { q: "Can I use NotiProof with Shopify, WordPress, or other platforms?", a: "Yes. NotiProof integrates with 38+ platforms including Shopify, WordPress, WooCommerce, BigCommerce, Stripe, HubSpot, Zapier, and more. Custom webhooks and REST API are available for any platform." },
];

const stats = [
  { icon: TrendingUp, stat: "10–35%", label: "Conversion increase" },
  { icon: Zap, stat: "38+", label: "Platform integrations" },
  { icon: Users, stat: "4,000+", label: "Websites powered" },
  { icon: Shield, stat: "GDPR", label: "Fully compliant" },
];

const conversionPillars = [
  {
    title: "Social Validation",
    description: "Real-time notifications and activity feeds show visitors that others trust your product — \"Sarah from Austin just purchased this item.\"",
    links: [
      { label: "Social Proof Notifications", href: "/product/social-proof-notifications/" },
      { label: "Recent Activity", href: "/product/recent-activity-notifications/" },
    ],
  },
  {
    title: "Urgency & Scarcity",
    description: "Visitor counters and purchase velocity alerts trigger loss aversion — \"47 people viewing this right now.\"",
    links: [
      { label: "Visitor Counter", href: "/product/visitor-counter-live-visitors/" },
      { label: "Campaign Builder", href: "/product/campaign-builder/" },
    ],
  },
  {
    title: "Trust & Credibility",
    description: "Customer testimonials, video reviews, and aggregated ratings displayed via embeddable widgets — up to 270% conversion lift for higher-priced products.",
    links: [
      { label: "Testimonials", href: "/product/testimonials-collection-text-image-video/" },
      { label: "Review Aggregation", href: "/product/review-aggregation-showcase-system/" },
    ],
  },
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

      {/* Hero */}
      <section className="section-padding pt-4">
        <div className="container-tight text-center">
          <motion.div {...fadeUp}>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">Product</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl mx-auto">The Complete Social Proof Platform</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Everything you need to increase conversions with social proof, testimonials, and trust signals — in one platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button variant="hero" size="xl" asChild>
                <a href="https://app.notiproof.com/signup">Start Free Trial <ArrowRight className="w-5 h-5" /></a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/pricing/">View Pricing</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              Trusted by 4,000+ websites · No credit card required
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 border-y border-border bg-surface">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <motion.div key={s.label} {...fadeUp} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-primary leading-tight">{s.stat}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How NotiProof Increases Conversions — 3 pillars */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading title="How NotiProof Increases Conversions" description="Three psychological principles, powered by one platform." />
          <div className="grid md:grid-cols-3 gap-8">
            {conversionPillars.map((pillar, i) => (
              <motion.div key={pillar.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="h-1 bg-gradient-to-r from-primary to-primary/60" />
                <div className="p-7">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-extrabold text-lg flex items-center justify-center mb-5 shadow-md">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{pillar.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.links.map((link) => (
                      <Link key={link.href} to={link.href} className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                        {link.label} <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-10">
        <div className="container-tight">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">Ready to increase conversions?</h3>
              <p className="text-primary-foreground/80 text-sm">Start your free trial today — no credit card required.</p>
            </div>
            <Button size="xl" variant="secondary" className="shrink-0 font-bold" asChild>
              <a href="https://app.notiproof.com/signup">Start Free Trial <ArrowRight className="w-5 h-5 ml-1" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading title="All Features" description="Ten integrated tools that work together to maximize your website's conversion rate." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <Link
                  to={f.href}
                  className="block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="h-1 bg-gradient-to-r from-primary to-primary/60" />
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
                    <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is NotiProof For? */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <SectionHeading title="Who Is NotiProof For?" description="NotiProof serves any business that converts visitors on a website." />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "E-commerce Stores", desc: "Display purchase alerts, product reviews, and visitor counts to reduce cart abandonment and increase average order value.", href: "/use-cases/ecommerce/" },
              { title: "SaaS Companies", desc: "Show trial signups, user milestones, and customer testimonials to build credibility and drive free trial conversions.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
              { title: "Marketing Agencies", desc: "Manage social proof campaigns across multiple client websites from a single dashboard with white-label options.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
              { title: "Local Businesses", desc: "Aggregate Google and Yelp reviews, display booking activity, and show local customer testimonials.", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
            ].map((uc) => (
              <Link key={uc.title} to={uc.href} className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-primary/30 transition-all">
                <div className="h-1 bg-gradient-to-r from-primary/40 to-primary/20" />
                <div className="p-6">
                  <h3 className="font-bold mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{uc.desc}</p>
                  <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:underline">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Teams Choose NotiProof */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading title="Why Teams Choose NotiProof" description="Trusted by thousands of businesses to increase conversions and build trust." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "1-line install, no developers needed",
              "Testimonial collection & walls",
              "A/B testing built in",
              "White label available",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2 bg-card border border-border rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <SectionHeading title="Frequently Asked Questions" description="Common questions about the NotiProof platform." />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {pillarFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/20 transition-colors">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
