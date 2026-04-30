import { ArrowRight, TrendingUp, Clock, ShoppingCart, Info } from "lucide-react";
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
  { icon: TrendingUp, value: "20–30%", label: "Add-to-cart lift (typical range)" },
  { icon: ShoppingCart, value: "Lower", label: "Cart abandonment" },
  { icon: Clock, value: "5 min", label: "Setup time" },
  { icon: TrendingUp, value: "Higher", label: "Average order value" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How a Mid-Market Fashion Retailer Lifted Add-to-Cart With Social Proof",
  datePublished: "2025-03-15",
  author: { "@type": "Person", name: "Olayinka Olayokun", url: "https://notiproof.com/resources/author/olayinka-olayokun/" },
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
};

export default function EcommerceCaseStudy() {
  return (
    <>
      <SEOHead
        title="E-commerce Case Study – Lifting Add-to-Cart With Social Proof"
        description="An illustrative case study showing how a mid-market fashion retailer can use social proof notifications to lift add-to-cart rate and reduce cart abandonment."
        canonical="https://notiproof.com/case-studies/ecommerce-stylehaven/"
        schema={schema}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-6">
            <Link to="/case-studies/" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">← All Case Studies</Link>
            <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">E-commerce</span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              How a Mid-Market Fashion Retailer Lifted Add-to-Cart With <span className="text-gradient">Social Proof</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              An illustrative example of how a mid-market fashion e-commerce store can use real-time purchase notifications to overcome low conversion rates despite strong traffic.
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
            <p className="text-muted-foreground">A mid-market fashion retailer is generating tens of thousands of monthly visitors to their Shopify store, but their add-to-cart rate sits below the industry average for fashion e-commerce. Despite investing in paid ads, email marketing, and influencer partnerships, conversion rates remain flat for months.</p>
            <p className="text-muted-foreground">The core issue is trust: first-time visitors have no signal that other shoppers are buying. Great products and competitive pricing aren't visible to a brand-new visitor.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Solution</h2>
            <p className="text-muted-foreground">The retailer implements NotiProof's <Link to="/product/social-proof-notifications/" className="text-primary font-semibold hover:underline">social proof notifications</Link> on product pages, showing real-time purchase alerts to visitors. Setup is one line of JavaScript added to the Shopify theme.</p>
            <p className="text-muted-foreground">They configure three notification types:</p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Purchase alerts</strong> on product pages — "Sarah from Austin just purchased this item"</li>
              <li><strong className="text-foreground">Visitor counts</strong> on collection pages — "142 people are viewing this category"</li>
              <li><strong className="text-foreground">Review notifications</strong> on the homepage — pulling from aggregated Google and Trustpilot reviews</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Results</h2>
            <p className="text-muted-foreground">Within the first weeks, add-to-cart rate moves into the typical 20–30% lift range that <Link to="/resources/cro/" className="text-primary font-semibold hover:underline">industry CRO benchmarks</Link> show for well-implemented social proof. After a month of optimization with NotiProof's <Link to="/product/campaign-builder/" className="text-primary font-semibold hover:underline">A/B testing</Link>, expected outcomes include:</p>
            <ul className="text-muted-foreground space-y-2">
              <li>Higher add-to-cart rate</li>
              <li>Lower cart abandonment</li>
              <li>Higher average order value</li>
              <li>Meaningful incremental monthly revenue</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ol className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Social proof works fastest on product pages</strong> — that's where purchase intent is highest and trust is most needed.</li>
              <li><strong className="text-foreground">Real data beats fake urgency</strong> — using real purchase data, not fabricated notifications, builds genuine trust.</li>
              <li><strong className="text-foreground">A/B testing is essential</strong> — best-performing notification styles are discovered through testing, not assumed.</li>
              <li><strong className="text-foreground">5 minutes of setup can transform a store</strong> — the ROI from a single line of code can exceed the entire ad budget.</li>
            </ol>
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Ready to apply this playbook to your store?</p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">Get Started Free <ArrowRight className="w-5 h-5" /></a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">No credit card required · Setup in 60 seconds</p>
          </motion.div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">More Case Studies</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/case-studies/saas-conversion/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">SaaS</span>
                <p className="font-semibold mt-1">How a B2B SaaS Lifted Trial Signups With Social Proof</p>
              </Link>
              <Link to="/use-cases/ecommerce/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">Use Case</span>
                <p className="font-semibold mt-1">Social Proof for E-commerce Stores</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
