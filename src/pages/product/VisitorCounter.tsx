import { Eye } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";

export default function VisitorCounter() {
  return (
    <ProductFeaturePage
      title="Visitor Counter"
      metaTitle="Visitor Counter – Show Live Visitors on Your Website"
      metaDescription="Display real-time visitor counts on your website to show popularity and create social proof. Increase engagement with NotiProof's live visitor counter widget."
      canonical="https://notiproof.com/product/visitor-counter-live-visitors/"
      headline="Show Live Visitor Counts to Build Social Proof"
      description="Display how many people are currently viewing your site or specific pages. Create a sense of popularity and urgency that drives conversions."
      icon={Eye}
      benefits={[
        "Real-time live visitor counting",
        "Page-specific or site-wide counts",
        "Customizable widget design",
        "Mobile-responsive display",
        "Privacy-compliant tracking",
        "Lightweight — zero performance impact",
      ]}
      howItWorks={[
        { step: "Enable", desc: "Turn on the visitor counter from your NotiProof dashboard." },
        { step: "Customize", desc: "Choose where to show counts (specific pages, site-wide), and customize the design." },
        { step: "Impress", desc: "Visitors see real-time activity, creating trust and urgency." },
      ]}
      useCases={[
        { title: "E-commerce", desc: "Show product page viewers to create urgency.", href: "/use-cases/ecommerce/" },
        { title: "SaaS", desc: "Display active trial users to build credibility.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Events", desc: "Show live attendee counts for webinars.", href: "/use-cases/" },
      ]}
      faqs={[
        { q: "How accurate is the visitor count?", a: "Counts are updated in real-time using server-side tracking. They reflect unique active sessions." },
        { q: "Can I show counts on specific pages only?", a: "Yes. You can configure which pages display the visitor counter widget." },
        { q: "Is visitor tracking GDPR compliant?", a: "Yes. We use privacy-first tracking that doesn't require cookie consent for counting." },
        { q: "Can I set a minimum display threshold?", a: "Yes. You can set a minimum visitor count before the widget appears." },
      ]}
      relatedProducts={[
        { label: "Social Proof Notifications", href: "/product/social-proof-notifications/" },
        { label: "Recent Activity", href: "/product/recent-activity-notifications/" },
        { label: "Analytics", href: "/product/analytics-conversion-insights/" },
      ]}
    />
  );
}
