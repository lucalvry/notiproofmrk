import { Building2, BarChart3, Users, Palette, FileText, Settings } from "lucide-react";
import UseCaseTemplate from "@/components/UseCaseTemplate";

export default function AgenciesUseCase() {
  return (
    <UseCaseTemplate
      metaTitle="Social Proof for Marketing Agencies – Impress Clients & Drive Results"
      metaDescription="Offer social proof as a premium CRO service for your agency clients. White-label NotiProof to deliver conversion rate optimization at scale."
      canonical="https://notiproof.com/use-cases/social-proof-for-marketing-agencies-impress-clients/"
      badge="Agencies"
      headline="Deliver Conversion Rate Optimization for Your Clients"
      description="Offer social proof as a premium CRO service. White-label NotiProof under your agency brand and deliver measurable conversion improvements for every client."
      icon={Building2}
      painPoints={[
        { title: "Proving ROI", desc: "Clients demand measurable results. Without clear attribution, it's hard to justify your services." },
        { title: "Scaling CRO Services", desc: "Manual conversion optimization doesn't scale. You need tools that work across all client sites." },
        { title: "Client Retention", desc: "Without ongoing value, clients churn. CRO services with visible results keep clients longer." },
      ]}
      solutions={[
        "White-label NotiProof under your agency brand — clients never see 'NotiProof'",
        "Multi-client dashboard lets you manage dozens of sites from one login",
        "Per-client analytics reports prove ROI with real conversion lift data",
        "A/B testing across clients builds a playbook of what works in each industry",
        "New recurring revenue stream: charge clients monthly for CRO services",
      ]}
      benefits={[
        "White-label under your agency brand",
        "Multi-client dashboard management",
        "Per-client analytics and reporting",
        "New revenue stream for your agency",
        "Works across all client platforms",
        "Client-facing conversion reports",
        "A/B testing for optimization",
        "Dedicated agency support",
      ]}
      stats={[
        { value: "35%", label: "Avg. Client Conversion Lift" },
        { value: "5x", label: "Service ROI" },
        { value: "92%", label: "Client Retention" },
        { value: "50+", label: "Agency Partners" },
      ]}
      notification={{ name: "Agency client", action: "saw 32% more", item: "conversions", time: "this week" }}
      featureHighlights={[
        { icon: Palette, title: "White-Label Branding", desc: "Remove NotiProof branding entirely. Your logo, your colors, your domain — clients see only your agency brand." },
        { icon: Users, title: "Multi-Client Dashboard", desc: "Manage all client sites from one login. Switch between accounts, deploy campaigns, and monitor results centrally." },
        { icon: FileText, title: "Client Reports", desc: "Generate beautiful, branded conversion reports showing impressions, clicks, and revenue lift per client." },
        { icon: BarChart3, title: "Cross-Client Analytics", desc: "Compare performance across clients to identify industry-specific patterns and best practices." },
        { icon: Settings, title: "Scalable Deployment", desc: "Deploy NotiProof across new client sites in minutes. Template campaigns for fast onboarding." },
      ]}
      testimonial={{
        quote: "NotiProof became our highest-margin CRO service. We charge clients $500/month and deliver 35%+ conversion lifts. The ROI reports sell themselves.",
        name: "Mark Stevens",
        role: "Founder, ConvertLab Agency",
        metric: "$500/mo Revenue Per Client",
      }}
      integrations={["White Label", "API", "Webhooks", "GA4", "WordPress", "Shopify", "HubSpot"]}
      faqs={[
        { q: "Can I white-label NotiProof?", a: "Yes. Remove NotiProof branding and replace it with your agency brand on Pro and Business plans." },
        { q: "How do I manage multiple clients?", a: "Our multi-site dashboard lets you manage all client accounts from one login." },
        { q: "Do you offer agency pricing?", a: "Yes. Contact us for volume-based agency pricing and partnership opportunities." },
        { q: "Can clients see their own analytics?", a: "Yes. Generate client-facing reports or give clients view-only access to their analytics." },
      ]}
      relatedUseCases={[
        { label: "E-commerce", href: "/use-cases/ecommerce/" },
        { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { label: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
      ]}
      resourceLinks={[
        { label: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", context: "Position social proof as a core CRO service — learn the marketing strategy behind it:" },
        { label: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", context: "Show clients real-world examples of social proof driving results across industries:" },
      ]}
    />
  );
}
