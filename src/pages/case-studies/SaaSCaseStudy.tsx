import { ArrowRight, TrendingUp, Users, DollarSign, Zap } from "lucide-react";
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
  { icon: TrendingUp, value: "+24%", label: "Trial Signups" },
  { icon: Users, value: "+18%", label: "Trial-to-Paid Conversion" },
  { icon: DollarSign, value: "$28K", label: "Additional MRR" },
  { icon: Zap, value: "3 min", label: "Setup Time" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How CloudMetrics Increased Trial Signups by 24%",
  datePublished: "2025-03-20",
  author: { "@type": "Person", name: "Olayinka Olayokun", url: "https://notiproof.com/resources/author/olayinka-olayokun/" },
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
};

export default function SaaSCaseStudy() {
  return (
    <>
      <SEOHead
        title="Case Study: CloudMetrics +24% Trial Signups"
        description="How CloudMetrics used NotiProof social proof and testimonials to increase trial signups by 24% and add $28K in monthly recurring revenue."
        canonical="https://notiproof.com/case-studies/saas-conversion/"
        schema={schema}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-12">
            <Link to="/case-studies/" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">← All Case Studies</Link>
            <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">SaaS</span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              How CloudMetrics Increased Trial Signups by <span className="text-gradient">24%</span> With Social Proof
            </h1>
            <p className="text-lg text-muted-foreground">
              CloudMetrics, a B2B analytics SaaS with 500+ customers, used NotiProof to transform their pricing page conversion rate and accelerate growth.
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
            <p className="text-muted-foreground">CloudMetrics was driving 12,000 monthly visitors to their pricing page through content marketing and paid search, but only 3.1% were starting a free trial. Their main competitor was converting at 4.5%. David Chen, VP of Growth, knew trust was the gap: "Enterprise buyers need reassurance. They need to see that other companies like theirs are using and succeeding with our product."</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Solution</h2>
            <p className="text-muted-foreground">CloudMetrics deployed a three-pronged NotiProof strategy:</p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Signup notifications</strong> on the pricing page — "Jake from London just started a free trial" — using <Link to="/product/social-proof-notifications/" className="text-primary font-semibold hover:underline">social proof notifications</Link></li>
              <li><strong className="text-foreground">Video testimonials</strong> from enterprise customers, recorded via <Link to="/product/video-testimonial-recorder/" className="text-primary font-semibold hover:underline">NotiProof's recorder</Link> and embedded on the pricing page</li>
              <li><strong className="text-foreground">Review aggregation</strong> pulling G2 and Capterra reviews into a <Link to="/product/testimonials-widget-reviews-widget/" className="text-primary font-semibold hover:underline">widget</Link> on the homepage</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Results</h2>
            <p className="text-muted-foreground">After 30 days of running NotiProof with A/B testing:</p>
            <ul className="text-muted-foreground space-y-2">
              <li>Pricing page → trial: 3.1% → 3.8% (+24%)</li>
              <li>Trial → paid: 22% → 26% (+18%)</li>
              <li>Additional MRR: +$28,000</li>
              <li>Customer acquisition cost: reduced by 19%</li>
              <li>NotiProof ROI: 560x</li>
            </ul>
            <p className="text-muted-foreground">"The video testimonials were the biggest win," says David. "When prospects could see and hear real customers talking about their results, the trust barrier evaporated."</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ol className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">SaaS pricing pages need social proof most</strong> — it's the highest-intent, highest-anxiety page on your site.</li>
              <li><strong className="text-foreground">Video testimonials outperform text 4x</strong> for enterprise SaaS because they convey credibility and emotion.</li>
              <li><strong className="text-foreground">Combining notifications + testimonials + reviews</strong> creates a trust ecosystem that no single tactic achieves alone.</li>
            </ol>
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">Start Free 14-Day Trial <ArrowRight className="w-5 h-5" /></a>
            </Button>
          </motion.div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">More Case Studies</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/case-studies/ecommerce-stylehaven/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">E-commerce</span>
                <p className="font-semibold mt-1">StyleHaven: +31% Add-to-Cart Rate</p>
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
