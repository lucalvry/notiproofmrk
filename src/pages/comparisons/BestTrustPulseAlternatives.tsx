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
    pros: ["Social proof + testimonials + reviews in one platform", "Built-in A/B testing & revenue attribution", "Video testimonial recorder", "50+ notification templates", "38+ integrations"],
    cons: ["Newer brand (launched 2024)"],
    verdict: "Best TrustPulse alternative — significantly more features at competitive pricing.",
  },
  {
    name: "Fomo",
    highlight: false,
    pricing: "$25 – $199/mo",
    pros: ["Pioneer in social proof", "100+ integrations", "Good documentation"],
    cons: ["Expensive for what you get", "No testimonial or review tools", "No video support", "Limited A/B testing"],
    verdict: "Established but expensive — lacks modern features.",
  },
  {
    name: "ProveSource",
    highlight: false,
    pricing: "Free – $89/mo",
    pros: ["Free tier", "Multi-language", "Stream notifications"],
    cons: ["Dated design", "No testimonials", "No A/B testing", "Limited analytics"],
    verdict: "Good free option but limited optimization tools.",
  },
  {
    name: "Proof (Provely)",
    highlight: false,
    pricing: "$19 – $79/mo",
    pros: ["Countdown timers", "Hot streaks"],
    cons: ["Product pivot uncertainty", "Limited integrations", "No reviews/testimonials"],
    verdict: "Risky choice given product pivot history.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "5 Best TrustPulse Alternatives in 2025",
    datePublished: "2025-04-01",
    author: { "@type": "Person", name: "Olayinka Olayokun", url: "https://notiproof.com/resources/author/olayinka-olayokun/" },
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  },
];

export default function BestTrustPulseAlternatives() {
  return (
    <>
      <SEOHead
        title="5 Best TrustPulse Alternatives in 2025"
        description="Looking for TrustPulse alternatives? Compare top social proof tools with better features, pricing, and conversion impact. Find the best replacement."
        canonical="https://notiproof.com/comparisons/best-trustpulse-alternatives/"
        schema={schema}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              5 Best <span className="text-gradient">TrustPulse Alternatives</span> in 2025
            </h1>
            <p className="text-lg text-muted-foreground">
              TrustPulse is affordable but limited. Here are the best alternatives with more features, better analytics, and higher conversion impact.
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
                  {alt.highlight && <span className="text-xs font-bold bg-primary text-primary-foreground px-2.5 py-1 rounded-full">Best Overall</span>}
                  <span className="text-sm text-muted-foreground ml-auto">{alt.pricing}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-green-600 mb-2">Pros</p>
                    <ul className="space-y-1.5">
                      {alt.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-600 mb-2">Cons</p>
                    <ul className="space-y-1.5">
                      {alt.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground"><strong>Verdict:</strong> {alt.verdict}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">Start Free 14-Day Trial <ArrowRight className="w-5 h-5" /></a>
            </Button>
          </motion.div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Comparisons</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "NotiProof vs TrustPulse (Detailed)", href: "/comparisons/notiproof-vs-trustpulse/" },
                { label: "NotiProof vs Fomo", href: "/comparisons/notiproof-vs-fomo/" },
                { label: "Best Fomo Alternatives", href: "/comparisons/best-fomo-alternatives/" },
                { label: "All Comparisons", href: "/comparisons/" },
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
