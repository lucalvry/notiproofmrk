import { Link as LinkIcon } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";

export default function IntegrationsEcosystem() {
  return (
    <ProductFeaturePage
      title="Integrations Ecosystem"
      metaTitle="Integrations Ecosystem – 38+ Platform Integrations"
      metaDescription="Connect NotiProof with 38+ platforms including Shopify, WordPress, WooCommerce, Stripe, GA4, Zapier, HubSpot, and more. All integrations included on every plan."
      canonical="https://notiproof.com/product/integrations-ecosystem/"
      headline="38+ Integrations for Every Platform"
      description="Connect NotiProof with the tools you already use. Shopify, WordPress, WooCommerce, Stripe, GA4, Zapier, HubSpot, and 30+ more — all included on every plan."
      icon={LinkIcon}
      benefits={[
        "38+ integrations included on every plan",
        "One-click setup for most platforms",
        "Shopify, WooCommerce, BigCommerce support",
        "CRM integrations: HubSpot, Salesforce",
        "Analytics: GA4, Mixpanel, Segment",
        "Automation: Zapier, Make, webhooks, API",
      ]}
      howItWorks={[
        { step: "Choose", desc: "Select the platforms you use from our integration library." },
        { step: "Connect", desc: "Follow the one-click setup guide to connect your accounts." },
        { step: "Automate", desc: "Data flows automatically — notifications trigger from real events." },
      ]}
      useCases={[
        { title: "E-commerce", desc: "Connect Shopify, WooCommerce, Stripe for purchase alerts.", href: "/use-cases/ecommerce/" },
        { title: "SaaS", desc: "Integrate with HubSpot, Segment, Stripe for signup notifications.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Agencies", desc: "Manage integrations across multiple client sites.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
      faqs={[
        { q: "Are integrations included on the Free plan?", a: "Yes! All 38+ integrations are included on every plan, including Free." },
        { q: "Can I use custom webhooks?", a: "Yes. You can send data to NotiProof via webhooks or our REST API for custom setups." },
        { q: "How long does integration setup take?", a: "Most integrations can be set up in under 5 minutes with our guided setup wizard." },
        { q: "Do you support Google Tag Manager?", a: "Yes. You can deploy NotiProof via GTM for easy tag management." },
      ]}
      relatedProducts={[
        { label: "All Integrations", href: "/integrations/" },
        { label: "Shopify", href: "/integrations/shopify/" },
        { label: "WordPress", href: "/integrations/wordpress/" },
        { label: "Zapier", href: "/integrations/zapier/" },
      ]}
    />
  );
}
