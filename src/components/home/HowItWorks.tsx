import { Code2, Plug, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const steps = [
  {
    icon: Code2,
    step: "1",
    title: "Install the script",
    desc: "Add one line of code to your site. Works with Shopify, WordPress, Webflow, and any HTML site — no developer needed.",
  },
  {
    icon: Plug,
    step: "2",
    title: "Connect your data",
    desc: "Pull purchases from Stripe, reviews from Google, or events via Zapier. NotiProof syncs your social proof automatically.",
  },
  {
    icon: TrendingUp,
    step: "3",
    title: "Watch conversions grow",
    desc: "Real-time notifications start appearing to visitors instantly. Track ROI with built-in analytics and A/B testing.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <SectionHeading
          badge="How It Works"
          title="Live in under 60 seconds"
          description="Three steps to start converting more visitors into customers."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
              )}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 relative">
                <s.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
