import { Activity } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";

export default function RecentActivityNotifications() {
  return (
    <ProductFeaturePage
      title="Recent Activity Notifications"
      metaTitle="Recent Activity Notifications – Live Activity Feed for Websites"
      metaDescription="Display a live feed of recent purchases, signups, reviews, and actions on your website. Build trust with real-time activity notifications from NotiProof."
      canonical="https://notiproof.com/product/recent-activity-notifications/"
      headline="Show a Live Feed of Recent Activity on Your Website"
      description="Display recent purchases, signups, reviews, and other actions in a live activity feed. Build trust by showing that real people are engaging with your business."
      icon={Activity}
      benefits={[
        "Real-time activity feed widget",
        "Show purchases, signups, and reviews",
        "Customizable activity types",
        "Smart timing and rotation",
        "Anonymization options for privacy",
        "Multiple display positions",
      ]}
      howItWorks={[
        { step: "Connect", desc: "Link your data sources — Shopify, Stripe, CRM, or custom webhooks." },
        { step: "Configure", desc: "Choose which activity types to display and customize the notification design." },
        { step: "Engage", desc: "Recent activity notifications create social proof that drives more conversions." },
      ]}
      useCases={[
        { title: "E-commerce", desc: "Show recent purchases and add-to-cart activity.", href: "/use-cases/ecommerce/" },
        { title: "SaaS", desc: "Display recent trial signups and feature adoption.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Local Business", desc: "Show recent bookings and inquiries.", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
      ]}
      faqs={[
        { q: "What's the difference between this and social proof notifications?", a: "Recent activity shows a continuous stream of events, while social proof notifications display individual pop-up alerts. Both create trust differently." },
        { q: "Can I choose which activities to show?", a: "Yes. You control exactly which event types appear in the activity feed." },
        { q: "Can I anonymize customer data?", a: "Yes. You can show first name and city, or fully anonymize to 'Someone from [City]'." },
        { q: "How far back does activity go?", a: "You can configure the time window — from the last hour to the last 30 days." },
      ]}
      relatedProducts={[
        { label: "Social Proof Notifications", href: "/product/social-proof-notifications/" },
        { label: "Visitor Counter", href: "/product/visitor-counter-live-visitors/" },
        { label: "Campaign Builder", href: "/product/campaign-builder/" },
      ]}
    />
  );
}
