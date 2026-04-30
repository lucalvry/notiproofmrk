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
      "NotiProof helped us turn checkout hesitation into confidence. Setup was effortless and the impact on conversions was clear within weeks.",
    name: "E-commerce Director",
    company: "Mid-market DTC brand",
    initials: "ED",
  },
  {
    quote:
      "The A/B testing dashboard helped us dial in notification timing and copy. Trial signups grew steadily after we shipped social proof on the pricing page.",
    name: "Co-Founder & CEO",
    company: "B2B SaaS startup",
    initials: "CE",
  },
  {
    quote:
      "We now offer NotiProof as part of our CRO services. Clients love the results, and the white-label setup makes it feel native to their brand.",
    name: "Agency Founder",
    company: "Digital marketing agency",
    initials: "AF",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by conversion-focused teams"
          description="See what teams using NotiProof are saying."
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
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.company}
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
