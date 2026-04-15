import { Paintbrush } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function FramerIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof for Framer – Social Proof for Framer Websites"
      metaDescription="Add real-time social proof notifications, testimonials, and visitor counts to your Framer site. Simple embed code. No custom code required."
      canonical="https://notiproof.com/integrations/framer/"
      name="Framer"
      icon={Paintbrush}
      headline="Add Social Proof to Your Framer Website"
      description="Display real-time notifications, testimonials, and live visitor counts on your Framer site. Paste one embed code — works with every Framer template and component."
      benefits={[
        "Add via Framer's custom code embed",
        "Works with all Framer templates and layouts",
        "Show real-time signup and activity notifications",
        "Display testimonial widgets on any page",
        "Live visitor counter for landing pages",
        "Design-first notifications match Framer aesthetics",
        "Zero impact on Framer site performance",
        "Works with Framer CMS collections",
      ]}
      setupSteps={[
        { step: "Copy Snippet", desc: "Get your NotiProof embed code from the dashboard — a single JavaScript snippet." },
        { step: "Add to Framer", desc: "Go to Framer Site Settings → Custom Code → End of <body> tag and paste the snippet." },
        { step: "Design & Launch", desc: "Customize notification styling to match your Framer design system and publish." },
      ]}
      features={[
        "Signup notification popups",
        "Real-time activity alerts",
        "Live visitor counter",
        "Testimonial showcase widgets",
        "Video testimonial embeds",
        "Review aggregation displays",
        "Landing page trust signals",
        "Animation-matched notifications",
        "Dark mode support",
      ]}
      faqs={[
        { q: "How do I add NotiProof to Framer?", a: "Go to your Framer project's Site Settings → Custom Code → End of <body> tag and paste the NotiProof JavaScript snippet." },
        { q: "Does it work with Framer's CMS?", a: "Yes. NotiProof works independently of Framer's CMS — it loads via a script tag and doesn't interfere with CMS collections." },
        { q: "Will NotiProof affect my Framer site's animations?", a: "No. NotiProof renders in its own layer and won't interfere with Framer's animations or transitions." },
        { q: "Can I match NotiProof's style to my Framer design?", a: "Yes. Full customization of colors, fonts, border radius, shadows, and animations to match your Framer design system." },
      ]}
      resourceLinks={[
        { label: "Social Proof for Landing Pages", href: "/resources/social-proof/social-proof-for-landing-pages/", context: "Optimize social proof placement on Framer landing pages." },
        { label: "CTA Optimization Guide", href: "/resources/cro/cta-optimization/", context: "Combine social proof with high-converting CTAs on your Framer site." },
      ]}
      relatedUseCases={[
        { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { label: "Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
    />
  );
}
