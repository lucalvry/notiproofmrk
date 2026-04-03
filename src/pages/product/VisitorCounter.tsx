import { Eye, TrendingUp, Globe, Gauge } from "lucide-react";
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
      withoutNotiproof={[
        "Visitors browse alone with no idea others are looking at the same product",
        "No sense of popularity or demand — zero urgency to act quickly",
        "High-traffic pages look the same as low-traffic ones to visitors",
        "You can't leverage the 'wisdom of the crowd' to influence decisions",
      ]}
      withNotiproof={[
        "Real-time counters show '47 people viewing this right now' — instant social validation",
        "Visitor counts create urgency: if others are looking, the item might sell out",
        "Popular pages are visibly popular, reinforcing the bandwagon effect",
        "Privacy-first counting means no cookie consent banners required for the counter",
      ]}
      howItWorks={[
        { step: "Enable", desc: "Turn on the visitor counter from your NotiProof dashboard." },
        { step: "Customize", desc: "Choose where to show counts (specific pages, site-wide), and customize the design." },
        { step: "Impress", desc: "Visitors see real-time activity, creating trust and urgency." },
      ]}
      featureDetails={[
        { icon: TrendingUp, title: "Urgency Engine", desc: "High visitor counts trigger loss aversion — visitors act faster when they see demand from others." },
        { icon: Globe, title: "Page-Level Counts", desc: "Show visitor counts per product, per page, or site-wide. Full control over where counts appear." },
        { icon: Gauge, title: "Zero Performance Impact", desc: "Lightweight server-side tracking with no cookies, no consent banners, and no page speed reduction." },
      ]}
      testimonial={{
        quote: "Adding the visitor counter to our product pages increased urgency. Customers who saw '23 people viewing' converted 18% more often.",
        name: "Lisa Chen",
        role: "Head of E-commerce, UrbanThread",
        metric: "+18% Conversion Rate",
      }}
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
      resourceLinks={[
        { label: "Social Proof Psychology", href: "/resources/social-proof/social-proof-psychology/", context: "Visitor counters leverage the 'wisdom of the crowd' principle — learn more about the psychology:" },
        { label: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", context: "See how visitor counters fit into a complete website social proof strategy:" },
      ]}
    />
  );
}
