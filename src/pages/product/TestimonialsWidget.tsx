import { Layout } from "lucide-react";
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
      howItWorks={[
        { step: "Collect", desc: "Gather testimonials through NotiProof or import from other platforms." },
        { step: "Design", desc: "Choose a display format and customize colors, fonts, and layout to match your brand." },
        { step: "Embed", desc: "Copy the embed code and paste it on any page — landing pages, homepages, or product pages." },
      ]}
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
    />
  );
}
