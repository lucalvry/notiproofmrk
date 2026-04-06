import { ArrowRight, ShoppingCart, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const caseStudies = [
  {
    icon: ShoppingCart,
    category: "E-commerce",
    title: "How StyleHaven Increased Add-to-Cart Rate by 31%",
    description: "A mid-market fashion store generated $42K/month in additional revenue with social proof notifications.",
    metrics: ["+31% Add-to-Cart", "-22% Cart Abandonment", "1,448x ROI"],
    href: "/case-studies/ecommerce-stylehaven/",
  },
  {
    icon: Rocket,
    category: "SaaS",
    title: "How CloudMetrics Increased Trial Signups by 24%",
    description: "A B2B analytics SaaS added $28K MRR using social proof notifications, video testimonials, and review aggregation.",
    metrics: ["+24% Trial Signups", "+18% Trial-to-Paid", "560x ROI"],
    href: "/case-studies/saas-conversion/",
  },
];

export default function CaseStudiesHub() {
  return (
    <>
      <SEOHead
        title="Case Studies – Real Results From NotiProof Customers"
        description="See how businesses use NotiProof to increase conversions by 10-35%. Real case studies with quantified results from e-commerce, SaaS, and service businesses."
        canonical="https://notiproof.com/case-studies/"
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "NotiProof Case Studies",
          itemListElement: caseStudies.map((cs, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: cs.title,
            url: `https://notiproof.com${cs.href}`,
          })),
        }}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Customer <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Real businesses. Real results. See how NotiProof customers are increasing conversions, revenue, and trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((cs, i) => (
              <motion.div key={cs.href} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link
                  to={cs.href}
                  className="group block bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <cs.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary">{cs.category}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cs.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{cs.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.metrics.map((m) => (
                      <span key={m} className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full">{m}</span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                    Read case study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
