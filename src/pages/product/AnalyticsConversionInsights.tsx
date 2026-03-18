import { BarChart3 } from "lucide-react";
import ProductFeaturePage from "@/components/ProductFeaturePage";

export default function AnalyticsConversionInsights() {
  return (
    <ProductFeaturePage
      title="Analytics & Conversion Insights"
      metaTitle="Analytics & Conversion Insights – Track Social Proof ROI"
      metaDescription="Track notification impressions, clicks, and conversion lift with NotiProof's real-time analytics dashboard. Measure the ROI of your social proof strategy."
      canonical="https://notiproof.com/product/analytics-conversion-insights/"
      headline="Measure Your Social Proof ROI With Real-Time Analytics"
      description="Track impressions, clicks, conversion rates, and revenue lift with a comprehensive analytics dashboard. Know exactly how much revenue your social proof generates."
      icon={BarChart3}
      benefits={[
        "Real-time impression and click tracking",
        "Conversion lift measurement",
        "Revenue attribution reporting",
        "Per-notification performance metrics",
        "A/B test result analysis",
        "Export reports as CSV",
      ]}
      howItWorks={[
        { step: "Track", desc: "NotiProof automatically tracks every impression, click, and conversion." },
        { step: "Analyze", desc: "View dashboards with real-time data on notification performance and conversion lift." },
        { step: "Optimize", desc: "Use insights to refine targeting, timing, and messaging for maximum ROI." },
      ]}
      useCases={[
        { title: "E-commerce", desc: "Track how notifications impact cart conversions.", href: "/use-cases/ecommerce/" },
        { title: "SaaS", desc: "Measure social proof's effect on trial signups.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Agencies", desc: "Provide clients with conversion reports.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
      faqs={[
        { q: "What metrics are tracked?", a: "Impressions, clicks, click-through rate, conversions, conversion lift, and revenue attribution." },
        { q: "Is the data real-time?", a: "Yes. Analytics update in real-time so you can monitor performance as it happens." },
        { q: "Can I export analytics data?", a: "Yes. Export data as CSV for further analysis or reporting." },
        { q: "Which plans include analytics?", a: "The analytics dashboard is available on Standard, Pro, and Business plans." },
      ]}
      relatedProducts={[
        { label: "Campaign Builder", href: "/product/campaign-builder/" },
        { label: "Social Proof Notifications", href: "/product/social-proof-notifications/" },
        { label: "Integrations", href: "/product/integrations-ecosystem/" },
      ]}
    />
  );
}
