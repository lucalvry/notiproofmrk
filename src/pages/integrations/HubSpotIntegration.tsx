import { Users } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function HubSpotIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof + HubSpot – CRM-Powered Social Proof Notifications"
      metaDescription="Connect NotiProof with HubSpot to trigger social proof notifications from CRM events. Display deal closings, signups, and demo bookings in real time."
      canonical="https://notiproof.com/integrations/hubspot/"
      name="HubSpot"
      icon={Users}
      headline="CRM-Powered Social Proof With HubSpot + NotiProof"
      description="Trigger real-time social proof notifications from HubSpot CRM events — demo bookings, deal closings, form submissions, and new signups. Turn your CRM data into conversion-boosting trust signals."
      benefits={[
        "Trigger notifications from HubSpot CRM events",
        "Display demo booking and deal closing alerts",
        "Show form submission notifications in real time",
        "Segment notifications by HubSpot lifecycle stage",
        "Sync HubSpot contact data for personalized messages",
        "Works alongside HubSpot Marketing Hub",
        "Revenue attribution syncs back to HubSpot",
        "GDPR-compliant data handling",
      ]}
      setupSteps={[
        { step: "Connect HubSpot", desc: "Authenticate your HubSpot account via OAuth from the NotiProof integrations dashboard." },
        { step: "Map Events", desc: "Choose which HubSpot events (deals, forms, signups) trigger social proof notifications." },
        { step: "Launch Campaigns", desc: "Create notification campaigns using HubSpot data and start displaying real-time social proof." },
      ]}
      features={[
        "Deal-close notifications",
        "Demo booking alerts",
        "Form submission popups",
        "Lifecycle-stage targeting",
        "Contact-based personalization",
        "Pipeline stage notifications",
        "Meeting scheduled alerts",
        "Revenue attribution sync",
        "Multi-hub support (CRM + Marketing)",
      ]}
      faqs={[
        { q: "What HubSpot events can trigger notifications?", a: "Any HubSpot event: deal closings, form submissions, meeting bookings, lifecycle stage changes, contact creation, and custom workflow triggers." },
        { q: "Does it work with HubSpot Free CRM?", a: "Yes. NotiProof's HubSpot integration works with all HubSpot plans including the free CRM tier." },
        { q: "Can I segment notifications by HubSpot data?", a: "Yes. Target notifications based on lifecycle stage, deal stage, contact properties, or any HubSpot segmentation criteria." },
        { q: "Is the integration GDPR compliant?", a: "Yes. NotiProof only displays anonymized or consented data. You control exactly which CRM fields appear in notifications." },
      ]}
      resourceLinks={[
        { label: "Social Proof for B2B SaaS", href: "/resources/social-proof/social-proof-b2b-saas/", context: "Learn how B2B companies use CRM-powered social proof to accelerate pipeline." },
        { label: "Measuring Social Proof ROI", href: "/resources/conversion-analytics/measuring-social-proof-roi/", context: "Track the revenue impact of HubSpot-triggered social proof campaigns." },
      ]}
      relatedUseCases={[
        { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { label: "Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
    />
  );
}
