import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Ready to Increase Your Conversions?",
  description = "Join thousands of businesses using NotiProof to turn visitors into customers. Start free — no credit card required.",
}: CTASectionProps) {
  return (
    <section className="section-padding bg-dark text-dark-foreground">
      <div className="container-tight text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-dark-foreground/70 max-w-2xl mx-auto mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://app.notiproof.com/signup">
              Start Free 14-Day Trial <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="hero-outline" size="xl" className="border-dark-foreground/20 text-dark-foreground hover:bg-dark-foreground/10" asChild>
            <a href="/pricing">View Pricing</a>
          </Button>
        </div>
        <p className="text-sm text-dark-foreground/40 mt-4">No credit card required · Free plan available</p>
      </div>
    </section>
  );
}
