import { Link as LinkIcon, Plug, Workflow, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import ProductFeaturePage from "@/components/ProductFeaturePage";
import StatCallout from "@/components/StatCallout";
import KeyTakeaway from "@/components/KeyTakeaway";

const deepDive = (
  <>
    <h2 id="platforms">What Platforms Does NotiProof Integrate With?</h2>
    <p>
      NotiProof connects with 38+ platforms across six categories: <strong>e-commerce</strong> (Shopify, WooCommerce, BigCommerce, Magento, Gumroad), <strong>payments</strong> (Stripe, PayPal, Paddle, Lemon Squeezy), <strong>CRM & marketing</strong> (HubSpot, Salesforce, Mailchimp, Klaviyo, ActiveCampaign), <strong>analytics</strong> (Google Analytics 4, Mixpanel, Segment, Amplitude), <strong>reviews</strong> (Google Business, Trustpilot, G2, Capterra, Yelp), and <strong>automation</strong> (Zapier, Make/Integromat, webhooks, REST API).
    </p>
    <StatCallout stat="38+ integrations" context="All included on every plan — including the free tier. No per-integration fees." />
    <p>
      This philosophy ensures that businesses of any size can connect NotiProof to their existing stack without worrying about costs scaling with complexity.
    </p>

    <h2 id="ecommerce-integrations">How Do E-Commerce Integrations Power Notifications?</h2>
    <p>
      When you connect <Link to="/integrations/shopify/">Shopify</Link> or WooCommerce to NotiProof, the integration creates a real-time data pipeline. Every order event — new purchase, order fulfilled, review submitted — flows into NotiProof within seconds and is automatically transformed into display-ready notifications.
    </p>
    <p>
      For Shopify specifically, NotiProof's integration uses Shopify's webhook system. The setup takes under 2 minutes: install the NotiProof Shopify app, authorize the connection, and it begins receiving order data immediately. No API keys to configure, no code to write.
    </p>
    <KeyTakeaway>
      E-commerce integrations create real-time data pipelines. Shopify setup takes under 2 minutes with zero code — install, authorize, done.
    </KeyTakeaway>

    <h2 id="webhooks-api">How Do Custom Webhooks and API Work?</h2>
    <p>
      For platforms not covered by native integrations, NotiProof provides a REST API and webhook receiver. The webhook endpoint accepts JSON payloads with event data and creates notification-ready events in your NotiProof account.
    </p>
    <p>
      The REST API supports full CRUD operations with rate limits of 100 requests/second on Pro plans and 500 requests/second on Business plans. Our <Link to="/resources/help-center/">Help Center</Link> includes step-by-step webhook setup guides.
    </p>

    <h2 id="setup-time">How Long Does Integration Setup Take?</h2>
    <p>
      Most native integrations take <strong>under 5 minutes</strong>. The setup flow follows three steps: select the platform, authenticate (usually via OAuth), and configure which events to capture. Custom webhook integrations take 15–30 minutes for a developer.
    </p>
    <StatCallout stat="Under 5 minutes" context="Average setup time for native integrations with the guided wizard." />
  </>
);

const tocSections = [
  { id: "platforms", label: "What Platforms Does NotiProof Integrate With?" },
  { id: "ecommerce-integrations", label: "How Do E-Commerce Integrations Work?" },
  { id: "webhooks-api", label: "How Do Custom Webhooks and API Work?" },
  { id: "setup-time", label: "How Long Does Setup Take?" },
];

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
      deepDiveContent={deepDive}
      deepDiveToc={tocSections}
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
