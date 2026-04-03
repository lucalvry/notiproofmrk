import { Video, Mic, Globe, Sparkles } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";

export default function VideoTestimonialRecorder() {
  return (
    <ProductFeaturePage
      title="Video Testimonial Recorder"
      metaTitle="Video Testimonial Recorder – Record Customer Video Reviews"
      metaDescription="Let customers record video testimonials directly from their browser. No app downloads, no friction. Capture authentic video social proof with NotiProof."
      canonical="https://notiproof.com/product/video-testimonial-recorder/"
      headline="Capture Authentic Video Testimonials in Minutes"
      description="Let customers record video reviews directly from their browser. No app downloads, no complicated setup. Just authentic social proof from real customers."
      icon={Video}
      benefits={[
        "Browser-based recording — no app needed",
        "Guided recording prompts for better responses",
        "Automatic transcription and captions",
        "CDN-hosted video delivery",
        "Embeddable video testimonial wall",
        "Mobile-friendly recording experience",
      ]}
      withoutNotiproof={[
        "Asking customers to download an app or use Zoom for a testimonial kills response rates",
        "Unguided recordings ramble — customers don't know what to say",
        "Hosting and embedding video is a technical headache",
        "No transcription means inaccessible content and no SEO value",
      ]}
      withNotiproof={[
        "One-click browser recording — customers just open a link and talk",
        "Guided prompts produce focused, compelling stories every time",
        "Automatic CDN hosting with embeddable widgets — no technical work",
        "Auto-generated captions and transcriptions for accessibility and SEO",
      ]}
      howItWorks={[
        { step: "Invite", desc: "Send customers a recording link via email or embed it on a thank-you page." },
        { step: "Record", desc: "Customers record directly in their browser with guided prompts to help them share their story." },
        { step: "Publish", desc: "Review, approve, and publish video testimonials on your website with one click." },
      ]}
      featureDetails={[
        { icon: Mic, title: "Guided Prompts", desc: "Pre-written questions guide customers through their story — producing focused, compelling testimonials every time." },
        { icon: Globe, title: "Global CDN Hosting", desc: "Videos are hosted on a worldwide CDN for instant playback anywhere, with adaptive quality streaming." },
        { icon: Sparkles, title: "Auto Transcription", desc: "AI-powered transcription generates captions automatically — improving accessibility and adding SEO value." },
      ]}
      testimonial={{
        quote: "Video testimonials converted 4x better than text for us. NotiProof made it easy for customers to record — we got 12 videos in the first week.",
        name: "Alex Rivera",
        role: "Founder, LearnStack Academy",
        metric: "4x Higher Conversion vs Text",
      }}
      useCases={[
        { title: "SaaS Products", desc: "Capture user success stories.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Course Creators", desc: "Show student transformation stories.", href: "/use-cases/" },
        { title: "Agencies", desc: "Collect client video reviews.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
      faqs={[
        { q: "Do customers need to install anything?", a: "No. Recording works entirely in the browser — desktop and mobile." },
        { q: "What video quality is supported?", a: "Videos are recorded in HD (720p or 1080p) depending on the customer's camera." },
        { q: "Can I add my branding to the recorder?", a: "Yes. Customize the recording page with your logo, colors, and guided prompts." },
        { q: "Where are videos hosted?", a: "Videos are hosted on our global CDN for fast, reliable playback anywhere in the world." },
      ]}
      relatedProducts={[
        { label: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/" },
        { label: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/" },
        { label: "Review Aggregation", href: "/product/review-aggregation-showcase-system/" },
      ]}
      resourceLinks={[
        { label: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", context: "See how video testimonials outperform text in real-world conversion examples:" },
        { label: "Testimonials Resources", href: "/resources/testimonials/", context: "Explore our complete guide to collecting and leveraging customer testimonials:" },
      ]}
    />
  );
}
