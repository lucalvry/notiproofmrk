import ComparisonPageTemplate, { ComparisonData } from "@/components/ComparisonPageTemplate";

const data: ComparisonData = {
  competitorName: "ProveSource",
  competitorSlug: "provesource",
  publishDate: "2025-02-10",
  updatedDate: "2025-04-01",
  metaTitle: "NotiProof vs ProveSource: Full Comparison (2025)",
  metaDescription: "NotiProof vs ProveSource compared — features, pricing, video testimonials, analytics, and integrations. Find out which social proof tool wins.",
  canonical: "https://notiproof.com/comparisons/notiproof-vs-provesource/",
  verdict: "Both NotiProof and ProveSource offer strong notification features, but NotiProof pulls ahead with its testimonials suite, video recording, review aggregation, and campaign builder. ProveSource is a decent budget option for basic notifications.",
  verdictWinner: "notiproof",
  features: [
    { feature: "Real-time Notifications", notiproof: true, competitor: true },
    { feature: "Visitor Counter", notiproof: true, competitor: true },
    { feature: "Recent Activity Feed", notiproof: true, competitor: true },
    { feature: "Video Testimonials", notiproof: true, competitor: false },
    { feature: "Testimonial Collection", notiproof: true, competitor: false },
    { feature: "Review Aggregation", notiproof: true, competitor: false },
    { feature: "A/B Testing", notiproof: true, competitor: false },
    { feature: "Campaign Builder", notiproof: true, competitor: false },
    { feature: "Analytics Dashboard", notiproof: true, competitor: true },
    { feature: "Revenue Attribution", notiproof: true, competitor: false },
    { feature: "White-Label", notiproof: true, competitor: true },
    { feature: "Geo-Targeting", notiproof: true, competitor: true },
    { feature: "Free Plan", notiproof: true, competitor: true },
    { feature: "38+ Integrations", notiproof: true, competitor: true },
    { feature: "Webhook Support", notiproof: true, competitor: true },
  ],
  pricing: [
    { name: "Free", notiproof: "$0/mo (1k events)", competitor: "$0/mo (1k visitors)" },
    { name: "Starter", notiproof: "$19/mo", competitor: "$21/mo" },
    { name: "Growth", notiproof: "$49/mo", competitor: "$42/mo" },
    { name: "Business", notiproof: "$99/mo", competitor: "$84/mo" },
  ],
  notiproofPros: [
    "Complete platform: notifications + testimonials + reviews",
    "Video testimonial recording built-in",
    "A/B testing for notifications",
    "Campaign builder with advanced targeting",
    "Revenue attribution analytics",
    "Richer free plan",
  ],
  notiproofCons: [
    "Slightly higher pricing on upper tiers",
    "Newer brand than ProveSource",
  ],
  competitorPros: [
    "Competitive pricing on mid-upper tiers",
    "Good notification customization",
    "Established player in the space",
    "Free plan with basic features",
  ],
  competitorCons: [
    "No testimonial collection or display",
    "No video testimonials",
    "No A/B testing",
    "No campaign builder",
    "No review aggregation",
  ],
  whoShouldChooseNotiproof: "You want more than just notifications — you need testimonials, reviews, A/B testing, and a campaign builder in one platform. You want video testimonials or review aggregation.",
  whoShouldChooseCompetitor: "You only need notification popups and visitor counters, you're on a tight budget, and you don't need testimonials or review features.",
  sections: [
    { title: "Features", content: "ProveSource delivers solid notification popups and visitor counters. NotiProof matches these and adds a complete testimonials suite, video recording, review aggregation, A/B testing, and a campaign builder — making it a true all-in-one platform." },
    { title: "Pricing", content: "Both offer free plans. ProveSource is slightly cheaper on mid-tier plans, but NotiProof's free plan is more generous and its paid plans include significantly more features per dollar." },
    { title: "Integrations", content: "Both platforms support 30+ integrations including Shopify, WooCommerce, WordPress, Zapier, and webhooks. NotiProof adds deeper CRM integrations (HubSpot, Salesforce) on higher plans." },
    { title: "Ease of Use", content: "Both install quickly via a JavaScript snippet. ProveSource has a clean, simple dashboard. NotiProof's dashboard has more depth but includes guided onboarding to ease the learning curve." },
    { title: "Customer Support", content: "ProveSource offers chat and email support. NotiProof provides email support, a comprehensive help center with video tutorials, and priority support on Growth+ plans." },
  ],
  faqs: [
    { q: "Is NotiProof better than ProveSource?", a: "For businesses needing more than just notifications, yes. NotiProof's testimonials, reviews, A/B testing, and campaign builder provide significantly more value." },
    { q: "Does ProveSource have video testimonials?", a: "No. ProveSource focuses on notification popups. NotiProof includes a built-in video testimonial recorder and testimonial collection tools." },
    { q: "Which has a better free plan?", a: "NotiProof's free plan includes 1,000 events with core features including testimonials. ProveSource's free plan covers 1,000 visitors with notification-only features." },
    { q: "Can I switch from ProveSource to NotiProof?", a: "Yes. Both use similar JavaScript snippets, so migration is straightforward. You can recreate your notification designs using NotiProof's templates in minutes." },
  ],
};

export default function NotiProofVsProveSource() {
  return <ComparisonPageTemplate data={data} />;
}
