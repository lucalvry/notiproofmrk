import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, HelmetServerState } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { staticRoutes } from "./routes-manifest";

// Eagerly import all pages for prerendering (no lazy loading in SSR)
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Integrations from "./pages/Integrations";
import UseCases from "./pages/UseCases";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import ProductHub from "./pages/product/ProductHub";
import SocialProofNotifications from "./pages/product/SocialProofNotifications";
import TestimonialsCollection from "./pages/product/TestimonialsCollection";
import VideoTestimonialRecorder from "./pages/product/VideoTestimonialRecorder";
import ReviewAggregation from "./pages/product/ReviewAggregation";
import CampaignBuilder from "./pages/product/CampaignBuilder";
import IntegrationsEcosystem from "./pages/product/IntegrationsEcosystem";
import AnalyticsConversionInsights from "./pages/product/AnalyticsConversionInsights";
import VisitorCounter from "./pages/product/VisitorCounter";
import RecentActivityNotifications from "./pages/product/RecentActivityNotifications";
import TestimonialsWidget from "./pages/product/TestimonialsWidget";
import EcommerceUseCase from "./pages/use-cases/Ecommerce";
import SaaSUseCase from "./pages/use-cases/SaaS";
import AgenciesUseCase from "./pages/use-cases/Agencies";
import LocalBusinessUseCase from "./pages/use-cases/LocalBusiness";
import ShopifyIntegration from "./pages/integrations/ShopifyIntegration";
import WordPressIntegration from "./pages/integrations/WordPressIntegration";
import ZapierIntegration from "./pages/integrations/ZapierIntegration";
import CompanyHub from "./pages/company/CompanyHub";
import About from "./pages/company/About";
import Contact from "./pages/company/Contact";
import Careers from "./pages/company/Careers";
import ResourcesHub from "./pages/resources/ResourcesHub";
import Blog from "./pages/resources/Blog";
import GuidesHub from "./pages/resources/GuidesHub";
import SocialProofPillar from "./pages/resources/social-proof/SocialProofPillar";
import WhatIsSocialProof from "./pages/resources/social-proof/WhatIsSocialProof";
import SocialProofExamples from "./pages/resources/social-proof/SocialProofExamples";
import SocialProofInMarketing from "./pages/resources/social-proof/SocialProofInMarketing";
import SocialProofForWebsites from "./pages/resources/social-proof/SocialProofForWebsites";
import TypesOfSocialProof from "./pages/resources/social-proof/TypesOfSocialProof";
import SocialProofPsychology from "./pages/resources/social-proof/SocialProofPsychology";
import ReviewsPillar from "./pages/resources/reviews/ReviewsPillar";
import HowToCollectGoogleReviews from "./pages/resources/reviews/HowToCollectGoogleReviews";
import ReviewAggregationGuide from "./pages/resources/reviews/ReviewAggregationGuide";
import RespondingToNegativeReviews from "./pages/resources/reviews/RespondingToNegativeReviews";
import ReviewWidgetsForWebsites from "./pages/resources/reviews/ReviewWidgetsForWebsites";
import TestimonialsPillar from "./pages/resources/testimonials/TestimonialsPillar";
import HowToCollectTestimonials from "./pages/resources/testimonials/HowToCollectTestimonials";
import VideoTestimonialGuide from "./pages/resources/testimonials/VideoTestimonialGuide";
import TestimonialPageDesign from "./pages/resources/testimonials/TestimonialPageDesign";
import TestimonialRequestEmailTemplates from "./pages/resources/testimonials/TestimonialRequestEmailTemplates";
import ConversionAnalyticsPillar from "./pages/resources/conversion-analytics/ConversionAnalyticsPillar";
import ABTestingSocialProof from "./pages/resources/conversion-analytics/ABTestingSocialProof";
import ConversionRateBenchmarks from "./pages/resources/conversion-analytics/ConversionRateBenchmarks";
import MeasuringSocialProofROI from "./pages/resources/conversion-analytics/MeasuringSocialProofROI";
import HeatmapAnalyticsGuide from "./pages/resources/conversion-analytics/HeatmapAnalyticsGuide";
import WebsiteTrustPillar from "./pages/resources/website-trust/WebsiteTrustPillar";
import TrustSignalsForEcommerce from "./pages/resources/website-trust/TrustSignalsForEcommerce";
import TrustBadgesGuide from "./pages/resources/website-trust/TrustBadgesGuide";
import BuildingWebsiteCredibility from "./pages/resources/website-trust/BuildingWebsiteCredibility";
import FOMOMarketingGuide from "./pages/resources/website-trust/FOMOMarketingGuide";
import HelpCenter from "./pages/resources/HelpCenter";
import Glossary from "./pages/resources/Glossary";

import ComparisonsHub from "./pages/comparisons/ComparisonsHub";
import NotiProofVsFomo from "./pages/comparisons/NotiProofVsFomo";
import NotiProofVsTrustPulse from "./pages/comparisons/NotiProofVsTrustPulse";
import NotiProofVsProof from "./pages/comparisons/NotiProofVsProof";
import NotiProofVsProveSource from "./pages/comparisons/NotiProofVsProveSource";
import BestFomoAlternatives from "./pages/comparisons/BestFomoAlternatives";
import BestTrustPulseAlternatives from "./pages/comparisons/BestTrustPulseAlternatives";
import BestProveSourceAlternatives from "./pages/comparisons/BestProveSourceAlternatives";
import SocialProofPricingComparison from "./pages/comparisons/SocialProofPricingComparison";
import CaseStudiesHub from "./pages/case-studies/CaseStudiesHub";
import EcommerceCaseStudy from "./pages/case-studies/EcommerceCaseStudy";
import SaaSCaseStudy from "./pages/case-studies/SaaSCaseStudy";
import FreeToolsHub from "./pages/tools/FreeToolsHub";
import ABTestCalculator from "./pages/tools/ABTestCalculator";
import SocialProofROICalculator from "./pages/tools/SocialProofROICalculator";
import GoogleReviewLinkGenerator from "./pages/tools/GoogleReviewLinkGenerator";
import TestimonialEmailGenerator from "./pages/tools/TestimonialEmailGenerator";
import WebsiteTrustScoreChecker from "./pages/tools/WebsiteTrustScoreChecker";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function AppShell({ url }: { url: string }) {
  const queryClient = new QueryClient();
  const helmetContext = {} as { helmet: HelmetServerState };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/pricing/" element={<Pricing />} />
                <Route path="/integrations/" element={<Integrations />} />
                <Route path="/use-cases/" element={<UseCases />} />
                <Route path="/testimonials/" element={<Testimonials />} />

                <Route path="/product/" element={<ProductHub />} />
                <Route path="/product/social-proof-notifications/" element={<SocialProofNotifications />} />
                <Route path="/product/testimonials-collection-text-image-video/" element={<TestimonialsCollection />} />
                <Route path="/product/video-testimonial-recorder/" element={<VideoTestimonialRecorder />} />
                <Route path="/product/review-aggregation-showcase-system/" element={<ReviewAggregation />} />
                <Route path="/product/campaign-builder/" element={<CampaignBuilder />} />
                <Route path="/product/integrations-ecosystem/" element={<IntegrationsEcosystem />} />
                <Route path="/product/analytics-conversion-insights/" element={<AnalyticsConversionInsights />} />
                <Route path="/product/visitor-counter-live-visitors/" element={<VisitorCounter />} />
                <Route path="/product/recent-activity-notifications/" element={<RecentActivityNotifications />} />
                <Route path="/product/testimonials-widget-reviews-widget/" element={<TestimonialsWidget />} />

                <Route path="/use-cases/ecommerce/" element={<EcommerceUseCase />} />
                <Route path="/use-cases/saas-social-proof-tools-drive-sign-ups/" element={<SaaSUseCase />} />
                <Route path="/use-cases/social-proof-for-marketing-agencies-impress-clients/" element={<AgenciesUseCase />} />
                <Route path="/use-cases/local-business-social-proof-convert-website-visitors/" element={<LocalBusinessUseCase />} />

                <Route path="/integrations/shopify/" element={<ShopifyIntegration />} />
                <Route path="/integrations/wordpress/" element={<WordPressIntegration />} />
                <Route path="/integrations/zapier/" element={<ZapierIntegration />} />

                <Route path="/company/" element={<CompanyHub />} />
                <Route path="/company/about/" element={<About />} />
                <Route path="/company/contact/" element={<Contact />} />
                <Route path="/company/careers/" element={<Careers />} />

                <Route path="/resources/" element={<ResourcesHub />} />
                <Route path="/resources/blog/" element={<Blog />} />
                <Route path="/resources/guides/" element={<GuidesHub />} />
                <Route path="/resources/social-proof/" element={<SocialProofPillar />} />
                <Route path="/resources/social-proof/what-is-social-proof/" element={<WhatIsSocialProof />} />
                <Route path="/resources/social-proof/social-proof-example/" element={<SocialProofExamples />} />
                <Route path="/resources/social-proof/social-proof-in-marketing/" element={<SocialProofInMarketing />} />
                <Route path="/resources/social-proof/social-proof-for-websites/" element={<SocialProofForWebsites />} />
                <Route path="/resources/social-proof/types-of-social-proof/" element={<TypesOfSocialProof />} />
                <Route path="/resources/social-proof/social-proof-psychology/" element={<SocialProofPsychology />} />

                <Route path="/resources/reviews/" element={<ReviewsPillar />} />
                <Route path="/resources/reviews/how-to-collect-google-reviews/" element={<HowToCollectGoogleReviews />} />
                <Route path="/resources/reviews/review-aggregation-guide/" element={<ReviewAggregationGuide />} />
                <Route path="/resources/reviews/responding-to-negative-reviews/" element={<RespondingToNegativeReviews />} />
                <Route path="/resources/reviews/review-widgets-for-websites/" element={<ReviewWidgetsForWebsites />} />

                <Route path="/resources/testimonials/" element={<TestimonialsPillar />} />
                <Route path="/resources/testimonials/how-to-collect-testimonials/" element={<HowToCollectTestimonials />} />
                <Route path="/resources/testimonials/video-testimonial-guide/" element={<VideoTestimonialGuide />} />
                <Route path="/resources/testimonials/testimonial-page-design/" element={<TestimonialPageDesign />} />
                <Route path="/resources/testimonials/testimonial-request-email-templates/" element={<TestimonialRequestEmailTemplates />} />

                <Route path="/resources/conversion-analytics/" element={<ConversionAnalyticsPillar />} />
                <Route path="/resources/conversion-analytics/ab-testing-social-proof/" element={<ABTestingSocialProof />} />
                <Route path="/resources/conversion-analytics/conversion-rate-benchmarks/" element={<ConversionRateBenchmarks />} />
                <Route path="/resources/conversion-analytics/measuring-social-proof-roi/" element={<MeasuringSocialProofROI />} />
                <Route path="/resources/conversion-analytics/heatmap-analytics-guide/" element={<HeatmapAnalyticsGuide />} />

                <Route path="/resources/website-trust/" element={<WebsiteTrustPillar />} />
                <Route path="/resources/website-trust/trust-signals-for-ecommerce/" element={<TrustSignalsForEcommerce />} />
                <Route path="/resources/website-trust/trust-badges-guide/" element={<TrustBadgesGuide />} />
                <Route path="/resources/website-trust/building-website-credibility/" element={<BuildingWebsiteCredibility />} />
                <Route path="/resources/website-trust/fomo-marketing-guide/" element={<FOMOMarketingGuide />} />

                <Route path="/resources/help-center/" element={<HelpCenter />} />
                <Route path="/resources/glossary/" element={<Glossary />} />

                <Route path="/social-proof-notifications/" element={<Navigate to="/product/social-proof-notifications/" replace />} />

                <Route path="/comparisons/" element={<ComparisonsHub />} />
                <Route path="/comparisons/notiproof-vs-fomo/" element={<NotiProofVsFomo />} />
                <Route path="/comparisons/notiproof-vs-trustpulse/" element={<NotiProofVsTrustPulse />} />
                <Route path="/comparisons/notiproof-vs-proof/" element={<NotiProofVsProof />} />
                <Route path="/comparisons/notiproof-vs-provesource/" element={<NotiProofVsProveSource />} />
                <Route path="/comparisons/best-fomo-alternatives/" element={<BestFomoAlternatives />} />
                <Route path="/comparisons/best-trustpulse-alternatives/" element={<BestTrustPulseAlternatives />} />
                <Route path="/comparisons/best-provesource-alternatives/" element={<BestProveSourceAlternatives />} />
                <Route path="/comparisons/social-proof-pricing-comparison/" element={<SocialProofPricingComparison />} />

                <Route path="/case-studies/" element={<CaseStudiesHub />} />
                <Route path="/case-studies/ecommerce-stylehaven/" element={<EcommerceCaseStudy />} />
                <Route path="/case-studies/saas-conversion/" element={<SaaSCaseStudy />} />

                <Route path="/free-tools/" element={<FreeToolsHub />} />
                <Route path="/free-tools/ab-test-calculator/" element={<ABTestCalculator />} />
                <Route path="/free-tools/social-proof-roi-calculator/" element={<SocialProofROICalculator />} />
                <Route path="/free-tools/google-review-link-generator/" element={<GoogleReviewLinkGenerator />} />
                <Route path="/free-tools/testimonial-email-generator/" element={<TestimonialEmailGenerator />} />
                <Route path="/free-tools/website-trust-score-checker/" element={<WebsiteTrustScoreChecker />} />

                <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service/" element={<TermsOfService />} />

                <Route path="/home/" element={<Navigate to="/" replace />} />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </StaticRouter>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export async function prerender() {
  return staticRoutes.map((url) => {
    const helmetContext: { helmet?: HelmetServerState } = {};

    const html = renderToString(
      <QueryClientProvider client={new QueryClient()}>
        <TooltipProvider>
          <HelmetProvider context={helmetContext}>
            <StaticRouter location={url}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Index />} />
                  <Route path="/pricing/" element={<Pricing />} />
                  <Route path="/integrations/" element={<Integrations />} />
                  <Route path="/use-cases/" element={<UseCases />} />
                  <Route path="/testimonials/" element={<Testimonials />} />
                  <Route path="/product/" element={<ProductHub />} />
                  <Route path="/product/social-proof-notifications/" element={<SocialProofNotifications />} />
                  <Route path="/product/testimonials-collection-text-image-video/" element={<TestimonialsCollection />} />
                  <Route path="/product/video-testimonial-recorder/" element={<VideoTestimonialRecorder />} />
                  <Route path="/product/review-aggregation-showcase-system/" element={<ReviewAggregation />} />
                  <Route path="/product/campaign-builder/" element={<CampaignBuilder />} />
                  <Route path="/product/integrations-ecosystem/" element={<IntegrationsEcosystem />} />
                  <Route path="/product/analytics-conversion-insights/" element={<AnalyticsConversionInsights />} />
                  <Route path="/product/visitor-counter-live-visitors/" element={<VisitorCounter />} />
                  <Route path="/product/recent-activity-notifications/" element={<RecentActivityNotifications />} />
                  <Route path="/product/testimonials-widget-reviews-widget/" element={<TestimonialsWidget />} />
                  <Route path="/use-cases/ecommerce/" element={<EcommerceUseCase />} />
                  <Route path="/use-cases/saas-social-proof-tools-drive-sign-ups/" element={<SaaSUseCase />} />
                  <Route path="/use-cases/social-proof-for-marketing-agencies-impress-clients/" element={<AgenciesUseCase />} />
                  <Route path="/use-cases/local-business-social-proof-convert-website-visitors/" element={<LocalBusinessUseCase />} />
                  <Route path="/integrations/shopify/" element={<ShopifyIntegration />} />
                  <Route path="/integrations/wordpress/" element={<WordPressIntegration />} />
                  <Route path="/integrations/zapier/" element={<ZapierIntegration />} />
                  <Route path="/company/" element={<CompanyHub />} />
                  <Route path="/company/about/" element={<About />} />
                  <Route path="/company/contact/" element={<Contact />} />
                  <Route path="/company/careers/" element={<Careers />} />
                  <Route path="/resources/" element={<ResourcesHub />} />
                  <Route path="/resources/blog/" element={<Blog />} />
                  <Route path="/resources/guides/" element={<GuidesHub />} />
                  <Route path="/resources/social-proof/" element={<SocialProofPillar />} />
                  <Route path="/resources/social-proof/what-is-social-proof/" element={<WhatIsSocialProof />} />
                  <Route path="/resources/social-proof/social-proof-example/" element={<SocialProofExamples />} />
                  <Route path="/resources/social-proof/social-proof-in-marketing/" element={<SocialProofInMarketing />} />
                  <Route path="/resources/social-proof/social-proof-for-websites/" element={<SocialProofForWebsites />} />
                  <Route path="/resources/social-proof/types-of-social-proof/" element={<TypesOfSocialProof />} />
                  <Route path="/resources/social-proof/social-proof-psychology/" element={<SocialProofPsychology />} />
                  <Route path="/resources/reviews/" element={<ReviewsPillar />} />
                  <Route path="/resources/reviews/how-to-collect-google-reviews/" element={<HowToCollectGoogleReviews />} />
                  <Route path="/resources/reviews/review-aggregation-guide/" element={<ReviewAggregationGuide />} />
                  <Route path="/resources/reviews/responding-to-negative-reviews/" element={<RespondingToNegativeReviews />} />
                  <Route path="/resources/reviews/review-widgets-for-websites/" element={<ReviewWidgetsForWebsites />} />
                  <Route path="/resources/testimonials/" element={<TestimonialsPillar />} />
                  <Route path="/resources/testimonials/how-to-collect-testimonials/" element={<HowToCollectTestimonials />} />
                  <Route path="/resources/testimonials/video-testimonial-guide/" element={<VideoTestimonialGuide />} />
                  <Route path="/resources/testimonials/testimonial-page-design/" element={<TestimonialPageDesign />} />
                  <Route path="/resources/testimonials/testimonial-request-email-templates/" element={<TestimonialRequestEmailTemplates />} />
                  <Route path="/resources/conversion-analytics/" element={<ConversionAnalyticsPillar />} />
                  <Route path="/resources/conversion-analytics/ab-testing-social-proof/" element={<ABTestingSocialProof />} />
                  <Route path="/resources/conversion-analytics/conversion-rate-benchmarks/" element={<ConversionRateBenchmarks />} />
                  <Route path="/resources/conversion-analytics/measuring-social-proof-roi/" element={<MeasuringSocialProofROI />} />
                  <Route path="/resources/conversion-analytics/heatmap-analytics-guide/" element={<HeatmapAnalyticsGuide />} />
                  <Route path="/resources/website-trust/" element={<WebsiteTrustPillar />} />
                  <Route path="/resources/website-trust/trust-signals-for-ecommerce/" element={<TrustSignalsForEcommerce />} />
                  <Route path="/resources/website-trust/trust-badges-guide/" element={<TrustBadgesGuide />} />
                  <Route path="/resources/website-trust/building-website-credibility/" element={<BuildingWebsiteCredibility />} />
                  <Route path="/resources/website-trust/fomo-marketing-guide/" element={<FOMOMarketingGuide />} />
                  <Route path="/resources/help-center/" element={<HelpCenter />} />
                  <Route path="/resources/glossary/" element={<Glossary />} />
                  <Route path="/social-proof-notifications/" element={<Navigate to="/product/social-proof-notifications/" replace />} />
                  <Route path="/comparisons/" element={<ComparisonsHub />} />
                  <Route path="/comparisons/notiproof-vs-fomo/" element={<NotiProofVsFomo />} />
                  <Route path="/comparisons/notiproof-vs-trustpulse/" element={<NotiProofVsTrustPulse />} />
                  <Route path="/comparisons/notiproof-vs-proof/" element={<NotiProofVsProof />} />
                  <Route path="/comparisons/notiproof-vs-provesource/" element={<NotiProofVsProveSource />} />
                  <Route path="/comparisons/best-fomo-alternatives/" element={<BestFomoAlternatives />} />
                  <Route path="/comparisons/best-trustpulse-alternatives/" element={<BestTrustPulseAlternatives />} />
                  <Route path="/comparisons/best-provesource-alternatives/" element={<BestProveSourceAlternatives />} />
                  <Route path="/comparisons/social-proof-pricing-comparison/" element={<SocialProofPricingComparison />} />
                  <Route path="/case-studies/" element={<CaseStudiesHub />} />
                  <Route path="/case-studies/ecommerce-stylehaven/" element={<EcommerceCaseStudy />} />
                  <Route path="/case-studies/saas-conversion/" element={<SaaSCaseStudy />} />
                  <Route path="/free-tools/" element={<FreeToolsHub />} />
                  <Route path="/free-tools/ab-test-calculator/" element={<ABTestCalculator />} />
                  <Route path="/free-tools/social-proof-roi-calculator/" element={<SocialProofROICalculator />} />
                  <Route path="/free-tools/google-review-link-generator/" element={<GoogleReviewLinkGenerator />} />
                  <Route path="/free-tools/testimonial-email-generator/" element={<TestimonialEmailGenerator />} />
                  <Route path="/free-tools/website-trust-score-checker/" element={<WebsiteTrustScoreChecker />} />
                  <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service/" element={<TermsOfService />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </StaticRouter>
          </HelmetProvider>
        </TooltipProvider>
      </QueryClientProvider>
    );

    // Extract helmet data for head injection
    const helmet = helmetContext.helmet;
    const head = helmet
      ? [
          helmet.title?.toString() || "",
          helmet.meta?.toString() || "",
          helmet.link?.toString() || "",
          helmet.script?.toString() || "",
        ]
          .filter(Boolean)
          .join("\n")
      : "";

    return { url, html, head };
  });
}
