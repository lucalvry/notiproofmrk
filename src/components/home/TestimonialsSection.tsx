import { Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const testimonials = [
  {
    quote:
      "NotiProof increased our checkout conversions by 28% in the first month. The ROI paid for a full year within the first week.",
    highlight: "28%",
    name: "Jessica M.",
    role: "E-commerce Director",
    company: "StyleHaus (50-person DTC brand)",
    initials: "JM",
    metric: "+28% checkout conversions",
    timeframe: "First 30 days",
  },
  {
    quote:
      "We saw a 19% lift in trial signups within two weeks. The A/B testing dashboard helped us optimize notification timing for maximum impact.",
    highlight: "19%",
    name: "David K.",
    role: "Co-Founder & CEO",
    company: "MetricFlow (B2B SaaS, Series A)",
    initials: "DK",
    metric: "+19% trial signups",
    timeframe: "First 14 days",
  },
  {
    quote:
      "We now offer NotiProof as part of our CRO services. Clients love the results — 34% more leads on average across 12 client sites.",
    highlight: "34%",
    name: "Anna P.",
    role: "Founder",
    company: "GrowthLab Agency (200+ clients)",
    initials: "AP",
    metric: "+34% lead generation",
    timeframe: "Across 12 client sites",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <SectionHeading
          badge="Testimonials"
          title="Over 4,000+ websites trust NotiProof"
          description="See what conversion-focused teams are saying."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-highlight text-highlight"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4 flex-1">
                "{t.quote}"
              </p>
              {/* Metric badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                  {t.metric}
                </span>
                <span className="text-xs text-muted-foreground">{t.timeframe}</span>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
