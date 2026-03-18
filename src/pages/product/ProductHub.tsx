import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

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

export default function ProductHub() {
  return (
    <>
      <SEOHead
        title="Product – Complete Social Proof & Testimonial Platform"
        description="Explore NotiProof's full suite of social proof tools: real-time notifications, testimonial collection, video reviews, analytics, campaign builder, and 38+ integrations."
        canonical="https://notiproof.com/product/"
      />

      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="Product"
            title="The Complete Social Proof Platform"
            description="Everything you need to increase conversions with social proof, testimonials, and trust signals — in one platform."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <Link
                  to={f.href}
                  className="block bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <h2 className="font-bold mb-2">{f.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
                  <span className="text-sm font-semibold text-primary">Learn more →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NotiProof */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <SectionHeading title="Why Teams Choose NotiProof" description="Trusted by thousands of businesses to increase conversions and build trust." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "10–35% conversion increase",
              "1-line install, no developers needed",
              "38+ platform integrations",
              "Real-time analytics dashboard",
              "Testimonial collection & walls",
              "A/B testing built in",
              "GDPR compliant",
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

      <CTASection />
    </>
  );
}
