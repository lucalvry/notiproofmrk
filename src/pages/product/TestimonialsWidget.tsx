import { Layout, Star, Palette, Code } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";

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
        { label: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", context: "See real-world examples of how testimonial widgets drive conversions:" },
        { label: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", context: "Learn how to strategically place testimonials in your marketing funnel:" },
      ]}
    />
  );
}
