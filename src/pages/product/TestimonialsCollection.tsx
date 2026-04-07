import { MessageSquare, Mail, ImageIcon, Video } from "lucide-react";
import { Link } from "react-router-dom";
import ProductFeaturePage from "@/components/ProductFeaturePage";
import StatCallout from "@/components/StatCallout";
import KeyTakeaway from "@/components/KeyTakeaway";

const deepDive = (
  <>
    <h2 id="great-testimonial">What Makes a Great Customer Testimonial?</h2>
    <p>
      A great testimonial does more than say "I loved it." The most effective customer testimonials share three elements: a <strong>specific problem</strong> the customer faced before using your product, a <strong>concrete result</strong> they achieved after, and an <strong>emotional detail</strong> that makes the story relatable.
    </p>
    <StatCallout stat="380% conversion increase" context="Products with reviews from verified buyers vs. those without (Spiegel Research Center)." />
    <p>
      NotiProof's collection forms are designed to guide customers toward producing high-quality, conversion-driving testimonials. Rather than a single open text box, the form asks three sequential questions: "What problem were you trying to solve?", "How has [product] helped you?", and "What specific result or metric has improved?" This guided approach produces testimonials that are 2.4x more detailed than free-form submissions, based on analysis of 12,000+ NotiProof-collected testimonials.
    </p>
    <p>
      Multi-format collection is equally important. Text testimonials are the baseline, but <strong>photo testimonials</strong> (showing the customer or their results) increase trust by 35%, and <strong>video testimonials</strong> convert at 4x the rate of text alone according to Wyzowl's 2024 Video Marketing Statistics report. NotiProof's collection form lets customers choose their preferred format — text, photo, or <Link to="/product/video-testimonial-recorder/">video</Link> — in a single, frictionless flow.
    </p>
    <KeyTakeaway>
      Guide customers with structured questions instead of open text boxes. Photo testimonials add 35% more trust; video converts at 4x the rate of text alone.
    </KeyTakeaway>

    <h2 id="automate-collection">How Do You Automate Testimonial Collection?</h2>
    <p>
      The best time to ask for a testimonial is immediately after a positive experience — a successful purchase, a support ticket resolved, a milestone reached. Manual outreach misses this window because marketers are busy and can't track every customer touchpoint. Automation solves this by triggering collection requests at precisely the right moment.
    </p>
    <p>
      NotiProof integrates with your existing tools — <Link to="/integrations/shopify/">Shopify</Link>, Stripe, HubSpot, Intercom, and more — to detect positive events automatically. When a customer completes a purchase, receives a delivered order, or achieves a product milestone, NotiProof sends a branded email with a one-click link to the collection form.
    </p>
    <StatCallout stat="12–18% response rate" context="Automated collection campaigns vs. 2–5% for manual one-off email requests." />
    <p>
      NotiProof's follow-up sequences (a gentle reminder 3 days later, a final nudge at 7 days) push response rates even higher. One NotiProof customer, FreshBrew Co., collected 47 new testimonials in their first 30 days using automated post-purchase triggers — up from 3 testimonials gathered manually over the prior quarter.
    </p>

    <h2 id="organize-manage">How Should You Organize and Manage Testimonials?</h2>
    <p>
      As your testimonial library grows, organization becomes critical. NotiProof provides a centralized testimonial dashboard where every submission is stored with metadata: customer name, company, role, submission date, format (text/photo/video), star rating, and tags. You can filter, search, and sort testimonials by any of these attributes.
    </p>
    <p>
      The <strong>approval workflow</strong> ensures quality control. Every new submission enters a "pending" state. You review it, optionally edit for grammar or clarity (with the customer's consent), and approve or reject it. Approved testimonials become available for display in your <Link to="/product/testimonials-widget-reviews-widget/">testimonial widgets</Link>, notification campaigns, and export feeds.
    </p>
    <p>
      Tagging is particularly powerful for larger libraries. Tag testimonials by product, use case, customer segment, or outcome ("increased revenue," "saved time," "improved retention") to quickly find the right social proof for each page or campaign.
    </p>
    <KeyTakeaway>
      Use tags (product, use case, outcome) to organize testimonials. The approval workflow ensures only your best stories go live while keeping everything searchable in the dashboard.
    </KeyTakeaway>

    <h2 id="import-reviews">Can You Import Existing Reviews Into NotiProof?</h2>
    <p>
      Yes. Most businesses already have reviews scattered across Google, Trustpilot, G2, Capterra, Yelp, Facebook, and other platforms. NotiProof's import feature lets you pull these existing reviews into your centralized testimonial library, so you can display them alongside NotiProof-collected testimonials in a unified widget.
    </p>
    <p>
      The import process connects to each platform's API (or uses manual CSV upload for platforms without API access), pulls review text, star rating, author name, and date, and creates a testimonial record in your dashboard. Imported reviews are clearly labeled with their source platform for transparency.
    </p>
  </>
);

const tocSections = [
  { id: "great-testimonial", label: "What Makes a Great Customer Testimonial?" },
  { id: "automate-collection", label: "How Do You Automate Collection?" },
  { id: "organize-manage", label: "How Should You Organize Testimonials?" },
  { id: "import-reviews", label: "Can You Import Existing Reviews?" },
];

export default function TestimonialsCollection() {
  return (
    <ProductFeaturePage
      title="Testimonials Collection"
      metaTitle="Testimonials Collection – Text, Image & Video Customer Reviews"
      metaDescription="Collect customer testimonials in text, image, and video formats. Automate testimonial requests and build a powerful wall of social proof with NotiProof."
      canonical="https://notiproof.com/product/testimonials-collection-text-image-video/"
      headline="Collect Customer Testimonials Effortlessly"
      description="Gather text, image, and video testimonials from happy customers with automated collection workflows. Build trust at scale with genuine customer stories."
      descriptionContent={
        <p>Gather text, image, and video testimonials from happy customers with automated collection workflows. Record authentic stories with the <Link to="/product/video-testimonial-recorder/">Video Testimonial Recorder</Link>, then display them in the <Link to="/product/testimonials-widget-reviews-widget/">testimonials widget</Link>. Learn <Link to="/resources/testimonials/how-to-collect-testimonials/">how to collect testimonials</Link> effectively.</p>
      }
      icon={MessageSquare}
      benefits={[
        "Collect text, image, and video testimonials",
        "Automated email and link-based collection",
        "Customizable collection forms",
        "Approval workflow for quality control",
        "Embeddable testimonial wall",
        "Import existing reviews from other platforms",
      ]}
      withoutNotiproof={[
        "Collecting testimonials is manual, inconsistent, and time-consuming",
        "Customers forget or ignore one-off email requests for reviews",
        "No central place to store, organize, and manage testimonials",
        "You miss the window — the best time to collect is right after a positive experience",
      ]}
      withNotiproof={[
        "Automated workflows send collection requests at the perfect moment",
        "Multi-format collection: text, photo, and video in one frictionless form",
        "Central dashboard with approval workflow — curate the best stories",
        "Import existing Google, Trustpilot, and G2 reviews to consolidate everything",
      ]}
      deepDiveContent={deepDive}
      deepDiveToc={tocSections}
      howItWorks={[
        { step: "Request", desc: "Send automated testimonial requests via email or share a collection link with customers." },
        { step: "Collect", desc: "Customers submit text, upload images, or record video testimonials in seconds." },
        { step: "Showcase", desc: "Approve and display testimonials on a beautiful, embeddable wall on your website." },
      ]}
      featureDetails={[
        { icon: Mail, title: "Automated Outreach", desc: "Trigger collection emails after purchases, milestones, or support resolutions — when customers are happiest." },
        { icon: ImageIcon, title: "Multi-Format Collection", desc: "One form collects text, photos, and video. Customers choose the format that feels natural to them." },
        { icon: Video, title: "Video Testimonials", desc: "Browser-based video recording with guided prompts. No app downloads, no friction — just authentic stories." },
      ]}
      testimonial={{
        quote: "We went from 3 testimonials to 47 in the first month. The automated emails after purchase made all the difference.",
        name: "Sarah Mitchell",
        role: "Marketing Director, FreshBrew Co.",
        metric: "47 Testimonials in 30 Days",
      }}
      useCases={[
        { title: "E-commerce", desc: "Collect product reviews with photos.", href: "/use-cases/ecommerce/" },
        { title: "SaaS", desc: "Gather user success stories.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Agencies", desc: "Showcase client results.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
      faqs={[
        { q: "How do customers submit testimonials?", a: "You share a collection link or send automated emails. Customers fill out a simple form — no account needed." },
        { q: "Can I moderate testimonials before they go live?", a: "Yes. All testimonials go through an approval workflow. You control what gets published." },
        { q: "Can I import existing reviews?", a: "Yes. You can import reviews from Google, Trustpilot, G2, and other platforms." },
        { q: "Is video testimonial hosting included?", a: "Yes. Videos are hosted on our CDN and embedded directly on your testimonial wall." },
      ]}
      relatedProducts={[
        { label: "Video Recorder", href: "/product/video-testimonial-recorder/" },
        { label: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/" },
        { label: "Review Aggregation", href: "/product/review-aggregation-showcase-system/" },
      ]}
      resourceLinks={[
        { label: "How to Collect Testimonials", href: "/resources/testimonials/how-to-collect-testimonials/", context: "Read our comprehensive guide on collecting customer testimonials that convert:" },
        { label: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/", context: "Testimonials are one of the most powerful types of social proof — learn about all the types:" },
        { label: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", context: "See real examples of how businesses use collected testimonials to drive conversions:" },
      ]}
      comparisonLinks={[
        { label: "NotiProof vs Fomo", href: "/comparisons/notiproof-vs-fomo/" },
        { label: "NotiProof vs TrustPulse", href: "/comparisons/notiproof-vs-trustpulse/" },
        { label: "NotiProof vs Proof", href: "/comparisons/notiproof-vs-proof/" },
      ]}
    />
  );
}
