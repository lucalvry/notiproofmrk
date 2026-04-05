import { Bell, BarChart3, Palette } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import featureNotifications from "@/assets/feature-smart-notifications.jpg";
import featureRevenue from "@/assets/feature-revenue-tracking.jpg";
import featureDesign from "@/assets/feature-design-control.jpg";

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
    image: featureNotifications,
  },
  {
    icon: BarChart3,
    title: "Revenue attribution & ROI tracking",
    description:
      "See exactly how much revenue your social proof generates. Track assisted conversions, direct conversions, and average time-to-purchase with clear attribution models.",
    image: featureRevenue,
  },
  {
    icon: Palette,
    title: "Pixel-perfect design control",
    description:
      "Match your brand with custom colors, fonts, animations, and layouts. Choose from 50+ templates or build your own — no designer required.",
    image: featureDesign,
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
              className={`grid md:grid-cols-2 gap-8 items-center`}
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
                className={`aspect-[3/2] rounded-2xl border border-border overflow-hidden ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
