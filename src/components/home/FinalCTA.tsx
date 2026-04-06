import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function FinalCTA() {
  return (
    <section className="section-padding bg-dark text-dark-foreground">
      <div className="container-tight text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-2xl mx-auto">
            You didn't start your business to lose conversions
          </h2>
          <p className="text-lg text-dark-foreground/60 max-w-xl mx-auto mb-8">
            Join 4,000+ businesses using NotiProof to turn visitors into
            customers. Start free — no credit card required.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="https://app.notiproof.com/signup">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <p className="text-sm text-dark-foreground/40 mt-4">
            Free forever plan · No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
