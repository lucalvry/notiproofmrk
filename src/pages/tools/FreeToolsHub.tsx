import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, DollarSign, Star, Mail, ShieldCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

const tools = [
  { icon: Calculator, title: "A/B Test Significance Calculator", desc: "Enter visitors and conversions for control vs. variant to get statistical significance, confidence intervals, and lift %.", href: "/free-tools/ab-test-calculator/" },
  { icon: DollarSign, title: "Social Proof ROI Calculator", desc: "Estimate revenue lift from social proof based on your traffic, conversion rate, and average order value.", href: "/free-tools/social-proof-roi-calculator/" },
  { icon: Star, title: "Google Review Link Generator", desc: "Generate a direct Google review link for your business to share with customers via email or SMS.", href: "/free-tools/google-review-link-generator/" },
  { icon: Mail, title: "Testimonial Request Email Generator", desc: "Generate copy-paste email templates to request testimonials from happy customers.", href: "/free-tools/testimonial-email-generator/" },
  { icon: ShieldCheck, title: "Website Trust Score Checker", desc: "Audit your website's trust signals with an interactive checklist and get a score plus recommendations.", href: "/free-tools/website-trust-score-checker/" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Conversion Optimization Tools – NotiProof",
  description: "Free CRO tools: A/B test calculator, ROI estimator, review link generator, email templates, and trust audit.",
  url: "https://notiproof.com/free-tools/",
};

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

      <CTASection title="Want Even More Conversion Power?" description="These tools are just the start. NotiProof's full platform automates social proof, testimonials, and reviews." />
    </>
  );
}
