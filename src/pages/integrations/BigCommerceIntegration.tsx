import { Store } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function BigCommerceIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof for BigCommerce – Enterprise Social Proof Notifications"
      metaDescription="Add real-time purchase notifications, reviews, and visitor counts to your BigCommerce store. Enterprise-grade social proof for high-volume stores."
      canonical="https://notiproof.com/integrations/bigcommerce/"
      name="BigCommerce"
      icon={Store}
      headline="Enterprise Social Proof for BigCommerce Stores"
      description="Display real-time purchase notifications, aggregated reviews, and live visitor counts on your BigCommerce store. Built for high-volume e-commerce with zero performance impact."
      benefits={[
        "Simple script installation via Script Manager",
        "Auto-sync BigCommerce orders and products",
        "Real-time purchase notification popups",
        "Aggregate reviews from Google and Trustpilot",
        "Live visitor counter on product pages",
        "Works with BigCommerce headless (Stencil & Next.js)",
        "Enterprise-grade performance — handles high traffic",
        "Revenue attribution analytics per campaign",
      ]}
      setupSteps={[
        { step: "Add Script", desc: "Go to BigCommerce Script Manager and add the NotiProof JavaScript snippet to your storefront." },
        { step: "Connect & Configure", desc: "Link your BigCommerce store via API to sync orders, then configure notification types and design." },
        { step: "Launch & Optimize", desc: "Enable notifications, then use A/B testing to optimize which messages drive the most sales." },
      ]}
      features={[
        "Real-time purchase notifications",
        "Product-specific visitor counter",
        "Multi-channel review aggregation",
        "Testimonial collection widgets",
        "Cart page urgency notifications",
        "Category page social proof",
        "A/B testing for notifications",
        "Campaign builder with scheduling",
        "Headless commerce support",
      ]}
      faqs={[
        { q: "Does NotiProof work with BigCommerce headless?", a: "Yes. NotiProof works with both BigCommerce Stencil themes and headless setups using Next.js, Gatsby, or custom frontends." },
        { q: "How do I install NotiProof on BigCommerce?", a: "Use BigCommerce's built-in Script Manager under Storefront → Script Manager to add the NotiProof snippet. No app installation required." },
        { q: "Can it handle high-traffic BigCommerce stores?", a: "Yes. NotiProof's CDN-delivered script is designed for enterprise-level traffic with 99.9% uptime and sub-50ms load times." },
        { q: "Does it sync BigCommerce orders automatically?", a: "Yes. Connect via BigCommerce API and NotiProof will automatically sync new orders to display as real-time purchase notifications." },
      ]}
      resourceLinks={[
        { label: "E-commerce CRO Guide", href: "/resources/cro/ecommerce-conversion-optimization/", context: "Learn advanced conversion optimization strategies for BigCommerce stores." },
        { label: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", context: "See how top e-commerce brands use social proof to increase sales." },
      ]}
      relatedUseCases={[
        { label: "E-commerce", href: "/use-cases/ecommerce/" },
      ]}
    />
  );
}
