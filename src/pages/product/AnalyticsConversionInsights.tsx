import { BarChart3, TrendingUp, PieChart, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import ProductFeaturePage from "@/components/ProductFeaturePage";
import StatCallout from "@/components/StatCallout";
import KeyTakeaway from "@/components/KeyTakeaway";

const deepDive = (
  <>
    <h2 id="what-metrics">What Conversion Metrics Should You Track?</h2>
    <p>
      Effective social proof measurement requires tracking metrics at three levels: <strong>engagement</strong> (impressions and clicks), <strong>conversion</strong> (goal completions and conversion rate), and <strong>revenue</strong> (attributed revenue and ROI). Most social proof tools only track impressions and clicks. NotiProof tracks all three.
    </p>
    <p>
      <strong>Impressions</strong> measure how many times a notification was displayed. <strong>Click-through rate (CTR)</strong> measures the percentage of viewers who interacted. <strong>Conversion lift</strong> compares the conversion rate of visitors who saw notifications against a holdback control group — the most important metric because it isolates NotiProof's impact.
    </p>
    <KeyTakeaway>
      Track three levels: engagement (impressions/clicks), conversion (lift vs. control group), and revenue (attributed dollars and ROI). Don't stop at vanity metrics.
    </KeyTakeaway>

    <h2 id="conversion-lift">How Does Conversion Lift Measurement Work?</h2>
    <p>
      NotiProof uses a <strong>control group methodology</strong> to measure conversion lift accurately. A configurable percentage of visitors (typically 5–10%) are placed in a holdback group that sees no notifications. The conversion rate difference is your conversion lift.
    </p>
    <p>
      This approach is significantly more rigorous than simple before/after comparisons. NotiProof's methodology matches what companies like Google and Facebook use in their advertising effectiveness studies.
    </p>
    <StatCallout stat="95% confidence threshold" context="NotiProof displays statistical confidence levels so you know when results are significant." />
    <p>
      We recommend running measurement periods of at least 7 days and 1,000+ visitors in each group before drawing conclusions.
    </p>

    <h2 id="per-campaign">How Do Per-Campaign Analytics Help Optimization?</h2>
    <p>
      Aggregate metrics tell you whether NotiProof is working. Per-campaign analytics tell you <strong>which specific campaigns</strong> are working. NotiProof's dashboard breaks down every metric by campaign, notification type, page, device, and geographic region.
    </p>
    <p>
      Common insights: discovering that purchase alerts outperform signup notifications on product pages, finding that mobile conversion lift is lower (adjust mobile notification design), or identifying that notifications perform poorly on blog pages (restrict targeting to commercial pages).
    </p>
    <p>
      The <Link to="/product/campaign-builder/">Campaign Builder's A/B testing</Link> generates its own analytics — per-variant metrics with statistical significance indicators. Together, they form a continuous optimization loop.
    </p>
    <KeyTakeaway>
      Use per-campaign analytics to identify which notification types and pages drive the most conversions. Combine with A/B testing for continuous optimization.
    </KeyTakeaway>

    <h2 id="export-data">Can You Export Analytics Data?</h2>
    <p>
      Yes. NotiProof supports CSV export for all analytics data. For automated reporting, NotiProof's GA4 integration sends notification events directly to Google Analytics, where they appear alongside your other marketing channel data in a single unified view.
    </p>
  </>
);

const tocSections = [
  { id: "what-metrics", label: "What Conversion Metrics Should You Track?" },
  { id: "conversion-lift", label: "How Does Conversion Lift Measurement Work?" },
  { id: "per-campaign", label: "How Do Per-Campaign Analytics Help?" },
  { id: "export-data", label: "Can You Export Analytics Data?" },
];

export default function AnalyticsConversionInsights() {
  return (
    <ProductFeaturePage
      title="Analytics & Conversion Insights"
      metaTitle="Analytics & Conversion Insights – Track Social Proof ROI"
      metaDescription="Track notification impressions, clicks, and conversion lift with NotiProof's real-time analytics dashboard. Measure the ROI of your social proof strategy."
      canonical="https://notiproof.com/product/analytics-conversion-insights/"
      headline="Measure Your Social Proof ROI With Real-Time Analytics"
      description="Track impressions, clicks, conversion rates, and revenue lift with a comprehensive analytics dashboard. Know exactly how much revenue your social proof generates."
      descriptionContent={
        <p>Track impressions, clicks, conversion rates, and revenue lift with a comprehensive analytics dashboard. Optimize campaigns in the <Link to="/product/campaign-builder/">Campaign Builder</Link> and measure results across <Link to="/product/social-proof-notifications/">notifications</Link>, <Link to="/product/testimonials-widget-reviews-widget/">widgets</Link>, and more. See our <Link to="/resources/conversion-analytics/measuring-social-proof-roi/">social proof ROI guide</Link>.</p>
      }
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
      deepDiveContent={deepDive}
      deepDiveToc={tocSections}
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
        { label: "Measuring Social Proof ROI", href: "/resources/conversion-analytics/measuring-social-proof-roi/", context: "Learn exactly how to calculate the return on investment of your social proof strategy:" },
        { label: "Conversion Rate Benchmarks", href: "/resources/conversion-analytics/conversion-rate-benchmarks/", context: "Compare your performance against industry conversion rate benchmarks:" },
        { label: "Conversion Analytics Hub", href: "/resources/conversion-analytics/", context: "Explore all our resources on measuring and optimizing conversion rates:" },
      ]}
      comparisonLinks={[
        { label: "NotiProof vs Fomo", href: "/comparisons/notiproof-vs-fomo/" },
        { label: "NotiProof vs TrustPulse", href: "/comparisons/notiproof-vs-trustpulse/" },
      ]}
    />
  );
}
