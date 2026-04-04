import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, Star, BarChart3, MessageSquare, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const guides = [
  {
    icon: BookOpen,
    title: "Social Proof: The Complete Guide",
    desc: "Everything you need to know about social proof — psychology, types, examples, marketing strategies, and implementation. Our flagship 18-minute pillar guide.",
    href: "/resources/social-proof/",
    readTime: "18 min read",
    articles: 6,
  },
  {
    icon: Star,
    title: "Customer Reviews: Collection & Strategy Guide",
    desc: "How to collect, aggregate, and display customer reviews across platforms. Covers Google, Trustpilot, G2, and first-party review strategies.",
    href: "/resources/reviews/",
    readTime: "16 min read",
    articles: 4,
  },
  {
    icon: BarChart3,
    title: "Conversion Analytics: Measure & Optimize",
    desc: "Data-driven guide to measuring conversion rates, A/B testing social proof, attribution modeling, and building analytics dashboards.",
    href: "/resources/conversion-analytics/",
    readTime: "15 min read",
    articles: 4,
  },
  {
    icon: ShieldCheck,
    title: "Website Trust: Building Credibility Online",
    desc: "How to build trust on your website with social proof, trust badges, security signals, and credibility design patterns.",
    href: "/resources/website-trust/",
    readTime: "15 min read",
    articles: 4,
  },
  {
    icon: MessageSquare,
    title: "Testimonials: Collect, Display & Convert",
    desc: "Complete guide to testimonial strategy — from automated collection workflows to video testimonials and embeddable widgets.",
    href: "/resources/testimonials/",
    readTime: "16 min read",
    articles: 4,
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "NotiProof Guides – Comprehensive Social Proof & CRO Pillar Guides",
  description: "In-depth pillar guides covering social proof, customer reviews, conversion analytics, website trust, and testimonials.",
  url: "https://notiproof.com/resources/guides/",
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
};

export default function GuidesHub() {
  return (
    <>
      <SEOHead
        title="Guides – In-Depth Social Proof & CRO Pillar Guides"
        description="Explore NotiProof's comprehensive pillar guides on social proof, customer reviews, conversion analytics, website trust, and testimonials."
        canonical="https://notiproof.com/resources/guides/"
        schema={collectionSchema}
      />

      <section className="relative overflow-hidden bg-foreground text-background py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Resources</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pillar Guides</h1>
            <p className="text-lg opacity-80">
              Comprehensive, in-depth guides on social proof, reviews, analytics, trust, and testimonials — each one a definitive resource on its topic.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-4xl">
          <div className="space-y-5">
            {guides.map((guide, i) => (
              <motion.div
                key={guide.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={guide.href}
                  className="group flex items-start gap-5 bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <guide.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold mb-1.5 group-hover:text-primary transition-colors">{guide.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{guide.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{guide.readTime}</span>
                      <span>{guide.articles} cluster articles</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
