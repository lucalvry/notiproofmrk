import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Minus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    desc: "For testing and small sites",
    features: ["1,000 notifications/mo", "1 site", "Basic templates", "Community support", "All integrations"],
    cta: "Start Free",
  },
  {
    name: "Starter",
    monthly: 19,
    yearly: 15,
    desc: "For growing websites",
    features: ["10,000 notifications/mo", "3 sites", "All templates", "Testimonial collection", "Email support", "All integrations"],
    cta: "Start Free Trial",
  },
  {
    name: "Standard",
    monthly: 49,
    yearly: 39,
    desc: "For serious businesses",
    popular: true,
    features: ["50,000 notifications/mo", "10 sites", "All templates", "Testimonial wall", "Analytics dashboard", "Priority support", "All integrations"],
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    monthly: 119,
    yearly: 95,
    desc: "For conversion-focused teams",
    features: ["200,000 notifications/mo", "25 sites", "A/B testing", "Targeting rules", "White label", "AI testimonial analysis", "Dedicated support", "All integrations"],
    cta: "Start Free Trial",
  },
  {
    name: "Business",
    monthly: 380,
    yearly: 304,
    desc: "For large-scale operations",
    features: ["Unlimited notifications", "Unlimited sites", "Everything in Pro", "Custom integrations", "SLA guarantee", "Account manager", "All integrations"],
    cta: "Contact Sales",
  },
];

const comparisonFeatures = [
  { name: "Notifications/mo", values: ["1K", "10K", "50K", "200K", "Unlimited"] },
  { name: "Sites", values: ["1", "3", "10", "25", "Unlimited"] },
  { name: "Templates", values: ["Basic", "All", "All", "All", "All"] },
  { name: "Testimonial Collection", values: [false, true, true, true, true] },
  { name: "Testimonial Wall", values: [false, false, true, true, true] },
  { name: "Analytics Dashboard", values: [false, false, true, true, true] },
  { name: "A/B Testing", values: [false, false, false, true, true] },
  { name: "Targeting Rules", values: [false, false, false, true, true] },
  { name: "White Label", values: [false, false, false, true, true] },
  { name: "AI Analysis", values: [false, false, false, true, true] },
  { name: "Integrations", values: ["All", "All", "All", "All", "All"] },
];

const faqs = [
  { q: "Can I try NotiProof for free?", a: "Yes! Our Free plan lets you get started with 1,000 notifications per month. All paid plans include a 14-day free trial." },
  { q: "What counts as a notification?", a: "A notification is counted each time a social proof widget is displayed to a unique visitor on your website." },
  { q: "Can I change plans anytime?", a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your dashboard." },
  { q: "Are all integrations included?", a: "Yes! All 38+ integrations are included on every plan, including Free. No feature paywalls." },
  { q: "What is an add-on seat?", a: "Additional team members can be added for $3/month each. The first seat is included with every plan." },
  { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money-back guarantee on all paid plans." },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  const pricingSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "NotiProof",
      description: "Social proof and testimonial platform for increasing website conversions.",
      brand: { "@type": "Brand", name: "NotiProof" },
      offers: plans.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: yearly ? p.yearly : p.monthly,
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: "https://notiproof.com/pricing/",
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <SEOHead
        title="NotiProof Pricing – Plans Starting Free | Social Proof Platform"
        description="Compare NotiProof pricing plans. Free, Starter ($19), Standard ($49), Pro ($119), and Business ($380). All integrations included. No feature paywalls."
        canonical="https://notiproof.com/pricing/"
        schema={pricingSchema}
      />
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="Pricing"
            title="Simple Pricing. Powerful Results."
            description="All integrations included. No feature paywalls. Scale based on usage."
          />

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-colors ${yearly ? "bg-primary" : "bg-border"}`}
            >
              <span className={`absolute top-0.5 w-5 h-5 bg-card rounded-full transition-transform shadow ${yearly ? "translate-x-6" : "translate-x-0.5"}`} />
            </button>
            <span className={`text-sm font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="text-primary text-xs font-semibold">Save 20%</span>
            </span>
          </div>

          {/* Plans */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-20">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-card border rounded-xl p-6 relative flex flex-col ${
                  plan.popular ? "border-primary shadow-lg shadow-primary/10 ring-2 ring-primary" : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-lg">{plan.name}</h3>
                <div className="mt-2 mb-1">
                  <span className="text-4xl font-extrabold">
                    ${yearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">{plan.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "default" : "outline"} className="w-full" asChild>
                  <a href="https://app.notiproof.com/signup">{plan.cta}</a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Add-on */}
          <div className="bg-surface border border-border rounded-xl p-6 text-center mb-20">
            <p className="text-sm font-medium">Need more team members? Add extra seats for <span className="font-bold text-primary">$3/month</span> each.</p>
          </div>

          {/* Comparison Table */}
          <SectionHeading title="Compare Plans" description="See exactly what's included in each plan." />
          <div className="overflow-x-auto mb-20">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Feature</th>
                  {plans.map((p) => (
                    <th key={p.name} className={`text-center py-3 px-4 font-semibold ${p.popular ? "text-primary" : ""}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.name} className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">{row.name}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="text-center py-3 px-4">
                        {typeof val === "boolean" ? (
                          val ? <CheckCircle2 className="w-4 h-4 text-primary mx-auto" /> : <Minus className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                        ) : (
                          <span className="font-medium">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-card border border-border rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-sm list-none">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
