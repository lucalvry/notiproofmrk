import { Bell, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import ProductFeaturePage from "@/components/ProductFeaturePage";
import StatCallout from "@/components/StatCallout";
import KeyTakeaway from "@/components/KeyTakeaway";

const deepDive = (
  <>
    <h2 id="how-notifications-work">How Do Social Proof Notifications Work?</h2>
    <p>
      Social proof notifications display real-time customer activity — purchases, signups, reviews — as small pop-up alerts on your website. They leverage a psychological principle called <strong>informational social influence</strong>: when people are uncertain, they look to the actions of others to guide their own decisions.
    </p>
    <p>
      When a visitor lands on your product page and sees "Sarah from Austin just purchased this item 3 minutes ago," it triggers two powerful responses. First, <strong>validation</strong> — someone else trusts this product enough to buy it. Second, <strong>urgency</strong> — demand is real and ongoing, which activates loss aversion. Research from the <em>Journal of Consumer Research</em> shows that social proof cues can increase purchase intent by up to 15% in e-commerce settings, while industry benchmarks from companies like Fomo and Proof report conversion lifts of 10–35% depending on traffic volume and product category.
    </p>
    <p>
      NotiProof captures events from your connected platforms — Shopify orders, Stripe payments, CRM signups, webhook events — and renders them as branded notifications on your site. Each notification includes the customer's first name, location (city-level), the action taken, and a relative timestamp ("2 minutes ago"). The entire pipeline runs asynchronously: a lightweight JavaScript snippet (under 15 KB gzipped) fetches queued notifications from NotiProof's CDN and renders them without blocking your page load or affecting Core Web Vitals.
    </p>

    <h2 id="notification-types">What Types of Notifications Convert Best?</h2>
    <p>
      The most effective notification type depends on your business model, but purchase alerts consistently outperform other formats in e-commerce. NotiProof's internal data across 4,000+ websites shows clear performance differences by notification type.
    </p>
    <StatCallout stat="17% avg. conversion lift" context="Recent purchase notifications on product pages — the highest-performing notification type." />
    <p>
      However, context matters. For SaaS landing pages, <strong>trial signup notifications</strong> ("Jake from London just started a free trial") outperform purchase alerts because they reduce the perceived risk of trying a new tool. For service businesses, <strong>booking confirmations</strong> and <strong>inquiry alerts</strong> work best because they signal active demand.
    </p>
    <p>
      NotiProof supports five core notification types: purchase alerts, signup/registration events, review and rating submissions, visitor count displays, and custom activity events via webhooks. You can run multiple types simultaneously and use the <Link to="/product/campaign-builder/">Campaign Builder</Link> to A/B test which combination produces the highest conversion rate for each page.
    </p>
    <KeyTakeaway>
      Purchase alerts deliver 17% conversion lift on product pages, signup alerts deliver 12%, and review notifications deliver 9%. Use the Campaign Builder to A/B test combinations for your specific audience.
    </KeyTakeaway>

    <h2 id="notification-placement">Where Should You Place Social Proof Notifications?</h2>
    <p>
      Notification placement directly impacts effectiveness. The best position depends on your page layout and conversion goal, but the bottom-left corner of the viewport is the industry standard — it's visible without obstructing primary CTAs, and users have learned to associate that position with activity alerts.
    </p>
    <StatCallout stat="23% better performance" context="Bottom-left notifications outperform top-right on e-commerce product pages." />
    <p>
      NotiProof supports six placement positions: bottom-left, bottom-right, top-left, top-right, bottom-center, and top-center. For SaaS landing pages with a centered hero CTA, bottom-right or bottom-center prevents visual competition with the main call-to-action.
    </p>
    <p>
      Beyond position, <strong>page targeting</strong> is critical. Showing purchase alerts on your blog dilutes their impact. Instead, use NotiProof's display rules to show purchase notifications only on product and checkout pages, signup alerts on your pricing page, and review notifications on your homepage and landing pages. This targeted approach produces 2–3x better results than site-wide, untargeted notifications.
    </p>
    <KeyTakeaway>
      Use bottom-left placement for e-commerce and bottom-right for SaaS. Always target notifications to relevant pages — never show purchase alerts on blog posts.
    </KeyTakeaway>

    <h2 id="measure-performance">How Do You Measure Notification Performance?</h2>
    <p>
      Every notification NotiProof displays is tracked with three core metrics: <strong>impressions</strong> (how many times it was shown), <strong>clicks</strong> (how many visitors interacted with it), and <strong>conversions</strong> (how many visitors who saw a notification completed your goal action). The <Link to="/product/analytics-conversion-insights/">Analytics dashboard</Link> computes conversion lift by comparing the conversion rate of visitors who saw notifications against a holdback control group.
    </p>
    <p>
      This methodology is more rigorous than simple before/after comparisons because it accounts for traffic mix, seasonality, and other variables. NotiProof also tracks revenue attribution — the total dollar value of conversions influenced by notifications — so you can calculate exact ROI. For example, if your Pro plan costs $29/month and NotiProof-attributed revenue is $4,200, your ROI is 144x.
    </p>

    <h2 id="performance-impact">Will Notifications Slow Down My Website?</h2>
    <p>
      No. NotiProof's embed script is under 15 KB gzipped and loads asynchronously, meaning it never blocks your page's critical rendering path. The script defers loading until after the DOM is interactive, so it has zero impact on Largest Contentful Paint (LCP), First Input Delay (FID), or Cumulative Layout Shift (CLS) — the three Core Web Vitals that affect Google rankings.
    </p>
    <p>
      Notification data is served from a global CDN with edge caching, so API calls resolve in under 50ms for most visitors. The notification DOM elements are injected with fixed positioning and predetermined dimensions, preventing any layout shift. Independent tests by customers running Google Lighthouse audits before and after installing NotiProof show no measurable change in performance scores.
    </p>
    <KeyTakeaway>
      NotiProof is under 15 KB, loads async, and has zero impact on Core Web Vitals. CDN-served data resolves in under 50ms.
    </KeyTakeaway>
  </>
);

const tocSections = [
  { id: "how-notifications-work", label: "How Do Social Proof Notifications Work?" },
  { id: "notification-types", label: "What Types of Notifications Convert Best?" },
  { id: "notification-placement", label: "Where Should You Place Notifications?" },
  { id: "measure-performance", label: "How Do You Measure Performance?" },
  { id: "performance-impact", label: "Will Notifications Slow Down My Website?" },
];

export default function SocialProofNotifications() {
  return (
    <ProductFeaturePage
      title="Social Proof Notifications"
      metaTitle="Social Proof Notifications – Real-Time Purchase & Signup Alerts"
      metaDescription="Show real-time purchase alerts, signup notifications, and activity feeds on your website. Increase conversions by 10-35% with NotiProof social proof notifications."
      canonical="https://notiproof.com/product/social-proof-notifications/"
      headline="Real-Time Social Proof Notifications That Convert"
      description="Display live purchase alerts, signup notifications, and activity feeds to create urgency, build trust, and increase conversions by 10–35%."
      icon={Bell}
      benefits={[
        "Show real-time purchase and signup activity",
        "Create urgency with live notifications",
        "Build instant trust with new visitors",
        "Fully customizable design and timing",
        "Smart display rules based on visitor behavior",
        "Works on any website with 1 line of code",
      ]}
      withoutNotiproof={[
        "Visitors land on your site and see no evidence anyone else has purchased",
        "No urgency — shoppers browse casually and leave without converting",
        "First-time visitors don't trust your brand enough to buy",
        "You have no data on what social proof messaging works",
      ]}
      withNotiproof={[
        "Live purchase and signup alerts show constant activity",
        "Real-time notifications create FOMO and urgency to act now",
        "Third-party validation from real customers builds instant credibility",
        "A/B test different notification types and measure conversion lift",
      ]}
      deepDiveContent={deepDive}
      deepDiveToc={tocSections}
      howItWorks={[
        { step: "Install", desc: "Add one line of JavaScript to your website header. No developers needed." },
        { step: "Configure", desc: "Choose notification types, customize design, and set display rules in the dashboard." },
        { step: "Convert", desc: "Watch real-time notifications boost trust and drive more conversions." },
      ]}
      featureDetails={[
        { icon: Bell, title: "Purchase Alerts", desc: "Show recent purchases in real-time to create urgency and validate buying decisions for hesitant visitors." },
        { icon: Zap, title: "Smart Targeting", desc: "Display the right notification to the right visitor based on page, location, device, and behavior patterns." },
        { icon: BarChart3, title: "Conversion Tracking", desc: "Measure exactly how many conversions each notification drives with built-in attribution analytics." },
      ]}
      testimonial={{
        quote: "We added NotiProof notifications to our product pages and saw a 31% increase in add-to-cart rate within the first week.",
        name: "Emma Rodriguez",
        role: "E-commerce Director, StyleHaven",
        metric: "+31% Add-to-Cart Rate",
      }}
      useCases={[
        { title: "E-commerce Stores", desc: "Show recent purchases to drive FOMO and urgency.", href: "/use-cases/ecommerce/" },
        { title: "SaaS Products", desc: "Display trial signups to build credibility.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Service Businesses", desc: "Show booking activity to win more clients.", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
      ]}
      faqs={[
        { q: "What types of notifications can I show?", a: "You can show purchase alerts, signup notifications, visitor counts, review notifications, and custom activity alerts." },
        { q: "Will notifications slow down my website?", a: "No. Our script is lightweight (under 15KB) and loads asynchronously. It has zero impact on page speed." },
        { q: "Can I customize the notification design?", a: "Yes. You can customize colors, text, positioning, timing, and animations to match your brand." },
        { q: "How do I track notification performance?", a: "Our built-in analytics dashboard shows impressions, clicks, and conversion lift for every notification." },
      ]}
      relatedProducts={[
        { label: "Recent Activity", href: "/product/recent-activity-notifications/" },
        { label: "Visitor Counter", href: "/product/visitor-counter-live-visitors/" },
        { label: "Campaign Builder", href: "/product/campaign-builder/" },
        { label: "Analytics", href: "/product/analytics-conversion-insights/" },
      ]}
      resourceLinks={[
        { label: "What Is Social Proof?", href: "/resources/social-proof/what-is-social-proof/", context: "Understand the psychology behind why social proof notifications work — read our guide on" },
        { label: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", context: "Learn how to implement social proof across your entire website in our comprehensive guide:" },
        { label: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", context: "See real-world examples of notification-driven social proof in action:" },
      ]}
      comparisonLinks={[
        { label: "NotiProof vs Fomo", href: "/comparisons/notiproof-vs-fomo/" },
        { label: "NotiProof vs TrustPulse", href: "/comparisons/notiproof-vs-trustpulse/" },
        { label: "NotiProof vs Proof", href: "/comparisons/notiproof-vs-proof/" },
        { label: "NotiProof vs ProveSource", href: "/comparisons/notiproof-vs-provesource/" },
      ]}
    />
  );
}
