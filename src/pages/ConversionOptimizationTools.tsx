import { Target } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";
export default function ConversionOptimizationTools() {
  return (
    <ProductFeaturePage title="Conversion Optimization Tools" metaTitle="Conversion Optimization Tools – Increase Website Conversions" metaDescription="NotiProof's conversion optimization toolkit: social proof notifications, testimonials, A/B testing, analytics, and targeting rules. Boost conversions by 10-35%." canonical="https://notiproof.com/conversion-optimization-tools/" headline="Conversion Optimization Tools That Actually Work" description="A complete conversion optimization toolkit — social proof notifications, testimonial walls, A/B testing, targeting rules, and analytics — all in one platform." icon={Target}
      benefits={["Social proof notifications", "Testimonial collection & walls", "A/B testing built in", "Targeting rules by URL, location, device", "Real-time analytics dashboard", "Revenue attribution reporting"]}
      howItWorks={[
        { step: "Install", desc: "Add NotiProof to your site in 60 seconds." },
        { step: "Optimize", desc: "Use A/B testing and targeting to find what converts best." },
        { step: "Scale", desc: "Monitor analytics and scale your winning campaigns." },
      ]}
      useCases={[
        { title: "E-commerce CRO", href: "/use-cases/ecommerce/", desc: "Reduce cart abandonment." },
        { title: "SaaS CRO", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/", desc: "Increase trial signups." },
        { title: "Agency CRO", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/", desc: "CRO services for clients." },
      ]}
      faqs={[
        { q: "What conversion optimization tools does NotiProof include?", a: "Social proof notifications, testimonials, visitor counters, A/B testing, targeting rules, and analytics." },
        { q: "How much can I increase conversions?", a: "Our customers see 10-35% conversion lifts, depending on industry and implementation." },
        { q: "Does it work with my existing tools?", a: "Yes. NotiProof integrates with 38+ platforms including GA4, Shopify, HubSpot, and Stripe." },
      ]}
      relatedProducts={[
        { label: "Social Proof Notifications", href: "/product/social-proof-notifications/" },
        { label: "Campaign Builder", href: "/product/campaign-builder/" },
        { label: "Analytics", href: "/product/analytics-conversion-insights/" },
      ]}
    />
  );
}
