import { Link } from "react-router-dom";
import ComparisonPageTemplate, { ComparisonData } from "@/components/ComparisonPageTemplate";

const editorialContent = (
  <>
    <h2 className="text-2xl font-bold mt-10 mb-3">How Do NotiProof and Trustmary Compare for Testimonials?</h2>
    <p className="text-lg font-medium text-foreground mb-4">Trustmary specializes in testimonial and review collection with NPS surveys, while NotiProof combines testimonial features with real-time social proof notifications, visitor counters, A/B testing, and a campaign builder — offering broader conversion optimization from a single platform.</p>
    <p className="text-muted-foreground mb-4">Trustmary has built a strong reputation for automated testimonial collection, particularly in the B2B space. Its standout features include NPS surveys that automatically convert positive responses into publishable testimonials, Google review import, and a testimonial widget builder. If your sole focus is testimonial collection and display, Trustmary does it well.</p>
    <p className="text-muted-foreground mb-4">However, NotiProof addresses the broader social proof landscape. Beyond matching Trustmary's testimonial capabilities with <Link to="/product/testimonials-collection-text-image-video/" className="text-primary hover:underline">text, image, and video testimonial collection</Link>, NotiProof adds <Link to="/product/social-proof-notifications/" className="text-primary hover:underline">real-time social proof notifications</Link>, <Link to="/product/visitor-counter-live-visitors/" className="text-primary hover:underline">visitor counters</Link>, <Link to="/product/review-aggregation-showcase-system/" className="text-primary hover:underline">review aggregation</Link>, and a <Link to="/product/campaign-builder/" className="text-primary hover:underline">campaign builder</Link> with revenue attribution.</p>

    <h2 className="text-2xl font-bold mt-10 mb-3">Which Platform Offers Better Value?</h2>
    <p className="text-lg font-medium text-foreground mb-4">NotiProof provides significantly more features per dollar — including real-time notifications, A/B testing, and analytics that Trustmary lacks — making it the better value for businesses wanting comprehensive social proof, not just testimonials.</p>
    <p className="text-muted-foreground mb-4">Trustmary's pricing starts at €24/mo (~$26/mo) for basic testimonial collection. Their Business plan at €59/mo adds video testimonials and advanced widgets. NotiProof starts free with paid plans from $5/mo that include testimonials plus notifications, reviews, and analytics — covering more ground at 75% less cost.</p>
    <p className="text-muted-foreground mb-4">The total cost of ownership comparison is even more telling. With Trustmary, you'd need separate tools for real-time notifications ($25-75/mo), visitor counting ($10-30/mo), and A/B testing ($50-100/mo). NotiProof bundles everything into one subscription, potentially saving $100-200/mo versus a Trustmary-based stack.</p>

    <h2 className="text-2xl font-bold mt-10 mb-3">Does Trustmary's NPS Feature Make It Worth the Premium?</h2>
    <p className="text-lg font-medium text-foreground mb-4">Trustmary's NPS-to-testimonial automation is a clever feature for B2B companies, but it serves a narrow use case — most businesses get better ROI from NotiProof's broader social proof toolkit that includes notifications, reviews, and conversion analytics alongside testimonials.</p>
    <p className="text-muted-foreground mb-4">The NPS workflow works like this: Trustmary sends an NPS survey, identifies promoters (score 9-10), then asks those promoters for a publishable testimonial. It's elegant for companies already running NPS programs. However, NotiProof's <Link to="/resources/testimonials/testimonial-request-email-templates/" className="text-primary hover:underline">testimonial request email templates</Link> and direct collection forms achieve similar results without requiring an NPS survey infrastructure.</p>
    <p className="text-muted-foreground mb-6">For B2B companies with existing NPS workflows, Trustmary's integration makes sense. For everyone else — e-commerce stores, agencies, local businesses, SaaS companies — NotiProof's broader feature set delivers more conversion impact.</p>

    <h2 className="text-2xl font-bold mt-10 mb-3">Can NotiProof Replace Trustmary Completely?</h2>
    <p className="text-lg font-medium text-foreground mb-4">Yes — for most businesses, NotiProof replaces Trustmary while adding real-time notifications, visitor counters, and conversion analytics that Trustmary doesn't offer, making it a net upgrade rather than a lateral move.</p>
    <p className="text-muted-foreground mb-4">NotiProof's <Link to="/product/testimonials-collection-text-image-video/" className="text-primary hover:underline">testimonial collection system</Link> supports text, image, and video formats with customizable collection forms. The <Link to="/product/video-testimonial-recorder/" className="text-primary hover:underline">video testimonial recorder</Link> lets customers record testimonials directly from their browser. Combined with <Link to="/product/testimonials-widget-reviews-widget/" className="text-primary hover:underline">testimonial display widgets</Link>, you get full coverage of Trustmary's core functionality plus the broader social proof toolkit.</p>
  </>
);

const data: ComparisonData = {
  competitorName: "Trustmary",
  competitorSlug: "trustmary",
  publishDate: "2025-06-15",
  updatedDate: "2026-04-01",
  metaTitle: "NotiProof vs Trustmary: Full Comparison (2026)",
  metaDescription: "Compare NotiProof and Trustmary — testimonials, notifications, reviews, pricing, and features. Find the right social proof tool for your business.",
  canonical: "https://notiproof.com/comparisons/notiproof-vs-trustmary/",
  verdict: "NotiProof is the more complete platform — matching Trustmary's testimonial features while adding real-time notifications, review aggregation, A/B testing, and a campaign builder at lower pricing. Trustmary is a good choice if you specifically need NPS-driven testimonial collection.",
  verdictWinner: "notiproof",
  editorialContent,
  features: [
    { feature: "Real-time Notifications", notiproof: true, competitor: false },
    { feature: "Visitor Counter", notiproof: true, competitor: false },
    { feature: "Testimonial Collection", notiproof: true, competitor: true },
    { feature: "Video Testimonials", notiproof: true, competitor: true },
    { feature: "NPS Surveys", notiproof: false, competitor: true },
    { feature: "Review Aggregation", notiproof: true, competitor: true },
    { feature: "Testimonial Widgets", notiproof: true, competitor: true },
    { feature: "A/B Testing", notiproof: true, competitor: false },
    { feature: "Campaign Builder", notiproof: true, competitor: false },
    { feature: "Analytics Dashboard", notiproof: true, competitor: true },
    { feature: "Revenue Attribution", notiproof: true, competitor: false },
    { feature: "White-Label", notiproof: true, competitor: true },
    { feature: "Free Plan", notiproof: true, competitor: true },
    { feature: "38+ Integrations", notiproof: true, competitor: false },
  ],
  pricing: [
    { name: "Free", notiproof: "$0/mo (5K views)", competitor: "€0/mo (limited)" },
    { name: "Starter", notiproof: "$5/mo", competitor: "€24/mo (~$26)" },
    { name: "Standard", notiproof: "$15/mo", competitor: "€59/mo (~$64)" },
    { name: "Professional", notiproof: "$40/mo", competitor: "€119/mo (~$129)" },
  ],
  notiproofPros: [
    "Real-time social proof notifications included",
    "Visitor counter and activity feeds",
    "A/B testing for all social proof elements",
    "Campaign builder with revenue attribution",
    "75% lower pricing than Trustmary",
    "38+ native integrations",
  ],
  notiproofCons: [
    "No NPS survey functionality",
    "Newer brand in the testimonial space",
  ],
  competitorPros: [
    "NPS-to-testimonial automation",
    "Strong B2B testimonial workflow",
    "Google review import",
    "Established testimonial brand",
  ],
  competitorCons: [
    "No real-time notifications or visitor counter",
    "No A/B testing or campaign builder",
    "Higher pricing for comparable features",
    "Narrower feature set (testimonials only)",
    "Limited integrations outside CRM tools",
  ],
  whoShouldChooseNotiproof: "You want a complete social proof platform with notifications, testimonials, reviews, and analytics. You need real-time social proof beyond just testimonials. You want lower pricing with more features.",
  whoShouldChooseCompetitor: "You're a B2B company with an existing NPS program and want to automate the testimonial collection workflow from survey responses. You don't need notifications or visitor counters.",
  sections: [
    { title: "Features", content: "Trustmary focuses on testimonial collection with an NPS-driven workflow. NotiProof matches the testimonial capabilities and adds real-time notifications, visitor counters, review aggregation, and a campaign builder with A/B testing." },
    { title: "Pricing", content: "Trustmary starts at €24/mo ($26), while NotiProof offers a more generous free plan and paid tiers from $5/mo with significantly more features included per plan." },
    { title: "Integrations", content: "Trustmary integrates primarily with CRM and survey tools. NotiProof offers 38+ integrations including Shopify, WooCommerce, WordPress, HubSpot, Stripe, Zapier, and more." },
    { title: "Ease of Use", content: "Both platforms offer simple setup. Trustmary's NPS workflow requires more initial configuration. NotiProof installs in 60 seconds and offers guided onboarding." },
    { title: "Customer Support", content: "Trustmary offers chat and email support. NotiProof provides email support, video tutorials, and a comprehensive help center." },
  ],
  faqs: [
    { q: "Is NotiProof better than Trustmary?", a: "For most businesses, yes. NotiProof offers all of Trustmary's testimonial features plus real-time notifications, A/B testing, and a campaign builder at lower pricing." },
    { q: "Does NotiProof have NPS surveys?", a: "No. NotiProof uses direct testimonial request forms and email templates instead of NPS surveys. Both approaches effectively collect customer testimonials." },
    { q: "Can I migrate from Trustmary to NotiProof?", a: "Yes. Export your testimonials from Trustmary and import them into NotiProof's testimonial system. The widget setup takes minutes." },
    { q: "Which is better for B2B?", a: "If you already run NPS surveys, Trustmary's automation is useful. For everything else — notifications, reviews, analytics — NotiProof provides more value for B2B companies." },
  ],
};

export default function NotiProofVsTrustmary() {
  return <ComparisonPageTemplate data={data} />;
}
