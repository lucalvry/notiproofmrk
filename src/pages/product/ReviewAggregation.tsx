import { Star } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";

export default function ReviewAggregation() {
  return (
    <ProductFeaturePage
      title="Review Aggregation & Showcase System"
      metaTitle="Review Aggregation – Aggregate & Showcase Reviews From Anywhere"
      metaDescription="Pull reviews from Google, Trustpilot, G2, Capterra, and more into a unified showcase widget. Build trust with aggregated social proof from NotiProof."
      canonical="https://notiproof.com/product/review-aggregation-showcase-system/"
      headline="Aggregate and Showcase Reviews From Every Platform"
      description="Pull reviews from Google, Trustpilot, G2, Capterra, and more into one beautiful, unified showcase. Let your best reviews work harder for you."
      icon={Star}
      benefits={[
        "Aggregate reviews from 15+ platforms",
        "Unified review showcase widget",
        "Auto-sync new reviews",
        "Filter and curate the best reviews",
        "Rich snippet schema markup included",
        "Embeddable on any page",
      ]}
      howItWorks={[
        { step: "Connect", desc: "Link your Google, Trustpilot, G2, and other review accounts to NotiProof." },
        { step: "Aggregate", desc: "Reviews are automatically pulled and organized into a unified dashboard." },
        { step: "Showcase", desc: "Display curated reviews in a beautiful widget on your website." },
      ]}
      useCases={[
        { title: "E-commerce", desc: "Showcase product reviews from multiple marketplaces.", href: "/use-cases/ecommerce/" },
        { title: "SaaS", desc: "Display G2 and Capterra reviews on your website.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Local Business", desc: "Aggregate Google and Yelp reviews.", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
      ]}
      faqs={[
        { q: "Which platforms can I aggregate reviews from?", a: "Google, Trustpilot, G2, Capterra, Yelp, Facebook, Product Hunt, and more." },
        { q: "Do reviews sync automatically?", a: "Yes. New reviews are synced automatically. You can set the frequency." },
        { q: "Can I filter out negative reviews?", a: "You can curate which reviews appear in your showcase. All reviews are available in the dashboard." },
        { q: "Does it include schema markup?", a: "Yes. Review widgets include structured data for rich snippets in search results." },
      ]}
      relatedProducts={[
        { label: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/" },
        { label: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/" },
        { label: "Social Proof Notifications", href: "/product/social-proof-notifications/" },
      ]}
    />
  );
}
