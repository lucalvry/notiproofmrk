import { Zap } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";

export default function CampaignBuilder() {
  return (
    <ProductFeaturePage
      title="Campaign Builder"
      metaTitle="Campaign Builder – Create Targeted Social Proof Campaigns"
      metaDescription="Build targeted notification campaigns with smart rules, scheduling, A/B testing, and audience segmentation. Maximize conversions with NotiProof Campaign Builder."
      canonical="https://notiproof.com/product/campaign-builder/"
      headline="Build Targeted Social Proof Campaigns"
      description="Create notification campaigns with smart targeting rules, scheduling, A/B testing, and audience segmentation. Show the right message to the right visitor at the right time."
      icon={Zap}
      benefits={[
        "Visual drag-and-drop campaign builder",
        "Smart targeting rules by URL, location, device",
        "Schedule campaigns for specific dates",
        "A/B test notification variants",
        "Audience segmentation",
        "Real-time campaign analytics",
      ]}
      howItWorks={[
        { step: "Create", desc: "Use the visual builder to design notification campaigns with custom rules." },
        { step: "Target", desc: "Set targeting rules based on visitor behavior, location, device, and URL patterns." },
        { step: "Optimize", desc: "A/B test different variants and use analytics to maximize conversion rates." },
      ]}
      useCases={[
        { title: "E-commerce", desc: "Run seasonal campaigns with targeted offers.", href: "/use-cases/ecommerce/" },
        { title: "SaaS", desc: "Target free users with upgrade notifications.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Agencies", desc: "Manage campaigns across multiple clients.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
      faqs={[
        { q: "What targeting rules are available?", a: "URL patterns, geographic location, device type, referral source, time on page, scroll depth, and more." },
        { q: "Can I schedule campaigns?", a: "Yes. Set start and end dates, or run campaigns on specific days and hours." },
        { q: "How does A/B testing work?", a: "Create multiple notification variants and NotiProof automatically splits traffic and reports which performs best." },
        { q: "Is there a limit on campaigns?", a: "Campaign limits depend on your plan. Pro and Business plans include unlimited campaigns." },
      ]}
      relatedProducts={[
        { label: "Social Proof Notifications", href: "/product/social-proof-notifications/" },
        { label: "Analytics", href: "/product/analytics-conversion-insights/" },
        { label: "Targeting Rules", href: "/product/social-proof-notifications/" },
      ]}
    />
  );
}
