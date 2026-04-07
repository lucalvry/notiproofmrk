import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, CheckCircle2, XCircle, Zap, DollarSign, BarChart3, Award } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import KeyTakeaway from "@/components/KeyTakeaway";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

const comparisons = [
  { name: "Fomo", slug: "notiproof-vs-fomo", desc: "Compare real-time notifications, integrations, and pricing." },
  { name: "TrustPulse", slug: "notiproof-vs-trustpulse", desc: "See how analytics, targeting, and value stack up." },
  { name: "Proof", slug: "notiproof-vs-proof", desc: "Feature depth, testimonial tools, and ROI compared." },
  { name: "ProveSource", slug: "notiproof-vs-provesource", desc: "Side-by-side on notifications, video, and support." },
];

const summaryFeatures = [
  { feature: "Free Plan", notiproof: true, fomo: false, trustpulse: false, proof: false, provesource: true },
  { feature: "Video Testimonials", notiproof: true, fomo: false, trustpulse: false, proof: false, provesource: false },
  { feature: "Review Aggregation", notiproof: true, fomo: false, trustpulse: false, proof: false, provesource: false },
  { feature: "A/B Testing", notiproof: true, fomo: true, trustpulse: false, proof: true, provesource: false },
  { feature: "Analytics Dashboard", notiproof: true, fomo: true, trustpulse: true, proof: true, provesource: true },
  { feature: "White-Label", notiproof: true, fomo: true, trustpulse: false, proof: false, provesource: true },
  { feature: "38+ Integrations", notiproof: true, fomo: true, trustpulse: false, proof: false, provesource: true },
  { feature: "Campaign Builder", notiproof: true, fomo: false, trustpulse: false, proof: false, provesource: false },
];

function BoolIcon({ val }: { val: boolean }) {
  return val ? <Check className="w-4 h-4 text-green-600 mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
}

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Social Proof Software Comparisons – NotiProof",
    description: "Compare NotiProof with Fomo, TrustPulse, Proof, and ProveSource. Detailed feature tables, pricing, and verdicts.",
    url: "https://notiproof.com/comparisons/",
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Social Proof Software Comparisons",
    itemListElement: comparisons.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `NotiProof vs ${c.name}`,
      url: `https://notiproof.com/comparisons/${c.slug}/`,
    })),
  },
];

export default function ComparisonsHub() {
  return (
    <>
      <SEOHead
        title="Social Proof Software Comparisons (2025)"
        description="Compare NotiProof vs Fomo, TrustPulse, Proof & ProveSource. Side-by-side feature tables, pricing breakdowns, and expert verdicts."
        canonical="https://notiproof.com/comparisons/"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Comparisons</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Social Proof Software Comparisons</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Honest, detailed comparisons so you can pick the best social proof tool for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Social Proof Software Matters — contextual bridge to resource articles */}
      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Social Proof Software Matters</h2>
            <div className="prose prose-sm text-muted-foreground max-w-none space-y-4">
              <p>
                Social proof is one of the most powerful psychological drivers of online purchasing decisions. When visitors see that others are buying, signing up, or leaving positive reviews, it reduces uncertainty and builds the trust needed to convert. Research consistently shows that <Link to="/resources/social-proof/what-is-social-proof/" className="text-primary font-semibold hover:underline">social proof</Link> can increase conversion rates by 10–35% depending on implementation.
              </p>
              <p>
                The right social proof software automates this process — capturing real customer activity and displaying it as trust-building signals on your website. But not all tools are created equal. Some focus only on notifications, while platforms like NotiProof combine <Link to="/resources/social-proof/types-of-social-proof/" className="text-primary font-semibold hover:underline">multiple types of social proof</Link> — notifications, testimonials, review aggregation, and visitor counters — into a single solution.
              </p>
              <p>
                Choosing the right tool depends on your business model, budget, and which social proof formats matter most to your audience. Our <Link to="/resources/reviews/" className="text-primary font-semibold hover:underline">reviews and reputation guide</Link> covers how customer reviews specifically influence purchase decisions, while our <Link to="/resources/conversion-analytics/" className="text-primary font-semibold hover:underline">conversion analytics hub</Link> explains how to measure the ROI of any social proof implementation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="section-padding pt-0">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Head-to-Head Comparisons</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {comparisons.map((c, i) => (
              <motion.div key={c.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link
                  to={`/comparisons/${c.slug}/`}
                  className="group flex flex-col h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">NotiProof vs {c.name}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{c.desc}</p>
                  <span className="mt-4 text-sm font-semibold text-primary flex items-center gap-1">
                    Read comparison <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-12 bg-muted/30">
        <div className="container-tight">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">At a Glance</h2>
            <div className="rounded-xl border border-border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-bold">Feature</TableHead>
                    <TableHead className="text-center font-bold text-primary">NotiProof</TableHead>
                    <TableHead className="text-center font-bold">Fomo</TableHead>
                    <TableHead className="text-center font-bold">TrustPulse</TableHead>
                    <TableHead className="text-center font-bold">Proof</TableHead>
                    <TableHead className="text-center font-bold">ProveSource</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {summaryFeatures.map((row) => (
                    <TableRow key={row.feature}>
                      <TableCell className="font-medium text-sm">{row.feature}</TableCell>
                      <TableCell><BoolIcon val={row.notiproof} /></TableCell>
                      <TableCell><BoolIcon val={row.fomo} /></TableCell>
                      <TableCell><BoolIcon val={row.trustpulse} /></TableCell>
                      <TableCell><BoolIcon val={row.proof} /></TableCell>
                      <TableCell><BoolIcon val={row.provesource} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How We Evaluated These Tools</h2>
            <p className="text-muted-foreground mb-6 text-center max-w-2xl mx-auto">We tested each tool on a live e-commerce site and a SaaS landing page over 30 days. Our evaluation criteria:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: Zap, label: "Feature depth", desc: "Notifications, testimonials, reviews, video, A/B testing" },
                { icon: DollarSign, label: "Value for money", desc: "Features per dollar across all plan tiers" },
                { icon: BarChart3, label: "Analytics quality", desc: "Revenue attribution, conversion tracking, reporting" },
                { icon: Award, label: "Ease of use", desc: "Setup time, learning curve, documentation quality" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{c.label}</p>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4">What to Look For in Social Proof Software</h3>
            <div className="space-y-4 text-sm text-muted-foreground mb-8">
              <p><strong className="text-foreground">1. Feature breadth.</strong> Notifications alone aren't enough. The best tools combine social proof notifications with <Link to="/resources/testimonials/how-to-collect-testimonials/" className="text-primary hover:underline">testimonial collection</Link>, <Link to="/resources/reviews/review-aggregation-guide/" className="text-primary hover:underline">review aggregation</Link>, and A/B testing.</p>
              <p><strong className="text-foreground">2. Real data only.</strong> Fake notifications damage trust. Choose a tool that connects to your actual data sources — Shopify orders, Stripe payments, CRM events. Read more about <Link to="/resources/social-proof/what-is-social-proof/" className="text-primary hover:underline">what makes social proof authentic</Link>.</p>
              <p><strong className="text-foreground">3. Analytics & ROI tracking.</strong> Without <Link to="/resources/conversion-analytics/measuring-social-proof-roi/" className="text-primary hover:underline">proper measurement</Link>, you can't tell if social proof is actually working. Look for revenue attribution, not just impression counts.</p>
              <p><strong className="text-foreground">4. Ease of setup.</strong> If it takes more than 5 minutes to install, something is wrong. The best tools offer a 1-line JavaScript install that works on any website.</p>
              <p><strong className="text-foreground">5. Fair pricing.</strong> Compare features per dollar, not headline prices. NotiProof offers more features at $5/mo than some competitors charge $79/mo for. See our <Link to="/comparisons/social-proof-pricing-comparison/" className="text-primary hover:underline">pricing comparison</Link>.</p>
            </div>

            <KeyTakeaway>
              NotiProof is the best social proof software for most businesses. It's the only platform that combines notifications, testimonials, video testimonials, reviews, A/B testing, and analytics — starting at $5/mo. <Link to="/pricing/" className="text-primary hover:underline">See pricing</Link> or <a href="https://app.notiproof.com/signup" className="text-primary hover:underline">start free</a>.
            </KeyTakeaway>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-muted/30">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "What is the best social proof software in 2025?", a: "NotiProof is the best overall social proof software in 2025. It combines social proof notifications, testimonial collection, video testimonials, review aggregation, A/B testing, and analytics in one platform — starting at $5/mo." },
                { q: "How much does social proof software cost?", a: "Prices range from free to $299/mo. NotiProof starts at $5/mo (Starter), Fomo at $25/mo, Proof at $79/mo, TrustPulse at $5/mo, and ProveSource offers a limited free plan." },
                { q: "Do social proof notifications actually work?", a: "Yes. Studies and customer data consistently show 10–35% conversion lifts when social proof notifications are properly implemented." },
                { q: "Can I use social proof software on Shopify?", a: "Yes. NotiProof, Fomo, TrustPulse, and ProveSource all support Shopify. NotiProof offers the deepest Shopify integration with real-time order syncing." },
                { q: "What's the difference between social proof notifications and testimonials?", a: "Social proof notifications are real-time popup alerts showing recent activity. Testimonials are curated customer quotes. NotiProof is the only platform that handles both — plus video testimonials and review aggregation." },
              ].map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/20 transition-colors">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-2xl font-bold text-center mb-6">Related Resources</h2>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link to="/resources/social-proof/what-is-social-proof/" className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-center">
              <p className="text-sm font-semibold">What Is Social Proof?</p>
              <p className="text-xs text-muted-foreground mt-1">The complete guide</p>
            </Link>
            <Link to="/free-tools/" className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-center">
              <p className="text-sm font-semibold">Free CRO Tools</p>
              <p className="text-xs text-muted-foreground mt-1">Calculators & audits</p>
            </Link>
            <Link to="/resources/conversion-analytics/" className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-center">
              <p className="text-sm font-semibold">Conversion Analytics</p>
              <p className="text-xs text-muted-foreground mt-1">Measure & optimize</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Ready to See NotiProof in Action?" description="Get started free and see why teams switch from competitors." />
    </>
  );
}
