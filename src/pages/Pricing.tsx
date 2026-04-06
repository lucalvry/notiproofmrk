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
    features: ["1 website", "5K monthly views", "Basic templates", "Community support"],
    cta: "Start Free",
  },
  {
    name: "Starter",
    monthly: 5,
    yearly: 50,
    desc: "For growing websites",
    features: ["Up to 3 websites", "30K monthly views", "300MB media storage", "3-min video recording", "Unlimited testimonials", "Unlimited forms & wall", "Analytics dashboard", "All templates & integrations", "Remove NotiProof branding", "Priority support"],
    cta: "Get Started",
  },
  {
    name: "Standard",
    monthly: 15,
    yearly: 150,
    desc: "For serious businesses",
    popular: true,
    features: ["Unlimited websites", "100K monthly views", "500MB media storage", "3-min video recording", "Unlimited testimonials", "Unlimited forms & wall", "Analytics dashboard", "All templates & integrations", "Remove NotiProof branding", "Priority support"],
    cta: "Get Started",
  },
  {
    name: "Professional",
    monthly: 40,
    yearly: 400,
    desc: "For conversion-focused teams",
    features: ["Unlimited websites", "400K monthly views", "1GB media storage", "3-min video recording", "Unlimited testimonials", "Unlimited forms & wall", "Analytics dashboard", "A/B testing", "Targeting rules", "All templates & integrations", "Remove NotiProof branding", "Priority support"],
    cta: "Get Started",
  },
];
const ltdFeatures = [
  "Lifetime access",
  "3 websites",
  "25,000 events/month",
  "5GB media storage",
  "3-minute video recordings",
  "Custom domains for forms",
  "Remove NotiProof branding",
  "Advanced analytics",
  "Unlimited testimonials & forms",
  "All launch integrations included",
  "Future features & integrations included",
];

const comparisonFeatures = [
  { name: "Websites", values: ["1", "3", "Unlimited", "Unlimited"] },
  { name: "Monthly Views", values: ["5K", "30K", "100K", "400K"] },
  { name: "Media Storage", values: [false, "300MB", "500MB", "1GB"] },
  { name: "Video Recording", values: [false, "3 min", "3 min", "3 min"] },
  { name: "Testimonials Collection", values: [false, true, true, true] },
  { name: "Testimonial Forms & Wall", values: [false, true, true, true] },
  { name: "Analytics Dashboard", values: [false, true, true, true] },
  { name: "A/B Testing", values: [false, false, false, true] },
  { name: "Targeting Rules", values: [false, false, false, true] },
  { name: "Templates", values: ["Basic", "All", "All", "All"] },
  { name: "Integrations", values: ["All", "All", "All", "All"] },
  { name: "Remove Branding", values: [false, true, true, true] },
  { name: "Priority Support", values: [false, true, true, true] },
];
const faqs = [
  { q: "What is the Lifetime Deal?", a: "The Lifetime Deal is a one-time payment of $79 that gives you permanent access to NotiProof with no recurring fees. It includes 3 websites, 25,000 events/month, advanced analytics, and all future features and integrations." },
  { q: "Can I try NotiProof for free?", a: "Yes! Our Free plan lets you get started with 5,000 monthly views on 1 website. There's no trial — the Free plan is free forever. Upgrade anytime when you need more." },
  { q: "What counts as a monthly view?", a: "A monthly view is counted each time a visitor loads a page on your website where NotiProof is installed." },
  { q: "Can I change plans anytime?", a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your dashboard." },
  { q: "Are all integrations included?", a: "Yes! All integrations are included on every paid plan. The Free plan also includes all integrations." },
  { q: "What is an add-on seat?", a: "Additional team members can be added for $3/month each. The first seat is included with every plan." },
  { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money-back guarantee on all paid plans, including the Lifetime Deal." },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const [activeTab, setActiveTab] = useState<"lifetime" | "subscription">("lifetime");

  const pricingSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "NotiProof",
      description: "Social proof and testimonial platform for increasing website conversions.",
      brand: { "@type": "Brand", name: "NotiProof" },
      offers: [
        {
          "@type": "Offer",
          name: "Lifetime Deal",
          price: 79,
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: "https://notiproof.com/pricing/",
        },
        ...plans.map((p) => ({
          "@type": "Offer",
          name: p.name,
          price: yearly ? p.yearly : p.monthly,
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: "https://notiproof.com/pricing/",
        })),
      ],
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
        description="Compare NotiProof pricing plans. Lifetime Deal ($79), Free, Starter ($5), Standard ($15), Professional ($40). All integrations included."
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

          {/* Tab Switcher */}
          <div className="flex items-center justify-center gap-1 mb-12 bg-muted p-1 rounded-lg max-w-sm mx-auto">
            <button
              onClick={() => setActiveTab("lifetime")}
              className={`flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                activeTab === "lifetime"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Lifetime Deal
            </button>
            <button
              onClick={() => setActiveTab("subscription")}
              className={`flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                activeTab === "subscription"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Subscription Plans
            </button>
          </div>

          {/* Lifetime Deal Tab */}
          {activeTab === "lifetime" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-20"
            >
              <div className="relative bg-card border-primary ring-2 ring-primary shadow-lg shadow-primary/10 rounded-xl p-8 max-w-lg w-full text-center">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Limited Time Offer
                </span>

                <div className="mt-4 mb-2">
                  <span className="text-lg text-muted-foreground line-through mr-2">$299</span>
                  <span className="text-5xl font-extrabold">$79</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">Pay once. Use forever.</p>

                <ul className="space-y-2.5 mb-8 text-left max-w-xs mx-auto">
                  {ltdFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button variant="default" size="lg" className="w-full max-w-xs" asChild>
                  <a href="https://app.notiproof.com/signup">Get Lifetime Access</a>
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  One-time payment · No recurring fees · 30-day money-back guarantee
                </p>
              </div>
            </motion.div>
          )}

          {/* Subscription Plans Tab */}
          {activeTab === "subscription" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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
                  Yearly <span className="text-primary text-xs font-semibold">Save 17%</span>
                </span>
              </div>

              {/* Plans */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
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
                      <span className="text-sm text-muted-foreground">{yearly ? "/yr" : "/mo"}</span>
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
            </motion.div>
          )}

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
