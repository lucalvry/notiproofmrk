import { Layout, Star, Palette, Code } from "lucide-react";
import { Link } from "react-router-dom";
import ProductFeaturePage from "@/components/ProductFeaturePage";
import StatCallout from "@/components/StatCallout";
import KeyTakeaway from "@/components/KeyTakeaway";

const deepDive = (
  <>
    <h2 id="embed-widget">How Do You Embed a Testimonial Widget on Any Website?</h2>
    <p>
      NotiProof generates a single HTML embed snippet — a <code>&lt;script&gt;</code> tag and a <code>&lt;div&gt;</code> container — that you paste into any page's HTML. The script loads asynchronously, fetches your configured testimonials from NotiProof's CDN, and renders the widget. The entire process takes under 2 minutes.
    </p>
    <p>
      For <strong>WordPress</strong>, NotiProof's official plugin adds a Gutenberg block and shortcode. For <strong>Shopify</strong>, add the snippet to any Liquid template. For <strong>React, Next.js, or Vue</strong> applications, NotiProof provides a lightweight JavaScript SDK.
    </p>
    <p>
      Each widget is identified by a unique widget ID, so you can create multiple widgets with different testimonial collections for different pages.
    </p>

    <h2 id="display-formats">Which Display Format Converts Best?</h2>
    <p>
      NotiProof offers five display formats:
    </p>
    <StatCallout stat="3.2% avg. click-through rate" context="Carousel widget format — the most popular and highest-engagement format." />
    <p>
      <strong>Grid:</strong> Displays 3–6 testimonials in a responsive card grid. Ideal for dedicated testimonial sections on landing pages.
    </p>
    <p>
      <strong>Masonry wall:</strong> A Pinterest-style layout for <Link to="/resources/testimonials/testimonial-page-design/">dedicated testimonial pages</Link> where you want to showcase large volumes.
    </p>
    <p>
      <strong>List:</strong> Compact, vertical layout for sidebars and footers.
    </p>
    <p>
      <strong>Featured single:</strong> Highlights one testimonial with large typography — maximum impact on pricing or checkout pages.
    </p>
    <KeyTakeaway>
      Use carousels above the fold (3.2% CTR), grids for landing pages, masonry walls for testimonial pages, and featured singles on pricing/checkout pages.
    </KeyTakeaway>

    <h2 id="schema-seo">How Does Schema Markup Boost SEO for Testimonial Widgets?</h2>
    <p>
      NotiProof's testimonial widgets automatically include <strong>JSON-LD structured data</strong> following Schema.org's Review and AggregateRating types. This enables <strong>rich snippet stars</strong> in Google search results.
    </p>
    <StatCallout stat="35% higher CTR" context="Pages with review rich snippet stars vs. plain listings (Search Engine Journal 2023)." />
    <p>
      The structured data includes: aggregate rating, total review count, individual review text, author name, date published, and rating value — all generated automatically from your testimonial data. NotiProof also supports <strong>Product schema</strong> integration for e-commerce review markup.
    </p>

    <h2 id="video-in-widget">Can You Display Video Testimonials in the Widget?</h2>
    <p>
      Yes. Video testimonials from NotiProof's <Link to="/product/video-testimonial-recorder/">Video Testimonial Recorder</Link> play inline within the widget using adaptive bitrate streaming. Videos use <strong>lazy loading</strong> — the player doesn't initialize until the card enters the viewport.
    </p>
    <p>
      Auto-generated captions display as overlays during playback (WCAG 2.1 AA compliant). A key quote from the transcript is displayed as text alongside the video — providing social proof even for visitors who don't click play, plus indexable text for SEO.
    </p>
    <KeyTakeaway>
      Video testimonials in widgets are lazy-loaded for performance, auto-captioned for accessibility, and include text excerpts for SEO — a triple win.
    </KeyTakeaway>
  </>
);

const tocSections = [
  { id: "embed-widget", label: "How Do You Embed a Widget?" },
  { id: "display-formats", label: "Which Display Format Converts Best?" },
  { id: "schema-seo", label: "How Does Schema Markup Boost SEO?" },
  { id: "video-in-widget", label: "Can You Display Video Testimonials?" },
];

export default function TestimonialsWidget() {
  return (
    <ProductFeaturePage
      title="Testimonials & Reviews Widget"
      metaTitle="Testimonials Widget – Embeddable Reviews Widget for Any Website"
      metaDescription="Embed beautiful, customizable testimonial and review widgets on any page. Display customer reviews in grids, carousels, or walls with NotiProof."
      canonical="https://notiproof.com/product/testimonials-widget-reviews-widget/"
      headline="Beautiful, Embeddable Testimonial & Review Widgets"
      description="Display customer testimonials and reviews in stunning grids, carousels, or masonry walls. Customize every detail to match your brand and embed anywhere."
      icon={Layout}
      benefits={[
        "Multiple display formats: grid, carousel, wall, list",
        "Fully customizable design",
        "Star ratings and rich media support",
        "Responsive across all devices",
        "Schema markup for rich snippets",
        "Embed on any page with one code snippet",
      ]}
      withoutNotiproof={[
        "Customer reviews sit on third-party platforms where your visitors never see them",
        "Text-only testimonials feel generic and untrustworthy",
        "No structured data means no rich snippet stars in Google search results",
        "Building a custom testimonial display takes weeks of developer time",
      ]}
      withNotiproof={[
        "Aggregate and display reviews from everywhere — right on your own website",
        "Rich media widgets with photos, videos, and star ratings build deep credibility",
        "Automatic JSON-LD schema markup enables review stars in search results",
        "Embed a stunning widget in minutes with zero code — just copy and paste",
      ]}
      deepDiveContent={deepDive}
      deepDiveToc={tocSections}
      howItWorks={[
        { step: "Collect", desc: "Gather testimonials through NotiProof or import from other platforms." },
        { step: "Design", desc: "Choose a display format and customize colors, fonts, and layout to match your brand." },
        { step: "Embed", desc: "Copy the embed code and paste it on any page — landing pages, homepages, or product pages." },
      ]}
      featureDetails={[
        { icon: Star, title: "Rich Snippet Schema", desc: "Automatic JSON-LD markup gives your reviews a chance to appear as star ratings in Google search results." },
        { icon: Palette, title: "Total Design Control", desc: "Customize every visual element — colors, fonts, card styles, layouts — to perfectly match your brand identity." },
        { icon: Code, title: "One-Line Embed", desc: "Copy a single embed snippet and paste it anywhere. Works on WordPress, Shopify, Webflow, and custom sites." },
      ]}
      testimonial={{
        quote: "The testimonial wall on our homepage increased our demo request rate by 24%. It's the first thing visitors see and it builds instant trust.",
        name: "Michael Torres",
        role: "VP of Marketing, DataSync",
        metric: "+24% Demo Requests",
      }}
      useCases={[
        { title: "E-commerce", desc: "Show product reviews on product pages.", href: "/use-cases/ecommerce/" },
        { title: "SaaS", desc: "Display user testimonials on landing pages.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Agencies", desc: "Showcase client results on case study pages.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
      faqs={[
        { q: "What display formats are available?", a: "Grid, carousel, masonry wall, list, and featured single testimonial. Each is fully customizable." },
        { q: "Can I embed the widget on any platform?", a: "Yes. The widget works on any website — WordPress, Shopify, Webflow, Squarespace, custom HTML, and more." },
        { q: "Does the widget include schema markup?", a: "Yes. Review widgets include JSON-LD schema for rich snippet eligibility in Google search." },
        { q: "Can I use video testimonials in the widget?", a: "Yes. Video testimonials play inline within the widget with optimized loading." },
      ]}
      relatedProducts={[
        { label: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/" },
        { label: "Video Testimonial Recorder", href: "/product/video-testimonial-recorder/" },
        { label: "Review Aggregation", href: "/product/review-aggregation-showcase-system/" },
      ]}
      resourceLinks={[
        { label: "Testimonial Page Design", href: "/resources/testimonials/testimonial-page-design/", context: "Learn how to design a testimonial page that maximizes trust and conversions:" },
        { label: "Review Widgets for Websites", href: "/resources/reviews/review-widgets-for-websites/", context: "Compare the best review widget options for your website:" },
        { label: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", context: "See real-world examples of how testimonial widgets drive conversions:" },
      ]}
    />
  );
}
