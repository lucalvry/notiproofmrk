import { GraduationCap } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function KajabiIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof for Kajabi – Social Proof for Course Creators"
      metaDescription="Add real-time enrollment notifications, student testimonials, and visitor counts to your Kajabi site. Increase course sales with proven social proof."
      canonical="https://notiproof.com/integrations/kajabi/"
      name="Kajabi"
      icon={GraduationCap}
      headline="Increase Kajabi Course Sales With Social Proof"
      description="Display real-time enrollment notifications, student testimonials, and live visitor counts on your Kajabi website. Show potential students that others are actively enrolling to create urgency and trust."
      benefits={[
        "Show real-time course enrollment notifications",
        "Display student video testimonials",
        "Live viewer count on course sales pages",
        "Works on Kajabi websites, landing pages, and checkout",
        "Collect and showcase student success stories",
        "Simple code injection setup — no Kajabi app needed",
        "Mobile-responsive on all Kajabi themes",
        "Revenue attribution per course and offer",
      ]}
      setupSteps={[
        { step: "Add Tracking Code", desc: "Paste the NotiProof snippet into Kajabi Settings → Site Details → Header Tracking Code." },
        { step: "Connect Events", desc: "Use Kajabi webhooks or Zapier to send enrollment and purchase events to NotiProof." },
        { step: "Customize & Sell", desc: "Choose notification templates, configure display rules per page, and start boosting course sales." },
      ]}
      features={[
        "Course enrollment notifications",
        "Membership signup alerts",
        "Student testimonial widgets",
        "Video testimonial showcases",
        "Live visitor counter",
        "Coaching program signup alerts",
        "Digital product purchase popups",
        "Checkout page trust signals",
        "Offer-specific campaign targeting",
      ]}
      faqs={[
        { q: "How do I install NotiProof on Kajabi?", a: "Go to Kajabi Settings → Site Details → Header Tracking Code and paste the NotiProof JavaScript snippet. Connect events via webhooks or Zapier." },
        { q: "Can I show real enrollment data?", a: "Yes. Connect Kajabi enrollment events via webhooks and NotiProof will display real student signups as live notifications." },
        { q: "Does it work with Kajabi's checkout pages?", a: "Yes. NotiProof displays on Kajabi checkout pages to show enrollment activity and trust signals right where purchase decisions happen." },
        { q: "Can I collect student testimonials through NotiProof?", a: "Yes. Use NotiProof's testimonial collection forms and video recorder to gather student success stories and display them on your Kajabi site." },
      ]}
      resourceLinks={[
        { label: "How to Collect Testimonials", href: "/resources/testimonials/how-to-collect-testimonials/", context: "Build a system for collecting student testimonials that drive more Kajabi enrollments." },
        { label: "FOMO Marketing Guide", href: "/resources/website-trust/fomo-marketing-guide/", context: "Use ethical urgency tactics alongside enrollment notifications on your Kajabi sales pages." },
      ]}
      relatedUseCases={[
        { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { label: "E-commerce", href: "/use-cases/ecommerce/" },
      ]}
    />
  );
}
