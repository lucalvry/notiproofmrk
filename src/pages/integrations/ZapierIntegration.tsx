import { Zap } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function ZapierIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof + Zapier – Connect Social Proof With 5,000+ Apps"
      metaDescription="Connect NotiProof with 5,000+ apps via Zapier. Trigger social proof notifications from any event — form submissions, payments, CRM updates, and more."
      canonical="https://notiproof.com/integrations/zapier/"
      name="Zapier"
      icon={Zap}
      headline="Connect NotiProof With 5,000+ Apps via Zapier"
      description="Trigger social proof notifications from any event in your tech stack. Form submissions, payment completions, CRM updates, email signups — if it happens in Zapier, NotiProof can show it."
      benefits={[
        "Connect with 5,000+ apps",
        "Trigger notifications from any event",
        "No-code automation setup",
        "Real-time webhook triggers",
        "Pre-built Zap templates",
        "Multi-step workflow support",
        "Custom notification formatting",
        "Works with any data source",
      ]}
      setupSteps={[
        { step: "Connect", desc: "Link your NotiProof account in Zapier with your API key." },
        { step: "Build Zap", desc: "Choose a trigger app and map data fields to NotiProof notifications." },
        { step: "Automate", desc: "Turn on your Zap and watch social proof notifications flow automatically." },
      ]}
      features={[
        "Pre-built Zap templates",
        "Custom data mapping",
        "Multi-step Zaps support",
        "Filters and conditions",
        "Delay and scheduling",
        "Error handling and retries",
        "Testing and preview",
        "Webhook trigger support",
        "Batch processing",
      ]}
      faqs={[
        { q: "What can I trigger notifications from?", a: "Anything that connects to Zapier — form submissions, CRM events, email signups, payments, webhooks, and more." },
        { q: "Are there pre-built Zap templates?", a: "Yes. We provide templates for common use cases like Stripe payments, HubSpot contacts, and Typeform submissions." },
        { q: "Is Zapier included on all plans?", a: "Yes. Zapier integration is included on every NotiProof plan, including Free." },
        { q: "Can I use multi-step Zaps?", a: "Yes. Build complex automation workflows with multiple steps, filters, and conditions." },
      ]}
      resourceLinks={[
        { label: "Integrations Ecosystem", href: "/product/integrations-ecosystem/", context: "Explore all 38+ NotiProof integrations beyond Zapier:" },
        { label: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", context: "Learn how to use Zapier-triggered notifications as part of your marketing automation:" },
      ]}
      relatedUseCases={[
        { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { label: "E-commerce", href: "/use-cases/ecommerce/" },
        { label: "Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
    />
  );
}
