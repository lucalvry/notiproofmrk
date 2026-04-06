import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
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

const alternatives = [
  {
    name: "NotiProof",
    highlight: true,
    pricing: "Free – $79/mo",
    pros: ["All-in-one: notifications + testimonials + reviews", "Built-in A/B testing & revenue attribution", "50+ templates with pixel-perfect customization", "Video testimonial recorder included", "38+ native integrations"],
    cons: ["Newer brand (launched 2024)"],
    verdict: "Best overall Fomo alternative — more features at a lower price with built-in testimonial and review tools.",
  },
  {
    name: "TrustPulse",
    highlight: false,
    pricing: "$5 – $39/mo",
    pros: ["Budget-friendly entry price", "Simple setup", "Real-time event tracking"],
    cons: ["No testimonial or review features", "Limited customization", "No A/B testing", "No revenue attribution"],
    verdict: "Good budget option for basic notifications only.",
  },
  {
    name: "Proof (now Provely)",
    highlight: false,
    pricing: "$19 – $79/mo",
    pros: ["Established brand", "Countdown timers", "Hot streaks feature"],
    cons: ["Shut down original product, pivoted", "Limited integrations", "No testimonial features", "No video support"],
    verdict: "Uncertain future after pivot — limited feature set.",
  },
  {
    name: "ProveSource",
    highlight: false,
    pricing: "Free – $89/mo",
    pros: ["Free tier available", "Multi-language support", "Stream notifications"],
    cons: ["Dated UI and templates", "No testimonial collection", "Limited analytics", "No A/B testing"],
    verdict: "Decent free option but lacks advanced optimization features.",
  },
  {
    name: "UseProof",
    highlight: false,
    pricing: "$79 – $299/mo",
    pros: ["Enterprise features", "Advanced targeting"],
    cons: ["Very expensive", "No testimonial or review tools", "Limited template library", "Complex setup"],
    verdict: "Enterprise-focused and overpriced for most businesses.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "7 Best Fomo Alternatives in 2025 (Compared)",
    datePublished: "2025-04-01",
    dateModified: "2025-04-01",
    author: { "@type": "Person", name: "Olayinka Olayokun", url: "https://notiproof.com/resources/author/olayinka-olayokun/" },
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  },
];

export default function BestFomoAlternatives() {
  return (
    <>
      <SEOHead
        title="7 Best Fomo Alternatives in 2025 (Compared)"
        description="Looking for Fomo alternatives? Compare the top social proof notification tools — features, pricing, pros & cons. Find the best Fomo replacement for your business."
        canonical="https://notiproof.com/comparisons/best-fomo-alternatives/"
        schema={schema}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              7 Best <span className="text-gradient">Fomo Alternatives</span> in 2025
            </h1>
            <p className="text-lg text-muted-foreground">
              Fomo popularized social proof notifications, but it's not the only option. We compared the top alternatives on features, pricing, ease of use, and conversion impact.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {alternatives.map((alt, i) => (
              <motion.div
                key={alt.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`rounded-2xl border p-6 md:p-8 ${alt.highlight ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-border bg-card"}`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold">{i + 1}. {alt.name}</h2>
                  {alt.highlight && (
                    <span className="text-xs font-bold bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
                      Best Overall
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground ml-auto">{alt.pricing}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-green-600 mb-2">Pros</p>
                    <ul className="space-y-1.5">
                      {alt.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-600 mb-2">Cons</p>
                    <ul className="space-y-1.5">
                      {alt.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-sm font-medium text-foreground">
                  <strong>Verdict:</strong> {alt.verdict}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Ready to try the #1 Fomo alternative?</p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">
                Start Free 14-Day Trial <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Comparisons</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "NotiProof vs Fomo (Detailed)", href: "/comparisons/notiproof-vs-fomo/" },
                { label: "NotiProof vs TrustPulse", href: "/comparisons/notiproof-vs-trustpulse/" },
                { label: "NotiProof vs Proof", href: "/comparisons/notiproof-vs-proof/" },
                { label: "NotiProof vs ProveSource", href: "/comparisons/notiproof-vs-provesource/" },
              ].map((l) => (
                <Link key={l.href} to={l.href} className="flex items-center gap-2 bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all text-sm font-medium">
                  {l.label} <ArrowRight className="w-3.5 h-3.5 text-muted-foreground ml-auto" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
