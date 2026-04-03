import { Link as LinkIcon, Plug, Workflow, Settings } from "lucide-react";
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
      withoutNotiproof={[
        "Building custom integrations between tools takes weeks of developer time",
        "Manual data entry means notifications are delayed or inaccurate",
        "Each platform has different APIs — maintaining connections is a headache",
        "No webhooks or API means you can't connect custom internal tools",
      ]}
      withNotiproof={[
        "One-click setup for 38+ platforms — most integrations take under 5 minutes",
        "Real-time data flow means notifications trigger from actual events instantly",
        "Unified dashboard manages all connections in one place",
        "REST API and webhooks for custom integrations with any internal system",
      ]}
      howItWorks={[
        { step: "Choose", desc: "Select the platforms you use from our integration library." },
        { step: "Connect", desc: "Follow the one-click setup guide to connect your accounts." },
        { step: "Automate", desc: "Data flows automatically — notifications trigger from real events." },
      ]}
      featureDetails={[
        { icon: Plug, title: "One-Click Setup", desc: "Most integrations connect with a single click — no API keys, no code, no developer required." },
        { icon: Workflow, title: "Real-Time Data Flow", desc: "Events flow from your tools to NotiProof in real-time. Purchase happens → notification appears instantly." },
        { icon: Settings, title: "Custom Webhooks & API", desc: "For custom setups, use our REST API or configure webhooks to send any event data to NotiProof." },
      ]}
      testimonial={{
        quote: "We connected Shopify, Klaviyo, and Google Reviews in under 10 minutes. Everything just worked — no developer needed.",
        name: "Tom Bradley",
        role: "E-commerce Manager, FitGear Pro",
        metric: "10-Minute Setup",
      }}
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
      resourceLinks={[
        { label: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", context: "Learn how integrations power a complete social proof implementation:" },
        { label: "What Is Social Proof?", href: "/resources/social-proof/what-is-social-proof/", context: "Understand why real-time data from integrations makes social proof more effective:" },
      ]}
    />
  );
}
