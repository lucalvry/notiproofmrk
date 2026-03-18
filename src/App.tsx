import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";

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

// Company pages
const CompanyHub = lazy(() => import("./pages/company/CompanyHub"));
const About = lazy(() => import("./pages/company/About"));
const Contact = lazy(() => import("./pages/company/Contact"));
const Careers = lazy(() => import("./pages/company/Careers"));

// Resources
const ResourcesHub = lazy(() => import("./pages/resources/ResourcesHub"));
const SocialProofPillar = lazy(() => import("./pages/resources/social-proof/SocialProofPillar"));
const WhatIsSocialProof = lazy(() => import("./pages/resources/social-proof/WhatIsSocialProof"));
const SocialProofExamples = lazy(() => import("./pages/resources/social-proof/SocialProofExamples"));
const SocialProofInMarketing = lazy(() => import("./pages/resources/social-proof/SocialProofInMarketing"));
const SocialProofForWebsites = lazy(() => import("./pages/resources/social-proof/SocialProofForWebsites"));
const TypesOfSocialProof = lazy(() => import("./pages/resources/social-proof/TypesOfSocialProof"));
const SocialProofPsychology = lazy(() => import("./pages/resources/social-proof/SocialProofPsychology"));
import { ReviewsHub, ConversionAnalyticsHub, WebsiteTrustHub, TestimonialsResourceHub } from "./pages/resources/CategoryHubs";

// SEO Landing pages
const BestSocialProofSoftware = lazy(() => import("./pages/BestSocialProofSoftware"));
const SocialProofNotificationsLanding = lazy(() => import("./pages/SocialProofNotificationsLanding"));
const ConversionOptimizationTools = lazy(() => import("./pages/ConversionOptimizationTools"));

// Legal
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

const queryClient = new QueryClient();

function SuspenseWrap({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
      {children}
    </Suspense>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing/" element={<Pricing />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/integrations/" element={<Integrations />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/use-cases/" element={<UseCases />} />
            <Route path="/testimonials" element={<Testimonials />} />
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

            {/* Company */}
            <Route path="/company/" element={<SuspenseWrap><CompanyHub /></SuspenseWrap>} />
            <Route path="/company/about/" element={<SuspenseWrap><About /></SuspenseWrap>} />
            <Route path="/company/contact/" element={<SuspenseWrap><Contact /></SuspenseWrap>} />
            <Route path="/company/careers/" element={<SuspenseWrap><Careers /></SuspenseWrap>} />

            {/* Resources */}
            <Route path="/resources/" element={<SuspenseWrap><ResourcesHub /></SuspenseWrap>} />
            <Route path="/resources/social-proof/" element={<SuspenseWrap><SocialProofPillar /></SuspenseWrap>} />
            <Route path="/resources/social-proof/what-is-social-proof/" element={<SuspenseWrap><WhatIsSocialProof /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-example/" element={<SuspenseWrap><SocialProofExamples /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-in-marketing/" element={<SuspenseWrap><SocialProofInMarketing /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-for-websites/" element={<SuspenseWrap><SocialProofForWebsites /></SuspenseWrap>} />
            <Route path="/resources/social-proof/types-of-social-proof/" element={<SuspenseWrap><TypesOfSocialProof /></SuspenseWrap>} />
            <Route path="/resources/social-proof/social-proof-psychology/" element={<SuspenseWrap><SocialProofPsychology /></SuspenseWrap>} />
            <Route path="/resources/reviews/" element={<ReviewsHub />} />
            <Route path="/resources/conversion-analytics/" element={<ConversionAnalyticsHub />} />
            <Route path="/resources/website-trust/" element={<WebsiteTrustHub />} />
            <Route path="/resources/testimonials/" element={<TestimonialsResourceHub />} />

            {/* SEO Landing pages */}
            <Route path="/best-social-proof-software/" element={<SuspenseWrap><BestSocialProofSoftware /></SuspenseWrap>} />
            <Route path="/social-proof-notifications/" element={<SuspenseWrap><SocialProofNotificationsLanding /></SuspenseWrap>} />
            <Route path="/conversion-optimization-tools/" element={<SuspenseWrap><ConversionOptimizationTools /></SuspenseWrap>} />

            {/* Legal */}
            <Route path="/privacy-policy/" element={<SuspenseWrap><PrivacyPolicy /></SuspenseWrap>} />
            <Route path="/terms-of-service/" element={<SuspenseWrap><TermsOfService /></SuspenseWrap>} />

            {/* Redirect */}
            <Route path="/home/" element={<Navigate to="/" replace />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
