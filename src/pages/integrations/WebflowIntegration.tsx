import { Globe } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function WebflowIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof for Webflow – Add Social Proof to Webflow Sites"
      metaDescription="Add real-time social proof notifications, testimonials, and visitor counts to your Webflow site. No-code setup. Increase conversions instantly."
      canonical="https://notiproof.com/integrations/webflow/"
      name="Webflow"
      icon={Globe}
      headline="Add Powerful Social Proof to Your Webflow Site"
      description="Display real-time purchase notifications, customer testimonials, and live visitor counts on your Webflow website. Paste one embed code — no custom code needed."
      benefits={[
        "Paste embed code into Webflow custom code settings",
        "Works with all Webflow templates and CMS collections",
        "Show real-time activity notifications",
        "Display testimonial widgets on any page",
        "Live visitor counter for product and landing pages",
        "Full design control matches your Webflow brand",
        "No impact on Webflow site performance",
        "Works with Webflow E-commerce",
      ]}
      setupSteps={[
        { step: "Copy Snippet", desc: "Get your unique NotiProof embed code from the dashboard — it's a single line of JavaScript." },
        { step: "Add to Webflow", desc: "Paste the snippet into Webflow's Project Settings → Custom Code → Footer Code section." },
        { step: "Configure & Launch", desc: "Set up notification types, customize styling to match your Webflow design, and publish." },
      ]}
      features={[
        "Real-time activity notifications",
        "Testimonial showcase widgets",
        "Video testimonial embeds",
        "Live visitor counter",
        "Review aggregation widgets",
        "Landing page social proof",
        "E-commerce purchase alerts",
        "Custom CSS override support",
        "CMS-powered notification content",
      ]}
      faqs={[
        { q: "How do I add NotiProof to Webflow?", a: "Paste the NotiProof JavaScript snippet into your Webflow Project Settings under Custom Code → Footer Code. It takes under 30 seconds." },
        { q: "Does it work with Webflow E-commerce?", a: "Yes. NotiProof can display purchase notifications, visitor counts, and review widgets on Webflow E-commerce product pages and checkout." },
        { q: "Will NotiProof affect my Webflow site speed?", a: "No. The script loads asynchronously and is under 15KB, ensuring no impact on your Webflow site's performance or Core Web Vitals." },
        { q: "Can I match NotiProof's design to my Webflow theme?", a: "Yes. NotiProof offers full design customization including colors, fonts, positioning, and animations to match your Webflow brand perfectly." },
      ]}
      resourceLinks={[
        { label: "Social Proof for Landing Pages", href: "/resources/social-proof/social-proof-for-landing-pages/", context: "Learn where to place social proof elements on Webflow landing pages for maximum impact." },
        { label: "Building Website Credibility", href: "/resources/website-trust/building-website-credibility/", context: "Combine social proof with other trust signals on your Webflow site." },
      ]}
      relatedUseCases={[
        { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { label: "Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
    />
  );
}
