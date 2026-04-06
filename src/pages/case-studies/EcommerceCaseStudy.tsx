import { ArrowRight, TrendingUp, Clock, DollarSign, ShoppingCart } from "lucide-react";
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
  { icon: TrendingUp, value: "+31%", label: "Add-to-Cart Rate" },
  { icon: DollarSign, value: "$42,000", label: "Additional Monthly Revenue" },
  { icon: Clock, value: "5 min", label: "Setup Time" },
  { icon: ShoppingCart, value: "-22%", label: "Cart Abandonment" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How StyleHaven Increased Add-to-Cart Rate by 31% With NotiProof",
  datePublished: "2025-03-15",
  author: { "@type": "Person", name: "Olayinka Olayokun", url: "https://notiproof.com/resources/author/olayinka-olayokun/" },
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
};

export default function EcommerceCaseStudy() {
  return (
    <>
      <SEOHead
        title="Case Study: StyleHaven +31% Add-to-Cart Rate"
        description="How StyleHaven used NotiProof social proof notifications to increase add-to-cart rate by 31% and generate $42K in additional monthly revenue."
        canonical="https://notiproof.com/case-studies/ecommerce-stylehaven/"
        schema={schema}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-12">
            <Link to="/case-studies/" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">← All Case Studies</Link>
            <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">E-commerce</span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              How StyleHaven Increased Add-to-Cart Rate by <span className="text-gradient">31%</span> With NotiProof
            </h1>
            <p className="text-lg text-muted-foreground">
              StyleHaven, a mid-market fashion e-commerce store doing $1.2M/year in revenue, was struggling with low conversion rates despite strong traffic. Here's how social proof notifications changed their trajectory.
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
            <p className="text-muted-foreground">StyleHaven was generating 45,000 monthly visitors to their Shopify store, but their add-to-cart rate was stuck at 8.2% — well below the industry average of 10.3% for fashion e-commerce. Despite investing in paid ads, email marketing, and influencer partnerships, conversion rates remained flat for six months.</p>
            <p className="text-muted-foreground">Emma Rodriguez, E-commerce Director, identified the core issue: "First-time visitors had no reason to trust us. We had great products and competitive pricing, but new visitors couldn't see that other people were buying from us."</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Solution</h2>
            <p className="text-muted-foreground">StyleHaven implemented NotiProof's <Link to="/product/social-proof-notifications/" className="text-primary font-semibold hover:underline">social proof notifications</Link> on their product pages, showing real-time purchase alerts to visitors. The setup took 5 minutes — one line of JavaScript added to their Shopify theme.</p>
            <p className="text-muted-foreground">They configured three notification types:</p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Purchase alerts</strong> on product pages — "Sarah from Austin just purchased this item"</li>
              <li><strong className="text-foreground">Visitor counts</strong> on collection pages — "142 people are viewing this category"</li>
              <li><strong className="text-foreground">Review notifications</strong> on the homepage — pulling from their aggregated Google and Trustpilot reviews</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Results</h2>
            <p className="text-muted-foreground">Within the first week, add-to-cart rate jumped from 8.2% to 10.7% — a <strong className="text-foreground">31% increase</strong>. After a month of optimization using NotiProof's <Link to="/product/campaign-builder/" className="text-primary font-semibold hover:underline">A/B testing</Link>, they achieved:</p>
            <ul className="text-muted-foreground space-y-2">
              <li>Add-to-cart rate: 8.2% → 10.7% (+31%)</li>
              <li>Cart abandonment: 71% → 55% (-22%)</li>
              <li>Average order value: $67 → $73 (+9%)</li>
              <li>Monthly revenue increase: +$42,000</li>
              <li>ROI on NotiProof investment: 1,448x</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ol className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Social proof works fastest on product pages</strong> — that's where purchase intent is highest and trust is most needed.</li>
              <li><strong className="text-foreground">Real data beats fake urgency</strong> — StyleHaven used real purchase data, not fabricated notifications, which built genuine trust.</li>
              <li><strong className="text-foreground">A/B testing is essential</strong> — their best-performing notification style was discovered through testing, not assumed.</li>
              <li><strong className="text-foreground">5 minutes of setup can transform your business</strong> — the ROI from a single line of code exceeded their entire ad budget.</li>
            </ol>
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Want results like StyleHaven?</p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">Start Free 14-Day Trial <ArrowRight className="w-5 h-5" /></a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">No credit card required · Setup in 60 seconds</p>
          </motion.div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">More Case Studies</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/case-studies/saas-conversion/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">SaaS</span>
                <p className="font-semibold mt-1">How CloudMetrics Increased Trial Signups by 24%</p>
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
