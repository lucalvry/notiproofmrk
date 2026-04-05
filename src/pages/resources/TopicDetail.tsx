import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ArticleCard from "@/components/ArticleCard";
import { categories, categoryGradients, getCategoryById } from "@/data/blogCategories";
import imgGuide from "@/assets/featured-social-proof-guide.jpg";
import imgWhat from "@/assets/featured-what-is-social-proof.jpg";
import imgTypes from "@/assets/featured-types-social-proof.jpg";
import imgPsych from "@/assets/featured-social-proof-psychology.jpg";
import imgExamples from "@/assets/featured-social-proof-examples.jpg";
import imgMarketing from "@/assets/featured-social-proof-marketing.jpg";
import imgWebsites from "@/assets/featured-social-proof-websites.jpg";

const articleImages: Record<string, string> = {
  "/resources/social-proof/": imgGuide,
  "/resources/social-proof/what-is-social-proof/": imgWhat,
  "/resources/social-proof/types-of-social-proof/": imgTypes,
  "/resources/social-proof/social-proof-psychology/": imgPsych,
  "/resources/social-proof/social-proof-example/": imgExamples,
  "/resources/social-proof/social-proof-in-marketing/": imgMarketing,
  "/resources/social-proof/social-proof-for-websites/": imgWebsites,
};

// Map topic IDs to their pillar page hrefs
const pillarLinks: Record<string, string> = {
  "social-proof": "/resources/social-proof/",
  reviews: "/resources/reviews/",
  "conversion-analytics": "/resources/conversion-analytics/",
  "website-trust": "/resources/website-trust/",
  testimonials: "/resources/testimonials/",
};

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function TopicDetail() {
  const { topicId } = useParams<{ topicId: string }>();
  const category = topicId ? getCategoryById(topicId) : undefined;

  if (!category) {
    return <Navigate to="/resources/blog/" replace />;
  }

  const Icon = category.icon;
  const pillarHref = pillarLinks[category.id];

  const topicSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.title} Articles – NotiProof Blog`,
    description: category.desc,
    url: `https://notiproof.com/resources/blog/${category.id}/`,
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  };

  return (
    <>
      <SEOHead
        title={`${category.title} – Articles & Guides | NotiProof Blog`}
        description={category.desc}
        canonical={`https://notiproof.com/resources/blog/${category.id}/`}
        schema={topicSchema}
      />

      <section className="section-padding pb-0">
        <div className="container-tight max-w-5xl">
          {/* Back nav */}
          <motion.div {...fadeUp}>
            <Link
              to="/resources/blog/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Topics
            </Link>
          </motion.div>

          {/* Topic header */}
          <motion.div {...fadeUp} className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{category.title}</h1>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">{category.desc}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {category.articles.length} {category.articles.length === 1 ? "article" : "articles"}
                </span>
                {pillarHref && (
                  <Link
                    to={pillarHref}
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Read the Complete Guide <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Topics / Sub-topic cards */}
      <section className="section-padding pt-4 pb-8">
        <div className="container-tight max-w-5xl">
          <motion.h2 {...fadeUp} className="text-xl font-bold mb-4">Key Topics</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.articles.map((a, i) => (
              <motion.div
                key={a.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <Link
                  to={a.href}
                  className="group block bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all h-full"
                >
                  <h3 className="text-sm font-bold mb-1.5 group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{a.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles in this topic */}
      <section className="section-padding pt-4">
        <div className="container-tight max-w-5xl">
          <motion.h2 {...fadeUp} className="text-xl font-bold mb-5">All Articles</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.articles
              .slice()
              .sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime())
              .map((a, i) => (
                <ArticleCard
                  key={a.href}
                  title={a.title}
                  href={a.href}
                  desc={a.desc}
                  readTime={a.readTime}
                  date={a.date}
                  author={a.author}
                  categoryTitle={category.title}
                  image={articleImages[a.href]}
                  gradient={categoryGradients[category.id]}
                  index={i}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
