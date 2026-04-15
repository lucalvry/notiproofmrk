import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, DollarSign, Star, Mail, ShieldCheck, BarChart3, ClipboardCheck, ShoppingCart, MessageSquare } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import KeyTakeaway from "@/components/KeyTakeaway";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

const tools = [
  { icon: Calculator, title: "A/B Test Significance Calculator", desc: "Enter visitors and conversions for control vs. variant to get statistical significance, confidence intervals, and lift %.", href: "/free-tools/ab-test-calculator/" },
  { icon: DollarSign, title: "Social Proof ROI Calculator", desc: "Estimate revenue lift from social proof based on your traffic, conversion rate, and average order value.", href: "/free-tools/social-proof-roi-calculator/" },
  { icon: Star, title: "Google Review Link Generator", desc: "Generate a direct Google review link for your business to share with customers via email or SMS.", href: "/free-tools/google-review-link-generator/" },
  { icon: Mail, title: "Testimonial Request Email Generator", desc: "Generate copy-paste email templates to request testimonials from happy customers.", href: "/free-tools/testimonial-email-generator/" },
  { icon: ShieldCheck, title: "Website Trust Score Checker", desc: "Audit your website's trust signals with an interactive checklist and get a score plus recommendations.", href: "/free-tools/website-trust-score-checker/" },
  { icon: BarChart3, title: "Conversion Rate Calculator", desc: "Calculate your conversion rate instantly and see how many more conversions you need to hit key benchmarks.", href: "/free-tools/conversion-rate-calculator/" },
  { icon: ClipboardCheck, title: "Social Proof Audit Checklist", desc: "Score your website's social proof with a 27-point interactive checklist and get a grade plus recommendations.", href: "/free-tools/social-proof-audit-checklist/" },
  { icon: ShoppingCart, title: "Cart Abandonment Calculator", desc: "Calculate revenue lost to cart abandonment and see potential recovery with social proof and exit-intent.", href: "/free-tools/cart-abandonment-calculator/" },
  { icon: MessageSquare, title: "Review Response Generator", desc: "Generate professional, personalized responses to positive, neutral, and negative customer reviews.", href: "/free-tools/review-response-generator/" },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Conversion Optimization Tools – NotiProof",
    description: "Free CRO tools: A/B test calculator, ROI estimator, review link generator, email templates, and trust audit.",
    url: "https://notiproof.com/free-tools/",
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Conversion Optimization Tools",
    itemListElement: tools.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.title,
      url: `https://notiproof.com${t.href}`,
    })),
  },
];

export default function FreeToolsHub() {
  return (
    <>
      <SEOHead
        title="Free Conversion Optimization Tools"
        description="Free tools for marketers: A/B test significance calculator, social proof ROI estimator, Google review link generator, testimonial email templates, and trust score checker."
        canonical="https://notiproof.com/free-tools/"
        schema={schema}
      />

      <section className="relative overflow-hidden bg-foreground text-background py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Free Tools</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Free Conversion Optimization Tools</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              No signup required. Use these free tools to optimize your conversions, collect reviews, and build trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CRO Strategy Editorial */}
      <section className="section-padding pb-0">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Conversion Optimization Matters</h2>
            <div className="prose prose-sm text-muted-foreground max-w-none space-y-4">
              <p>
                Conversion optimization (CRO) helps you increase the percentage of website visitors who take a desired action — purchasing a product, signing up for a trial, or booking a demo. Instead of spending more on traffic acquisition, CRO tools help you extract more revenue from your existing traffic.
              </p>
              <p>
                The most effective CRO stack combines <Link to="/resources/social-proof/" className="text-primary font-semibold hover:underline">social proof</Link> (for trust), A/B testing (for optimization), and analytics (for measurement). NotiProof includes all three in a single platform, but these free tools give you a head start on understanding your conversion potential — no signup required.
              </p>
              <p>
                For a deeper dive into CRO strategy, read our guides on <Link to="/resources/conversion-analytics/ab-testing-social-proof/" className="text-primary font-semibold hover:underline">A/B testing social proof</Link>, <Link to="/resources/conversion-analytics/conversion-rate-benchmarks/" className="text-primary font-semibold hover:underline">conversion rate benchmarks</Link>, and <Link to="/resources/conversion-analytics/measuring-social-proof-roi/" className="text-primary font-semibold hover:underline">measuring social proof ROI</Link>.
              </p>
            </div>
            <div className="mt-6">
              <KeyTakeaway>
                The average return on conversion optimization is $92 for every $1 spent. These free tools help you identify opportunities before committing to a full CRO stack.
              </KeyTakeaway>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool, i) => (
              <motion.div key={tool.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link
                  to={tool.href}
                  className="group flex flex-col h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <tool.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{tool.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{tool.desc}</p>
                  <span className="mt-4 text-sm font-semibold text-primary flex items-center gap-1">
                    Use tool <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-muted/30">
        <div className="container-tight">
          <h2 className="text-2xl font-bold text-center mb-6">Related Resources</h2>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link to="/comparisons/" className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-center">
              <p className="text-sm font-semibold">Software Comparisons</p>
              <p className="text-xs text-muted-foreground mt-1">NotiProof vs competitors</p>
            </Link>
            <Link to="/resources/conversion-analytics/ab-testing-social-proof/" className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-center">
              <p className="text-sm font-semibold">A/B Testing Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Test social proof effectively</p>
            </Link>
            <Link to="/resources/website-trust/" className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-center">
              <p className="text-sm font-semibold">Website Trust Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Build credibility</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Want Even More Conversion Power?" description="These tools are just the start. NotiProof's full platform automates social proof, testimonials, and reviews." />
    </>
  );
}
