import { ArrowRight, ShoppingCart, Rocket, Briefcase, MapPin, Info } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    title: "How a Mid-Market Fashion Retailer Lifted Add-to-Cart With Social Proof",
    description: "An illustrative example of how a mid-market fashion store can lift add-to-cart rate and reduce cart abandonment using social proof notifications.",
    metrics: ["Higher add-to-cart", "Lower cart abandonment", "Higher AOV"],
    href: "/case-studies/ecommerce-stylehaven/",
  },
  {
    icon: Rocket,
    category: "SaaS",
    title: "How a B2B SaaS Lifted Trial Signups With Social Proof",
    description: "An illustrative example of how a B2B analytics SaaS can use social proof, video testimonials, and review aggregation to grow MRR.",
    metrics: ["Higher trial signups", "Higher trial-to-paid", "Lower CAC"],
    href: "/case-studies/saas-conversion/",
  },
  {
    icon: Briefcase,
    category: "Agency",
    title: "How a Digital Marketing Agency Boosted Client Conversions With White-Label Social Proof",
    description: "An illustrative example of how a small digital marketing agency can use NotiProof's white-label social proof across many client sites at scale.",
    metrics: ["Higher client conversions", "Multi-site dashboard", "Strong service ROI"],
    href: "/case-studies/agency-brightpath/",
  },
  {
    icon: MapPin,
    category: "Local Business",
    title: "How a Regional Landscaping Company Grew Leads With Social Proof & Reviews",
    description: "An illustrative example of how a regional landscaping company can grow lead form submissions and phone inquiries using social proof and review aggregation.",
    metrics: ["More lead forms", "More phone inquiries", "Stronger local SEO"],
    href: "/case-studies/local-business-greenleaf/",
  },
];

const faqs = [
  { q: "Are these real customer results?", a: "No. These are illustrative scenarios modeled on common implementation patterns and industry CRO benchmarks — not records of specific named customers. We chose this format so the playbooks remain useful without overstating individual outcomes." },
  { q: "How long does it take to see results?", a: "Most teams see measurable conversion lifts within the first 7–14 days of running social proof, in line with industry CRO benchmarks." },
  { q: "Can I get similar results for my business?", a: "Results vary by industry, traffic, and implementation. Industry benchmarks for well-implemented social proof typically fall in the 10–35% conversion lift range. Start with the free plan to test on your own site." },
  { q: "Do I need a developer to set up NotiProof?", a: "No. NotiProof installs with one line of code and takes under 60 seconds. No developer needed." },
];

export default function CaseStudiesHub() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEOHead
        title="Case Studies – Real Results From NotiProof Customers"
        description="Illustrative case studies showing how teams across e-commerce, SaaS, agencies, and local businesses can use NotiProof to lift conversions, modeled on industry CRO benchmarks."
        canonical="https://notiproof.com/case-studies/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "NotiProof Case Studies",
            itemListElement: caseStudies.map((cs, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: cs.title,
              url: `https://notiproof.com${cs.href}`,
            })),
          },
          faqSchema,
        ]}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Illustrative <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Playbooks for how teams across e-commerce, SaaS, agencies, and local businesses can use NotiProof to lift conversions, modeled on common implementation patterns and industry CRO benchmarks.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto mb-10 flex items-start gap-3 bg-muted/40 border border-border rounded-xl p-4 text-sm text-muted-foreground">
            <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p>Illustrative examples based on common implementation patterns and industry CRO benchmarks. Not based on specific named customers.</p>
          </div>

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

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/20 transition-colors">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
