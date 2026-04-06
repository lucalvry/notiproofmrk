import { ArrowRight, TrendingUp, Clock, Users, Target } from "lucide-react";
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

const metrics = [
  { icon: TrendingUp, value: "+47%", label: "Client Conversion Lift" },
  { icon: Users, value: "32", label: "Client Sites Managed" },
  { icon: Target, value: "4.2×", label: "Average Client ROI" },
  { icon: Clock, value: "10 min", label: "Per-Client Setup" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How BrightPath Agency Boosted Client Conversions by 47% With White-Label Social Proof",
  datePublished: "2025-04-01",
  author: { "@type": "Person", name: "Olayinka Olayokun", url: "https://notiproof.com/resources/author/olayinka-olayokun/" },
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
};

export default function AgencyCaseStudy() {
  return (
    <>
      <SEOHead
        title="Case Study: BrightPath Agency +47% Client Conversions"
        description="How BrightPath Agency used NotiProof's white-label social proof to boost client conversions by 47% across 32 client websites."
        canonical="https://notiproof.com/case-studies/agency-brightpath/"
        schema={schema}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-12">
            <Link to="/case-studies/" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">← All Case Studies</Link>
            <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">Agency</span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              How BrightPath Agency Boosted Client Conversions by <span className="text-gradient">47%</span> With White-Label Social Proof
            </h1>
            <p className="text-lg text-muted-foreground">
              BrightPath, a 15-person digital marketing agency managing 32 client websites, needed a scalable way to improve client conversion rates without custom development. Here's how NotiProof's white-label solution became their secret weapon.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {metrics.map((m) => (
              <div key={m.label} className="bg-card border border-border rounded-2xl p-6 text-center">
                <m.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-3xl font-extrabold text-primary">{m.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mt-8 mb-4">The Challenge</h2>
            <p className="text-muted-foreground">BrightPath Agency was managing websites for 32 clients across e-commerce, SaaS, and local services. Their clients expected measurable conversion improvements, but implementing custom social proof solutions for each client was time-consuming and expensive. The agency needed a solution that could be deployed quickly across diverse client sites while maintaining each client's branding.</p>
            <p className="text-muted-foreground">"We were spending 10–15 hours per client on custom notification scripts," said Marcus Chen, CRO Director at BrightPath. "It wasn't scalable, and the results were inconsistent because every implementation was slightly different."</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Solution</h2>
            <p className="text-muted-foreground">BrightPath adopted NotiProof's <Link to="/use-cases/social-proof-for-marketing-agencies-impress-clients/" className="text-primary font-semibold hover:underline">agency plan</Link> with white-label capabilities, allowing them to deploy branded social proof across all 32 client sites from a single dashboard. Key features they leveraged:</p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">White-label branding</strong> — NotiProof notifications appeared as the agency's own tool, strengthening their value proposition</li>
              <li><strong className="text-foreground">Multi-site management</strong> — one dashboard to manage all 32 clients with per-site analytics</li>
              <li><strong className="text-foreground">Template library</strong> — pre-built notification templates customized per client industry</li>
              <li><strong className="text-foreground">Revenue attribution</strong> — clear ROI reporting for each client's monthly review</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Results</h2>
            <p className="text-muted-foreground">Within 60 days of rolling out NotiProof across all client sites, BrightPath saw dramatic improvements:</p>
            <ul className="text-muted-foreground space-y-2">
              <li>Average client conversion lift: <strong className="text-foreground">+47%</strong></li>
              <li>Client retention rate: 94% → 98% (attributed to measurable conversion results)</li>
              <li>Average client ROI on social proof: <strong className="text-foreground">4.2×</strong></li>
              <li>Setup time per new client: <strong className="text-foreground">10 minutes</strong> (down from 10–15 hours)</li>
              <li>New revenue stream: $2,400/mo in social proof management upsell fees</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ol className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">White-label social proof is a client retention tool</strong> — measurable conversion improvements keep clients happy and reduce churn.</li>
              <li><strong className="text-foreground">Standardization beats customization at scale</strong> — using NotiProof's template system, BrightPath deployed faster with better results than custom code.</li>
              <li><strong className="text-foreground">Revenue attribution makes the business case</strong> — clear ROI reporting justified the social proof upsell and strengthened client relationships.</li>
              <li><strong className="text-foreground">Social proof is industry-agnostic</strong> — the same platform worked for e-commerce stores, SaaS companies, and local service businesses.</li>
            </ol>
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Ready to scale social proof for your clients?</p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">Get Started Free <ArrowRight className="w-5 h-5" /></a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">No credit card required · White-label on Growth+ plans</p>
          </motion.div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">More Case Studies</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/case-studies/ecommerce-stylehaven/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">E-commerce</span>
                <p className="font-semibold mt-1">How StyleHaven Increased Add-to-Cart Rate by 31%</p>
              </Link>
              <Link to="/case-studies/local-business-greenleaf/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">Local Business</span>
                <p className="font-semibold mt-1">How GreenLeaf Landscaping Grew Leads by 58%</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
