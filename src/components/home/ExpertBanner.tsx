import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const perks = [
  "Personalized setup walkthrough",
  "A/B test strategy recommendations",
  "Ongoing conversion optimization tips",
];

export default function ExpertBanner() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-tight">
        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 p-8 md:p-12"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent-foreground bg-accent/20 px-3 py-1 rounded-full mb-4">
              Expert Support — Free With Every Plan
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need help setting up? We've got you.
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Our conversion specialists will help you configure NotiProof for
              maximum impact. Get personalized recommendations and ongoing
              optimization support — included free.
            </p>
            <ul className="space-y-2 mb-8">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" asChild>
              <a href="https://app.notiproof.com/signup">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
