import { MessageSquare, Mail, ImageIcon, Video } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";

export default function TestimonialsCollection() {
  return (
    <ProductFeaturePage
      title="Testimonials Collection"
      metaTitle="Testimonials Collection – Text, Image & Video Customer Reviews"
      metaDescription="Collect customer testimonials in text, image, and video formats. Automate testimonial requests and build a powerful wall of social proof with NotiProof."
      canonical="https://notiproof.com/product/testimonials-collection-text-image-video/"
      headline="Collect Customer Testimonials Effortlessly"
      description="Gather text, image, and video testimonials from happy customers with automated collection workflows. Build trust at scale with genuine customer stories."
      icon={MessageSquare}
      benefits={[
        "Collect text, image, and video testimonials",
        "Automated email and link-based collection",
        "Customizable collection forms",
        "Approval workflow for quality control",
        "Embeddable testimonial wall",
        "Import existing reviews from other platforms",
      ]}
      withoutNotiproof={[
        "Collecting testimonials is manual, inconsistent, and time-consuming",
        "Customers forget or ignore one-off email requests for reviews",
        "No central place to store, organize, and manage testimonials",
        "You miss the window — the best time to collect is right after a positive experience",
      ]}
      withNotiproof={[
        "Automated workflows send collection requests at the perfect moment",
        "Multi-format collection: text, photo, and video in one frictionless form",
        "Central dashboard with approval workflow — curate the best stories",
        "Import existing Google, Trustpilot, and G2 reviews to consolidate everything",
      ]}
      howItWorks={[
        { step: "Request", desc: "Send automated testimonial requests via email or share a collection link with customers." },
        { step: "Collect", desc: "Customers submit text, upload images, or record video testimonials in seconds." },
        { step: "Showcase", desc: "Approve and display testimonials on a beautiful, embeddable wall on your website." },
      ]}
      featureDetails={[
        { icon: Mail, title: "Automated Outreach", desc: "Trigger collection emails after purchases, milestones, or support resolutions — when customers are happiest." },
        { icon: ImageIcon, title: "Multi-Format Collection", desc: "One form collects text, photos, and video. Customers choose the format that feels natural to them." },
        { icon: Video, title: "Video Testimonials", desc: "Browser-based video recording with guided prompts. No app downloads, no friction — just authentic stories." },
      ]}
      testimonial={{
        quote: "We went from 3 testimonials to 47 in the first month. The automated emails after purchase made all the difference.",
        name: "Sarah Mitchell",
        role: "Marketing Director, FreshBrew Co.",
        metric: "47 Testimonials in 30 Days",
      }}
      useCases={[
        { title: "E-commerce", desc: "Collect product reviews with photos.", href: "/use-cases/ecommerce/" },
        { title: "SaaS", desc: "Gather user success stories.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Agencies", desc: "Showcase client results.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
      faqs={[
        { q: "How do customers submit testimonials?", a: "You share a collection link or send automated emails. Customers fill out a simple form — no account needed." },
        { q: "Can I moderate testimonials before they go live?", a: "Yes. All testimonials go through an approval workflow. You control what gets published." },
        { q: "Can I import existing reviews?", a: "Yes. You can import reviews from Google, Trustpilot, G2, and other platforms." },
        { q: "Is video testimonial hosting included?", a: "Yes. Videos are hosted on our CDN and embedded directly on your testimonial wall." },
      ]}
      relatedProducts={[
        { label: "Video Recorder", href: "/product/video-testimonial-recorder/" },
        { label: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/" },
        { label: "Review Aggregation", href: "/product/review-aggregation-showcase-system/" },
      ]}
      resourceLinks={[
        { label: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/", context: "Testimonials are one of the most powerful types of social proof — learn about all the types:" },
        { label: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", context: "See real examples of how businesses use collected testimonials to drive conversions:" },
      ]}
    />
  );
}
