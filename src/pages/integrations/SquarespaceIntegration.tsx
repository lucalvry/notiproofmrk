import { Square } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function SquarespaceIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof for Squarespace – Social Proof for Squarespace Sites"
      metaDescription="Add real-time social proof notifications, testimonials, and reviews to your Squarespace website. One-line code injection. Increase trust and conversions."
      canonical="https://notiproof.com/integrations/squarespace/"
      name="Squarespace"
      icon={Square}
      headline="Elevate Your Squarespace Site With Social Proof"
      description="Show real-time purchase notifications, customer testimonials, and live visitor counts on your Squarespace website. Add one line of code — works with every template."
      benefits={[
        "Add via Squarespace Code Injection — takes 30 seconds",
        "Works with all Squarespace templates (7.0 and 7.1)",
        "Show real-time purchase and signup notifications",
        "Display testimonials and review widgets",
        "Live visitor counter on product and service pages",
        "Fully customizable design to match your brand",
        "Compatible with Squarespace Commerce",
        "No performance impact on your site",
      ]}
      setupSteps={[
        { step: "Copy Snippet", desc: "Get your NotiProof JavaScript embed code from the dashboard." },
        { step: "Inject Code", desc: "Go to Squarespace Settings → Advanced → Code Injection → Footer and paste the snippet." },
        { step: "Configure & Publish", desc: "Choose notification types, customize styling, set display rules, and save." },
      ]}
      features={[
        "Purchase and signup notifications",
        "Appointment booking alerts",
        "Live visitor counter",
        "Google review showcase widgets",
        "Testimonial display sections",
        "Portfolio page social proof",
        "Service page trust signals",
        "Mobile-responsive notifications",
        "Template-matching design system",
      ]}
      faqs={[
        { q: "How do I add NotiProof to Squarespace?", a: "Go to Settings → Advanced → Code Injection → Footer, and paste the NotiProof JavaScript snippet. That's it — no plugin or app needed." },
        { q: "Does it work with Squarespace Commerce?", a: "Yes. NotiProof can display purchase notifications, product review widgets, and visitor counts on Squarespace Commerce product pages." },
        { q: "Will NotiProof affect my Squarespace site speed?", a: "No. The script is under 15KB and loads asynchronously, ensuring no impact on your Squarespace performance scores." },
        { q: "Does it work with Squarespace 7.1?", a: "Yes. NotiProof is fully compatible with both Squarespace 7.0 and 7.1 templates, including Fluid Engine layouts." },
      ]}
      resourceLinks={[
        { label: "Building Website Credibility", href: "/resources/website-trust/building-website-credibility/", context: "Learn how to combine social proof with design elements to build instant credibility." },
        { label: "Testimonial Page Design", href: "/resources/testimonials/testimonial-page-design/", context: "Design a testimonial page on Squarespace that converts visitors into customers." },
      ]}
      relatedUseCases={[
        { label: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
        { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
      ]}
    />
  );
}
