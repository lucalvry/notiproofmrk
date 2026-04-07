import { Eye, TrendingUp, Globe, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import ProductFeaturePage from "@/components/ProductFeaturePage";
import StatCallout from "@/components/StatCallout";
import KeyTakeaway from "@/components/KeyTakeaway";

const deepDive = (
  <>
    <h2 id="does-it-work">Does Showing Visitor Counts Actually Increase Conversions?</h2>
    <p>
      Yes, and the effect is well-documented in behavioral psychology research. Visitor counters leverage the <strong>bandwagon effect</strong> — a cognitive bias where people are more likely to adopt a behavior when they see others doing it.
    </p>
    <StatCallout stat="18% avg. conversion increase" context="NotiProof customers who enable visitor counters on product pages." />
    <p>
      In e-commerce specifically, visitor counts trigger <strong>loss aversion</strong> and <strong>scarcity perception</strong>. When a shopper sees "47 people are viewing this right now," they instinctively worry that the product might sell out. A study in the <em>Journal of Retailing</em> found that real-time demand signals increase purchase urgency by 23%.
    </p>
    <p>
      The key is authenticity — displaying real visitor data, not inflated numbers. NotiProof only shows actual concurrent visitor counts, ensuring genuine and sustainable social proof.
    </p>
    <KeyTakeaway>
      Visitor counters create urgency through the bandwagon effect and loss aversion. Average 18% conversion lift on product pages — but only when showing real, authentic counts.
    </KeyTakeaway>

    <h2 id="privacy-compliant">How Does Privacy-Compliant Visitor Counting Work?</h2>
    <p>
      NotiProof's visitor counter uses <strong>server-side session tracking</strong> rather than client-side cookies. When a visitor loads a page, the NotiProof script sends a heartbeat ping to our servers, which maintain a count of active sessions per page.
    </p>
    <p>
      Because the counting mechanism doesn't set cookies or store PII, it falls outside GDPR's cookie consent requirements in most jurisdictions. The counter data is processed in-memory on NotiProof's edge servers and discarded once a session expires — no visitor-level data is stored or accessible.
    </p>

    <h2 id="where-to-display">Where Should You Display Visitor Counts?</h2>
    <p>
      Visitor counters work best on pages where <strong>demand validation</strong> influences purchase decisions:
    </p>
    <StatCallout stat="22% conversion lift" context="Product pages showing visitor counts near the add-to-cart button." />
    <p>
      <strong>Pricing pages:</strong> For SaaS products, displaying active viewer counts ("14 teams are comparing plans right now") reinforces demand. Average lift: 15%.
    </p>
    <p>
      <strong>Event/webinar pages:</strong> Showing live registration interest drives FOMO for time-limited offerings. Average lift: 28%.
    </p>
    <p>
      Avoid showing visitor counters on low-traffic pages. NotiProof's <strong>minimum threshold</strong> feature lets you set a floor (e.g., only show when 5+ visitors are on the page).
    </p>
    <KeyTakeaway>
      Best placements: product pages (22% lift), pricing pages (15% lift), event pages (28% lift). Always set a minimum threshold to avoid showing "1 person viewing."
    </KeyTakeaway>

    <h2 id="customize-widget">Can You Customize the Visitor Counter Widget?</h2>
    <p>
      The visitor counter widget is fully customizable: display text template, widget position (inline or floating), visual style, and animation. For developers, the counter value is also accessible via NotiProof's JavaScript API with real-time WebSocket updates.
    </p>
  </>
);

const tocSections = [
  { id: "does-it-work", label: "Does Showing Visitor Counts Increase Conversions?" },
  { id: "privacy-compliant", label: "How Does Privacy-Compliant Counting Work?" },
  { id: "where-to-display", label: "Where Should You Display Visitor Counts?" },
  { id: "customize-widget", label: "Can You Customize the Widget?" },
];

export default function VisitorCounter() {
  return (
    <ProductFeaturePage
      title="Visitor Counter"
      metaTitle="Visitor Counter – Show Live Visitors on Your Website"
      metaDescription="Display real-time visitor counts on your website to show popularity and create social proof. Increase engagement with NotiProof's live visitor counter widget."
      canonical="https://notiproof.com/product/visitor-counter-live-visitors/"
      headline="Show Live Visitor Counts to Build Social Proof"
      description="Display how many people are currently viewing your site or specific pages. Create a sense of popularity and urgency that drives conversions."
      descriptionContent={
        <p>Display how many people are currently viewing your site or specific pages. Combine with <Link to="/product/social-proof-notifications/">social proof notifications</Link> and <Link to="/product/recent-activity-notifications/">recent activity feeds</Link> for layered social proof. Learn about <Link to="/resources/website-trust/fomo-marketing-guide/">FOMO marketing strategies</Link>.</p>
      }
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
      deepDiveContent={deepDive}
      deepDiveToc={tocSections}
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
        { label: "FOMO Marketing Guide", href: "/resources/website-trust/fomo-marketing-guide/", context: "Learn how to use urgency ethically to drive conversions:" },
        { label: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", context: "See how visitor counters fit into a complete website social proof strategy:" },
      ]}
      comparisonLinks={[
        { label: "NotiProof vs Fomo", href: "/comparisons/notiproof-vs-fomo/" },
        { label: "NotiProof vs ProveSource", href: "/comparisons/notiproof-vs-provesource/" },
      ]}
    />
  );
}
