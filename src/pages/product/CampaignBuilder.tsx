import { Zap, Target, Calendar, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import ProductFeaturePage from "@/components/ProductFeaturePage";
import StatCallout from "@/components/StatCallout";
import KeyTakeaway from "@/components/KeyTakeaway";

const deepDive = (
  <>
    <h2 id="ab-testing">How Does A/B Testing Improve Social Proof Campaigns?</h2>
    <p>
      A/B testing eliminates guesswork from your social proof strategy. Instead of assuming that "Sarah from Austin just purchased" outperforms "12 people bought this today," you run both variants simultaneously, split traffic evenly, and let statistical significance determine the winner.
    </p>
    <p>
      Create up to four variants per campaign, each with different messaging, design, positioning, or timing. NotiProof automatically splits traffic and tracks three metrics per variant: <strong>impression rate</strong>, <strong>click-through rate</strong>, and <strong>conversion rate</strong>.
    </p>
    <StatCallout stat="38% avg. performance gap" context="Winning A/B test variant outperforms loser by 38% in conversion rate (2,000+ tests)." />
    <p>
      That means every campaign you don't test is leaving significant revenue on the table. Read more about <Link to="/resources/conversion-analytics/ab-testing-social-proof/">A/B testing social proof</Link> in our comprehensive guide.
    </p>
    <KeyTakeaway>
      A/B test every campaign. The winning variant outperforms the loser by 38% on average — that's free revenue you're leaving on the table without testing.
    </KeyTakeaway>

    <h2 id="targeting-rules">What Targeting Rules Can You Use?</h2>
    <p>
      Generic, site-wide notifications waste potential. The Campaign Builder supports granular targeting rules that let you show different notifications to different visitors based on context:
    </p>
    <p>
      <strong>URL patterns:</strong> Show purchase alerts only on product pages, signup notifications on pricing pages, and review widgets on the homepage. Use exact URLs, wildcards, or regex.
    </p>
    <p>
      <strong>Geographic location:</strong> Display city-level social proof for local relevance, or target specific countries with language-appropriate messaging.
    </p>
    <p>
      <strong>Device type:</strong> Customize notification size and position for mobile vs. desktop.
    </p>
    <p>
      <strong>Referral source:</strong> Show different messages to visitors from Google vs. your email list. UTM parameters can further refine targeting.
    </p>
    <p>
      <strong>Behavioral triggers:</strong> Display notifications based on scroll depth, time on page, or exit intent.
    </p>

    <h2 id="campaign-schedules">How Do Campaign Schedules Work?</h2>
    <p>
      Not every campaign should run 24/7. The Campaign Builder supports three scheduling modes: <strong>always-on</strong>, <strong>date-bounded</strong> (starts and stops on specific dates), and <strong>recurring</strong> (specific days/hours).
    </p>
    <p>
      Date-bounded campaigns are ideal for seasonal promotions — Black Friday, product launches, flash sales. Recurring schedules enable time-sensitive strategies based on your peak conversion hours. NotiProof uses the visitor's local timezone for scheduling.
    </p>
    <KeyTakeaway>
      Use date-bounded campaigns for promotions and recurring schedules for peak hours. All scheduling uses the visitor's local timezone automatically.
    </KeyTakeaway>

    <h2 id="multiple-campaigns">Can You Run Multiple Campaigns Simultaneously?</h2>
    <p>
      Yes, and this is where the Campaign Builder's <strong>priority system</strong> becomes important. When multiple active campaigns target the same page, NotiProof uses priority scores (1–100) and display weight percentages to determine which notifications appear.
    </p>
    <p>
      For example, you might run three simultaneous campaigns on your product pages: a purchase alert (priority 90, weight 50%), a visitor counter (priority 70, weight 30%), and a review notification (priority 50, weight 20%). The <Link to="/product/analytics-conversion-insights/">analytics dashboard</Link> tracks each campaign independently.
    </p>
  </>
);

const tocSections = [
  { id: "ab-testing", label: "How Does A/B Testing Improve Campaigns?" },
  { id: "targeting-rules", label: "What Targeting Rules Can You Use?" },
  { id: "campaign-schedules", label: "How Do Campaign Schedules Work?" },
  { id: "multiple-campaigns", label: "Can You Run Multiple Campaigns?" },
];

export default function CampaignBuilder() {
  return (
    <ProductFeaturePage
      title="Campaign Builder"
      metaTitle="Campaign Builder – Create Targeted Social Proof Campaigns"
      metaDescription="Build targeted notification campaigns with smart rules, scheduling, A/B testing, and audience segmentation. Maximize conversions with NotiProof Campaign Builder."
      canonical="https://notiproof.com/product/campaign-builder/"
      headline="Build Targeted Social Proof Campaigns"
      description="Create notification campaigns with smart targeting rules, scheduling, A/B testing, and audience segmentation. Show the right message to the right visitor at the right time."
      icon={Zap}
      benefits={[
        "Visual drag-and-drop campaign builder",
        "Smart targeting rules by URL, location, device",
        "Schedule campaigns for specific dates",
        "A/B test notification variants",
        "Audience segmentation",
        "Real-time campaign analytics",
      ]}
      withoutNotiproof={[
        "Every visitor sees the same generic notification regardless of context",
        "No way to test which messages convert better — it's all guesswork",
        "Seasonal campaigns require manual work to start and stop",
        "No segmentation means you miss opportunities to personalize",
      ]}
      withNotiproof={[
        "Target by URL, location, device, referral source, and scroll depth",
        "A/B test variants with automatic traffic splitting and significance reporting",
        "Schedule campaigns in advance with automatic start and end dates",
        "Segment audiences and show personalized social proof to each group",
      ]}
      deepDiveContent={deepDive}
      deepDiveToc={tocSections}
      howItWorks={[
        { step: "Create", desc: "Use the visual builder to design notification campaigns with custom rules." },
        { step: "Target", desc: "Set targeting rules based on visitor behavior, location, device, and URL patterns." },
        { step: "Optimize", desc: "A/B test different variants and use analytics to maximize conversion rates." },
      ]}
      featureDetails={[
        { icon: Target, title: "Smart Targeting", desc: "Show different notifications based on page URL, visitor location, device type, referral source, and more." },
        { icon: FlaskConical, title: "A/B Testing", desc: "Test notification variants with automatic traffic splitting. Statistical significance tells you which wins." },
        { icon: Calendar, title: "Campaign Scheduling", desc: "Set start and end dates, day-of-week rules, and time-of-day targeting for seasonal or event-driven campaigns." },
      ]}
      testimonial={{
        quote: "A/B testing through the Campaign Builder showed us that urgency-based messages converted 2.3x better than generic ones. Game changer.",
        name: "Priya Sharma",
        role: "Head of Digital, ScaleUp Agency",
        metric: "2.3x Better Conversion",
      }}
      useCases={[
        { title: "E-commerce", desc: "Run seasonal campaigns with targeted offers.", href: "/use-cases/ecommerce/" },
        { title: "SaaS", desc: "Target free users with upgrade notifications.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Agencies", desc: "Manage campaigns across multiple clients.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
      faqs={[
        { q: "What targeting rules are available?", a: "URL patterns, geographic location, device type, referral source, time on page, scroll depth, and more." },
        { q: "Can I schedule campaigns?", a: "Yes. Set start and end dates, or run campaigns on specific days and hours." },
        { q: "How does A/B testing work?", a: "Create multiple notification variants and NotiProof automatically splits traffic and reports which performs best." },
        { q: "Is there a limit on campaigns?", a: "Campaign limits depend on your plan. Pro and Business plans include unlimited campaigns." },
      ]}
      relatedProducts={[
        { label: "Social Proof Notifications", href: "/product/social-proof-notifications/" },
        { label: "Analytics", href: "/product/analytics-conversion-insights/" },
        { label: "Integrations", href: "/product/integrations-ecosystem/" },
      ]}
      resourceLinks={[
        { label: "A/B Testing Social Proof", href: "/resources/conversion-analytics/ab-testing-social-proof/", context: "Learn what to test and how to run social proof A/B tests:" },
        { label: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", context: "Learn how targeted campaigns fit into your broader social proof marketing strategy:" },
        { label: "Conversion Analytics Hub", href: "/resources/conversion-analytics/", context: "Measure the impact of your campaigns with proper conversion analytics:" },
      ]}
      comparisonLinks={[
        { label: "NotiProof vs Fomo", href: "/comparisons/notiproof-vs-fomo/" },
        { label: "NotiProof vs Proof", href: "/comparisons/notiproof-vs-proof/" },
      ]}
    />
  );
}
