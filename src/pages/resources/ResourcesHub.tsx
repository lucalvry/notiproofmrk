import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Star, BarChart3, Shield, MessageSquare, ArrowRight, Clock, User, Calendar } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AuthorCard from "@/components/AuthorCard";
import authorImg from "@/assets/author-olayinka.png";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const categories = [
  {
    id: "social-proof",
    icon: BookOpen,
    title: "Social Proof",
    desc: "The complete guide to social proof: what it is, the six types, the psychology behind it, and how to implement it on your website for measurable conversion lifts.",
    href: "/resources/social-proof/",
    articles: [
      { title: "What Is Social Proof? The Complete Guide", href: "/resources/social-proof/what-is-social-proof/", desc: "A foundational overview of social proof, why it matters, and how businesses use it to build trust and increase conversions.", readTime: "12 min", date: "Jan 2025" },
      { title: "6 Types of Social Proof (With Examples)", href: "/resources/social-proof/types-of-social-proof/", desc: "Expert, user, crowd wisdom, certification, celebrity, and friend — learn each type and when to use it.", readTime: "10 min", date: "Jan 2025" },
      { title: "Social Proof Psychology: Why It Works", href: "/resources/social-proof/social-proof-psychology/", desc: "The cognitive biases — conformity, herd behavior, informational influence — that make social proof one of the most powerful persuasion tools.", readTime: "11 min", date: "Feb 2025" },
      { title: "Social Proof Examples That Convert", href: "/resources/social-proof/social-proof-example/", desc: "Real-world examples from e-commerce, SaaS, and local businesses showing social proof driving measurable results.", readTime: "9 min", date: "Feb 2025" },
      { title: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", desc: "How to integrate social proof into email campaigns, landing pages, ads, and your overall marketing funnel.", readTime: "10 min", date: "Mar 2025" },
      { title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", desc: "A technical implementation guide: where to place notifications, widgets, and testimonials for maximum impact.", readTime: "11 min", date: "Mar 2025" },
    ],
  },
  {
    id: "reviews",
    icon: Star,
    title: "Reviews",
    desc: "Learn how to collect, aggregate, and showcase customer reviews from Google, Trustpilot, and 15+ platforms to build trust at the point of purchase.",
    href: "/resources/reviews/",
    articles: [
      { title: "Review Aggregation System", href: "/product/review-aggregation-showcase-system/", desc: "Aggregate reviews from 15+ platforms into one unified, embeddable widget on your website.", readTime: "6 min", date: "Mar 2025" },
      { title: "Social Proof Examples That Convert", href: "/resources/social-proof/social-proof-example/", desc: "See real-world review strategies that drive measurable conversion lifts.", readTime: "9 min", date: "Feb 2025" },
    ],
  },
  {
    id: "conversion-analytics",
    icon: BarChart3,
    title: "Conversion Analytics",
    desc: "Measure the ROI of every social proof element on your site. Track impressions, clicks, conversion lift, and revenue attribution with real-time dashboards.",
    href: "/resources/conversion-analytics/",
    articles: [
      { title: "Analytics & Conversion Insights", href: "/product/analytics-conversion-insights/", desc: "Track impressions, clicks, and conversion lift from every notification and widget in real-time.", readTime: "7 min", date: "Mar 2025" },
      { title: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", desc: "Measure the marketing impact of social proof across your funnel.", readTime: "10 min", date: "Mar 2025" },
    ],
  },
  {
    id: "website-trust",
    icon: Shield,
    title: "Website Trust",
    desc: "Build credibility signals that convert skeptical visitors into customers. Trust badges, live activity, testimonials, and review widgets — layered for maximum impact.",
    href: "/resources/website-trust/",
    articles: [
      { title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", desc: "Where and how to place trust signals for maximum conversion impact.", readTime: "11 min", date: "Mar 2025" },
      { title: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/", desc: "The six types of trust signals you can deploy on any website.", readTime: "10 min", date: "Jan 2025" },
    ],
  },
  {
    id: "testimonials",
    icon: MessageSquare,
    title: "Testimonials",
    desc: "Everything about collecting, curating, and displaying customer testimonials — text, image, and video — to build trust at every stage of the buyer's journey.",
    href: "/resources/testimonials/",
    articles: [
      { title: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", desc: "Collect text, image, and video testimonials with automated workflows.", readTime: "6 min", date: "Mar 2025" },
      { title: "Video Testimonial Recorder", href: "/product/video-testimonial-recorder/", desc: "Browser-based video recording — customers record in one click, no app needed.", readTime: "5 min", date: "Mar 2025" },
    ],
  },
];

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "NotiProof Resources – Social Proof Guides & Articles",
  description: "In-depth guides on social proof, reviews, conversion analytics, website trust, and testimonials. Written by conversion optimization experts.",
  url: "https://notiproof.com/resources/",
  publisher: {
    "@type": "Organization",
    name: "NotiProof",
    url: "https://notiproof.com",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: categories.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `https://notiproof.com${c.href}`,
    })),
  },
};

export default function ResourcesHub() {
  return (
    <>
      <SEOHead
        title="Resources – Social Proof Guides, Articles & Insights"
        description="In-depth guides on social proof, reviews, conversion analytics, website trust, and testimonials. Written by experts with 10+ years of CRO experience."
        canonical="https://notiproof.com/resources/"
        schema={collectionPageSchema}
      />

      {/* Hero with authority statement */}
      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">The Social Proof Knowledge Base</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Everything your team needs to understand, implement, and measure social proof — from foundational psychology to advanced conversion optimization. Written by{" "}
              <Link to="/company/about/" className="text-primary font-semibold hover:underline">Olayinka Olayokun</Link>, a CIM-certified digital marketing professional with 10+ years of experience helping businesses increase conversions.
            </p>
            <p className="text-muted-foreground">
              Whether you're just discovering{" "}
              <Link to="/resources/social-proof/what-is-social-proof/" className="text-primary font-semibold hover:underline">what social proof is</Link>{" "}
              or ready to implement advanced{" "}
              <Link to="/resources/social-proof/social-proof-in-marketing/" className="text-primary font-semibold hover:underline">marketing strategies</Link>,
              these guides give you the knowledge to increase conversions with confidence.
            </p>
          </motion.div>

          {/* Browse by Topic — anchor TOC */}
          <motion.nav {...fadeUp} className="max-w-3xl mx-auto mb-16 bg-card border border-border rounded-xl p-5">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Browse by Topic</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <c.icon className="w-3.5 h-3.5" />
                  {c.title}
                </a>
              ))}
              <a
                href="#tools"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors"
              >
                Tools & Comparisons
              </a>
            </div>
          </motion.nav>
        </div>
      </section>

      {/* Featured Pillar */}
      <section className="pb-16">
        <div className="container-tight">
          <motion.div {...fadeUp}>
            <Link
              to="/resources/social-proof/"
              className="group block bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/20 rounded-2xl p-8 md:p-10 hover:shadow-xl hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">Pillar Guide</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> 25 min read</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3 group-hover:text-primary transition-colors">
                The Complete Guide to Social Proof
              </h2>
              <p className="text-muted-foreground mb-5 max-w-2xl leading-relaxed">
                Everything you need to know about social proof — from the psychology behind why it works to practical implementation strategies that increase conversions by 10–35%. Covers all six types, real-world examples, and step-by-step guides for e-commerce, SaaS, and local businesses.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img src={authorImg} alt="Olayinka Olayokun" className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-sm font-medium">Olayinka Olayokun</span>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Updated Mar 2025
                </span>
                <span className="text-sm font-semibold text-primary flex items-center gap-1 ml-auto">
                  Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category sections */}
      <section className="pb-16">
        <div className="container-tight">
          <div className="space-y-20">
            {categories.map((c) => (
              <motion.div key={c.id} id={c.id} {...fadeUp} className="scroll-mt-24">
                {/* Category header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <Link to={c.href} className="text-xl font-bold hover:text-primary transition-colors">{c.title}</Link>
                    <p className="text-sm text-muted-foreground mt-1 max-w-2xl leading-relaxed">{c.desc}</p>
                  </div>
                </div>

                {/* Rich article cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {c.articles.map((a) => (
                    <Link
                      key={a.href}
                      to={a.href}
                      className="group bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all flex flex-col"
                    >
                      <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors leading-snug">{a.title}</h3>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed flex-1">{a.desc}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border/50">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to={c.href}
                    className="group bg-transparent border border-dashed border-primary/30 rounded-xl p-5 hover:border-primary/60 hover:bg-primary/5 transition-all flex items-center justify-center"
                  >
                    <span className="text-sm font-semibold text-primary flex items-center gap-1">
                      View all {c.title.toLowerCase()} articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Comparisons */}
      <section id="tools" className="section-padding bg-surface scroll-mt-24">
        <div className="container-tight">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold mb-2">Tools & Comparisons</h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl">Practical tools, comparisons, and conversion optimization resources to help you choose and implement the right social proof strategy.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Best Social Proof Software (2025)", href: "/best-social-proof-software/", desc: "An honest comparison of NotiProof, Fomo, TrustPulse, ProveSource, and more — features, pricing, and recommendations.", readTime: "8 min" },
                { title: "Social Proof Notifications Guide", href: "/social-proof-notifications/", desc: "Everything about real-time purchase alerts, signup notifications, and visitor counters — and how they boost conversions.", readTime: "7 min" },
                { title: "Conversion Optimization Tools", href: "/conversion-optimization-tools/", desc: "NotiProof's complete CRO toolkit: A/B testing, targeting rules, analytics, and social proof — all in one platform.", readTime: "6 min" },
              ].map((a) => (
                <Link
                  key={a.href}
                  to={a.href}
                  className="group bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{a.desc}</p>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author */}
      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold mb-4">About the Author</h2>
            <AuthorCard />
          </motion.div>
        </div>
      </section>
    </>
  );
}
