import { Star, RefreshCw, Search, Layers } from "lucide-react";
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
      withoutNotiproof={[
        "Great reviews are scattered across Google, Trustpilot, G2, and Yelp — visitors never see them all",
        "Manually copying reviews to your website is tedious and they go stale quickly",
        "No schema markup means no review stars appearing in Google search results",
        "Different platforms have different formats — there's no unified, professional display",
      ]}
      withNotiproof={[
        "Pull reviews from 15+ platforms into one beautiful, unified widget on your site",
        "Auto-sync means new reviews appear automatically — always fresh, always current",
        "Built-in JSON-LD schema gives you rich snippet stars in search results",
        "Curate and filter to showcase your best reviews in a consistent, branded format",
      ]}
      howItWorks={[
        { step: "Connect", desc: "Link your Google, Trustpilot, G2, and other review accounts to NotiProof." },
        { step: "Aggregate", desc: "Reviews are automatically pulled and organized into a unified dashboard." },
        { step: "Showcase", desc: "Display curated reviews in a beautiful widget on your website." },
      ]}
      featureDetails={[
        { icon: RefreshCw, title: "Auto-Sync", desc: "New reviews from connected platforms are pulled automatically on your schedule — daily, hourly, or in real-time." },
        { icon: Search, title: "Rich Snippets", desc: "JSON-LD structured data markup enables review stars to appear alongside your pages in Google search results." },
        { icon: Layers, title: "Multi-Platform Unified", desc: "Reviews from Google, Trustpilot, G2, Capterra, Yelp, Facebook, and more — all in one place." },
      ]}
      testimonial={{
        quote: "Aggregating our Google and G2 reviews on our homepage increased trust immediately. Our demo request rate jumped 27% in the first month.",
        name: "James Okonkwo",
        role: "Head of Growth, ProStack",
        metric: "+27% Demo Requests",
      }}
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
      resourceLinks={[
        { label: "Reviews Hub", href: "/resources/reviews/", context: "Learn everything about collecting, managing, and leveraging customer reviews:" },
        { label: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", context: "See how review aggregation fits into a complete website trust strategy:" },
      ]}
    />
  );
}
