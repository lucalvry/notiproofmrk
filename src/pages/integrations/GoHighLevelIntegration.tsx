import { Rocket } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function GoHighLevelIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof + GoHighLevel – Social Proof for GHL Funnels"
      metaDescription="Add social proof notifications to GoHighLevel funnels and websites. Display lead captures, appointment bookings, and purchase alerts in real time."
      canonical="https://notiproof.com/integrations/gohighlevel/"
      name="GoHighLevel"
      icon={Rocket}
      headline="Supercharge GoHighLevel Funnels With Social Proof"
      description="Add real-time social proof notifications to your GoHighLevel funnels, websites, and landing pages. Show lead captures, appointment bookings, and purchase alerts to increase funnel conversion rates."
      benefits={[
        "Add to GHL funnels via custom code block",
        "Display lead capture notifications in real time",
        "Show appointment booking alerts",
        "Purchase notifications for GHL stores",
        "Works on GHL websites, funnels, and landing pages",
        "White-label option for agency clients",
        "Multi-location support for agency use",
        "Revenue attribution per funnel step",
      ]}
      setupSteps={[
        { step: "Add Custom Code", desc: "Insert the NotiProof snippet into your GoHighLevel funnel or website via the custom code block." },
        { step: "Connect Events", desc: "Use webhooks or Zapier to send GHL events (leads, bookings, purchases) to NotiProof." },
        { step: "Launch & Scale", desc: "Configure notification campaigns for each funnel and monitor conversion uplift in analytics." },
      ]}
      features={[
        "Lead capture notifications",
        "Appointment booking alerts",
        "Course enrollment popups",
        "Membership signup notifications",
        "Funnel step activity tracking",
        "Multi-sub-account support",
        "White-label branding",
        "Agency dashboard access",
        "Webhook-based event triggers",
      ]}
      faqs={[
        { q: "How do I add NotiProof to GoHighLevel?", a: "Add a Custom Code block in your GHL funnel or website builder and paste the NotiProof JavaScript snippet. Connect events via webhooks or Zapier." },
        { q: "Does it work with GHL's appointment scheduler?", a: "Yes. Trigger notifications when appointments are booked, showing other visitors that people are actively scheduling." },
        { q: "Can agencies white-label NotiProof for GHL clients?", a: "Yes. NotiProof offers white-label options so agencies can provide branded social proof to their GoHighLevel clients." },
        { q: "Does it support multiple GHL sub-accounts?", a: "Yes. Manage social proof across multiple GHL sub-accounts from a single NotiProof dashboard with separate analytics per client." },
      ]}
      resourceLinks={[
        { label: "Social Proof for Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/", context: "Learn how agencies use NotiProof to deliver results for GHL clients." },
        { label: "Landing Page Optimization", href: "/resources/cro/landing-page-optimization/", context: "Optimize GHL funnel pages with social proof and conversion best practices." },
      ]}
      relatedUseCases={[
        { label: "Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
        { label: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
      ]}
    />
  );
}
