import { ArrowRight, CheckCircle2, XCircle, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const tools = [
  {
    name: "NotiProof Free",
    pricing: "$0/mo",
    notifications: true,
    testimonials: true,
    video: true,
    reviews: true,
    abTest: false,
    analytics: "Basic",
    limit: "5,000 views/mo",
    best: "Best overall free option",
  },
  {
    name: "Fomo Free Trial",
    pricing: "14-day trial only",
    notifications: true,
    testimonials: false,
    video: false,
    reviews: false,
    abTest: false,
    analytics: "Basic",
    limit: "Trial period",
    best: "No permanent free plan",
  },
  {
    name: "ProveSource Free",
    pricing: "$0/mo",
    notifications: true,
    testimonials: false,
    video: false,
    reviews: false,
    abTest: false,
    analytics: "Basic",
    limit: "1,000 visitors/mo",
    best: "Basic notifications only",
  },
  {
    name: "WPfomify (WordPress)",
    pricing: "$99/year",
    notifications: true,
    testimonials: false,
    video: false,
    reviews: false,
    abTest: false,
    analytics: false,
    limit: "WordPress only",
    best: "WordPress-only solution",
  },
  {
    name: "Evidence.io Free",
    pricing: "$0/mo",
    notifications: true,
    testimonials: false,
    video: false,
    reviews: false,
    abTest: false,
    analytics: "Basic",
    limit: "Limited notifications",
    best: "Very basic notifications",
  },
];

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />;
  if (value === false) return <XCircle className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

const faqs = [
  { q: "What's the best free social proof tool?", a: "NotiProof's free plan offers the most features — real-time notifications, testimonials, video recording, and review aggregation with 5,000 views/month. No other free tool matches this breadth." },
  { q: "Are free social proof tools effective?", a: "Yes. Studies show that any social proof is better than no social proof. Even basic notifications can increase conversions by 10-15%. Free plans let you validate the approach before investing." },
  { q: "Can I use free social proof tools on Shopify?", a: "Yes. NotiProof and ProveSource both offer free plans that work with Shopify. NotiProof's free plan includes more features (testimonials, reviews) beyond just notifications." },
  { q: "When should I upgrade from a free plan?", a: "Upgrade when you exceed view/visitor limits, need A/B testing to optimize notifications, want advanced analytics and revenue attribution, or need white-label for agency clients." },
  { q: "Do free social proof tools hurt site speed?", a: "Reputable tools like NotiProof use lightweight, async-loading scripts (under 15KB) that have zero impact on page load times or Core Web Vitals, even on free plans." },
];

export default function FreeSocialProofTools() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article>
      <SEOHead
        title="Best Free Social Proof Tools Compared (2026)"
        description="Compare the best free social proof tools — NotiProof, ProveSource, Evidence.io, and more. Feature comparison, limitations, and recommendations."
        canonical="https://notiproof.com/comparisons/free-social-proof-tools/"
        schema={faqSchema}
      />

      <header className="relative overflow-hidden bg-foreground text-background py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Free Tools Comparison</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Best Free Social Proof Tools (2026)</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Compare free social proof tools side by side. See which free plan gives you the most features, highest limits, and best path to growth.</p>
          </motion.div>
        </div>
      </header>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold mb-3">Why Use a Free Social Proof Tool?</h2>
            <p className="text-lg font-medium text-foreground mb-4">Free social proof tools let you validate the conversion impact of notifications, testimonials, and trust signals without upfront investment — making them ideal for startups, small businesses, and anyone testing social proof for the first time.</p>
            <p className="text-muted-foreground mb-4">Research shows that <Link to="/resources/social-proof/what-is-social-proof/" className="text-primary hover:underline">social proof</Link> can increase conversion rates by 15-30%. But committing to a paid tool before seeing results feels risky. Free plans solve this by letting you test on your live site, measure results, and upgrade only when you've confirmed positive ROI.</p>
            <p className="text-muted-foreground mb-6">The key is choosing a free plan that's genuinely useful — not just a crippled trial. Below, we compare every major free social proof option by features, limits, and quality.</p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-muted/30">
        <div className="container-tight">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-center mb-8">Free Plan Feature Comparison</h2>
            <div className="rounded-xl border border-border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-bold min-w-[150px]">Tool</TableHead>
                    <TableHead className="text-center font-bold">Price</TableHead>
                    <TableHead className="text-center font-bold">Limit</TableHead>
                    <TableHead className="text-center font-bold">Notifications</TableHead>
                    <TableHead className="text-center font-bold">Testimonials</TableHead>
                    <TableHead className="text-center font-bold">Video</TableHead>
                    <TableHead className="text-center font-bold">Reviews</TableHead>
                    <TableHead className="text-center font-bold">A/B Test</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tools.map((tool) => (
                    <TableRow key={tool.name} className={tool.name.includes("NotiProof") ? "bg-primary/5" : ""}>
                      <TableCell className="font-medium text-sm">{tool.name}</TableCell>
                      <TableCell className="text-center text-sm">{tool.pricing}</TableCell>
                      <TableCell className="text-center text-xs text-muted-foreground">{tool.limit}</TableCell>
                      <TableCell className="text-center"><CellIcon value={tool.notifications} /></TableCell>
                      <TableCell className="text-center"><CellIcon value={tool.testimonials} /></TableCell>
                      <TableCell className="text-center"><CellIcon value={tool.video} /></TableCell>
                      <TableCell className="text-center"><CellIcon value={tool.reviews} /></TableCell>
                      <TableCell className="text-center"><CellIcon value={tool.abTest} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl prose prose-lg">
          <h2 className="text-2xl font-bold mt-10 mb-3">What Makes NotiProof's Free Plan the Best?</h2>
          <p className="text-lg font-medium text-foreground mb-4">NotiProof's free plan is the only option that includes real-time notifications, testimonial collection, video recording, and review aggregation — no other free social proof tool comes close in feature breadth or monthly view allowance.</p>
          <p className="text-muted-foreground mb-4">With 5,000 views/month, NotiProof's free plan supports small to medium websites without forced upgrades. The 5x higher limit compared to ProveSource (1,000 visitors) means you can run meaningful experiments and collect statistically significant data before deciding to upgrade.</p>
          <p className="text-muted-foreground mb-4">More importantly, NotiProof's free plan isn't stripped-down. You get real <Link to="/product/social-proof-notifications/" className="text-primary hover:underline">social proof notifications</Link>, <Link to="/product/testimonials-collection-text-image-video/" className="text-primary hover:underline">testimonial collection forms</Link>, the <Link to="/product/video-testimonial-recorder/" className="text-primary hover:underline">video testimonial recorder</Link>, and basic <Link to="/product/review-aggregation-showcase-system/" className="text-primary hover:underline">review aggregation</Link>. Most free plans limit you to notifications only — NotiProof gives you the complete social proof toolkit.</p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Which Free Tool Is Best for E-commerce?</h2>
          <p className="text-lg font-medium text-foreground mb-4">NotiProof is the best free social proof tool for e-commerce because it combines purchase notifications with review widgets and testimonials — creating a layered trust strategy that basic notification-only tools can't match.</p>
          <p className="text-muted-foreground mb-4">For <Link to="/use-cases/ecommerce/" className="text-primary hover:underline">e-commerce stores</Link>, social proof works best in layers: purchase notifications create urgency, review widgets build product credibility, and customer testimonials establish brand trust. NotiProof's free plan covers all three layers. ProveSource and Evidence.io only cover the first layer (notifications), leaving significant conversion potential untapped.</p>

          <h2 className="text-2xl font-bold mt-10 mb-3">When Should You Upgrade to a Paid Plan?</h2>
          <p className="text-lg font-medium text-foreground mb-4">Upgrade when you consistently exceed your free plan's view limit, need A/B testing to optimize conversion rates, want revenue attribution analytics, or require white-label branding for agency clients.</p>
          <p className="text-muted-foreground mb-4">The clearest upgrade trigger is hitting your view limit consistently. If you're reaching 5,000 views/month on NotiProof's free plan, you likely have enough traffic to benefit from paid features like <Link to="/product/campaign-builder/" className="text-primary hover:underline">campaign builder</Link> and A/B testing — features that can increase the conversion rate of your existing traffic.</p>
          <p className="text-muted-foreground mb-6">NotiProof's Starter plan at $5/mo is the most affordable upgrade path, and the <Link to="/free-tools/social-proof-roi-calculator/" className="text-primary hover:underline">Social Proof ROI Calculator</Link> can help you estimate whether the upgrade will pay for itself.</p>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-12 bg-muted/30">
        <div className="container-tight text-center max-w-3xl">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold mb-4">Our Recommendation</h2>
            <p className="text-muted-foreground mb-6">NotiProof's free plan is the clear winner — it offers the most features, highest view limit, and best upgrade path among all free social proof tools. Start free, measure results, and scale when ready.</p>
            <Button variant="default" size="lg" asChild>
              <a href="https://app.notiproof.com/signup">Start Free With NotiProof <ArrowRight className="w-5 h-5" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-4">
                <AccordionTrigger className="text-sm font-medium text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-muted/30">
        <div className="container-tight text-center">
          <h2 className="text-xl font-bold mb-4">More Comparisons</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" size="sm" asChild><Link to="/comparisons/social-proof-pricing-comparison/">Pricing Comparison</Link></Button>
            <Button variant="outline" size="sm" asChild><Link to="/comparisons/notiproof-vs-fomo/">NotiProof vs Fomo</Link></Button>
            <Button variant="outline" size="sm" asChild><Link to="/comparisons/notiproof-vs-trustpulse/">NotiProof vs TrustPulse</Link></Button>
            <Button variant="outline" size="sm" asChild><Link to="/comparisons/">All Comparisons</Link></Button>
          </div>
        </div>
      </section>

      <CTASection />
    </article>
  );
}
