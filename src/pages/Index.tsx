import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NotificationDemo from "@/components/NotificationDemo";
import SEOHead from "@/components/SEOHead";
import TabbedFeatures from "@/components/home/TabbedFeatures";
import ExpertBanner from "@/components/home/ExpertBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FeatureBento from "@/components/home/FeatureBento";
import AudienceCards from "@/components/home/AudienceCards";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const codeSnippet = `<script src="https://cdn.notiproof.com/widget.js" data-id="YOUR_ID"></script>`;

const homepageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NotiProof",
    url: "https://notiproof.com",
    logo: "https://notiproof.com/notiproof-logo.png",
    description: "Social proof and testimonial platform that increases website conversions by 10–35%.",
    foundingDate: "2024",
    areaServed: "Worldwide",
    knowsAbout: ["Social Proof", "Conversion Rate Optimization", "Testimonial Management", "FOMO Marketing", "Real-Time Notifications", "A/B Testing", "Customer Reviews", "Website Trust Signals"],
    sameAs: ["https://twitter.com/notiproof", "https://linkedin.com/company/notiproof"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NotiProof",
    url: "https://notiproof.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://notiproof.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NotiProof",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "380",
      priceCurrency: "USD",
      offerCount: "5",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  },
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="NotiProof – Increase Website Conversions by 10–35% With Real-Time Social Proof"
        description="NotiProof is the social proof and testimonial platform trusted by thousands of businesses. Show real-time notifications, collect testimonials, and boost conversions instantly."
        canonical="https://notiproof.com/"
        schema={homepageSchema}
      />

      {/* Hero */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container-tight">
          <motion.div {...fadeUp} className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Increase Conversions by{" "}
              <span className="text-gradient">10–35%</span>{" "}
              With Real-Time Social Proof
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-lg">
              Boost conversions with real-time purchase alerts, testimonials, and engagement notifications. Set up in under 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="https://app.notiproof.com/signup">
                  Start Free 14-Day Trial <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">No credit card required · Setup in 60 seconds</p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="mt-10 w-full max-w-5xl mx-auto">
            <NotificationDemo />
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-10 border-y border-border bg-surface">
        <div className="container-tight text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6">Trusted by 2,000+ conversion-focused teams worldwide</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {["Shopify", "WooCommerce", "Stripe", "GA4", "Zapier", "WordPress", "Webflow", "HubSpot"].map((name) => (
              <span key={name} className="text-sm font-semibold text-muted-foreground/50">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Wave-inspired sections */}
      <TabbedFeatures />
      <ExpertBanner />
      <TestimonialsSection />
      <FeatureBento />
      <AudienceCards />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
