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

// Product
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

// Use Cases
import EcommerceUseCase from "./pages/use-cases/Ecommerce";
import SaaSUseCase from "./pages/use-cases/SaaS";
import AgenciesUseCase from "./pages/use-cases/Agencies";
import LocalBusinessUseCase from "./pages/use-cases/LocalBusiness";

// Integrations
import ShopifyIntegration from "./pages/integrations/ShopifyIntegration";
import WordPressIntegration from "./pages/integrations/WordPressIntegration";
import ZapierIntegration from "./pages/integrations/ZapierIntegration";
import WooCommerceIntegration from "./pages/integrations/WooCommerceIntegration";
import WebflowIntegration from "./pages/integrations/WebflowIntegration";
import WixIntegration from "./pages/integrations/WixIntegration";
import SquarespaceIntegration from "./pages/integrations/SquarespaceIntegration";
import BigCommerceIntegration from "./pages/integrations/BigCommerceIntegration";
import HubSpotIntegration from "./pages/integrations/HubSpotIntegration";
import StripeIntegration from "./pages/integrations/StripeIntegration";
import FramerIntegration from "./pages/integrations/FramerIntegration";
import GoHighLevelIntegration from "./pages/integrations/GoHighLevelIntegration";
import KajabiIntegration from "./pages/integrations/KajabiIntegration";

// Company
import CompanyHub from "./pages/company/CompanyHub";
import About from "./pages/company/About";
import Contact from "./pages/company/Contact";
import Careers from "./pages/company/Careers";

// Resources hub
import ResourcesHub from "./pages/resources/ResourcesHub";
import Blog from "./pages/resources/Blog";
import GuidesHub from "./pages/resources/GuidesHub";

// Social Proof cluster
import SocialProofPillar from "./pages/resources/social-proof/SocialProofPillar";
import WhatIsSocialProof from "./pages/resources/social-proof/WhatIsSocialProof";
import SocialProofExamples from "./pages/resources/social-proof/SocialProofExamples";
import SocialProofInMarketing from "./pages/resources/social-proof/SocialProofInMarketing";
import SocialProofForWebsites from "./pages/resources/social-proof/SocialProofForWebsites";
import TypesOfSocialProof from "./pages/resources/social-proof/TypesOfSocialProof";
import SocialProofPsychology from "./pages/resources/social-proof/SocialProofPsychology";
import ReviewsAndSocialProof from "./pages/resources/social-proof/ReviewsAndSocialProof";
import SocialProofNotificationsGuide from "./pages/resources/social-proof/SocialProofNotifications";
import SocialProofB2BSaaS from "./pages/resources/social-proof/SocialProofB2BSaaS";
import UserGeneratedContentSocialProof from "./pages/resources/social-proof/UserGeneratedContentSocialProof";
import SocialProofLandingPages from "./pages/resources/social-proof/SocialProofLandingPages";
import SocialProofStatistics from "./pages/resources/social-proof/SocialProofStatistics";
import SocialProofEcommerce from "./pages/resources/social-proof/SocialProofEcommerce";
import SocialProofLocalBusiness from "./pages/resources/social-proof/SocialProofLocalBusiness";
import SocialProofAgencies from "./pages/resources/social-proof/SocialProofAgencies";
import SocialProofCoachesCreators from "./pages/resources/social-proof/SocialProofCoachesCreators";
import SocialProofRestaurants from "./pages/resources/social-proof/SocialProofRestaurants";
import AIGeneratedSocialProof from "./pages/resources/social-proof/AIGeneratedSocialProof";
import NegativeSocialProof from "./pages/resources/social-proof/NegativeSocialProof";
import SocialProofSocialMedia from "./pages/resources/social-proof/SocialProofSocialMedia";

// Reviews cluster
import ReviewsPillar from "./pages/resources/reviews/ReviewsPillar";
import HowToCollectGoogleReviews from "./pages/resources/reviews/HowToCollectGoogleReviews";
import ReviewAggregationGuide from "./pages/resources/reviews/ReviewAggregationGuide";
import RespondingToNegativeReviews from "./pages/resources/reviews/RespondingToNegativeReviews";
import ReviewWidgetsForWebsites from "./pages/resources/reviews/ReviewWidgetsForWebsites";
import TrustpilotReviewsGuide from "./pages/resources/reviews/TrustpilotReviewsGuide";
import G2ReviewsGuide from "./pages/resources/reviews/G2ReviewsGuide";
import YelpReviewsGuide from "./pages/resources/reviews/YelpReviewsGuide";
import OnlineReviewStatistics from "./pages/resources/reviews/OnlineReviewStatistics";
import EmbedGoogleReviews from "./pages/resources/reviews/EmbedGoogleReviews";
import FakeReviewsDetection from "./pages/resources/reviews/FakeReviewsDetection";
import ReviewGenerationStrategies from "./pages/resources/reviews/ReviewGenerationStrategies";
import StarRatingPsychology from "./pages/resources/reviews/StarRatingPsychology";

// Testimonials cluster
import TestimonialsPillar from "./pages/resources/testimonials/TestimonialsPillar";
import HowToCollectTestimonials from "./pages/resources/testimonials/HowToCollectTestimonials";
import VideoTestimonialGuide from "./pages/resources/testimonials/VideoTestimonialGuide";
import TestimonialPageDesign from "./pages/resources/testimonials/TestimonialPageDesign";
import TestimonialRequestEmailTemplates from "./pages/resources/testimonials/TestimonialRequestEmailTemplates";
import VideoVsTextTestimonials from "./pages/resources/testimonials/VideoVsTextTestimonials";
import AskForVideoTestimonials from "./pages/resources/testimonials/AskForVideoTestimonials";
import VideoTestimonialExamples from "./pages/resources/testimonials/VideoTestimonialExamples";
import TestimonialsForSaaS from "./pages/resources/testimonials/TestimonialsForSaaS";
import CaseStudyVsTestimonial from "./pages/resources/testimonials/CaseStudyVsTestimonial";
import TestimonialABTesting from "./pages/resources/testimonials/TestimonialABTesting";
import WallOfLoveGuide from "./pages/resources/testimonials/WallOfLoveGuide";

// Conversion Analytics cluster
import ConversionAnalyticsPillar from "./pages/resources/conversion-analytics/ConversionAnalyticsPillar";
import ABTestingSocialProof from "./pages/resources/conversion-analytics/ABTestingSocialProof";
import ConversionRateBenchmarks from "./pages/resources/conversion-analytics/ConversionRateBenchmarks";
import MeasuringSocialProofROI from "./pages/resources/conversion-analytics/MeasuringSocialProofROI";
import HeatmapAnalyticsGuide from "./pages/resources/conversion-analytics/HeatmapAnalyticsGuide";
import TestimonialReviewROI from "./pages/resources/conversion-analytics/TestimonialReviewROI";

// CRO cluster
import CROPillar from "./pages/resources/cro/CROPillar";
import LandingPageOptimization from "./pages/resources/cro/LandingPageOptimization";
import EcommerceCRO from "./pages/resources/cro/EcommerceCRO";
import SaaSCRO from "./pages/resources/cro/SaaSCRO";
import CartAbandonment from "./pages/resources/cro/CartAbandonment";
import CTAOptimization from "./pages/resources/cro/CTAOptimization";
import ExitIntentStrategies from "./pages/resources/cro/ExitIntentStrategies";
import ProductPageCRO from "./pages/resources/cro/ProductPageCRO";
import CheckoutOptimization from "./pages/resources/cro/CheckoutOptimization";
import PricingPageOptimization from "./pages/resources/cro/PricingPageOptimization";
import MobileCRO from "./pages/resources/cro/MobileCRO";
import AboveTheFoldOptimization from "./pages/resources/cro/AboveTheFoldOptimization";
import CROForAgencies from "./pages/resources/cro/CROForAgencies";
import GA4SocialProofTracking from "./pages/resources/cro/GA4SocialProofTracking";

// Website Trust cluster
import WebsiteTrustPillar from "./pages/resources/website-trust/WebsiteTrustPillar";
import TrustSignalsForEcommerce from "./pages/resources/website-trust/TrustSignalsForEcommerce";
import TrustBadgesGuide from "./pages/resources/website-trust/TrustBadgesGuide";
import BuildingWebsiteCredibility from "./pages/resources/website-trust/BuildingWebsiteCredibility";
import FOMOMarketingGuide from "./pages/resources/website-trust/FOMOMarketingGuide";
import TestimonialsAsTrustSignals from "./pages/resources/website-trust/TestimonialsAsTrustSignals";

// Resources — other
import HelpCenter from "./pages/resources/HelpCenter";
import Glossary from "./pages/resources/Glossary";
import TopicalMapPage from "./pages/resources/TopicalMap";
import AuthorProfile from "./pages/resources/AuthorProfile";

// Comparisons
import ComparisonsHub from "./pages/comparisons/ComparisonsHub";
import NotiProofVsFomo from "./pages/comparisons/NotiProofVsFomo";
import NotiProofVsTrustPulse from "./pages/comparisons/NotiProofVsTrustPulse";
import NotiProofVsProof from "./pages/comparisons/NotiProofVsProof";
import NotiProofVsProveSource from "./pages/comparisons/NotiProofVsProveSource";
import BestFomoAlternatives from "./pages/comparisons/BestFomoAlternatives";
import BestTrustPulseAlternatives from "./pages/comparisons/BestTrustPulseAlternatives";
import BestProveSourceAlternatives from "./pages/comparisons/BestProveSourceAlternatives";
import SocialProofPricingComparison from "./pages/comparisons/SocialProofPricingComparison";
import NotiProofVsYotpo from "./pages/comparisons/NotiProofVsYotpo";
import NotiProofVsTrustmary from "./pages/comparisons/NotiProofVsTrustmary";
import FreeSocialProofTools from "./pages/comparisons/FreeSocialProofTools";

// Case Studies
import CaseStudiesHub from "./pages/case-studies/CaseStudiesHub";
import EcommerceCaseStudy from "./pages/case-studies/EcommerceCaseStudy";
import SaaSCaseStudy from "./pages/case-studies/SaaSCaseStudy";
import AgencyCaseStudy from "./pages/case-studies/AgencyCaseStudy";
import LocalBusinessCaseStudy from "./pages/case-studies/LocalBusinessCaseStudy";

// Free Tools
import FreeToolsHub from "./pages/tools/FreeToolsHub";
import ABTestCalculator from "./pages/tools/ABTestCalculator";
import SocialProofROICalculator from "./pages/tools/SocialProofROICalculator";
import GoogleReviewLinkGenerator from "./pages/tools/GoogleReviewLinkGenerator";
import TestimonialEmailGenerator from "./pages/tools/TestimonialEmailGenerator";
import WebsiteTrustScoreChecker from "./pages/tools/WebsiteTrustScoreChecker";
import ConversionRateCalculator from "./pages/tools/ConversionRateCalculator";
import SocialProofAuditChecklist from "./pages/tools/SocialProofAuditChecklist";
import CartAbandonmentCalculator from "./pages/tools/CartAbandonmentCalculator";
import ReviewResponseGenerator from "./pages/tools/ReviewResponseGenerator";

// Legal
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

function AppShell({ url, helmetContext }: { url: string; helmetContext: { helmet?: HelmetServerState } }) {
  const queryClient = new QueryClient();

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

                {/* Product */}
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

                {/* Use cases */}
                <Route path="/use-cases/ecommerce/" element={<EcommerceUseCase />} />
                <Route path="/use-cases/saas-social-proof-tools-drive-sign-ups/" element={<SaaSUseCase />} />
                <Route path="/use-cases/social-proof-for-marketing-agencies-impress-clients/" element={<AgenciesUseCase />} />
                <Route path="/use-cases/local-business-social-proof-convert-website-visitors/" element={<LocalBusinessUseCase />} />

                {/* Integrations */}
                <Route path="/integrations/shopify/" element={<ShopifyIntegration />} />
                <Route path="/integrations/wordpress/" element={<WordPressIntegration />} />
                <Route path="/integrations/zapier/" element={<ZapierIntegration />} />
                <Route path="/integrations/woocommerce/" element={<WooCommerceIntegration />} />
                <Route path="/integrations/webflow/" element={<WebflowIntegration />} />
                <Route path="/integrations/wix/" element={<WixIntegration />} />
                <Route path="/integrations/squarespace/" element={<SquarespaceIntegration />} />
                <Route path="/integrations/bigcommerce/" element={<BigCommerceIntegration />} />
                <Route path="/integrations/hubspot/" element={<HubSpotIntegration />} />
                <Route path="/integrations/stripe/" element={<StripeIntegration />} />
                <Route path="/integrations/framer/" element={<FramerIntegration />} />
                <Route path="/integrations/gohighlevel/" element={<GoHighLevelIntegration />} />
                <Route path="/integrations/kajabi/" element={<KajabiIntegration />} />

                {/* Company */}
                <Route path="/company/" element={<CompanyHub />} />
                <Route path="/company/about/" element={<About />} />
                <Route path="/company/contact/" element={<Contact />} />
                <Route path="/company/careers/" element={<Careers />} />

                {/* Resources */}
                <Route path="/resources/" element={<ResourcesHub />} />
                <Route path="/resources/blog/" element={<Blog />} />
                <Route path="/resources/guides/" element={<GuidesHub />} />

                {/* Social Proof cluster */}
                <Route path="/resources/social-proof/" element={<SocialProofPillar />} />
                <Route path="/resources/social-proof/what-is-social-proof/" element={<WhatIsSocialProof />} />
                <Route path="/resources/social-proof/social-proof-example/" element={<SocialProofExamples />} />
                <Route path="/resources/social-proof/social-proof-in-marketing/" element={<SocialProofInMarketing />} />
                <Route path="/resources/social-proof/social-proof-for-websites/" element={<SocialProofForWebsites />} />
                <Route path="/resources/social-proof/types-of-social-proof/" element={<TypesOfSocialProof />} />
                <Route path="/resources/social-proof/social-proof-psychology/" element={<SocialProofPsychology />} />
                <Route path="/resources/social-proof/reviews-and-social-proof/" element={<ReviewsAndSocialProof />} />
                <Route path="/resources/social-proof/social-proof-notifications-guide/" element={<SocialProofNotificationsGuide />} />
                <Route path="/resources/social-proof/social-proof-b2b-saas/" element={<SocialProofB2BSaaS />} />
                <Route path="/resources/social-proof/user-generated-content-social-proof/" element={<UserGeneratedContentSocialProof />} />
                <Route path="/resources/social-proof/social-proof-for-landing-pages/" element={<SocialProofLandingPages />} />
                <Route path="/resources/social-proof/social-proof-statistics/" element={<SocialProofStatistics />} />
                <Route path="/resources/social-proof/social-proof-ecommerce/" element={<SocialProofEcommerce />} />
                <Route path="/resources/social-proof/social-proof-local-business/" element={<SocialProofLocalBusiness />} />
                <Route path="/resources/social-proof/social-proof-agencies/" element={<SocialProofAgencies />} />
                <Route path="/resources/social-proof/social-proof-coaches-creators/" element={<SocialProofCoachesCreators />} />
                <Route path="/resources/social-proof/social-proof-restaurants/" element={<SocialProofRestaurants />} />
                <Route path="/resources/social-proof/ai-generated-social-proof/" element={<AIGeneratedSocialProof />} />
                <Route path="/resources/social-proof/negative-social-proof/" element={<NegativeSocialProof />} />
                <Route path="/resources/social-proof/social-proof-social-media/" element={<SocialProofSocialMedia />} />

                {/* Reviews cluster */}
                <Route path="/resources/reviews/" element={<ReviewsPillar />} />
                <Route path="/resources/reviews/how-to-collect-google-reviews/" element={<HowToCollectGoogleReviews />} />
                <Route path="/resources/reviews/review-aggregation-guide/" element={<ReviewAggregationGuide />} />
                <Route path="/resources/reviews/responding-to-negative-reviews/" element={<RespondingToNegativeReviews />} />
                <Route path="/resources/reviews/review-widgets-for-websites/" element={<ReviewWidgetsForWebsites />} />
                <Route path="/resources/reviews/trustpilot-reviews-guide/" element={<TrustpilotReviewsGuide />} />
                <Route path="/resources/reviews/g2-reviews-guide/" element={<G2ReviewsGuide />} />
                <Route path="/resources/reviews/yelp-reviews-guide/" element={<YelpReviewsGuide />} />
                <Route path="/resources/reviews/online-review-statistics/" element={<OnlineReviewStatistics />} />
                <Route path="/resources/reviews/embed-google-reviews/" element={<EmbedGoogleReviews />} />
                <Route path="/resources/reviews/fake-reviews-detection/" element={<FakeReviewsDetection />} />
                <Route path="/resources/reviews/review-generation-strategies/" element={<ReviewGenerationStrategies />} />
                <Route path="/resources/reviews/star-rating-psychology/" element={<StarRatingPsychology />} />

                {/* Testimonials cluster */}
                <Route path="/resources/testimonials/" element={<TestimonialsPillar />} />
                <Route path="/resources/testimonials/how-to-collect-testimonials/" element={<HowToCollectTestimonials />} />
                <Route path="/resources/testimonials/video-testimonial-guide/" element={<VideoTestimonialGuide />} />
                <Route path="/resources/testimonials/testimonial-page-design/" element={<TestimonialPageDesign />} />
                <Route path="/resources/testimonials/testimonial-request-email-templates/" element={<TestimonialRequestEmailTemplates />} />
                <Route path="/resources/testimonials/video-vs-text-testimonials/" element={<VideoVsTextTestimonials />} />
                <Route path="/resources/testimonials/ask-for-video-testimonials/" element={<AskForVideoTestimonials />} />
                <Route path="/resources/testimonials/video-testimonial-examples/" element={<VideoTestimonialExamples />} />
                <Route path="/resources/testimonials/testimonials-for-saas/" element={<TestimonialsForSaaS />} />
                <Route path="/resources/testimonials/case-study-vs-testimonial/" element={<CaseStudyVsTestimonial />} />
                <Route path="/resources/testimonials/testimonial-ab-testing/" element={<TestimonialABTesting />} />
                <Route path="/resources/testimonials/wall-of-love-guide/" element={<WallOfLoveGuide />} />

                {/* Conversion Analytics cluster */}
                <Route path="/resources/conversion-analytics/" element={<ConversionAnalyticsPillar />} />
                <Route path="/resources/conversion-analytics/ab-testing-social-proof/" element={<ABTestingSocialProof />} />
                <Route path="/resources/conversion-analytics/conversion-rate-benchmarks/" element={<ConversionRateBenchmarks />} />
                <Route path="/resources/conversion-analytics/measuring-social-proof-roi/" element={<MeasuringSocialProofROI />} />
                <Route path="/resources/conversion-analytics/heatmap-analytics-guide/" element={<HeatmapAnalyticsGuide />} />
                <Route path="/resources/conversion-analytics/testimonial-review-roi/" element={<TestimonialReviewROI />} />

                {/* CRO cluster */}
                <Route path="/resources/cro/" element={<CROPillar />} />
                <Route path="/resources/cro/landing-page-optimization/" element={<LandingPageOptimization />} />
                <Route path="/resources/cro/ecommerce-conversion-optimization/" element={<EcommerceCRO />} />
                <Route path="/resources/cro/saas-conversion-optimization/" element={<SaaSCRO />} />
                <Route path="/resources/cro/cart-abandonment/" element={<CartAbandonment />} />
                <Route path="/resources/cro/cta-optimization/" element={<CTAOptimization />} />
                <Route path="/resources/cro/exit-intent-strategies/" element={<ExitIntentStrategies />} />
                <Route path="/resources/cro/product-page-cro/" element={<ProductPageCRO />} />
                <Route path="/resources/cro/checkout-optimization/" element={<CheckoutOptimization />} />
                <Route path="/resources/cro/pricing-page-optimization/" element={<PricingPageOptimization />} />
                <Route path="/resources/cro/mobile-cro/" element={<MobileCRO />} />
                <Route path="/resources/cro/above-the-fold-optimization/" element={<AboveTheFoldOptimization />} />
                <Route path="/resources/cro/cro-for-agencies/" element={<CROForAgencies />} />
                <Route path="/resources/cro/ga4-social-proof-tracking/" element={<GA4SocialProofTracking />} />

                {/* Website Trust cluster */}
                <Route path="/resources/website-trust/" element={<WebsiteTrustPillar />} />
                <Route path="/resources/website-trust/trust-signals-for-ecommerce/" element={<TrustSignalsForEcommerce />} />
                <Route path="/resources/website-trust/trust-badges-guide/" element={<TrustBadgesGuide />} />
                <Route path="/resources/website-trust/building-website-credibility/" element={<BuildingWebsiteCredibility />} />
                <Route path="/resources/website-trust/fomo-marketing-guide/" element={<FOMOMarketingGuide />} />
                <Route path="/resources/website-trust/testimonials-as-trust-signals/" element={<TestimonialsAsTrustSignals />} />

                {/* Resources — other */}
                <Route path="/resources/help-center/" element={<HelpCenter />} />
                <Route path="/resources/glossary/" element={<Glossary />} />
                <Route path="/resources/topical-map/" element={<TopicalMapPage />} />
                <Route path="/resources/author/:slug/" element={<AuthorProfile />} />

                <Route path="/social-proof-notifications/" element={<Navigate to="/product/social-proof-notifications/" replace />} />

                {/* Comparisons */}
                <Route path="/comparisons/" element={<ComparisonsHub />} />
                <Route path="/comparisons/notiproof-vs-fomo/" element={<NotiProofVsFomo />} />
                <Route path="/comparisons/notiproof-vs-trustpulse/" element={<NotiProofVsTrustPulse />} />
                <Route path="/comparisons/notiproof-vs-proof/" element={<NotiProofVsProof />} />
                <Route path="/comparisons/notiproof-vs-provesource/" element={<NotiProofVsProveSource />} />
                <Route path="/comparisons/best-fomo-alternatives/" element={<BestFomoAlternatives />} />
                <Route path="/comparisons/best-trustpulse-alternatives/" element={<BestTrustPulseAlternatives />} />
                <Route path="/comparisons/best-provesource-alternatives/" element={<BestProveSourceAlternatives />} />
                <Route path="/comparisons/social-proof-pricing-comparison/" element={<SocialProofPricingComparison />} />
                <Route path="/comparisons/notiproof-vs-yotpo/" element={<NotiProofVsYotpo />} />
                <Route path="/comparisons/notiproof-vs-trustmary/" element={<NotiProofVsTrustmary />} />
                <Route path="/comparisons/free-social-proof-tools/" element={<FreeSocialProofTools />} />

                {/* Case Studies */}
                <Route path="/case-studies/" element={<CaseStudiesHub />} />
                <Route path="/case-studies/ecommerce-stylehaven/" element={<EcommerceCaseStudy />} />
                <Route path="/case-studies/saas-conversion/" element={<SaaSCaseStudy />} />
                <Route path="/case-studies/agency-brightpath/" element={<AgencyCaseStudy />} />
                <Route path="/case-studies/local-business-greenleaf/" element={<LocalBusinessCaseStudy />} />

                {/* Free Tools */}
                <Route path="/free-tools/" element={<FreeToolsHub />} />
                <Route path="/free-tools/ab-test-calculator/" element={<ABTestCalculator />} />
                <Route path="/free-tools/social-proof-roi-calculator/" element={<SocialProofROICalculator />} />
                <Route path="/free-tools/google-review-link-generator/" element={<GoogleReviewLinkGenerator />} />
                <Route path="/free-tools/testimonial-email-generator/" element={<TestimonialEmailGenerator />} />
                <Route path="/free-tools/website-trust-score-checker/" element={<WebsiteTrustScoreChecker />} />
                <Route path="/free-tools/conversion-rate-calculator/" element={<ConversionRateCalculator />} />
                <Route path="/free-tools/social-proof-audit-checklist/" element={<SocialProofAuditChecklist />} />
                <Route path="/free-tools/cart-abandonment-calculator/" element={<CartAbandonmentCalculator />} />
                <Route path="/free-tools/review-response-generator/" element={<ReviewResponseGenerator />} />

                {/* Legal */}
                <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service/" element={<TermsOfService />} />
                <Route path="/cookie-policy/" element={<CookiePolicy />} />

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

export async function prerender({ url }: { url: string }) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <AppShell url={url} helmetContext={helmetContext} />
  );

  const helmet = helmetContext.helmet;

  return {
    html,
    head: {
      title: helmet?.title?.toString()?.replace(/<\/?title[^>]*>/g, "") || "",
      elements: new Set(
        [
          helmet?.meta?.toString(),
          helmet?.link?.toString(),
          helmet?.script?.toString(),
        ].filter(Boolean)
      ),
    },
    links: staticRoutes,
  };
}
