import { Activity, Clock, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import ProductFeaturePage from "@/components/ProductFeaturePage";
import StatCallout from "@/components/StatCallout";
import KeyTakeaway from "@/components/KeyTakeaway";

const deepDive = (
  <>
    <h2 id="activity-types">What Types of Activity Should You Display?</h2>
    <p>
      The most effective activity types depend on your business model. NotiProof supports any event your connected platforms generate, but the highest-converting types are:
    </p>
    <StatCallout stat="20% conversion lift" context="E-commerce sites showing recent purchase activity on product pages." />
    <p>
      <strong>Trial signups</strong> (SaaS): "A marketing team in London just started a free trial" builds credibility, especially on pricing pages. Average conversion lift: 16%.
    </p>
    <p>
      <strong>Reviews and ratings</strong> (all businesses): "John just left a 5-star review" combines activity proof with quality proof — effective on homepages and landing pages.
    </p>
    <p>
      <strong>Bookings and appointments</strong> (services): "A consultation was just booked for next Tuesday" shows active demand for professional services, healthcare practices, and consulting firms.
    </p>

    <h2 id="vs-notifications">How Is This Different From Social Proof Notifications?</h2>
    <p>
      <Link to="/product/social-proof-notifications/">Social proof notifications</Link> and recent activity notifications serve the same psychological purpose but differ in <strong>display format</strong> and <strong>information density</strong>.
    </p>
    <p>
      Social proof notifications display individual events as small pop-up alerts, one at a time. Recent activity notifications display a <strong>continuous feed</strong> — a scrolling stream of multiple events visible simultaneously, creating a stronger impression of volume.
    </p>
    <KeyTakeaway>
      Use individual pop-up notifications on product pages (focused proof) and continuous activity feeds on homepages (volume demonstration). Many top-performing sites use both together.
    </KeyTakeaway>

    <h2 id="timing-rotation">How Do You Configure Smart Timing and Rotation?</h2>
    <p>
      NotiProof's <strong>smart timing engine</strong> automatically adjusts rotation speed based on event volume. During high-activity periods, events rotate faster. During quiet periods, rotation slows to avoid showing the same events repeatedly.
    </p>
    <p>
      Manual controls are also available: display durations per event (default 4–8 seconds), transition animation style, queue size, and a deduplication engine. For lower-traffic sites, the time window setting pulls events from a longer lookback period.
    </p>

    <h2 id="privacy-anonymization">How Do You Handle Privacy and Anonymization?</h2>
    <p>
      NotiProof provides three levels of <strong>anonymization</strong>:
    </p>
    <p>
      <strong>Level 1 — First name + city:</strong> "Sarah from Austin just purchased..." — the most effective format (~20% conversion lift).
    </p>
    <p>
      <strong>Level 2 — Anonymous + city:</strong> "Someone from Austin just purchased..." — preferred for privacy-sensitive industries.
    </p>
    <StatCallout stat="~8% vs ~20% lift" context="Fully anonymous notifications vs. first name + city format. Personalization matters." />
    <p>
      <strong>Level 3 — Fully anonymous:</strong> "A customer just purchased..." — minimum privacy exposure but lower conversion impact.
    </p>
    <p>
      All settings are configurable per campaign in the <Link to="/product/campaign-builder/">Campaign Builder</Link>, complying with GDPR Article 6(1)(f).
    </p>
    <KeyTakeaway>
      "First name + city" delivers the highest conversion lift (20%) while remaining GDPR-compliant. Use fully anonymous only when strict privacy is required.
    </KeyTakeaway>
  </>
);

const tocSections = [
  { id: "activity-types", label: "What Types of Activity Should You Display?" },
  { id: "vs-notifications", label: "How Is This Different From Notifications?" },
  { id: "timing-rotation", label: "How Do You Configure Smart Timing?" },
  { id: "privacy-anonymization", label: "How Do You Handle Privacy?" },
];

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
      withoutNotiproof={[
        "Your website feels static — visitors can't tell if anyone else is using it",
        "No visible activity means no social validation for new visitors",
        "Customers question whether your business is active and trustworthy",
        "You miss the chance to turn real customer actions into trust signals",
      ]}
      withNotiproof={[
        "A continuous stream of real activity makes your site feel alive and busy",
        "Each activity event validates the visitor's interest in your product",
        "Privacy-compliant anonymization keeps customer data safe while showing proof",
        "Smart rotation keeps the feed fresh without overwhelming visitors",
      ]}
      deepDiveContent={deepDive}
      deepDiveToc={tocSections}
      howItWorks={[
        { step: "Connect", desc: "Link your data sources — Shopify, Stripe, CRM, or custom webhooks." },
        { step: "Configure", desc: "Choose which activity types to display and customize the notification design." },
        { step: "Engage", desc: "Recent activity notifications create social proof that drives more conversions." },
      ]}
      featureDetails={[
        { icon: Clock, title: "Smart Timing", desc: "Notifications rotate at optimized intervals to maintain attention without being intrusive or annoying." },
        { icon: Users, title: "Multi-Source Feed", desc: "Pull activity from Shopify, Stripe, CRMs, and webhooks into one unified, real-time feed." },
        { icon: Shield, title: "Privacy First", desc: "Anonymize customer names, show only first name and city, or use 'Someone from [City]' format." },
      ]}
      testimonial={{
        quote: "The activity feed made our SaaS landing page feel 10x more credible. Trial signups jumped 22% in the first month.",
        name: "David Park",
        role: "Growth Lead, CloudMetrics",
        metric: "+22% Trial Signups",
      }}
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
      resourceLinks={[
        { label: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/", context: "Activity feeds leverage multiple types of social proof simultaneously — learn about all the types:" },
        { label: "Social Proof Psychology", href: "/resources/social-proof/social-proof-psychology/", context: "Understand why seeing others' actions influences buying decisions:" },
        { label: "FOMO Marketing Guide", href: "/resources/website-trust/fomo-marketing-guide/", context: "Learn how activity feeds create ethical urgency:" },
      ]}
      comparisonLinks={[
        { label: "NotiProof vs Fomo", href: "/comparisons/notiproof-vs-fomo/" },
        { label: "NotiProof vs ProveSource", href: "/comparisons/notiproof-vs-provesource/" },
      ]}
    />
  );
}
