import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsentBanner from "./components/CookieConsent";

// Existing pages
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Integrations from "./pages/Integrations";
import UseCases from "./pages/UseCases";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

// Product pages
const ProductHub = lazy(() => import("./pages/product/ProductHub"));
const SocialProofNotifications = lazy(() => import("./pages/product/SocialProofNotifications"));
const TestimonialsCollection = lazy(() => import("./pages/product/TestimonialsCollection"));
const VideoTestimonialRecorder = lazy(() => import("./pages/product/VideoTestimonialRecorder"));
const ReviewAggregation = lazy(() => import("./pages/product/ReviewAggregation"));
const CampaignBuilder = lazy(() => import("./pages/product/CampaignBuilder"));
const IntegrationsEcosystem = lazy(() => import("./pages/product/IntegrationsEcosystem"));
const AnalyticsConversionInsights = lazy(() => import("./pages/product/AnalyticsConversionInsights"));
const VisitorCounter = lazy(() => import("./pages/product/VisitorCounter"));
const RecentActivityNotifications = lazy(() => import("./pages/product/RecentActivityNotifications"));
const TestimonialsWidget = lazy(() => import("./pages/product/TestimonialsWidget"));

// Use case sub-pages
const EcommerceUseCase = lazy(() => import("./pages/use-cases/Ecommerce"));
const SaaSUseCase = lazy(() => import("./pages/use-cases/SaaS"));
const AgenciesUseCase = lazy(() => import("./pages/use-cases/Agencies"));
const LocalBusinessUseCase = lazy(() => import("./pages/use-cases/LocalBusiness"));

// Integration sub-pages
const ShopifyIntegration = lazy(() => import("./pages/integrations/ShopifyIntegration"));
const WordPressIntegration = lazy(() => import("./pages/integrations/WordPressIntegration"));
const ZapierIntegration = lazy(() => import("./pages/integrations/ZapierIntegration"));
const WooCommerceIntegration = lazy(() => import("./pages/integrations/WooCommerceIntegration"));
const WebflowIntegration = lazy(() => import("./pages/integrations/WebflowIntegration"));
const WixIntegration = lazy(() => import("./pages/integrations/WixIntegration"));
const SquarespaceIntegration = lazy(() => import("./pages/integrations/SquarespaceIntegration"));
const BigCommerceIntegration = lazy(() => import("./pages/integrations/BigCommerceIntegration"));
const HubSpotIntegration = lazy(() => import("./pages/integrations/HubSpotIntegration"));
const StripeIntegration = lazy(() => import("./pages/integrations/StripeIntegration"));
const FramerIntegration = lazy(() => import("./pages/integrations/FramerIntegration"));
const GoHighLevelIntegration = lazy(() => import("./pages/integrations/GoHighLevelIntegration"));
const KajabiIntegration = lazy(() => import("./pages/integrations/KajabiIntegration"));

// Company pages
const CompanyHub = lazy(() => import("./pages/company/CompanyHub"));
const About = lazy(() => import("./pages/company/About"));
const Contact = lazy(() => import("./pages/company/Contact"));
const Careers = lazy(() => import("./pages/company/Careers"));

// Resources
const ResourcesHub = lazy(() => import("./pages/resources/ResourcesHub"));
const Blog = lazy(() => import("./pages/resources/Blog"));
const GuidesHub = lazy(() => import("./pages/resources/GuidesHub"));
const SocialProofPillar = lazy(() => import("./pages/resources/social-proof/SocialProofPillar"));
const WhatIsSocialProof = lazy(() => import("./pages/resources/social-proof/WhatIsSocialProof"));
const SocialProofExamples = lazy(() => import("./pages/resources/social-proof/SocialProofExamples"));
const SocialProofInMarketing = lazy(() => import("./pages/resources/social-proof/SocialProofInMarketing"));
const SocialProofForWebsites = lazy(() => import("./pages/resources/social-proof/SocialProofForWebsites"));
const TypesOfSocialProof = lazy(() => import("./pages/resources/social-proof/TypesOfSocialProof"));
const SocialProofPsychology = lazy(() => import("./pages/resources/social-proof/SocialProofPsychology"));
const ReviewsAndSocialProof = lazy(() => import("./pages/resources/social-proof/ReviewsAndSocialProof"));

// Reviews cluster
const ReviewsPillar = lazy(() => import("./pages/resources/reviews/ReviewsPillar"));
const HowToCollectGoogleReviews = lazy(() => import("./pages/resources/reviews/HowToCollectGoogleReviews"));
const ReviewAggregationGuide = lazy(() => import("./pages/resources/reviews/ReviewAggregationGuide"));
const RespondingToNegativeReviews = lazy(() => import("./pages/resources/reviews/RespondingToNegativeReviews"));
const ReviewWidgetsForWebsites = lazy(() => import("./pages/resources/reviews/ReviewWidgetsForWebsites"));
const TrustpilotReviewsGuide = lazy(() => import("./pages/resources/reviews/TrustpilotReviewsGuide"));
const G2ReviewsGuide = lazy(() => import("./pages/resources/reviews/G2ReviewsGuide"));
const YelpReviewsGuide = lazy(() => import("./pages/resources/reviews/YelpReviewsGuide"));
const OnlineReviewStatistics = lazy(() => import("./pages/resources/reviews/OnlineReviewStatistics"));
const EmbedGoogleReviews = lazy(() => import("./pages/resources/reviews/EmbedGoogleReviews"));
const FakeReviewsDetection = lazy(() => import("./pages/resources/reviews/FakeReviewsDetection"));
const ReviewGenerationStrategies = lazy(() => import("./pages/resources/reviews/ReviewGenerationStrategies"));
const StarRatingPsychology = lazy(() => import("./pages/resources/reviews/StarRatingPsychology"));

// Testimonials cluster
const TestimonialsPillar = lazy(() => import("./pages/resources/testimonials/TestimonialsPillar"));
const HowToCollectTestimonials = lazy(() => import("./pages/resources/testimonials/HowToCollectTestimonials"));
const VideoTestimonialGuide = lazy(() => import("./pages/resources/testimonials/VideoTestimonialGuide"));
const TestimonialPageDesign = lazy(() => import("./pages/resources/testimonials/TestimonialPageDesign"));
const TestimonialRequestEmailTemplates = lazy(() => import("./pages/resources/testimonials/TestimonialRequestEmailTemplates"));
const VideoVsTextTestimonials = lazy(() => import("./pages/resources/testimonials/VideoVsTextTestimonials"));
const AskForVideoTestimonials = lazy(() => import("./pages/resources/testimonials/AskForVideoTestimonials"));
const VideoTestimonialExamples = lazy(() => import("./pages/resources/testimonials/VideoTestimonialExamples"));
const TestimonialsForSaaS = lazy(() => import("./pages/resources/testimonials/TestimonialsForSaaS"));
const CaseStudyVsTestimonial = lazy(() => import("./pages/resources/testimonials/CaseStudyVsTestimonial"));
const TestimonialABTesting = lazy(() => import("./pages/resources/testimonials/TestimonialABTesting"));
const WallOfLoveGuide = lazy(() => import("./pages/resources/testimonials/WallOfLoveGuide"));

// Conversion Analytics cluster
const ConversionAnalyticsPillar = lazy(() => import("./pages/resources/conversion-analytics/ConversionAnalyticsPillar"));
const ABTestingSocialProof = lazy(() => import("./pages/resources/conversion-analytics/ABTestingSocialProof"));
const ConversionRateBenchmarks = lazy(() => import("./pages/resources/conversion-analytics/ConversionRateBenchmarks"));
const MeasuringSocialProofROI = lazy(() => import("./pages/resources/conversion-analytics/MeasuringSocialProofROI"));
const HeatmapAnalyticsGuide = lazy(() => import("./pages/resources/conversion-analytics/HeatmapAnalyticsGuide"));
const TestimonialReviewROI = lazy(() => import("./pages/resources/conversion-analytics/TestimonialReviewROI"));

// CRO cluster
const CROPillar = lazy(() => import("./pages/resources/cro/CROPillar"));
const LandingPageOptimization = lazy(() => import("./pages/resources/cro/LandingPageOptimization"));
const EcommerceCRO = lazy(() => import("./pages/resources/cro/EcommerceCRO"));
const SaaSCRO = lazy(() => import("./pages/resources/cro/SaaSCRO"));
const CartAbandonment = lazy(() => import("./pages/resources/cro/CartAbandonment"));
const CTAOptimization = lazy(() => import("./pages/resources/cro/CTAOptimization"));
const ExitIntentStrategies = lazy(() => import("./pages/resources/cro/ExitIntentStrategies"));
const ProductPageCRO = lazy(() => import("./pages/resources/cro/ProductPageCRO"));
const CheckoutOptimization = lazy(() => import("./pages/resources/cro/CheckoutOptimization"));
const PricingPageOptimization = lazy(() => import("./pages/resources/cro/PricingPageOptimization"));
const MobileCRO = lazy(() => import("./pages/resources/cro/MobileCRO"));
const AboveTheFoldOptimization = lazy(() => import("./pages/resources/cro/AboveTheFoldOptimization"));
const CROForAgencies = lazy(() => import("./pages/resources/cro/CROForAgencies"));
const GA4SocialProofTracking = lazy(() => import("./pages/resources/cro/GA4SocialProofTracking"));

// Social Proof expansion
const SocialProofNotificationsGuide = lazy(() => import("./pages/resources/social-proof/SocialProofNotifications"));
const SocialProofB2BSaaS = lazy(() => import("./pages/resources/social-proof/SocialProofB2BSaaS"));
const UserGeneratedContentSocialProof = lazy(() => import("./pages/resources/social-proof/UserGeneratedContentSocialProof"));
const SocialProofLandingPages = lazy(() => import("./pages/resources/social-proof/SocialProofLandingPages"));
const SocialProofStatistics = lazy(() => import("./pages/resources/social-proof/SocialProofStatistics"));
const SocialProofEcommerce = lazy(() => import("./pages/resources/social-proof/SocialProofEcommerce"));
const SocialProofLocalBusiness = lazy(() => import("./pages/resources/social-proof/SocialProofLocalBusiness"));
const SocialProofAgencies = lazy(() => import("./pages/resources/social-proof/SocialProofAgencies"));
const SocialProofCoachesCreators = lazy(() => import("./pages/resources/social-proof/SocialProofCoachesCreators"));
const SocialProofRestaurants = lazy(() => import("./pages/resources/social-proof/SocialProofRestaurants"));
const AIGeneratedSocialProof = lazy(() => import("./pages/resources/social-proof/AIGeneratedSocialProof"));
const NegativeSocialProof = lazy(() => import("./pages/resources/social-proof/NegativeSocialProof"));
const SocialProofSocialMedia = lazy(() => import("./pages/resources/social-proof/SocialProofSocialMedia"));

// Website Trust cluster
const WebsiteTrustPillar = lazy(() => import("./pages/resources/website-trust/WebsiteTrustPillar"));
const TrustSignalsForEcommerce = lazy(() => import("./pages/resources/website-trust/TrustSignalsForEcommerce"));
const TrustBadgesGuide = lazy(() => import("./pages/resources/website-trust/TrustBadgesGuide"));
const BuildingWebsiteCredibility = lazy(() => import("./pages/resources/website-trust/BuildingWebsiteCredibility"));
const FOMOMarketingGuide = lazy(() => import("./pages/resources/website-trust/FOMOMarketingGuide"));
const TestimonialsAsTrustSignals = lazy(() => import("./pages/resources/website-trust/TestimonialsAsTrustSignals"));

const AuthorProfile = lazy(() => import("./pages/resources/AuthorProfile"));
const HelpCenter = lazy(() => import("./pages/resources/HelpCenter"));
const Glossary = lazy(() => import("./pages/resources/Glossary"));
const TopicDetail = lazy(() => import("./pages/resources/TopicDetail"));
const TopicalMapPage = lazy(() => import("./pages/resources/TopicalMap"));


// Comparisons
const ComparisonsHub = lazy(() => import("./pages/comparisons/ComparisonsHub"));
const NotiProofVsFomo = lazy(() => import("./pages/comparisons/NotiProofVsFomo"));
const NotiProofVsTrustPulse = lazy(() => import("./pages/comparisons/NotiProofVsTrustPulse"));
const NotiProofVsProof = lazy(() => import("./pages/comparisons/NotiProofVsProof"));
const NotiProofVsProveSource = lazy(() => import("./pages/comparisons/NotiProofVsProveSource"));
const BestFomoAlternatives = lazy(() => import("./pages/comparisons/BestFomoAlternatives"));
const BestTrustPulseAlternatives = lazy(() => import("./pages/comparisons/BestTrustPulseAlternatives"));
const BestProveSourceAlternatives = lazy(() => import("./pages/comparisons/BestProveSourceAlternatives"));
const SocialProofPricingComparison = lazy(() => import("./pages/comparisons/SocialProofPricingComparison"));
const NotiProofVsYotpo = lazy(() => import("./pages/comparisons/NotiProofVsYotpo"));
const NotiProofVsTrustmary = lazy(() => import("./pages/comparisons/NotiProofVsTrustmary"));
const FreeSocialProofTools = lazy(() => import("./pages/comparisons/FreeSocialProofTools"));

// Case Studies
const CaseStudiesHub = lazy(() => import("./pages/case-studies/CaseStudiesHub"));
const EcommerceCaseStudy = lazy(() => import("./pages/case-studies/EcommerceCaseStudy"));
const SaaSCaseStudy = lazy(() => import("./pages/case-studies/SaaSCaseStudy"));
const AgencyCaseStudy = lazy(() => import("./pages/case-studies/AgencyCaseStudy"));
const LocalBusinessCaseStudy = lazy(() => import("./pages/case-studies/LocalBusinessCaseStudy"));

// Free Tools
const FreeToolsHub = lazy(() => import("./pages/tools/FreeToolsHub"));
const ABTestCalculator = lazy(() => import("./pages/tools/ABTestCalculator"));
const SocialProofROICalculator = lazy(() => import("./pages/tools/SocialProofROICalculator"));
const GoogleReviewLinkGenerator = lazy(() => import("./pages/tools/GoogleReviewLinkGenerator"));
const TestimonialEmailGenerator = lazy(() => import("./pages/tools/TestimonialEmailGenerator"));
const WebsiteTrustScoreChecker = lazy(() => import("./pages/tools/WebsiteTrustScoreChecker"));
const ConversionRateCalculator = lazy(() => import("./pages/tools/ConversionRateCalculator"));
const SocialProofAuditChecklist = lazy(() => import("./pages/tools/SocialProofAuditChecklist"));
const CartAbandonmentCalculator = lazy(() => import("./pages/tools/CartAbandonmentCalculator"));
const ReviewResponseGenerator = lazy(() => import("./pages/tools/ReviewResponseGenerator"));

// Legal
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

const queryClient = new QueryClient();

function SuspenseWrap({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
      {children}
    </Suspense>
  );
}

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsentBanner />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/pricing/" element={<Pricing />} />
            <Route path="/integrations/" element={<Integrations />} />
            <Route path="/use-cases/" element={<UseCases />} />
            <Route path="/testimonials/" element={<Testimonials />} />

            {/* Product */}
            <Route path="/product/" element={<SuspenseWrap><ProductHub /></SuspenseWrap>} />
            <Route path="/product/social-proof-notifications/" element={<SuspenseWrap><SocialProofNotifications /></SuspenseWrap>} />
            <Route path="/product/testimonials-collection-text-image-video/" element={<SuspenseWrap><TestimonialsCollection /></SuspenseWrap>} />
            <Route path="/product/video-testimonial-recorder/" element={<SuspenseWrap><VideoTestimonialRecorder /></SuspenseWrap>} />
            <Route path="/product/review-aggregation-showcase-system/" element={<SuspenseWrap><ReviewAggregation /></SuspenseWrap>} />
            <Route path="/product/campaign-builder/" element={<SuspenseWrap><CampaignBuilder /></SuspenseWrap>} />
            <Route path="/product/integrations-ecosystem/" element={<SuspenseWrap><IntegrationsEcosystem /></SuspenseWrap>} />
            <Route path="/product/analytics-conversion-insights/" element={<SuspenseWrap><AnalyticsConversionInsights /></SuspenseWrap>} />
            <Route path="/product/visitor-counter-live-visitors/" element={<SuspenseWrap><VisitorCounter /></SuspenseWrap>} />
            <Route path="/product/recent-activity-notifications/" element={<SuspenseWrap><RecentActivityNotifications /></SuspenseWrap>} />
            <Route path="/product/testimonials-widget-reviews-widget/" element={<SuspenseWrap><TestimonialsWidget /></SuspenseWrap>} />

            {/* Use Case sub-pages */}
            <Route path="/use-cases/ecommerce/" element={<SuspenseWrap><EcommerceUseCase /></SuspenseWrap>} />
            <Route path="/use-cases/saas-social-proof-tools-drive-sign-ups/" element={<SuspenseWrap><SaaSUseCase /></SuspenseWrap>} />
            <Route path="/use-cases/social-proof-for-marketing-agencies-impress-clients/" element={<SuspenseWrap><AgenciesUseCase /></SuspenseWrap>} />
            <Route path="/use-cases/local-business-social-proof-convert-website-visitors/" element={<SuspenseWrap><LocalBusinessUseCase /></SuspenseWrap>} />

            {/* Integration sub-pages */}
            <Route path="/integrations/shopify/" element={<SuspenseWrap><ShopifyIntegration /></SuspenseWrap>} />
            <Route path="/integrations/wordpress/" element={<SuspenseWrap><WordPressIntegration /></SuspenseWrap>} />
            <Route path="/integrations/zapier/" element={<SuspenseWrap><ZapierIntegration /></SuspenseWrap>} />
            <Route path="/integrations/woocommerce/" element={<SuspenseWrap><WooCommerceIntegration /></SuspenseWrap>} />
            <Route path="/integrations/webflow/" element={<SuspenseWrap><WebflowIntegration /></SuspenseWrap>} />
            <Route path="/integrations/wix/" element={<SuspenseWrap><WixIntegration /></SuspenseWrap>} />
            <Route path="/integrations/squarespace/" element={<SuspenseWrap><SquarespaceIntegration /></SuspenseWrap>} />
            <Route path="/integrations/bigcommerce/" element={<SuspenseWrap><BigCommerceIntegration /></SuspenseWrap>} />
            <Route path="/integrations/hubspot/" element={<SuspenseWrap><HubSpotIntegration /></SuspenseWrap>} />
            <Route path="/integrations/stripe/" element={<SuspenseWrap><StripeIntegration /></SuspenseWrap>} />
            <Route path="/integrations/framer/" element={<SuspenseWrap><FramerIntegration /></SuspenseWrap>} />
            <Route path="/integrations/gohighlevel/" element={<SuspenseWrap><GoHighLevelIntegration /></SuspenseWrap>} />
            <Route path="/integrations/kajabi/" element={<SuspenseWrap><KajabiIntegration /></SuspenseWrap>} />

            {/* Company */}
            <Route path="/company/" element={<SuspenseWrap><CompanyHub /></SuspenseWrap>} />
            <Route path="/company/about/" element={<SuspenseWrap><About /></SuspenseWrap>} />
            <Route path="/company/contact/" element={<SuspenseWrap><Contact /></SuspenseWrap>} />
            <Route path="/company/careers/" element={<SuspenseWrap><Careers /></SuspenseWrap>} />

            {/* Resources — Social Proof cluster */}
            <Route path="/resources/" element={<SuspenseWrap><ResourcesHub /></SuspenseWrap>} />
            <Route path="/resources/blog/" element={<SuspenseWrap><Blog /></SuspenseWrap>} />
            <Route path="/resources/guides/" element={<SuspenseWrap><GuidesHub /></SuspenseWrap>} />
            <Route path="/resources/social-proof/" element={<SuspenseWrap><SocialProofPillar /></SuspenseWrap>} />
            <Route path="/resources/social-proof/what-is-social-proof/" element={<SuspenseWrap><WhatIsSocialProof /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-example/" element={<SuspenseWrap><SocialProofExamples /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-in-marketing/" element={<SuspenseWrap><SocialProofInMarketing /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-for-websites/" element={<SuspenseWrap><SocialProofForWebsites /></SuspenseWrap>} />
            <Route path="/resources/social-proof/types-of-social-proof/" element={<SuspenseWrap><TypesOfSocialProof /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-psychology/" element={<SuspenseWrap><SocialProofPsychology /></SuspenseWrap>} />
            <Route path="/resources/social-proof/reviews-and-social-proof/" element={<SuspenseWrap><ReviewsAndSocialProof /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-notifications-guide/" element={<SuspenseWrap><SocialProofNotificationsGuide /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-b2b-saas/" element={<SuspenseWrap><SocialProofB2BSaaS /></SuspenseWrap>} />
            <Route path="/resources/social-proof/user-generated-content-social-proof/" element={<SuspenseWrap><UserGeneratedContentSocialProof /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-for-landing-pages/" element={<SuspenseWrap><SocialProofLandingPages /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-statistics/" element={<SuspenseWrap><SocialProofStatistics /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-ecommerce/" element={<SuspenseWrap><SocialProofEcommerce /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-local-business/" element={<SuspenseWrap><SocialProofLocalBusiness /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-agencies/" element={<SuspenseWrap><SocialProofAgencies /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-coaches-creators/" element={<SuspenseWrap><SocialProofCoachesCreators /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-restaurants/" element={<SuspenseWrap><SocialProofRestaurants /></SuspenseWrap>} />
            <Route path="/resources/social-proof/ai-generated-social-proof/" element={<SuspenseWrap><AIGeneratedSocialProof /></SuspenseWrap>} />
            <Route path="/resources/social-proof/negative-social-proof/" element={<SuspenseWrap><NegativeSocialProof /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-social-media/" element={<SuspenseWrap><SocialProofSocialMedia /></SuspenseWrap>} />

            {/* Resources — Reviews cluster */}
            <Route path="/resources/reviews/" element={<SuspenseWrap><ReviewsPillar /></SuspenseWrap>} />
            <Route path="/resources/reviews/how-to-collect-google-reviews/" element={<SuspenseWrap><HowToCollectGoogleReviews /></SuspenseWrap>} />
            <Route path="/resources/reviews/review-aggregation-guide/" element={<SuspenseWrap><ReviewAggregationGuide /></SuspenseWrap>} />
            <Route path="/resources/reviews/responding-to-negative-reviews/" element={<SuspenseWrap><RespondingToNegativeReviews /></SuspenseWrap>} />
            <Route path="/resources/reviews/review-widgets-for-websites/" element={<SuspenseWrap><ReviewWidgetsForWebsites /></SuspenseWrap>} />
            <Route path="/resources/reviews/trustpilot-reviews-guide/" element={<SuspenseWrap><TrustpilotReviewsGuide /></SuspenseWrap>} />
            <Route path="/resources/reviews/g2-reviews-guide/" element={<SuspenseWrap><G2ReviewsGuide /></SuspenseWrap>} />
            <Route path="/resources/reviews/yelp-reviews-guide/" element={<SuspenseWrap><YelpReviewsGuide /></SuspenseWrap>} />
            <Route path="/resources/reviews/online-review-statistics/" element={<SuspenseWrap><OnlineReviewStatistics /></SuspenseWrap>} />
            <Route path="/resources/reviews/embed-google-reviews/" element={<SuspenseWrap><EmbedGoogleReviews /></SuspenseWrap>} />
            <Route path="/resources/reviews/fake-reviews-detection/" element={<SuspenseWrap><FakeReviewsDetection /></SuspenseWrap>} />
            <Route path="/resources/reviews/review-generation-strategies/" element={<SuspenseWrap><ReviewGenerationStrategies /></SuspenseWrap>} />
            <Route path="/resources/reviews/star-rating-psychology/" element={<SuspenseWrap><StarRatingPsychology /></SuspenseWrap>} />

            {/* Resources — Testimonials cluster */}
            <Route path="/resources/testimonials/" element={<SuspenseWrap><TestimonialsPillar /></SuspenseWrap>} />
            <Route path="/resources/testimonials/how-to-collect-testimonials/" element={<SuspenseWrap><HowToCollectTestimonials /></SuspenseWrap>} />
            <Route path="/resources/testimonials/video-testimonial-guide/" element={<SuspenseWrap><VideoTestimonialGuide /></SuspenseWrap>} />
            <Route path="/resources/testimonials/testimonial-page-design/" element={<SuspenseWrap><TestimonialPageDesign /></SuspenseWrap>} />
            <Route path="/resources/testimonials/testimonial-request-email-templates/" element={<SuspenseWrap><TestimonialRequestEmailTemplates /></SuspenseWrap>} />
            <Route path="/resources/testimonials/video-vs-text-testimonials/" element={<SuspenseWrap><VideoVsTextTestimonials /></SuspenseWrap>} />
            <Route path="/resources/testimonials/ask-for-video-testimonials/" element={<SuspenseWrap><AskForVideoTestimonials /></SuspenseWrap>} />
            <Route path="/resources/testimonials/video-testimonial-examples/" element={<SuspenseWrap><VideoTestimonialExamples /></SuspenseWrap>} />
            <Route path="/resources/testimonials/testimonials-for-saas/" element={<SuspenseWrap><TestimonialsForSaaS /></SuspenseWrap>} />
            <Route path="/resources/testimonials/case-study-vs-testimonial/" element={<SuspenseWrap><CaseStudyVsTestimonial /></SuspenseWrap>} />
            <Route path="/resources/testimonials/testimonial-ab-testing/" element={<SuspenseWrap><TestimonialABTesting /></SuspenseWrap>} />
            <Route path="/resources/testimonials/wall-of-love-guide/" element={<SuspenseWrap><WallOfLoveGuide /></SuspenseWrap>} />

            {/* Resources — Conversion Analytics cluster */}
            <Route path="/resources/conversion-analytics/" element={<SuspenseWrap><ConversionAnalyticsPillar /></SuspenseWrap>} />
            <Route path="/resources/conversion-analytics/ab-testing-social-proof/" element={<SuspenseWrap><ABTestingSocialProof /></SuspenseWrap>} />
            <Route path="/resources/conversion-analytics/conversion-rate-benchmarks/" element={<SuspenseWrap><ConversionRateBenchmarks /></SuspenseWrap>} />
            <Route path="/resources/conversion-analytics/measuring-social-proof-roi/" element={<SuspenseWrap><MeasuringSocialProofROI /></SuspenseWrap>} />
            <Route path="/resources/conversion-analytics/heatmap-analytics-guide/" element={<SuspenseWrap><HeatmapAnalyticsGuide /></SuspenseWrap>} />
            <Route path="/resources/conversion-analytics/testimonial-review-roi/" element={<SuspenseWrap><TestimonialReviewROI /></SuspenseWrap>} />

            {/* Resources — CRO cluster */}
            <Route path="/resources/cro/" element={<SuspenseWrap><CROPillar /></SuspenseWrap>} />
            <Route path="/resources/cro/landing-page-optimization/" element={<SuspenseWrap><LandingPageOptimization /></SuspenseWrap>} />
            <Route path="/resources/cro/ecommerce-conversion-optimization/" element={<SuspenseWrap><EcommerceCRO /></SuspenseWrap>} />
            <Route path="/resources/cro/saas-conversion-optimization/" element={<SuspenseWrap><SaaSCRO /></SuspenseWrap>} />
            <Route path="/resources/cro/cart-abandonment/" element={<SuspenseWrap><CartAbandonment /></SuspenseWrap>} />
            <Route path="/resources/cro/cta-optimization/" element={<SuspenseWrap><CTAOptimization /></SuspenseWrap>} />
            <Route path="/resources/cro/exit-intent-strategies/" element={<SuspenseWrap><ExitIntentStrategies /></SuspenseWrap>} />
            <Route path="/resources/cro/product-page-cro/" element={<SuspenseWrap><ProductPageCRO /></SuspenseWrap>} />
            <Route path="/resources/cro/checkout-optimization/" element={<SuspenseWrap><CheckoutOptimization /></SuspenseWrap>} />
            <Route path="/resources/cro/pricing-page-optimization/" element={<SuspenseWrap><PricingPageOptimization /></SuspenseWrap>} />
            <Route path="/resources/cro/mobile-cro/" element={<SuspenseWrap><MobileCRO /></SuspenseWrap>} />
            <Route path="/resources/cro/above-the-fold-optimization/" element={<SuspenseWrap><AboveTheFoldOptimization /></SuspenseWrap>} />
            <Route path="/resources/cro/cro-for-agencies/" element={<SuspenseWrap><CROForAgencies /></SuspenseWrap>} />
            <Route path="/resources/cro/ga4-social-proof-tracking/" element={<SuspenseWrap><GA4SocialProofTracking /></SuspenseWrap>} />

            {/* Resources — Website Trust cluster */}
            <Route path="/resources/website-trust/" element={<SuspenseWrap><WebsiteTrustPillar /></SuspenseWrap>} />
            <Route path="/resources/website-trust/trust-signals-for-ecommerce/" element={<SuspenseWrap><TrustSignalsForEcommerce /></SuspenseWrap>} />
            <Route path="/resources/website-trust/trust-badges-guide/" element={<SuspenseWrap><TrustBadgesGuide /></SuspenseWrap>} />
            <Route path="/resources/website-trust/building-website-credibility/" element={<SuspenseWrap><BuildingWebsiteCredibility /></SuspenseWrap>} />
            <Route path="/resources/website-trust/fomo-marketing-guide/" element={<SuspenseWrap><FOMOMarketingGuide /></SuspenseWrap>} />
            <Route path="/resources/website-trust/testimonials-as-trust-signals/" element={<SuspenseWrap><TestimonialsAsTrustSignals /></SuspenseWrap>} />

            {/* Resources — Other */}
            <Route path="/resources/author/:slug/" element={<SuspenseWrap><AuthorProfile /></SuspenseWrap>} />
            <Route path="/resources/help-center/" element={<SuspenseWrap><HelpCenter /></SuspenseWrap>} />
            <Route path="/resources/glossary/" element={<SuspenseWrap><Glossary /></SuspenseWrap>} />
            <Route path="/resources/topical-map/" element={<SuspenseWrap><TopicalMapPage /></SuspenseWrap>} />
            <Route path="/resources/blog/:topicId/" element={<SuspenseWrap><TopicDetail /></SuspenseWrap>} />

            {/* SEO Redirects — canonical consolidation */}
            <Route path="/social-proof-notifications/" element={<Navigate to="/product/social-proof-notifications/" replace />} />
            <Route path="/best-social-proof-software/" element={<Navigate to="/comparisons/" replace />} />
            <Route path="/conversion-optimization-tools/" element={<Navigate to="/free-tools/" replace />} />

            {/* Comparisons */}
            <Route path="/comparisons/" element={<SuspenseWrap><ComparisonsHub /></SuspenseWrap>} />
            <Route path="/comparisons/notiproof-vs-fomo/" element={<SuspenseWrap><NotiProofVsFomo /></SuspenseWrap>} />
            <Route path="/comparisons/notiproof-vs-trustpulse/" element={<SuspenseWrap><NotiProofVsTrustPulse /></SuspenseWrap>} />
            <Route path="/comparisons/notiproof-vs-proof/" element={<SuspenseWrap><NotiProofVsProof /></SuspenseWrap>} />
            <Route path="/comparisons/notiproof-vs-provesource/" element={<SuspenseWrap><NotiProofVsProveSource /></SuspenseWrap>} />
            <Route path="/comparisons/best-fomo-alternatives/" element={<SuspenseWrap><BestFomoAlternatives /></SuspenseWrap>} />
            <Route path="/comparisons/best-trustpulse-alternatives/" element={<SuspenseWrap><BestTrustPulseAlternatives /></SuspenseWrap>} />
            <Route path="/comparisons/best-provesource-alternatives/" element={<SuspenseWrap><BestProveSourceAlternatives /></SuspenseWrap>} />
            <Route path="/comparisons/social-proof-pricing-comparison/" element={<SuspenseWrap><SocialProofPricingComparison /></SuspenseWrap>} />
            <Route path="/comparisons/notiproof-vs-yotpo/" element={<SuspenseWrap><NotiProofVsYotpo /></SuspenseWrap>} />
            <Route path="/comparisons/notiproof-vs-trustmary/" element={<SuspenseWrap><NotiProofVsTrustmary /></SuspenseWrap>} />
            <Route path="/comparisons/free-social-proof-tools/" element={<SuspenseWrap><FreeSocialProofTools /></SuspenseWrap>} />

            {/* Case Studies */}
            <Route path="/case-studies/" element={<SuspenseWrap><CaseStudiesHub /></SuspenseWrap>} />
            <Route path="/case-studies/ecommerce-stylehaven/" element={<SuspenseWrap><EcommerceCaseStudy /></SuspenseWrap>} />
            <Route path="/case-studies/saas-conversion/" element={<SuspenseWrap><SaaSCaseStudy /></SuspenseWrap>} />
            <Route path="/case-studies/agency-brightpath/" element={<SuspenseWrap><AgencyCaseStudy /></SuspenseWrap>} />
            <Route path="/case-studies/local-business-greenleaf/" element={<SuspenseWrap><LocalBusinessCaseStudy /></SuspenseWrap>} />

            {/* Free Tools */}
            <Route path="/free-tools/" element={<SuspenseWrap><FreeToolsHub /></SuspenseWrap>} />
            <Route path="/free-tools/ab-test-calculator/" element={<SuspenseWrap><ABTestCalculator /></SuspenseWrap>} />
            <Route path="/free-tools/social-proof-roi-calculator/" element={<SuspenseWrap><SocialProofROICalculator /></SuspenseWrap>} />
            <Route path="/free-tools/google-review-link-generator/" element={<SuspenseWrap><GoogleReviewLinkGenerator /></SuspenseWrap>} />
            <Route path="/free-tools/testimonial-email-generator/" element={<SuspenseWrap><TestimonialEmailGenerator /></SuspenseWrap>} />
            <Route path="/free-tools/website-trust-score-checker/" element={<SuspenseWrap><WebsiteTrustScoreChecker /></SuspenseWrap>} />
            <Route path="/free-tools/conversion-rate-calculator/" element={<SuspenseWrap><ConversionRateCalculator /></SuspenseWrap>} />
            <Route path="/free-tools/social-proof-audit-checklist/" element={<SuspenseWrap><SocialProofAuditChecklist /></SuspenseWrap>} />
            <Route path="/free-tools/cart-abandonment-calculator/" element={<SuspenseWrap><CartAbandonmentCalculator /></SuspenseWrap>} />
            <Route path="/free-tools/review-response-generator/" element={<SuspenseWrap><ReviewResponseGenerator /></SuspenseWrap>} />

            {/* Legal */}
            <Route path="/privacy-policy/" element={<SuspenseWrap><PrivacyPolicy /></SuspenseWrap>} />
            <Route path="/terms-of-service/" element={<SuspenseWrap><TermsOfService /></SuspenseWrap>} />
            <Route path="/cookie-policy/" element={<SuspenseWrap><CookiePolicy /></SuspenseWrap>} />

            {/* Redirects */}
            <Route path="/home/" element={<Navigate to="/" replace />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
