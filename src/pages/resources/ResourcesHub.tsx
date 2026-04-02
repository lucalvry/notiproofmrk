import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Star, BarChart3, Shield, MessageSquare, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AuthorCard from "@/components/AuthorCard";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const categories = [
  {
    icon: BookOpen,
    title: "Social Proof",
    desc: "The complete guide to social proof: what it is, types, psychology, and how to use it.",
    href: "/resources/social-proof/",
    articles: [
      { title: "What Is Social Proof? The Complete Guide", href: "/resources/social-proof/what-is-social-proof/" },
      { title: "6 Types of Social Proof (With Examples)", href: "/resources/social-proof/types-of-social-proof/" },
      { title: "Social Proof Psychology: Why It Works", href: "/resources/social-proof/social-proof-psychology/" },
    ],
  },
  {
    icon: Star,
    title: "Reviews",
    desc: "Learn how to collect, manage, and leverage customer reviews for conversions.",
    href: "/resources/reviews/",
    articles: [
      { title: "Review Aggregation System", href: "/product/review-aggregation-showcase-system/" },
      { title: "Social Proof Examples That Convert", href: "/resources/social-proof/social-proof-example/" },
    ],
  },
  {
    icon: BarChart3,
    title: "Conversion Analytics",
    desc: "Measure, analyze, and optimize your conversion rates with data-driven insights.",
    href: "/resources/conversion-analytics/",
    articles: [
      { title: "Analytics & Conversion Insights", href: "/product/analytics-conversion-insights/" },
      { title: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/" },
    ],
  },
  {
    icon: Shield,
    title: "Website Trust",
    desc: "Build trust signals on your website to increase credibility and conversions.",
    href: "/resources/website-trust/",
    articles: [
      { title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/" },
      { title: "Types of Social Proof", href: "/resources/social-proof/types-of-social-proof/" },
    ],
  },
  {
    icon: MessageSquare,
    title: "Testimonials",
    desc: "Everything about collecting, displaying, and leveraging customer testimonials.",
    href: "/resources/testimonials/",
    articles: [
      { title: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/" },
      { title: "Video Testimonial Recorder", href: "/product/video-testimonial-recorder/" },
    ],
  },
];

export default function ResourcesHub() {
  return (
    <>
      <SEOHead
        title="Resources – Social Proof Guides, Articles & Insights"
        description="Explore NotiProof's resource hub: in-depth guides on social proof, reviews, conversion analytics, website trust, and testimonials. Learn how to increase conversions."
        canonical="https://notiproof.com/resources/"
      />

      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Resources & Guides</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Learn everything about social proof, conversion optimization, testimonials, and trust signals. In-depth guides written by conversion experts.
            </p>
            <p className="text-muted-foreground">
              Whether you're just discovering{" "}
              <Link to="/resources/social-proof/what-is-social-proof/" className="text-primary font-semibold hover:underline">what social proof is</Link>{" "}
              or ready to implement advanced{" "}
              <Link to="/resources/social-proof/social-proof-in-marketing/" className="text-primary font-semibold hover:underline">marketing strategies</Link>,
              our guides give you the knowledge to increase conversions with confidence.
            </p>
          </motion.div>

          {/* Featured: Social Proof Pillar */}
          <motion.div {...fadeUp} className="mb-16">
            <Link to="/resources/social-proof/" className="group block bg-primary/5 border border-primary/20 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Featured Guide</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                The Complete Guide to Social Proof
              </h2>
              <p className="text-muted-foreground mb-4 max-w-2xl">
                Everything you need to know about social proof — from the psychology behind why it works to practical implementation strategies that increase conversions by 10–35%.
              </p>
              <span className="text-sm font-semibold text-primary flex items-center gap-1">
                Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Category sections with article previews */}
          <div className="space-y-16">
            {categories.map((c) => (
              <motion.div key={c.title} {...fadeUp}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <Link to={c.href} className="font-bold text-xl hover:text-primary transition-colors">{c.title}</Link>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {c.articles.map((a) => (
                    <Link key={a.href} to={a.href} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:shadow-md hover:border-primary/30 transition-all">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-medium">{a.title}</span>
                    </Link>
                  ))}
                  <Link to={c.href} className="flex items-center gap-3 bg-transparent border border-dashed border-border rounded-xl p-4 hover:border-primary/30 transition-all">
                    <span className="text-sm font-medium text-primary">View all {c.title.toLowerCase()} articles →</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Author */}
          <div className="max-w-3xl mx-auto">
            <AuthorCard />
          </div>
        </div>
      </section>
    </>
  );
}
