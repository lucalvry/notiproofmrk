import ResourceArticle from "@/components/ResourceArticle";
import { Link } from "react-router-dom";
import featuredImg from "@/assets/featured-above-the-fold.jpg";

const tocSections = [
  { id: "what-is-atf", label: "What Is Above the Fold and Why Does It Matter?" },
  { id: "hero-section", label: "How Do You Structure the Hero Section?" },
  { id: "headline-formula", label: "What Makes an Effective Above-the-Fold Headline?" },
  { id: "visual-hierarchy", label: "How Do You Create Visual Hierarchy?" },
  { id: "social-proof-atf", label: "Does Social Proof Belong Above the Fold?" },
  { id: "cta-placement", label: "Where Does the CTA Go?" },
  { id: "mobile-atf", label: "How Does Above the Fold Differ on Mobile?" },
  { id: "key-takeaways", label: "Key Takeaways" },
];

const relatedArticles = [
  { title: "Landing Page Optimization", href: "/resources/cro/landing-page-optimization/", desc: "Full landing page optimization guide." },
  { title: "CTA Optimization", href: "/resources/cro/cta-optimization/", desc: "Button copy, color, and placement." },
  { title: "Social Proof for Landing Pages", href: "/resources/social-proof/social-proof-for-landing-pages/", desc: "Where to place trust signals." },
  { title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", desc: "Implementation guide." },
];

export default function AboveTheFoldOptimization() {
  return (
    <ResourceArticle
      metaTitle="Above the Fold Optimization: What to Show First for Maximum Conversion"
      metaDescription="Optimize the above-the-fold content that determines whether visitors stay or bounce. Hero section structure, headlines, CTAs, social proof, and mobile considerations."
      canonical="https://notiproof.com/resources/cro/above-the-fold-optimization/"
      title="Above the Fold Optimization: What to Show First for Maximum Conversion"
      readingTime="13 min read"
      publishDate="2025-05-05"
      tocSections={tocSections}
      pillarLink={{ label: "CRO Guide", href: "/resources/cro/" }}
      featuredImage={featuredImg}
      relatedArticles={relatedArticles}
      content={
        <div className="space-y-8 text-foreground">
          <p className="text-lg text-muted-foreground">Visitors decide whether to stay or leave in 2.6 seconds. The content they see above the fold — before scrolling — determines that decision. Getting this first impression right is the single highest-leverage optimization you can make. This guide covers exactly what to show above the fold, how to structure it, and how to adapt for different devices and page types.</p>

          <h2 id="what-is-atf" className="text-2xl font-bold mt-12">What Is Above the Fold and Why Does It Matter?</h2>
          <p className="text-foreground"><strong>"Above the fold" is the content visible without scrolling — typically the top 600-800px on desktop and 500-700px on mobile. It matters because 57% of user attention goes to above-fold content, and bounce rates increase 100% when above-fold content fails to communicate value.</strong></p>
          <p className="text-muted-foreground">The term comes from newspapers, where the most important stories were placed above the physical fold of the paper. On the web, it's even more critical because visitors can leave instantly. Key statistics:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">57% of attention:</strong> Nielsen Norman Group research shows that 57% of viewing time is spent above the fold, with 74% spent in the first two screenfuls.</li>
            <li><strong className="text-foreground">2.6-second decision:</strong> Visitors form their first impression in 2.6 seconds. If they don't immediately understand what you offer and why they must care, they leave.</li>
            <li><strong className="text-foreground">80% never scroll:</strong> On poorly designed pages, up to 80% of visitors never scroll past the first screenful. Your above-fold content must work as a standalone conversion argument.</li>
          </ul>

          <h2 id="hero-section" className="text-2xl font-bold mt-12">How Do You Structure the Hero Section?</h2>
          <p className="text-foreground"><strong>The optimal hero section has five elements in this priority order: a clear value proposition headline, a supporting subheadline that expands on the benefit, a primary CTA button, a trust signal (social proof or logos), and a visual that demonstrates the product or outcome.</strong></p>
          <p className="text-muted-foreground">Hero section framework:</p>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Headline (40% of above-fold impact):</strong> One sentence that answers two questions: What is this, and why does it matter to me? Focus on the outcome, not the product.</li>
            <li><strong className="text-foreground">Subheadline:</strong> Expand the headline with specifics: who it's for, what it does, and one key differentiator.</li>
            <li><strong className="text-foreground">CTA button:</strong> High-contrast, action-oriented, above the fold. "Start Free Trial" outperforms "Learn More" by 30-50% on product pages.</li>
            <li><strong className="text-foreground">Trust signal:</strong> Logo strip ("Trusted by teams at..."), star rating ("4.8★ from 500+ reviews"), or a micro-testimonial.</li>
            <li><strong className="text-foreground">Visual:</strong> Product screenshot, demo animation, or outcome-focused image. Should support the headline, not compete with it for attention.</li>
          </ol>

          <h2 id="headline-formula" className="text-2xl font-bold mt-12">What Makes an Effective Above-the-Fold Headline?</h2>
          <p className="text-foreground"><strong>The best headlines follow the formula: [Desired outcome] + [Without the pain point] — "Increase conversions 30% without changing your website" outperforms feature-focused headlines like "Real-time social proof notification platform" by 3-5x in conversion.</strong></p>
          <p className="text-muted-foreground">Headline formulas that convert:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Outcome + pain removal:</strong> "Get more customers without spending more on ads" — addresses what they want and what they want to avoid.</li>
            <li><strong className="text-foreground">Specific metric:</strong> "Increase conversions 30% in 30 days" — concrete numbers are 2x more believable than vague promises.</li>
            <li><strong className="text-foreground">Social proof headline:</strong> "Join 2,000+ businesses that trust NotiProof for social proof" — leverages crowd wisdom in the headline itself.</li>
            <li><strong className="text-foreground">Question format:</strong> "What if your website could convert 30% more visitors?" — engages curiosity and self-identification.</li>
          </ul>

          <h2 id="visual-hierarchy" className="text-2xl font-bold mt-12">How Do You Create Effective Visual Hierarchy?</h2>
          <p className="text-foreground"><strong>Guide the eye in a Z-pattern (left headline → right visual → left supporting text → right CTA) or F-pattern (headline → subheadline → CTA stacked left-aligned), using size, contrast, and whitespace to direct attention in the correct sequence.</strong></p>
          <p className="text-muted-foreground">Visual hierarchy principles:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Size = importance:</strong> The headline must be the largest text element. The CTA button must be the most visually prominent interactive element.</li>
            <li><strong className="text-foreground">Contrast:</strong> The CTA button must have the highest contrast on the page. If your background is light, use a saturated primary color button. If dark, use a bright accent.</li>
            <li><strong className="text-foreground">Whitespace:</strong> Don't fill every pixel. Generous whitespace around key elements (headline, CTA) increases readability and draws attention through isolation.</li>
            <li><strong className="text-foreground">Directional cues:</strong> Human faces looking toward the CTA, arrows, or converging lines guide eye movement toward the conversion action.</li>
          </ul>

          <h2 id="social-proof-atf" className="text-2xl font-bold mt-12">Does Social Proof Belong Above the Fold?</h2>
          <p className="text-foreground"><strong>Yes — but keep it compact. A logo strip, star rating, or customer count belongs above the fold. Full testimonials and review sections belong below the fold. The above-fold social proof signal must be one line that establishes credibility without competing with the headline and CTA.</strong></p>
          <p className="text-muted-foreground">Above-fold social proof options (choose one):</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Logo strip:</strong> 4-6 recognizable customer logos. "Trusted by teams at Shopify, HubSpot, and 2,000+ more"</li>
            <li><strong className="text-foreground">Aggregate rating:</strong> "★★★★★ 4.8 average from 500+ reviews"</li>
            <li><strong className="text-foreground">Customer count:</strong> "Join 10,000+ marketers using NotiProof"</li>
            <li><strong className="text-foreground">Micro-testimonial:</strong> One powerful sentence: "'Increased our trial signups 35% in 2 weeks' — VP Marketing, Acme Corp"</li>
          </ul>
          <p className="text-muted-foreground">Pair above-fold static social proof with <Link to="/product/social-proof-notifications/" className="text-primary font-semibold hover:underline">dynamic social proof notifications</Link> that appear as visitors browse, reinforcing trust throughout the page visit.</p>

          <h2 id="cta-placement" className="text-2xl font-bold mt-12">Where Does the Primary CTA Go?</h2>
          <p className="text-foreground"><strong>The primary CTA must be visible above the fold, placed after the headline and subheadline so visitors understand the value before being asked to act. On mobile, use a sticky CTA bar that remains accessible as users scroll.</strong></p>
          <p className="text-muted-foreground">CTA placement rules:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">After value, before details:</strong> The CTA must come after the headline (what you get) and before the feature details (how it works). Visitors who are convinced by the headline can act immediately; others scroll for more info.</li>
            <li><strong className="text-foreground">Repeated at scroll milestones:</strong> Repeat the CTA at the bottom of each major section as users scroll. Don't make them scroll back up to convert.</li>
            <li><strong className="text-foreground">Two CTAs above fold:</strong> Consider a primary ("Start Free Trial") and secondary ("Watch Demo") CTA to capture visitors at different readiness levels.</li>
          </ul>

          <h2 id="mobile-atf" className="text-2xl font-bold mt-12">How Does Above the Fold Differ on Mobile?</h2>
          <p className="text-foreground"><strong>On mobile, above the fold is only 500-700px tall — prioritize headline and CTA above fold, move the visual below fold, and use a sticky CTA bar. Mobile above-fold must be even more ruthlessly prioritized than desktop.</strong></p>
          <p className="text-muted-foreground">Mobile above-fold priorities:</p>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Headline (must be above fold)</strong></li>
            <li><strong className="text-foreground">Subheadline (must be above fold)</strong></li>
            <li><strong className="text-foreground">CTA button (must be above fold)</strong></li>
            <li><strong className="text-foreground">Trust signal (kept above the fold and limited to one line)</strong></li>
            <li><strong className="text-foreground">Visual (can go below fold on mobile)</strong></li>
          </ol>
          <p className="text-muted-foreground">The product screenshot or hero image that's essential on desktop can be moved below the fold on mobile without impacting conversion — text + CTA are more important on small screens.</p>

          <h2 id="key-takeaways" className="text-2xl font-bold mt-12">Key Takeaways</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>57% of user attention goes to above-fold content — optimize this first for maximum impact</li>
            <li>Five elements in priority order: headline, subheadline, CTA, trust signal, visual</li>
            <li>Headlines must follow "desired outcome + without pain point" formula</li>
            <li>Keep social proof above the fold but compact — one line, not full testimonial blocks</li>
            <li>CTA must be above fold on all devices, with a sticky bar on mobile</li>
            <li>On mobile, text + CTA take priority over visuals in the limited above-fold space</li>
          </ul>
        </div>
      }
    />
  );
}
