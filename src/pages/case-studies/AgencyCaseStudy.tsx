import { ArrowRight, TrendingUp, Clock, Users, Target, Info } from "lucide-react";
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
  { icon: TrendingUp, value: "Higher", label: "Client conversion lift" },
  { icon: Users, value: "Multi-site", label: "Client dashboard" },
  { icon: Target, value: "Strong", label: "Service ROI" },
  { icon: Clock, value: "10 min", label: "Per-client setup" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How a Digital Marketing Agency Boosted Client Conversions With White-Label Social Proof",
  datePublished: "2025-04-01",
  author: { "@type": "Person", name: "Olayinka Olayokun", url: "https://notiproof.com/resources/author/olayinka-olayokun/" },
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
};

export default function AgencyCaseStudy() {
  return (
    <>
      <SEOHead
        title="Agency Case Study – White-Label Social Proof for Client Conversions"
        description="An illustrative case study showing how a digital marketing agency can use NotiProof's white-label social proof to lift client conversion rates at scale."
        canonical="https://notiproof.com/case-studies/agency-brightpath/"
        schema={schema}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-6">
            <Link to="/case-studies/" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">← All Case Studies</Link>
            <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">Agency</span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              How a Digital Marketing Agency Boosted Client Conversions With <span className="text-gradient">White-Label Social Proof</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              An illustrative example of how a small digital marketing agency managing dozens of client websites can use NotiProof's white-label solution to deliver measurable conversion improvements without custom development.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto mb-10 flex items-start gap-3 bg-muted/40 border border-border rounded-xl p-4 text-sm text-muted-foreground">
            <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p>Illustrative example based on common implementation patterns and industry CRO benchmarks. Not based on a specific named customer.</p>
          </div>

          <motion.div {...fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {metrics.map((m) => (
              <div key={m.label} className="bg-card border border-border rounded-2xl p-6 text-center">
                <m.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-extrabold text-primary">{m.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mt-8 mb-4">The Challenge</h2>
            <p className="text-muted-foreground">A small digital marketing agency manages websites across e-commerce, SaaS, and local services. Clients expect measurable conversion improvements, but implementing custom social proof for each client is time-consuming and inconsistent. The agency needs a solution that deploys quickly across diverse sites while preserving each client's branding.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Solution</h2>
            <p className="text-muted-foreground">The agency adopts NotiProof's <Link to="/use-cases/social-proof-for-marketing-agencies-impress-clients/" className="text-primary font-semibold hover:underline">agency plan</Link> with white-label capabilities, enabling branded social proof across every client site from a single dashboard. Key features leveraged:</p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">White-label branding</strong> — notifications appear as the agency's own tool, strengthening their value proposition</li>
              <li><strong className="text-foreground">Multi-site management</strong> — one dashboard managing all clients with per-site analytics</li>
              <li><strong className="text-foreground">Template library</strong> — pre-built notification templates customized per client industry</li>
              <li><strong className="text-foreground">Revenue attribution</strong> — clear ROI reporting for each client's monthly review</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Results</h2>
            <p className="text-muted-foreground">Within 60 days of rolling out NotiProof across client sites, expected outcomes include:</p>
            <ul className="text-muted-foreground space-y-2">
              <li>Higher average client conversion lift</li>
              <li>Stronger client retention attributed to measurable results</li>
              <li>Per-client setup time reduced from many hours to about 10 minutes</li>
              <li>A new recurring revenue stream from social-proof management fees</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ol className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">White-label social proof is a client retention tool</strong> — measurable conversion improvements keep clients happy and reduce churn.</li>
              <li><strong className="text-foreground">Standardization beats customization at scale</strong> — using NotiProof's template system, agencies deploy faster with better results than custom code.</li>
              <li><strong className="text-foreground">Revenue attribution makes the business case</strong> — clear ROI reporting justifies the social proof upsell and strengthens client relationships.</li>
              <li><strong className="text-foreground">Social proof is industry-agnostic</strong> — the same platform works for e-commerce, SaaS, and local service businesses.</li>
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
                <p className="font-semibold mt-1">Mid-market fashion retailer: add-to-cart lift</p>
              </Link>
              <Link to="/case-studies/local-business-greenleaf/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">Local Business</span>
                <p className="font-semibold mt-1">Regional landscaping company: lead-form lift</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
