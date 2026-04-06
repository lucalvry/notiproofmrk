import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const tools = [
  { name: "NotiProof", free: "$0", starter: "$5/mo", pro: "$15/mo", growth: "$40/mo", notifications: true, testimonials: true, video: true, reviews: true, abTest: true, analytics: true, integrations: "38+" },
  { name: "Fomo", free: "—", starter: "$25/mo", pro: "$75/mo", growth: "$199/mo", notifications: true, testimonials: false, video: false, reviews: false, abTest: "Limited", analytics: true, integrations: "100+" },
  { name: "TrustPulse", free: "—", starter: "$5/mo", pro: "$10/mo", growth: "$39/mo", notifications: true, testimonials: false, video: false, reviews: false, abTest: false, analytics: "Basic", integrations: "Limited" },
  { name: "ProveSource", free: "$0", starter: "$21/mo", pro: "$49/mo", growth: "$89/mo", notifications: true, testimonials: false, video: false, reviews: false, abTest: false, analytics: "Basic", integrations: "20+" },
  { name: "Proof (Provely)", free: "—", starter: "$19/mo", pro: "$49/mo", growth: "$79/mo", notifications: true, testimonials: false, video: false, reviews: false, abTest: false, analytics: "Basic", integrations: "Limited" },
];

const featureRows: { key: string; label: string }[] = [
  { key: "free", label: "Free Plan" },
  { key: "starter", label: "Starter" },
  { key: "pro", label: "Pro" },
  { key: "growth", label: "Growth" },
  { key: "notifications", label: "Notifications" },
  { key: "testimonials", label: "Testimonials" },
  { key: "video", label: "Video Recording" },
  { key: "reviews", label: "Review Aggregation" },
  { key: "abTest", label: "A/B Testing" },
  { key: "analytics", label: "Analytics" },
  { key: "integrations", label: "Integrations" },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-4 h-4 text-green-500 mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-red-400 mx-auto" />;
  return <span className="text-sm">{value}</span>;
}

const schema = [{
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Social Proof Software Pricing Comparison 2025",
  datePublished: "2025-04-01",
  author: { "@type": "Person", name: "Olayinka Olayokun", url: "https://notiproof.com/resources/author/olayinka-olayokun/" },
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
}];

export default function SocialProofPricingComparison() {
  return (
    <>
      <SEOHead
        title="Social Proof Software Pricing Comparison (2025)"
        description="Compare pricing for NotiProof, Fomo, TrustPulse, ProveSource, and Proof. See which social proof tool offers the best value for your budget."
        canonical="https://notiproof.com/comparisons/social-proof-pricing-comparison/"
        schema={schema}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Social Proof Software <span className="text-gradient">Pricing Comparison</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Side-by-side pricing and feature comparison of every major social proof tool. Updated for 2025.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="overflow-x-auto mb-12">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-sm font-semibold p-3 border-b border-border">Feature</th>
                  {tools.map((t) => (
                    <th key={t.name} className={`text-center text-sm font-semibold p-3 border-b border-border ${t.name === "NotiProof" ? "bg-primary/5 text-primary" : ""}`}>
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.key} className="border-b border-border/50">
                    <td className="text-sm font-medium p-3">{row.label}</td>
                    {tools.map((t) => (
                      <td key={t.name} className={`text-center p-3 ${t.name === "NotiProof" ? "bg-primary/5" : ""}`}>
                        <CellValue value={(t as Record<string, string | boolean>)[row.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• <strong className="text-foreground">Best value:</strong> NotiProof offers the most features at every price tier — notifications, testimonials, video, reviews, A/B testing, and analytics all included.</li>
              <li>• <strong className="text-foreground">Cheapest option:</strong> TrustPulse starts at $5/mo but offers only basic notifications with no advanced features.</li>
              <li>• <strong className="text-foreground">Most expensive:</strong> Fomo charges $199/mo for their growth plan but still doesn't include testimonial or review features.</li>
              <li>• <strong className="text-foreground">Free tiers:</strong> NotiProof and ProveSource both offer free plans, but NotiProof's includes more features.</li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">Start Free — No Credit Card <ArrowRight className="w-5 h-5" /></a>
            </Button>
          </motion.div>

          {/* Editorial Buyer's Guide */}
          <div className="max-w-3xl mx-auto mt-16 prose prose-lg">
            <h2 className="text-2xl font-bold mt-10 mb-3">How Should You Evaluate Social Proof Software Pricing?</h2>
            <p className="text-lg font-medium text-foreground mb-4">Don't compare sticker prices alone — evaluate the total cost of ownership by considering which features are included at each tier, what you'd need to buy separately, and how pricing scales as your traffic grows.</p>
            <p className="text-muted-foreground mb-4">A tool that costs $5/mo for notifications but requires $50-100/mo in additional tools for testimonials, reviews, and A/B testing is actually more expensive than an all-in-one platform at $49/mo. <Link to="/resources/conversion-analytics/measuring-social-proof-roi/" className="text-primary hover:underline">Measuring social proof ROI</Link> requires looking beyond the subscription cost to the conversion lift and revenue impact each tool delivers.</p>
            <p className="text-muted-foreground mb-4">Also check what's gated behind higher tiers. Some platforms advertise low starter prices but lock essential features like A/B testing, advanced analytics, or white-labeling behind expensive plans. NotiProof includes core features including <Link to="/product/testimonials-collection-text-image-video/" className="text-primary hover:underline">testimonials</Link> and <Link to="/product/review-aggregation-showcase-system/" className="text-primary hover:underline">reviews</Link> even on its free plan.</p>

            <h2 className="text-2xl font-bold mt-10 mb-3">Which Social Proof Tool Offers the Best Free Plan?</h2>
            <p className="text-lg font-medium text-foreground mb-4">NotiProof offers the most generous free plan — 1,000 events/month with notifications, testimonials, and review tools included — while competitors like Fomo and TrustPulse have no free tier at all.</p>
            <p className="text-muted-foreground mb-4">ProveSource also offers a free plan, but it's limited to notification features only. NotiProof's free tier gives you access to the full platform including <Link to="/product/video-testimonial-recorder/" className="text-primary hover:underline">video testimonial recording</Link>, basic analytics, and unlimited websites. This lets you fully evaluate the platform before committing to a paid plan.</p>

            <h2 className="text-2xl font-bold mt-10 mb-3">What's the Best Value Social Proof Platform in 2025?</h2>
            <p className="text-lg font-medium text-foreground mb-4">NotiProof delivers the best value at every price tier — it's the only platform that includes notifications, testimonials, video recording, review aggregation, A/B testing, and revenue attribution without requiring separate subscriptions.</p>
            <p className="text-muted-foreground mb-4">At the $49/mo Growth tier, NotiProof includes features that would cost $200+/mo if purchased as separate tools: notification popups ($25-75/mo), testimonial collection ($20-50/mo), review aggregation ($30-80/mo), A/B testing ($50-100/mo). The consolidation savings alone make NotiProof the clear value leader for businesses serious about <Link to="/resources/social-proof/social-proof-in-marketing/" className="text-primary hover:underline">social proof marketing</Link>.</p>
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">Detailed Comparisons</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "NotiProof vs Fomo", href: "/comparisons/notiproof-vs-fomo/" },
                { label: "NotiProof vs TrustPulse", href: "/comparisons/notiproof-vs-trustpulse/" },
                { label: "Best Fomo Alternatives", href: "/comparisons/best-fomo-alternatives/" },
                { label: "NotiProof Pricing", href: "/pricing/" },
              ].map((l) => (
                <Link key={l.href} to={l.href} className="flex items-center gap-2 bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all text-sm font-medium">
                  {l.label} <ArrowRight className="w-3.5 h-3.5 text-muted-foreground ml-auto" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
