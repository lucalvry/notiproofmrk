import { ArrowRight, TrendingUp, Phone, Star, MapPin, Info } from "lucide-react";
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
  { icon: TrendingUp, value: "Higher", label: "Lead form submissions" },
  { icon: Phone, value: "Higher", label: "Phone call inquiries" },
  { icon: Star, value: "Aggregated", label: "Cross-platform reviews" },
  { icon: MapPin, value: "Stronger", label: "Local pack visibility" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How a Regional Landscaping Company Grew Leads With Social Proof & Reviews",
  datePublished: "2025-04-01",
  author: { "@type": "Person", name: "Olayinka Olayokun", url: "https://notiproof.com/resources/author/olayinka-olayokun/" },
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
};

export default function LocalBusinessCaseStudy() {
  return (
    <>
      <SEOHead
        title="Local Business Case Study – Growing Leads With Social Proof & Reviews"
        description="An illustrative case study showing how a regional landscaping company can use NotiProof social proof and review aggregation to grow lead form submissions and dominate local search."
        canonical="https://notiproof.com/case-studies/local-business-greenleaf/"
        schema={schema}
      />

      <section className="section-padding pt-4">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-6">
            <Link to="/case-studies/" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">← All Case Studies</Link>
            <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">Local Business</span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              How a Regional Landscaping Company Grew Leads With <span className="text-gradient">Social Proof & Reviews</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              An illustrative example of how a family-owned regional landscaping company can stop losing customers to larger competitors by aggregating reviews and surfacing real-time activity on their website.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto mb-10 flex items-start gap-3 bg-muted/40 border border-border rounded-xl p-4 text-sm text-muted-foreground">
            <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p>Illustrative example based on common implementation patterns and industry CRO benchmarks. Not based on a specific named customer.</p>
          </div>

          <motion.div {...fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {metrics.map((m) => (
              <div key={m.label} className="bg-card border border-border rounded-2xl p-6 text-center">
                <m.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-extrabold text-primary">{m.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mt-8 mb-4">The Challenge</h2>
            <p className="text-muted-foreground">A regional landscaping company has been in business for over a decade with an excellent reputation in their community, but their website tells a different story. With only a handful of Google reviews (despite hundreds of happy customers) and a generic website with no trust signals, they lose to competitors with stronger online presence. Their website generates very few lead form submissions per month from modest monthly traffic.</p>
            <p className="text-muted-foreground">Prospective customers often mention they almost went with another company because the website didn't look as established. The reputation exists offline, but it's invisible online.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Solution</h2>
            <p className="text-muted-foreground">The team implements a three-part NotiProof strategy focused on <Link to="/use-cases/local-business-social-proof-convert-website-visitors/" className="text-primary font-semibold hover:underline">local business social proof</Link>:</p>
            <ul className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Review aggregation</strong> — pulls reviews from Google, Yelp, and Angi into a unified display using NotiProof's <Link to="/product/review-aggregation-showcase-system/" className="text-primary font-semibold hover:underline">review aggregation system</Link></li>
              <li><strong className="text-foreground">Testimonial collection</strong> — automated email requests to recent customers using NotiProof's <Link to="/product/testimonials-collection-text-image-video/" className="text-primary font-semibold hover:underline">testimonial collection tool</Link>, generating new video testimonials within weeks</li>
              <li><strong className="text-foreground">Real-time notifications</strong> — displays "David from a nearby suburb requested a quote" popups to create social proof momentum</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Results</h2>
            <p className="text-muted-foreground">Within ~90 days, expected outcomes — grounded in industry CRO benchmarks for local services — include:</p>
            <ul className="text-muted-foreground space-y-2">
              <li>Higher lead form submission rate</li>
              <li>Higher phone inquiries from the website</li>
              <li>A meaningful increase in Google review count via automated requests</li>
              <li>Improved Google Local Pack visibility for category-relevant searches</li>
              <li>Lower website bounce rate</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ol className="text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Review aggregation creates instant credibility</strong> — combining reviews from multiple platforms shows a richer track record than any single source.</li>
              <li><strong className="text-foreground">Video testimonials close the trust gap</strong> — seeing real customers talk about their experience is more convincing than marketing copy.</li>
              <li><strong className="text-foreground">More reviews improve local SEO</strong> — automated review requests increase Google review counts, which directly supports Local Pack rankings.</li>
              <li><strong className="text-foreground">Social proof works for service businesses</strong> — even without e-commerce transactions, surfacing quote requests and review activity builds urgency and trust.</li>
            </ol>
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Ready to grow your local business with social proof?</p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">Get Started Free <ArrowRight className="w-5 h-5" /></a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">No credit card required · Setup in 60 seconds</p>
          </motion.div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">More Case Studies</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/case-studies/ecommerce-stylehaven/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">E-commerce</span>
                <p className="font-semibold mt-1">Mid-market fashion retailer: add-to-cart lift</p>
              </Link>
              <Link to="/case-studies/agency-brightpath/" className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary">Agency</span>
                <p className="font-semibold mt-1">Digital marketing agency: white-label social proof</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
