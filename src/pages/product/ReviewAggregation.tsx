import { Star, RefreshCw, Search, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import ProductFeaturePage from "@/components/ProductFeaturePage";
import StatCallout from "@/components/StatCallout";
import KeyTakeaway from "@/components/KeyTakeaway";

const deepDive = (
  <>
    <h2 id="which-platforms">Which Review Platforms Should You Aggregate?</h2>
    <p>
      The platforms you aggregate depend on your business type, but most businesses should prioritize three to five sources. For <strong>e-commerce</strong>, the critical platforms are Google Business Reviews, Amazon, Trustpilot, and your own on-site reviews. For <strong>SaaS</strong>, focus on G2, Capterra, Product Hunt, and Trustpilot. For <strong>local businesses</strong>, Google Business Profile and Yelp carry the most weight.
    </p>
    <p>
      NotiProof connects to 15+ review platforms including Google, Trustpilot, G2, Capterra, Yelp, Facebook, Product Hunt, Tripadvisor, Clutch, and more. Each connection syncs reviews automatically on your configured schedule.
    </p>
    <StatCallout stat="87% of consumers" context="Read online reviews for local businesses (BrightLocal 2024 Consumer Review Survey)." />
    <p>
      73% say they only pay attention to reviews written in the last month. This recency bias makes auto-sync critical — stale reviews on your website undermine trust rather than build it.
    </p>

    <h2 id="seo-impact">How Does Review Aggregation Improve SEO?</h2>
    <p>
      Review aggregation directly impacts search visibility through <strong>structured data markup</strong>. NotiProof's review widgets automatically include JSON-LD schema — the format Google recommends — which enables <strong>rich snippet stars</strong> to appear alongside your pages in search results.
    </p>
    <StatCallout stat="35% higher CTR" context="Pages with review rich snippet stars vs. plain listings (Search Engine Journal 2023)." />
    <p>
      Beyond rich snippets, aggregated reviews add unique, keyword-rich user-generated content to your pages. Each review contains natural language that customers use to describe your product — terms that align with how potential buyers search.
    </p>
    <p>
      NotiProof's schema implementation follows Google's <Link to="/resources/reviews/review-aggregation-guide/">review aggregation guidelines</Link> precisely: it includes aggregate rating, review count, individual review author names, dates, and text.
    </p>
    <KeyTakeaway>
      Review aggregation with proper JSON-LD schema earns rich snippet stars in Google (35% higher CTR) and adds keyword-rich UGC to your pages — a double SEO win.
    </KeyTakeaway>

    <h2 id="curate-display">How Do You Curate and Display Aggregated Reviews?</h2>
    <p>
      Not every review belongs on your homepage. NotiProof's curation tools let you filter reviews by star rating, platform, recency, keyword, and language. You can create curated collections — "Homepage Hero Reviews," "Product Page Reviews," or "Enterprise Social Proof."
    </p>
    <p>
      Display options include grid, carousel, masonry wall, list, and featured single-review formats. Each format is fully customizable. The widget renders responsively and can be embedded on any page with a single HTML snippet.
    </p>

    <h2 id="negative-reviews">What About Negative Reviews in the Aggregate?</h2>
    <p>
      Negative reviews are a natural part of any honest review profile, and research shows that a perfect 5.0 rating actually hurts credibility.
    </p>
    <StatCallout stat="4.0 – 4.7 rating sweet spot" context="Purchase probability peaks in this range — 5.0 triggers skepticism (Spiegel Research Center)." />
    <p>
      NotiProof lets you set a minimum star threshold for displayed reviews (e.g., show only 4-star and above), but we recommend including occasional 4-star reviews to maintain authenticity. Reviews below your threshold are still captured in the dashboard for monitoring sentiment.
    </p>
    <KeyTakeaway>
      Don't hide all negative reviews — a 4.0–4.7 range converts better than a perfect 5.0. Use NotiProof's threshold filter to show 4+ stars while monitoring everything in the dashboard.
    </KeyTakeaway>
  </>
);

const tocSections = [
  { id: "which-platforms", label: "Which Platforms Should You Aggregate?" },
  { id: "seo-impact", label: "How Does Aggregation Improve SEO?" },
  { id: "curate-display", label: "How Do You Curate and Display Reviews?" },
  { id: "negative-reviews", label: "What About Negative Reviews?" },
];

export default function ReviewAggregation() {
  return (
    <ProductFeaturePage
      title="Review Aggregation & Showcase System"
      metaTitle="Review Aggregation – Aggregate & Showcase Reviews From Anywhere"
      metaDescription="Pull reviews from Google, Trustpilot, G2, Capterra, and more into a unified showcase widget. Build trust with aggregated social proof from NotiProof."
      canonical="https://notiproof.com/product/review-aggregation-showcase-system/"
      headline="Aggregate and Showcase Reviews From Every Platform"
      description="Pull reviews from Google, Trustpilot, G2, Capterra, and more into one beautiful, unified showcase. Let your best reviews work harder for you."
      descriptionContent={
        <p>Pull reviews from Google, Trustpilot, G2, Capterra, and more into one beautiful, unified showcase. Display them in the <Link to="/product/testimonials-widget-reviews-widget/">testimonials & reviews widget</Link> and combine with <Link to="/product/social-proof-notifications/">social proof notifications</Link> for maximum impact. Read our <Link to="/resources/reviews/review-aggregation-guide/">review aggregation guide</Link>.</p>
      }
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
      deepDiveContent={deepDive}
      deepDiveToc={tocSections}
      howItWorks={[
        { step: "Connect", desc: "Link your Google, Trustpilot, G2, and other review accounts to NotiProof." },
        { step: "Aggregate", desc: "Reviews are automatically pulled and organized into a unified dashboard." },
        { step: "Showcase", desc: "Display curated reviews in a beautiful widget on your website." },
      ]}
      featureDetails={[
        { icon: RefreshCw, title: "Auto-Sync", desc: "New reviews from connected platforms are pulled automatically on your schedule — daily, hourly, or in real-time." },
        { icon: Search, title: "Rich Snippets", desc: "JSON-LD structured data markup enables review stars to appear alongside your pages in Google search results.", featured: true },
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
        { label: "Review Aggregation Guide", href: "/resources/reviews/review-aggregation-guide/", context: "Learn everything about combining reviews from multiple platforms:" },
        { label: "Reviews Hub", href: "/resources/reviews/", context: "Explore our complete guide to collecting, managing, and leveraging customer reviews:" },
        { label: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", context: "See how review aggregation fits into a complete website trust strategy:" },
      ]}
      comparisonLinks={[
        { label: "NotiProof vs Fomo", href: "/comparisons/notiproof-vs-fomo/" },
        { label: "NotiProof vs TrustPulse", href: "/comparisons/notiproof-vs-trustpulse/" },
        { label: "NotiProof vs ProveSource", href: "/comparisons/notiproof-vs-provesource/" },
      ]}
    />
  );
}
