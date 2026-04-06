import { Video, Mic, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ProductFeaturePage from "@/components/ProductFeaturePage";
import StatCallout from "@/components/StatCallout";
import KeyTakeaway from "@/components/KeyTakeaway";

const deepDive = (
  <>
    <h2 id="video-vs-text">Why Are Video Testimonials More Effective Than Text?</h2>
    <p>
      Video testimonials outperform text reviews because they carry three trust signals that text cannot replicate: <strong>facial expressions</strong>, <strong>vocal tone</strong>, and <strong>body language</strong>. According to Albert Mehrabian's communication research, 93% of emotional communication is non-verbal.
    </p>
    <StatCallout stat="4x conversion lift" context="Video testimonials vs. text-only testimonial pages (NotiProof customer average)." />
    <p>
      Wyzowl's 2024 Video Marketing Statistics report found that 79% of consumers say a brand's video testimonials convince them to purchase a product or service. The key is reducing friction in the recording process — the easier it is for customers to record, the more videos you'll collect.
    </p>

    <h2 id="browser-recording">How Does Browser-Based Recording Work?</h2>
    <p>
      NotiProof's video recorder uses the browser's native <strong>MediaRecorder API</strong>, which is supported by Chrome, Firefox, Safari, and Edge on both desktop and mobile devices. Customers simply click a recording link, grant camera and microphone access, and start recording. No app downloads, no plugins, no account creation.
    </p>
    <p>
      The recording interface displays <strong>guided prompts</strong> — questions you've configured in the NotiProof dashboard — one at a time on screen. This is critical because unguided recordings typically ramble for 3–5 minutes with no clear narrative. Guided prompts keep responses focused to 60–90 seconds.
    </p>
    <p>
      After recording, the video is uploaded directly to NotiProof's global CDN. Automatic processing generates multiple quality levels (360p, 720p, 1080p) for adaptive streaming, a thumbnail image, and AI-powered <strong>transcription with captions</strong>. The entire process takes under 3 minutes for the customer.
    </p>
    <KeyTakeaway>
      Browser-based recording with guided prompts produces focused 60–90 second testimonials. No apps, no friction — customers click a link and talk.
    </KeyTakeaway>

    <h2 id="get-customers-to-record">How Do You Get Customers to Actually Record?</h2>
    <p>
      Response rates for video testimonial requests are naturally lower than text, but NotiProof's guided approach significantly improves participation. Three strategies consistently produce the best results:
    </p>
    <p>
      <strong>1. Timing:</strong> Send the request within 24–48 hours of a positive experience. NotiProof integrates with your CRM and e-commerce platform to trigger requests automatically at these moments.
    </p>
    <p>
      <strong>2. Simplicity:</strong> The recording link must lead directly to the recorder — no login, no signup. NotiProof's one-click recording flow eliminates every barrier.
    </p>
    <StatCallout stat="3–5x higher submission rates" context="When offering small incentives (discount code, gift card) alongside the recording request." />
    <p>
      <strong>3. Incentives (optional):</strong> Offering a small incentive — a discount code, gift card, or charitable donation — can increase video submission rates dramatically. NotiProof supports post-submission redirect URLs where you can deliver incentive codes automatically.
    </p>

    <h2 id="after-recording">What Happens After a Customer Records?</h2>
    <p>
      Recorded videos enter your NotiProof dashboard in a "pending review" state. You can preview each video, trim the start and end points, and enable or disable auto-generated captions. Once approved, videos become available for embedding via the <Link to="/product/testimonials-widget-reviews-widget/">testimonials widget</Link>.
    </p>
    <p>
      Auto-generated transcriptions serve two purposes: <strong>accessibility</strong> (captions for deaf and hard-of-hearing viewers) and <strong>SEO</strong> (Google can index the transcript text). NotiProof also extracts a key quote from each transcript that you can use as a pull-quote alongside the video embed.
    </p>
    <KeyTakeaway>
      Videos are auto-transcribed for accessibility and SEO. You can trim, caption, and approve before publishing — full quality control in the dashboard.
    </KeyTakeaway>
  </>
);

const tocSections = [
  { id: "video-vs-text", label: "Why Are Video Testimonials More Effective?" },
  { id: "browser-recording", label: "How Does Browser-Based Recording Work?" },
  { id: "get-customers-to-record", label: "How Do You Get Customers to Record?" },
  { id: "after-recording", label: "What Happens After Recording?" },
];

export default function VideoTestimonialRecorder() {
  return (
    <ProductFeaturePage
      title="Video Testimonial Recorder"
      metaTitle="Video Testimonial Recorder – Record Customer Video Reviews"
      metaDescription="Let customers record video testimonials directly from their browser. No app downloads, no friction. Capture authentic video social proof with NotiProof."
      canonical="https://notiproof.com/product/video-testimonial-recorder/"
      headline="Capture Authentic Video Testimonials in Minutes"
      description="Let customers record video reviews directly from their browser. No app downloads, no complicated setup. Just authentic social proof from real customers."
      icon={Video}
      benefits={[
        "Browser-based recording — no app needed",
        "Guided recording prompts for better responses",
        "Automatic transcription and captions",
        "CDN-hosted video delivery",
        "Embeddable video testimonial wall",
        "Mobile-friendly recording experience",
      ]}
      withoutNotiproof={[
        "Asking customers to download an app or use Zoom for a testimonial kills response rates",
        "Unguided recordings ramble — customers don't know what to say",
        "Hosting and embedding video is a technical headache",
        "No transcription means inaccessible content and no SEO value",
      ]}
      withNotiproof={[
        "One-click browser recording — customers just open a link and talk",
        "Guided prompts produce focused, compelling stories every time",
        "Automatic CDN hosting with embeddable widgets — no technical work",
        "Auto-generated captions and transcriptions for accessibility and SEO",
      ]}
      deepDiveContent={deepDive}
      deepDiveToc={tocSections}
      howItWorks={[
        { step: "Invite", desc: "Send customers a recording link via email or embed it on a thank-you page." },
        { step: "Record", desc: "Customers record directly in their browser with guided prompts to help them share their story." },
        { step: "Publish", desc: "Review, approve, and publish video testimonials on your website with one click." },
      ]}
      featureDetails={[
        { icon: Mic, title: "Guided Prompts", desc: "Pre-written questions guide customers through their story — producing focused, compelling testimonials every time." },
        { icon: Globe, title: "Global CDN Hosting", desc: "Videos are hosted on a worldwide CDN for instant playback anywhere, with adaptive quality streaming." },
        { icon: Sparkles, title: "Auto Transcription", desc: "AI-powered transcription generates captions automatically — improving accessibility and adding SEO value." },
      ]}
      testimonial={{
        quote: "Video testimonials converted 4x better than text for us. NotiProof made it easy for customers to record — we got 12 videos in the first week.",
        name: "Alex Rivera",
        role: "Founder, LearnStack Academy",
        metric: "4x Higher Conversion vs Text",
      }}
      useCases={[
        { title: "SaaS Products", desc: "Capture user success stories.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { title: "Course Creators", desc: "Show student transformation stories.", href: "/use-cases/" },
        { title: "Agencies", desc: "Collect client video reviews.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
      faqs={[
        { q: "Do customers need to install anything?", a: "No. Recording works entirely in the browser — desktop and mobile." },
        { q: "What video quality is supported?", a: "Videos are recorded in HD (720p or 1080p) depending on the customer's camera." },
        { q: "Can I add my branding to the recorder?", a: "Yes. Customize the recording page with your logo, colors, and guided prompts." },
        { q: "Where are videos hosted?", a: "Videos are hosted on our global CDN for fast, reliable playback anywhere in the world." },
      ]}
      relatedProducts={[
        { label: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/" },
        { label: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/" },
        { label: "Review Aggregation", href: "/product/review-aggregation-showcase-system/" },
      ]}
      resourceLinks={[
        { label: "Video Testimonial Guide", href: "/resources/testimonials/video-testimonial-guide/", context: "Read our complete guide to recording and displaying video testimonials:" },
        { label: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", context: "See how video testimonials outperform text in real-world conversion examples:" },
        { label: "Testimonials Resources", href: "/resources/testimonials/", context: "Explore our complete guide to collecting and leveraging customer testimonials:" },
      ]}
      comparisonLinks={[
        { label: "NotiProof vs Fomo", href: "/comparisons/notiproof-vs-fomo/" },
        { label: "NotiProof vs Proof", href: "/comparisons/notiproof-vs-proof/" },
      ]}
    />
  );
}
