import { Bell, BarChart3, Palette } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const features = [
  {
    icon: Bell,
    title: "Smart notification triggers",
    description:
      "Set rules for when and where notifications appear. Target by page, device, geography, or visitor behavior — so every notification feels relevant, not spammy.",
    gradient: "from-primary/15 to-blue-400/15",
  },
  {
    icon: BarChart3,
    title: "Revenue attribution & ROI tracking",
    description:
      "See exactly how much revenue your social proof generates. Track assisted conversions, direct conversions, and average time-to-purchase with clear attribution models.",
    gradient: "from-green-400/15 to-emerald-400/15",
  },
  {
    icon: Palette,
    title: "Pixel-perfect design control",
    description:
      "Match your brand with custom colors, fonts, animations, and layouts. Choose from 50+ templates or build your own — no designer required.",
    gradient: "from-accent/15 to-yellow-300/15",
  },
];

export default function FeatureBento() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-tight">
        <SectionHeading
          badge="Why NotiProof"
          title="Spend more time growing your business"
          description="NotiProof handles the trust-building so you can focus on what matters."
        />

        <div className="space-y-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {f.description}
                </p>
              </div>
              <div
                className={`aspect-[3/2] rounded-2xl bg-gradient-to-br ${f.gradient} border border-border flex items-center justify-center ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <f.icon className="w-14 h-14 text-muted-foreground/25" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
