import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Star, BarChart3, Shield, MessageSquare, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const categories = [
  { icon: BookOpen, title: "Social Proof", desc: "The complete guide to social proof: what it is, types, psychology, and how to use it.", href: "/resources/social-proof/", articles: 6 },
  { icon: Star, title: "Reviews", desc: "Learn how to collect, manage, and leverage customer reviews for conversions.", href: "/resources/reviews/", articles: 4 },
  { icon: BarChart3, title: "Conversion Analytics", desc: "Measure, analyze, and optimize your conversion rates with data-driven insights.", href: "/resources/conversion-analytics/", articles: 3 },
  { icon: Shield, title: "Website Trust", desc: "Build trust signals on your website to increase credibility and conversions.", href: "/resources/website-trust/", articles: 3 },
  { icon: MessageSquare, title: "Testimonials", desc: "Everything about collecting, displaying, and leveraging customer testimonials.", href: "/resources/testimonials/", articles: 4 },
];

const featuredArticles = [
  { title: "What Is Social Proof? The Complete Guide", href: "/resources/social-proof/what-is-social-proof/", category: "Social Proof" },
  { title: "6 Types of Social Proof (With Examples)", href: "/resources/social-proof/types-of-social-proof/", category: "Social Proof" },
  { title: "Social Proof Psychology: Why It Works", href: "/resources/social-proof/social-proof-psychology/", category: "Social Proof" },
  { title: "Social Proof in Marketing: Strategy Guide", href: "/resources/social-proof/social-proof-in-marketing/", category: "Social Proof" },
  { title: "Social Proof for Websites: Implementation Guide", href: "/resources/social-proof/social-proof-for-websites/", category: "Social Proof" },
  { title: "Social Proof Examples That Convert", href: "/resources/social-proof/social-proof-example/", category: "Social Proof" },
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
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Resources & Guides</h1>
            <p className="text-lg text-muted-foreground">
              Learn everything about social proof, conversion optimization, testimonials, and trust signals. In-depth guides written by conversion experts.
            </p>
          </motion.div>

          <h2 className="text-2xl font-bold mb-8">Browse by Topic</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((c) => (
              <Link key={c.href} to={c.href} className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
                <span className="text-xs text-primary font-semibold">{c.articles} articles →</span>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {featuredArticles.map((a) => (
              <Link key={a.href} to={a.href} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all">
                <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">{a.title}</h3>
                  <span className="text-xs text-muted-foreground">{a.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
