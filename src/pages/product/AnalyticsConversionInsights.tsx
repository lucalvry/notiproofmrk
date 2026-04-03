import { BarChart3, TrendingUp, PieChart, FileText } from "lucide-react";
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
      withoutNotiproof={[
        "You have no idea whether your social proof is actually working",
        "No attribution means you can't justify the investment to stakeholders",
        "A/B testing is impossible without proper analytics infrastructure",
        "Optimization is guesswork — you can't improve what you don't measure",
      ]}
      withNotiproof={[
        "Track every impression, click, and conversion in real-time",
        "Revenue attribution shows exactly how much each notification earns",
        "Built-in A/B testing with statistical significance reporting",
        "Data-driven optimization: double down on what works, cut what doesn't",
      ]}
      howItWorks={[
        { step: "Track", desc: "NotiProof automatically tracks every impression, click, and conversion." },
        { step: "Analyze", desc: "View dashboards with real-time data on notification performance and conversion lift." },
        { step: "Optimize", desc: "Use insights to refine targeting, timing, and messaging for maximum ROI." },
      ]}
      featureDetails={[
        { icon: TrendingUp, title: "Conversion Lift", desc: "See the exact percentage increase in conversions attributable to NotiProof, measured against a control group." },
        { icon: PieChart, title: "Per-Notification Metrics", desc: "Drill into each notification type to see impressions, CTR, and conversion rates individually." },
        { icon: FileText, title: "Exportable Reports", desc: "Generate CSV reports for stakeholder presentations, client reporting, or deeper analysis in your BI tools." },
      ]}
      testimonial={{
        quote: "NotiProof's analytics showed us that purchase notifications drove 3.2x more conversions than review widgets. We reallocated our strategy and saw a 41% overall lift.",
        name: "Rachel Kim",
        role: "CRO Manager, GrowthLab",
        metric: "+41% Overall Lift",
      }}
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
      resourceLinks={[
        { label: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", context: "Analytics are essential to measuring your marketing ROI — read our guide on" },
        { label: "Conversion Analytics Hub", href: "/resources/conversion-analytics/", context: "Explore all our resources on measuring and optimizing conversion rates:" },
      ]}
    />
  );
}
