import { Bell } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";
export default function SocialProofNotificationsLanding() {
  return (
    <ProductFeaturePage title="Social Proof Notifications" metaTitle="Social Proof Notifications – Boost Conversions With Real-Time Alerts" metaDescription="Add social proof notifications to your website. Show real-time purchase alerts, signup activity, and visitor counts. Increase conversions by 10-35%." canonical="https://notiproof.com/social-proof-notifications/" headline="Social Proof Notifications That Increase Conversions by 10–35%" description="Display real-time purchase alerts, signup notifications, and visitor counts on your website. Build trust and urgency with authentic social proof." icon={Bell}
      benefits={["Real-time purchase & signup notifications", "Live visitor counter widget", "Customizable design & timing", "Smart targeting by URL, location, device", "A/B testing for optimization", "Works on any website in 60 seconds"]}
      howItWorks={[
        { step: "Install", desc: "One line of JavaScript. Works on Shopify, WordPress, Webflow, and any website." },
        { step: "Configure", desc: "Choose notification types, customize design, set targeting rules." },
        { step: "Convert", desc: "Watch real-time social proof drive 10-35% more conversions." },
      ]}
      useCases={[
        { title: "E-commerce", href: "/use-cases/ecommerce/", desc: "Purchase alerts & stock urgency." },
        { title: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/", desc: "Signup & trial activity." },
        { title: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/", desc: "Booking notifications." },
      ]}
      faqs={[
        { q: "What are social proof notifications?", a: "Small popup notifications that show real-time activity on your website — like purchases, signups, and reviews — to build trust and urgency." },
        { q: "Do they actually increase conversions?", a: "Yes. Our customers see an average conversion lift of 10-35%, depending on industry and implementation." },
        { q: "Is it hard to set up?", a: "No. Add one line of code to your website and configure everything in the dashboard. Takes under 60 seconds." },
        { q: "Is the data real?", a: "Yes. NotiProof connects to your real data sources — Shopify orders, Stripe payments, CRM events." },
      ]}
      relatedProducts={[
        { label: "Recent Activity", href: "/product/recent-activity-notifications/" },
        { label: "Visitor Counter", href: "/product/visitor-counter-live-visitors/" },
        { label: "All Features", href: "/product/" },
      ]}
    />
  );
}
