import { ArrowRight, TrendingUp, Users, Zap, Info } from "lucide-react";
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
  { icon: TrendingUp, value: "Higher", label: "Trial signup conversion" },
  { icon: Users, value: "Higher", label: "Trial-to-paid conversion" },
  { icon: TrendingUp, value: "Lower", label: "Customer acquisition cost" },
  { icon: Zap, value: "3 min", label: "Setup time" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How a B2B SaaS Lifted Trial Signups With Social Proof",
  datePublished: "2025-03-20",
  author: { "@type": "Person", name: "Olayinka Olayokun", url: "https://notiproof.com/resources/author/olayinka-olayokun/" },
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
};

export default function SaaSCaseStudy() {
  return (
    <>
      <SEOHead
        title="SaaS Case Study – Lifting Trial Signups With Social Proof"
        description="An illustrative case study showing how a B2B analytics SaaS can use social proof, video testimonials, and review aggregation to lift trial signups."
        canonical="https://notiproof.com/case-studies/saas-conversion/"
        schema={schema}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-6">
            <Link to="/case-studies/" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">← All Case Studies</Link>
            <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">SaaS</span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              How a B2B SaaS Lifted Trial Signups With <span className="text-gradient">Social Proof</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              An illustrative example of how a B2B analytics SaaS can use NotiProof to transform pricing page conversion and accelerate growth.
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
            <p className="text-muted-foreground">A B2B analytics SaaS drives thousands of monthly visitors to its pricing page through content marketing and paid search, but conversion to free trial sits well below the competitor benchmark. Enterprise buyers need reassurance — they want to see that other companies like theirs are using and succeeding with the product before committing.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Solution</h2>
            <p className="text-muted-foreground">The team deploys a three-pronged NotiProof strategy:</p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Signup notifications</strong> on the pricing page — "Jake from London just started a free trial" — using <Link to="/product/social-proof-notifications/" className="text-primary font-semibold hover:underline">social proof notifications</Link></li>
              <li><strong className="text-foreground">Video testimonials</strong> from enterprise customers, recorded via <Link to="/product/video-testimonial-recorder/" className="text-primary font-semibold hover:underline">NotiProof's recorder</Link> and embedded on the pricing page</li>
              <li><strong className="text-foreground">Review aggregation</strong> pulling G2 and Capterra reviews into a <Link to="/product/testimonials-widget-reviews-widget/" className="text-primary font-semibold hover:underline">widget</Link> on the homepage</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Results</h2>
            <p className="text-muted-foreground">After 30 days of running NotiProof with A/B testing, expected outcomes — grounded in industry CRO benchmarks for SaaS pricing pages — include:</p>
            <ul className="text-muted-foreground space-y-2">
              <li>Higher pricing-page-to-trial conversion</li>
              <li>Higher trial-to-paid conversion</li>
              <li>Meaningful incremental MRR</li>
              <li>Lower customer acquisition cost</li>
            </ul>
            <p className="text-muted-foreground">Video testimonials are typically the biggest single win: when prospects can see and hear real customers talking about their results, the trust barrier evaporates.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ol className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">SaaS pricing pages need social proof most</strong> — it's the highest-intent, highest-anxiety page on the site.</li>
              <li><strong className="text-foreground">Video testimonials outperform text</strong> for enterprise SaaS because they convey credibility and emotion.</li>
              <li><strong className="text-foreground">Combining notifications + testimonials + reviews</strong> creates a trust ecosystem that no single tactic achieves alone.</li>
            </ol>
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">Get Started Free <ArrowRight className="w-5 h-5" /></a>
            </Button>
          </motion.div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">More Case Studies</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/case-studies/ecommerce-stylehaven/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">E-commerce</span>
                <p className="font-semibold mt-1">Mid-market fashion retailer: add-to-cart lift</p>
              </Link>
              <Link to="/use-cases/saas-social-proof-tools-drive-sign-ups/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">Use Case</span>
                <p className="font-semibold mt-1">Social Proof for SaaS</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
