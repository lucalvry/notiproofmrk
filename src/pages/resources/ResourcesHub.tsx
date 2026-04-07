import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, FileText, BookMarked, BarChart3, HelpCircle, Briefcase, Package, Wrench, ArrowRight, Shield, Star, MessageSquare, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const pillarGuides = [
  {
    icon: Shield,
    title: "Social Proof",
    desc: "The complete guide to social proof — psychology, types, examples, and implementation strategies for any website.",
    href: "/resources/social-proof/",
    articles: [
      { title: "What Is Social Proof?", href: "/resources/social-proof/what-is-social-proof/", readTime: "12 min" },
      { title: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/", readTime: "10 min" },
      { title: "Social Proof Psychology", href: "/resources/social-proof/social-proof-psychology/", readTime: "11 min" },
    ],
  },
  {
    icon: Star,
    title: "Reviews & Reputation",
    desc: "Everything about collecting, managing, and leveraging customer reviews to build trust and improve SEO.",
    href: "/resources/reviews/",
    articles: [
      { title: "How to Collect Google Reviews", href: "/resources/reviews/how-to-collect-google-reviews/", readTime: "10 min" },
      { title: "Review Aggregation Guide", href: "/resources/reviews/review-aggregation-guide/", readTime: "11 min" },
      { title: "Review Widgets for Websites", href: "/resources/reviews/review-widgets-for-websites/", readTime: "9 min" },
    ],
  },
  {
    icon: MessageSquare,
    title: "Testimonials",
    desc: "How to collect, design, and display customer testimonials that build trust and drive conversions.",
    href: "/resources/testimonials/",
    articles: [
      { title: "How to Collect Testimonials", href: "/resources/testimonials/how-to-collect-testimonials/", readTime: "11 min" },
      { title: "Video Testimonial Guide", href: "/resources/testimonials/video-testimonial-guide/", readTime: "12 min" },
      { title: "Testimonial Page Design", href: "/resources/testimonials/testimonial-page-design/", readTime: "10 min" },
    ],
  },
  {
    icon: BarChart3,
    title: "Conversion Analytics",
    desc: "Measure, test, and optimize your conversion rates with data-driven strategies and benchmarks.",
    href: "/resources/conversion-analytics/",
    articles: [
      { title: "A/B Testing Social Proof", href: "/resources/conversion-analytics/ab-testing-social-proof/", readTime: "11 min" },
      { title: "Conversion Rate Benchmarks", href: "/resources/conversion-analytics/conversion-rate-benchmarks/", readTime: "10 min" },
      { title: "Measuring Social Proof ROI", href: "/resources/conversion-analytics/measuring-social-proof-roi/", readTime: "12 min" },
    ],
  },
  {
    icon: Shield,
    title: "Website Trust",
    desc: "Build credibility with trust badges, security signals, FOMO marketing, and proven trust-building strategies.",
    href: "/resources/website-trust/",
    articles: [
      { title: "Trust Signals for E-commerce", href: "/resources/website-trust/trust-signals-for-ecommerce/", readTime: "11 min" },
      { title: "Trust Badges Guide", href: "/resources/website-trust/trust-badges-guide/", readTime: "10 min" },
      { title: "FOMO Marketing Guide", href: "/resources/website-trust/fomo-marketing-guide/", readTime: "12 min" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    desc: "Practical CRO tactics — landing page optimization, cart abandonment solutions, CTA best practices, and exit intent strategies.",
    href: "/resources/cro/",
    articles: [
      { title: "Landing Page Optimization", href: "/resources/cro/landing-page-optimization/", readTime: "12 min" },
      { title: "Cart Abandonment Solutions", href: "/resources/cro/cart-abandonment/", readTime: "10 min" },
      { title: "Exit Intent Strategies", href: "/resources/cro/exit-intent-strategies/", readTime: "10 min" },
    ],
  },
];

const quickLinks = [
  { icon: FileText, title: "Blog", desc: "All articles organized by topic.", href: "/resources/blog/" },
  { icon: BookMarked, title: "Glossary", desc: "Key terms and definitions.", href: "/resources/glossary/" },
  { icon: HelpCircle, title: "Help Center", desc: "Tutorials and FAQs.", href: "/resources/help-center/" },
  { icon: Briefcase, title: "Case Studies", desc: "Real customer results.", href: "/case-studies/" },
  { icon: Package, title: "Product Docs", desc: "Feature walkthroughs.", href: "/product/" },
  { icon: Wrench, title: "Free Tools", desc: "Calculators and audits.", href: "/free-tools/" },
];

const collectionPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NotiProof Resources – Social Proof Guides, Blog & Tools",
    description: "Explore guides, articles, glossary, comparisons, case studies, and free tools for social proof and conversion optimization.",
    url: "https://notiproof.com/resources/",
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NotiProof Resource Guides",
    itemListElement: pillarGuides.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${g.title}: The Complete Guide`,
      url: `https://notiproof.com${g.href}`,
    })),
  },
];

export default function ResourcesHub() {
  return (
    <>
      <SEOHead
        title="Resources – Social Proof Guides, Blog & Tools"
        description="Explore NotiProof's resource library: pillar guides on social proof, reviews, testimonials, conversion analytics, and website trust. Written by CRO experts."
        canonical="https://notiproof.com/resources/"
        schema={collectionPageSchema}
      />

      {/* Authority Hero */}
      <section className="relative overflow-hidden bg-foreground text-background py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Social Proof & CRO Resources</h1>
            <p className="text-lg opacity-80 mb-6">
              Expert-written guides on social proof, conversion optimization, and building trust online. From psychology to implementation — everything you need to increase conversions.
            </p>
            <p className="text-sm opacity-60">
              Written by <Link to="/resources/author/olayinka-olayokun/" className="text-primary hover:underline font-semibold">Olayinka Olayokun</Link> · NotiProof CRO team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Browse by Topic TOC */}
      <section className="py-8 border-b border-border">
        <div className="container-tight">
          <nav className="flex flex-wrap justify-center gap-3">
            {pillarGuides.map((g) => (
              <a key={g.title} href={`#topic-${g.title.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-full bg-muted/50 hover:bg-primary/10">
                {g.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Featured Pillar — Social Proof */}
      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp}>
            <Link
              to="/resources/social-proof/"
              className="group block bg-card border border-border border-l-4 border-l-primary rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all"
            >
              <div className="p-8 md:p-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-4 inline-block">
                  Featured Guide
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Social Proof: The Complete Guide
                </h2>
                <p className="text-muted-foreground mb-4 max-w-2xl">
                  Everything you need to know about social proof — from the psychology of why it works to practical implementation strategies for e-commerce, SaaS, and service businesses. Our most comprehensive resource.
                </p>
                <span className="text-sm text-primary font-semibold inline-flex items-center gap-1 group-hover:underline">
                  Read the complete guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pillar Guide Sections with Article Previews */}
      {pillarGuides.slice(1).map((guide, gi) => (
        <section key={guide.title} id={`topic-${guide.title.toLowerCase().replace(/\s+/g, "-")}`} className={`section-padding ${gi % 2 === 0 ? "bg-surface" : ""}`}>
          <div className="container-tight">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <guide.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{guide.title}</h2>
                  <p className="text-sm text-muted-foreground">{guide.desc}</p>
                </div>
              </div>

              {/* Pillar link */}
              <Link
                to={guide.href}
                className="group block bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all mb-5"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2 inline-block">Complete Guide</span>
                <h3 className="font-bold group-hover:text-primary transition-colors">{guide.title}: The Complete Guide</h3>
                <span className="text-sm text-primary font-semibold inline-flex items-center gap-1 mt-2 group-hover:underline">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              {/* Article previews */}
              <div className="grid sm:grid-cols-3 gap-4">
                {guide.articles.map((a) => (
                  <Link
                    key={a.href}
                    to={a.href}
                    className="group bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <h4 className="text-sm font-bold mb-1 group-hover:text-primary transition-colors">{a.title}</h4>
                    <p className="text-xs text-muted-foreground">{a.readTime} read</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Quick Links */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-2xl font-bold text-center mb-8">More Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Link
                  to={card.href}
                  className="group flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-xs text-muted-foreground">{card.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
