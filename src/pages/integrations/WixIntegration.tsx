import { Layout } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function WixIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof for Wix – Social Proof Notifications for Wix Websites"
      metaDescription="Add social proof notifications, reviews, and visitor counts to your Wix website. Simple embed setup. No coding required. Boost conversions today."
      canonical="https://notiproof.com/integrations/wix/"
      name="Wix"
      icon={Layout}
      headline="Add Social Proof to Your Wix Website in Minutes"
      description="Display real-time purchase notifications, customer reviews, testimonials, and live visitor counts on your Wix site. Simple HTML embed — no coding skills needed."
      benefits={[
        "Add via Wix HTML embed widget — no coding",
        "Works with Wix Stores, Bookings, and Events",
        "Show live purchase and booking notifications",
        "Display Google and Trustpilot review widgets",
        "Visitor counter creates urgency on any page",
        "Fully customizable to match your Wix design",
        "Mobile-responsive on all Wix templates",
        "Zero impact on site loading speed",
      ]}
      setupSteps={[
        { step: "Get Embed Code", desc: "Copy the NotiProof JavaScript snippet from your dashboard — one line of code." },
        { step: "Add to Wix", desc: "Use Wix's 'Embed a Site' or custom HTML widget to paste the snippet on your site." },
        { step: "Customize & Go Live", desc: "Choose notification styles, configure display rules, and start converting visitors." },
      ]}
      features={[
        "Purchase notification popups",
        "Booking confirmation alerts",
        "Live visitor counter",
        "Review aggregation widgets",
        "Testimonial collection forms",
        "Event registration notifications",
        "Cart page social proof",
        "Mobile-optimized displays",
        "Custom branding support",
      ]}
      faqs={[
        { q: "How do I install NotiProof on Wix?", a: "Use the Wix HTML embed widget or add the script via Wix's custom code settings under Marketing Tools → Custom Code." },
        { q: "Does NotiProof work with Wix Stores?", a: "Yes. NotiProof syncs with Wix Stores to display real purchase notifications with product names and buyer locations." },
        { q: "Will it slow down my Wix site?", a: "No. The NotiProof script is under 15KB and loads after your page content, so it won't affect your Wix site's loading speed." },
        { q: "Can I use NotiProof with Wix Bookings?", a: "Yes. Display booking confirmation notifications to show visitors that others are scheduling appointments or services." },
      ]}
      resourceLinks={[
        { label: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", context: "Learn how to implement social proof across different website platforms." },
        { label: "Trust Signals for E-commerce", href: "/resources/website-trust/trust-signals-for-ecommerce/", context: "Add trust-building elements to your Wix online store." },
      ]}
      relatedUseCases={[
        { label: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
        { label: "E-commerce", href: "/use-cases/ecommerce/" },
      ]}
    />
  );
}
