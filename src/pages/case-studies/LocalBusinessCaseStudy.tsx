import { ArrowRight, TrendingUp, Phone, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const metrics = [
  { icon: TrendingUp, value: "+58%", label: "Lead Form Submissions" },
  { icon: Phone, value: "+34%", label: "Phone Call Inquiries" },
  { icon: Star, value: "4.9★", label: "Average Review Score" },
  { icon: MapPin, value: "#1", label: "Local Pack Ranking" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How GreenLeaf Landscaping Grew Leads by 58% With Social Proof & Reviews",
  datePublished: "2025-04-01",
  author: { "@type": "Person", name: "Olayinka Olayokun", url: "https://notiproof.com/resources/author/olayinka-olayokun/" },
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
};

export default function LocalBusinessCaseStudy() {
  return (
    <>
      <SEOHead
        title="Case Study: GreenLeaf Landscaping +58% Leads"
        description="How GreenLeaf Landscaping used NotiProof social proof and review aggregation to increase lead form submissions by 58% and dominate local search."
        canonical="https://notiproof.com/case-studies/local-business-greenleaf/"
        schema={schema}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-12">
            <Link to="/case-studies/" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">← All Case Studies</Link>
            <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">Local Business</span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              How GreenLeaf Landscaping Grew Leads by <span className="text-gradient">58%</span> With Social Proof & Reviews
            </h1>
            <p className="text-lg text-muted-foreground">
              GreenLeaf Landscaping, a family-owned business serving the Denver metro area, was losing potential customers to larger competitors with stronger online presence. Here's how NotiProof's review aggregation and social proof transformed their local marketing.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {metrics.map((m) => (
              <div key={m.label} className="bg-card border border-border rounded-2xl p-6 text-center">
                <m.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-3xl font-extrabold text-primary">{m.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mt-8 mb-4">The Challenge</h2>
            <p className="text-muted-foreground">GreenLeaf Landscaping had been in business for 12 years with an excellent reputation in their community, but their website told a different story. With only 14 Google reviews (despite hundreds of happy customers) and a generic website with no trust signals, they were losing to competitors with stronger online presence. Their website generated just 8 lead form submissions per month from 2,200 monthly visitors.</p>
            <p className="text-muted-foreground">"People would call and say they almost went with another company because our website didn't look as established," said owner David Park. "We had the reputation but couldn't show it online."</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Solution</h2>
            <p className="text-muted-foreground">GreenLeaf implemented a three-part NotiProof strategy focused on <Link to="/use-cases/local-business-social-proof-convert-website-visitors/" className="text-primary font-semibold hover:underline">local business social proof</Link>:</p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Review aggregation</strong> — pulled reviews from Google (14), Yelp (23), and Angi (31) into a unified display showing 68 reviews with a 4.9★ average using NotiProof's <Link to="/product/review-aggregation-showcase-system/" className="text-primary font-semibold hover:underline">review aggregation system</Link></li>
              <li><strong className="text-foreground">Testimonial collection</strong> — automated email requests to recent customers using NotiProof's <Link to="/product/testimonials-collection-text-image-video/" className="text-primary font-semibold hover:underline">testimonial collection tool</Link>, generating 12 new video testimonials in the first month</li>
              <li><strong className="text-foreground">Real-time notifications</strong> — displayed "David from Lakewood requested a quote 2 hours ago" popups to create social proof momentum</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Results</h2>
            <p className="text-muted-foreground">After 90 days, GreenLeaf's online presence was transformed:</p>
            <ul className="text-muted-foreground space-y-2">
              <li>Lead form submissions: 8/mo → 12.6/mo (<strong className="text-foreground">+58%</strong>)</li>
              <li>Phone inquiries from website: 15/mo → 20/mo (<strong className="text-foreground">+34%</strong>)</li>
              <li>Google reviews: 14 → 47 (within 90 days via automated requests)</li>
              <li>Google Local Pack ranking: #4 → <strong className="text-foreground">#1</strong> for "landscaping Denver"</li>
              <li>Website bounce rate: 62% → 44% (-29%)</li>
              <li>Monthly revenue increase: +$18,000 from additional jobs booked</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ol className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Review aggregation creates instant credibility</strong> — combining reviews from 3 platforms showed 68 reviews instead of 14, instantly building trust.</li>
              <li><strong className="text-foreground">Video testimonials close the trust gap</strong> — seeing real customers talk about their experience was more convincing than any marketing copy.</li>
              <li><strong className="text-foreground">More reviews improve local SEO</strong> — the automated review requests tripled their Google review count, which directly improved their Local Pack ranking.</li>
              <li><strong className="text-foreground">Social proof works for service businesses</strong> — even without e-commerce transactions, showing quote requests and review activity created urgency and trust.</li>
            </ol>
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Ready to grow your local business with social proof?</p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">Start Free 14-Day Trial <ArrowRight className="w-5 h-5" /></a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">No credit card required · Setup in 60 seconds</p>
          </motion.div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">More Case Studies</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/case-studies/ecommerce-stylehaven/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">E-commerce</span>
                <p className="font-semibold mt-1">How StyleHaven Increased Add-to-Cart Rate by 31%</p>
              </Link>
              <Link to="/case-studies/agency-brightpath/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">Agency</span>
                <p className="font-semibold mt-1">How BrightPath Boosted Client Conversions by 47%</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
