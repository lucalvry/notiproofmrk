import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { categories } from "@/data/blogCategories";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const pillarLinks: Record<string, string> = {
  "social-proof": "/resources/social-proof/",
  reviews: "/resources/reviews/",
  "conversion-analytics": "/resources/conversion-analytics/",
  "website-trust": "/resources/website-trust/",
  testimonials: "/resources/testimonials/",
};

const readTimes: Record<string, string> = {
  "social-proof": "18 min read",
  reviews: "16 min read",
  "conversion-analytics": "15 min read",
  "website-trust": "15 min read",
  testimonials: "16 min read",
};

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
            <Link
              to="/resources/"
              className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Resources
            </Link>
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
            {categories.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={pillarLinks[c.id] || c.href}
                  className="group flex items-start gap-5 bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold mb-1.5 group-hover:text-primary transition-colors">{c.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{c.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{readTimes[c.id] || "15 min read"}</span>
                      <span>{c.articles.length} cluster articles</span>
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
