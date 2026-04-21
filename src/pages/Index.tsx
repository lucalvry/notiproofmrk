import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NotificationDemo from "@/components/NotificationDemo";
import SEOHead from "@/components/SEOHead";
import TrustBadgeStrip from "@/components/home/TrustBadgeStrip";
import IntegrationLogoStrip from "@/components/home/IntegrationLogoStrip";
import HowItWorks from "@/components/home/HowItWorks";
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
    knowsAbout: [
      { "@type": "DefinedTerm", name: "Social Proof", url: "https://en.wikipedia.org/wiki/Social_proof", inDefinedTermSet: "https://notiproof.com/resources/glossary/" },
      { "@type": "DefinedTerm", name: "Conversion Rate Optimization", url: "https://en.wikipedia.org/wiki/Conversion_rate_optimization", inDefinedTermSet: "https://notiproof.com/resources/glossary/" },
      { "@type": "DefinedTerm", name: "Testimonial", url: "https://en.wikipedia.org/wiki/Testimonial", inDefinedTermSet: "https://notiproof.com/resources/glossary/" },
      { "@type": "DefinedTerm", name: "Fear of Missing Out", url: "https://en.wikipedia.org/wiki/Fear_of_missing_out", inDefinedTermSet: "https://notiproof.com/resources/glossary/" },
      { "@type": "DefinedTerm", name: "A/B Testing", url: "https://en.wikipedia.org/wiki/A/B_testing", inDefinedTermSet: "https://notiproof.com/resources/glossary/" },
      { "@type": "DefinedTerm", name: "Customer Review", url: "https://en.wikipedia.org/wiki/Customer_review", inDefinedTermSet: "https://notiproof.com/resources/glossary/" },
      { "@type": "DefinedTerm", name: "Trust", url: "https://en.wikipedia.org/wiki/Trust_(social_science)", inDefinedTermSet: "https://notiproof.com/resources/glossary/" },
      { "@type": "DefinedTerm", name: "Web Analytics", url: "https://en.wikipedia.org/wiki/Web_analytics", inDefinedTermSet: "https://notiproof.com/resources/glossary/" },
    ],
    sameAs: ["https://twitter.com/notiproof", "https://linkedin.com/company/notiproof"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NotiProof",
    url: "https://notiproof.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://notiproof.com/resources/glossary/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NotiProof",
    description: "NotiProof is the social proof and testimonial platform trusted by thousands of businesses. Show real-time notifications, collect testimonials, and boost conversions instantly.",
    image: "https://notiproof.com/og-image.png",
    url: "https://notiproof.com/",
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com/" },
    creator: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com/" },
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Marketing Software",
    operatingSystem: "Web, Cloud",
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
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Jessica M." },
        reviewBody: "NotiProof boosted our checkout conversions by 28% in the first month. The setup took less than 5 minutes and the support team is incredible.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "David K." },
        reviewBody: "We tried Fomo and ProveSource before — NotiProof's video testimonial recorder and review aggregation make it the clear winner for SaaS.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Anna P." },
        reviewBody: "Real-time purchase alerts on our Shopify store added an extra $12k in monthly revenue. The lightweight script doesn't slow our site down at all.",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="NotiProof – Increase Website Conversions by 10–35% With Real-Time Social Proof"
        description="NotiProof is the social proof and testimonial platform trusted by thousands of businesses. Show real-time notifications, collect testimonials, and boost conversions instantly."
        canonical="https://notiproof.com/"
        schema={homepageSchema}
        speakable={["h1"]}
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
            <p className="text-lg text-muted-foreground mb-5 max-w-xl">
              Show live purchase alerts, collect video testimonials, and aggregate reviews from 38+ platforms — all from one lightweight script that installs in 60 seconds.
            </p>

            {/* Trust Badges */}
            <div className="mb-6">
              <TrustBadgeStrip />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="https://app.notiproof.com/signup" target="_blank" rel="noopener noreferrer">
                  Get Started Free <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/pricing/">View Pricing</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">Free forever plan · No credit card required</p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="mt-10 w-full max-w-5xl mx-auto">
            <NotificationDemo />
          </motion.div>
        </div>
      </section>

      {/* Integration Logo Strip */}
      <IntegrationLogoStrip />

      {/* How It Works */}
      <HowItWorks />

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
