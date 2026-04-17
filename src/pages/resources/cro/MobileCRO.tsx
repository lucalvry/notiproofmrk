import ResourceArticle from "@/components/ResourceArticle";
import { Link } from "react-router-dom";
import featuredImg from "@/assets/featured-mobile-cro.jpg";

const tocSections = [
  { id: "mobile-gap", label: "Why Is There a Mobile Conversion Gap?" },
  { id: "thumb-zone", label: "How Do You Design for the Thumb Zone?" },
  { id: "page-speed", label: "How Critical Is Mobile Page Speed?" },
  { id: "mobile-forms", label: "How Do You Optimize Mobile Forms?" },
  { id: "mobile-social-proof", label: "How Does Social Proof Work on Mobile?" },
  { id: "mobile-checkout", label: "How Do You Optimize Mobile Checkout?" },
  { id: "testing-mobile", label: "How Do You Test Mobile-Specific Changes?" },
  { id: "key-takeaways", label: "Key Takeaways" },
];

const relatedArticles = [
  { title: "Landing Page Optimization", href: "/resources/cro/landing-page-optimization/", desc: "Optimize every landing page element." },
  { title: "Checkout Optimization", href: "/resources/cro/checkout-optimization/", desc: "Reduce checkout friction." },
  { title: "Product Page CRO", href: "/resources/cro/product-page-optimization/", desc: "Optimize product pages for conversion." },
  { title: "CTA Optimization", href: "/resources/cro/cta-optimization/", desc: "Button copy and placement." },
];

export default function MobileCRO() {
  return (
    <ResourceArticle
      metaTitle="Mobile CRO: Close the Conversion Gap on Mobile Devices [2026]"
      metaDescription="Mobile visitors convert 50-70% less than desktop. Learn thumb-zone design, speed optimization, mobile forms, and social proof placement to close the mobile conversion gap."
      canonical="https://notiproof.com/resources/cro/mobile-cro/"
      title="Mobile CRO: Close the Conversion Gap on Mobile Devices"
      readingTime="14 min read"
      publishDate="2025-05-14"
      tocSections={tocSections}
      pillarLink={{ label: "CRO Guide", href: "/resources/cro/" }}
      featuredImage={featuredImg}
      relatedArticles={relatedArticles}
      content={
        <div className="space-y-8 text-foreground">
          <p className="text-lg text-muted-foreground">Mobile traffic now represents 60-70% of all web traffic, yet mobile conversion rates are typically 50-70% lower than desktop. This "mobile conversion gap" represents the single largest revenue opportunity for most businesses. Closing even half of this gap on a site doing $1M annually would add $150K-$350K in revenue. This guide covers the specific optimizations that close the mobile gap.</p>

          <h2 id="mobile-gap" className="text-2xl font-bold mt-12">Why Is There a Mobile Conversion Gap?</h2>
          <p className="text-foreground"><strong>Mobile converts lower because of five friction sources: smaller screens make content harder to evaluate, typing on keyboards is slow and error-prone, page loads are slower on cellular connections, trust signals are less visible, and checkout forms are painful on small screens.</strong></p>
          <p className="text-muted-foreground">Understanding each friction source helps target optimizations:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Screen real estate:</strong> Key decision-making content (reviews, comparison, features) is harder to consume on mobile, leading to more "research on mobile, buy on desktop" behavior.</li>
            <li><strong className="text-foreground">Input friction:</strong> Typing on mobile keyboards is 3-5x slower than desktop. Every form field is more painful, making lengthy checkouts especially costly.</li>
            <li><strong className="text-foreground">Speed:</strong> Average mobile pages load in 8.6 seconds on 4G. Each second of load time reduces conversion by 7%. Mobile speed optimization has 2-3x the impact of desktop speed optimization.</li>
            <li><strong className="text-foreground">Trust perception:</strong> <Link to="/resources/website-trust/trust-badges-guide/" className="text-primary font-semibold hover:underline">Trust badges</Link>, reviews, and security indicators are often too small or missing on mobile layouts.</li>
          </ul>

          <h2 id="thumb-zone" className="text-2xl font-bold mt-12">How Do You Design for the Thumb Zone?</h2>
          <p className="text-foreground"><strong>Place primary CTAs in the bottom 40% of the screen (the natural thumb reach zone), use sticky bottom bars for key actions, make touch targets at least 44x44 pixels, and space interactive elements with minimum 8px gaps to prevent mis-taps.</strong></p>
          <p className="text-muted-foreground">Thumb-zone design principles:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Sticky CTA bar:</strong> A persistent bar at the bottom with the primary action button. This keeps the conversion action always one thumb-tap away, regardless of scroll position.</li>
            <li><strong className="text-foreground">Bottom navigation:</strong> If using navigation, place it at the bottom of the screen, not the top. Users hold their phones one-handed; bottom nav is reachable, top nav requires a grip change.</li>
            <li><strong className="text-foreground">Tap target size:</strong> All interactive elements measure at least 44x44px (Apple's Human Interface Guidelines). Small links and tiny buttons cause frustration and accidental taps.</li>
            <li><strong className="text-foreground">Spacing:</strong> Space interactive elements at least 8px apart to prevent accidental taps on adjacent elements.</li>
          </ul>

          <h2 id="page-speed" className="text-2xl font-bold mt-12">How Critical Is Mobile Page Speed?</h2>
          <p className="text-foreground"><strong>Extremely critical — a 1-second improvement in mobile load time increases conversions by 7% on average. Target under 3 seconds for LCP (Largest Contentful Paint) and under 100ms for FID (First Input Delay) on 4G connections.</strong></p>
          <p className="text-muted-foreground">Mobile speed optimization priorities:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Image optimization:</strong> Use WebP/AVIF formats, implement responsive images with srcset, lazy load below-fold images. Images typically account for 50-70% of mobile page weight.</li>
            <li><strong className="text-foreground">JavaScript reduction:</strong> Defer non-critical scripts, remove unused code, and code-split by route. Every 100KB of JavaScript adds ~300ms on mid-range mobile devices.</li>
            <li><strong className="text-foreground">Critical CSS:</strong> Inline above-fold CSS and defer the rest. This eliminates the render-blocking stylesheet fetch.</li>
            <li><strong className="text-foreground">CDN and caching:</strong> Serve assets from edge locations near users. Configure aggressive caching for static assets.</li>
            <li><strong className="text-foreground">Skeleton loading:</strong> Show layout placeholders immediately while content loads. Users perceive skeleton-loaded pages as 30% faster than blank-then-loaded pages.</li>
          </ul>

          <h2 id="mobile-forms" className="text-2xl font-bold mt-12">How Do You Optimize Mobile Forms?</h2>
          <p className="text-foreground"><strong>Use the correct HTML input types (tel for phone, email for email, numeric for ZIP), enable autocomplete, reduce fields to the absolute minimum, stack all fields in a single column, and show the keyboard type that matches each field automatically.</strong></p>
          <p className="text-muted-foreground">Mobile form optimizations:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Input types:</strong> <code className="bg-muted px-1 rounded text-xs">type="email"</code> triggers the email keyboard with @. <code className="bg-muted px-1 rounded text-xs">type="tel"</code> shows the number pad. <code className="bg-muted px-1 rounded text-xs">inputmode="numeric"</code> for ZIP codes. Correct keyboard types reduce input time by 30%.</li>
            <li><strong className="text-foreground">Autocomplete attributes:</strong> <code className="bg-muted px-1 rounded text-xs">autocomplete="email"</code>, <code className="bg-muted px-1 rounded text-xs">autocomplete="cc-number"</code>. These enable browser autofill which can complete forms in seconds.</li>
            <li><strong className="text-foreground">Single column:</strong> Never use side-by-side form fields on mobile. Stack everything vertically.</li>
            <li><strong className="text-foreground">Progressive disclosure:</strong> Show fields step by step (email first → then shipping → then payment) rather than a long scrolling form.</li>
          </ul>

          <h2 id="mobile-social-proof" className="text-2xl font-bold mt-12">How Does Social Proof Work on Mobile?</h2>
          <p className="text-foreground"><strong>On mobile, social proof must be compact and non-intrusive — use bottom-corner notification popups (not full-width banners), inline star ratings (not expandable review sections above the fold), and swipeable testimonial carousels instead of grids.</strong></p>
          <p className="text-muted-foreground">Mobile social proof adaptations:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Notification positioning:</strong> <Link to="/product/social-proof-notifications/" className="text-primary font-semibold hover:underline">Social proof notifications</Link> appear in the bottom-left corner on mobile, not top corners where they compete with the navigation bar and status bar.</li>
            <li><strong className="text-foreground">Compact format:</strong> Mobile notifications stay smaller than desktop versions. One line of text + a dismiss button. No images in notification popups on mobile — they take too much screen real estate.</li>
            <li><strong className="text-foreground">Testimonial carousels:</strong> Swipeable horizontal carousels work better than stacked testimonial cards on mobile. Users naturally swipe horizontally, and carousels don't add scroll depth.</li>
            <li><strong className="text-foreground">Star ratings inline:</strong> Show compact star ratings (★★★★★ 4.8) inline with product titles rather than separate review sections above the fold.</li>
          </ul>

          <h2 id="mobile-checkout" className="text-2xl font-bold mt-12">How Do You Optimize Mobile Checkout?</h2>
          <p className="text-foreground"><strong>Prioritize express payment options (Apple Pay, Google Pay) that skip form-filling entirely, use a single-page checkout with progressive sections, implement a sticky order total bar, and reduce fields to the absolute minimum.</strong></p>
          <p className="text-muted-foreground">Mobile checkout priorities:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Express payments first:</strong> Apple Pay and Google Pay must be the most prominent checkout options on mobile. They skip the entire form-filling process.</li>
            <li><strong className="text-foreground">Single-page accordion:</strong> Shipping → Payment → Review as expandable sections on one page. No page reloads between steps.</li>
            <li><strong className="text-foreground">Sticky total bar:</strong> A bar showing "Total: $XX.XX — Place Order" that follows as users scroll through the checkout form.</li>
            <li><strong className="text-foreground">Address autocomplete:</strong> Use Google Places API for address autocompletion. Users type a few characters and select their full address from a dropdown.</li>
          </ul>

          <h2 id="testing-mobile" className="text-2xl font-bold mt-12">How Do You Test Mobile-Specific Changes?</h2>
          <p className="text-foreground"><strong>Always segment A/B test results by device — a change that helps mobile may hurt desktop and vice versa. Run mobile-only tests, test on real devices (not just browser emulators), and prioritize tests that address the specific friction sources unique to mobile.</strong></p>
          <p className="text-muted-foreground">Mobile testing best practices:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Segment all tests:</strong> Never report A/B test results as a blended average across devices. Always break out mobile vs. desktop performance.</li>
            <li><strong className="text-foreground">Mobile-only tests:</strong> Run tests that only apply to mobile visitors (sticky CTAs, thumb-zone changes, mobile-specific layouts).</li>
            <li><strong className="text-foreground">Real device testing:</strong> Browser emulators don't capture touch behavior, keyboard interaction, or real-world network conditions. Test on actual iOS and Android devices.</li>
            <li><strong className="text-foreground">Speed-focused tests:</strong> Test the conversion impact of speed improvements specifically on mobile, where they have 2-3x more impact than on desktop.</li>
          </ul>

          <h2 id="key-takeaways" className="text-2xl font-bold mt-12">Key Takeaways</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Mobile converts 50-70% less than desktop — closing this gap is the largest revenue opportunity for most sites</li>
            <li>Design for the thumb zone: CTAs in the bottom 40%, 44px minimum touch targets, sticky bottom bars</li>
            <li>Target under 3-second LCP on 4G — each 1-second improvement increases mobile conversion by 7%</li>
            <li>Use correct input types and autocomplete attributes to reduce mobile form friction by 30%</li>
            <li>Mobile social proof must be compact: bottom-corner notifications, inline star ratings, swipeable carousels</li>
            <li>Prioritize express payments on mobile checkout to skip form-filling entirely</li>
          </ul>
        </div>
      }
    />
  );
}
