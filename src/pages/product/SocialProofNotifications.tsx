import { Bell } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";

export default function SocialProofNotifications() {
  return (
    <ProductFeaturePage
      title="Social Proof Notifications"
      metaTitle="Social Proof Notifications – Real-Time Purchase & Signup Alerts"
      metaDescription="Show real-time purchase alerts, signup notifications, and activity feeds on your website. Increase conversions by 10-35% with NotiProof social proof notifications."
      canonical="https://notiproof.com/product/social-proof-notifications/"
      headline="Real-Time Social Proof Notifications That Convert"
      description="Display live purchase alerts, signup notifications, and activity feeds to create urgency, build trust, and increase conversions by 10–35%."
      icon={Bell}
      benefits={[
        "Show real-time purchase and signup activity",
        "Create urgency with live notifications",
        "Build instant trust with new visitors",
        "Fully customizable design and timing",
        "Smart display rules based on visitor behavior",
        "Works on any website with 1 line of code",
      ]}
      howItWorks={[
        { step: "Install", desc: "Add one line of JavaScript to your website header. No developers needed." },
        { step: "Configure", desc: "Choose notification types, customize design, and set display rules in the dashboard." },
        { step: "Convert", desc: "Watch real-time notifications boost trust and drive more conversions." },
      ]}
      useCases={[
        { title: "E-commerce Stores", desc: "Show recent purchases to drive FOMO and urgency.", href: "/use-cases/ecommerce/" },
        { title: "SaaS Products", desc: "Display trial signups to build credibility.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Service Businesses", desc: "Show booking activity to win more clients.", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
      ]}
      faqs={[
        { q: "What types of notifications can I show?", a: "You can show purchase alerts, signup notifications, visitor counts, review notifications, and custom activity alerts." },
        { q: "Will notifications slow down my website?", a: "No. Our script is lightweight (under 15KB) and loads asynchronously. It has zero impact on page speed." },
        { q: "Can I customize the notification design?", a: "Yes. You can customize colors, text, positioning, timing, and animations to match your brand." },
        { q: "How do I track notification performance?", a: "Our built-in analytics dashboard shows impressions, clicks, and conversion lift for every notification." },
      ]}
      relatedProducts={[
        { label: "Recent Activity", href: "/product/recent-activity-notifications/" },
        { label: "Visitor Counter", href: "/product/visitor-counter-live-visitors/" },
        { label: "Campaign Builder", href: "/product/campaign-builder/" },
        { label: "Analytics", href: "/product/analytics-conversion-insights/" },
      ]}
    />
  );
}
