import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function ExpertBanner() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-tight">
        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center"
        >
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent-foreground bg-accent/20 px-3 py-1 rounded-full mb-4">
              Expert Support
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need help setting up? We've got you.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-lg">
              Our conversion specialists will help you configure NotiProof for
              maximum impact — free with every plan. Get personalized
              recommendations, A/B test strategies, and ongoing optimization
              support.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://app.notiproof.com/signup">
                Talk to a specialist <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="hidden md:flex w-48 h-48 rounded-2xl bg-accent/10 items-center justify-center">
            <Headphones className="w-20 h-20 text-accent/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
