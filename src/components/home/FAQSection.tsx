import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const faqs = [
  {
    q: "How long does it take to set up NotiProof?",
    a: "Most users are up and running in under 5 minutes. Just add a single line of code to your site — or use our no-code integrations for Shopify, WordPress, and more.",
  },
  {
    q: "Will NotiProof slow down my website?",
    a: "Not at all. Our widget loads asynchronously and weighs under 15KB gzipped. It won't affect your page load speed or Core Web Vitals.",
  },
  {
    q: "Do I need real customer data to get started?",
    a: "You can start with sample notifications to see how it looks and feels. Once you connect a data source (Shopify, Stripe, manual events, etc.), real data flows in automatically.",
  },
  {
    q: "Can I customize the look and feel of notifications?",
    a: "Absolutely. Choose from 50+ templates or build your own with full control over colors, fonts, animations, positioning, and timing. Every notification can match your brand perfectly.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes! Our free plan includes up to 1,000 notification impressions per month — perfect for testing. Paid plans start at $19/mo and scale with your traffic.",
  },
  {
    q: "How does NotiProof track conversions?",
    a: "We use first-party cookies and server-side attribution to track which notifications lead to conversions. You'll see direct revenue impact in your analytics dashboard.",
  },
];

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <section className="section-padding bg-surface">
      <div className="container-tight">
        <SectionHeading
          badge="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about getting started with NotiProof."
        />

        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
      </section>
    </>
  );
}
