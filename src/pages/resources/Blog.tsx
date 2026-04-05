import { useState, useMemo, useCallback } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ResourceSearch from "@/components/ResourceSearch";
import ArticleCard from "@/components/ArticleCard";
import { categories, categoryAccents, categoryGradients, allArticles } from "@/data/blogCategories";
// Social Proof
import imgGuide from "@/assets/featured-social-proof-guide.jpg";
import imgWhat from "@/assets/featured-what-is-social-proof.jpg";
import imgTypes from "@/assets/featured-types-social-proof.jpg";
import imgPsych from "@/assets/featured-social-proof-psychology.jpg";
import imgExamples from "@/assets/featured-social-proof-examples.jpg";
import imgMarketing from "@/assets/featured-social-proof-marketing.jpg";
import imgWebsites from "@/assets/featured-social-proof-websites.jpg";
// Reviews
import imgGoogleReviews from "@/assets/featured-how-to-collect-google-reviews.jpg";
import imgReviewAggregation from "@/assets/featured-review-aggregation-guide.jpg";
import imgNegativeReviews from "@/assets/featured-responding-to-negative-reviews.jpg";
import imgReviewWidgets from "@/assets/featured-review-widgets-for-websites.jpg";
// Conversion Analytics
import imgAbTesting from "@/assets/featured-ab-testing-social-proof.jpg";
import imgBenchmarks from "@/assets/featured-conversion-rate-benchmarks.jpg";
import imgMeasuringRoi from "@/assets/featured-measuring-social-proof-roi.jpg";
import imgHeatmap from "@/assets/featured-heatmap-analytics-guide.jpg";
// Website Trust
import imgTrustSignals from "@/assets/featured-trust-signals-ecommerce.jpg";
import imgTrustBadges from "@/assets/featured-trust-badges-guide.jpg";
import imgCredibility from "@/assets/featured-building-website-credibility.jpg";
import imgFomo from "@/assets/featured-fomo-marketing-guide.jpg";
// Testimonials
import imgCollectTestimonials from "@/assets/featured-how-to-collect-testimonials.jpg";
import imgVideoTestimonial from "@/assets/featured-video-testimonial-guide.jpg";
import imgTestimonialDesign from "@/assets/featured-testimonial-page-design.jpg";
import imgTestimonialEmails from "@/assets/featured-testimonial-request-email-templates.jpg";

const articleImages: Record<string, string> = {
  // Social Proof
  "/resources/social-proof/": imgGuide,
  "/resources/social-proof/what-is-social-proof/": imgWhat,
  "/resources/social-proof/types-of-social-proof/": imgTypes,
  "/resources/social-proof/social-proof-psychology/": imgPsych,
  "/resources/social-proof/social-proof-example/": imgExamples,
  "/resources/social-proof/social-proof-in-marketing/": imgMarketing,
  "/resources/social-proof/social-proof-for-websites/": imgWebsites,
  // Reviews
  "/resources/reviews/how-to-collect-google-reviews/": imgGoogleReviews,
  "/resources/reviews/review-aggregation-guide/": imgReviewAggregation,
  "/resources/reviews/responding-to-negative-reviews/": imgNegativeReviews,
  "/resources/reviews/review-widgets-for-websites/": imgReviewWidgets,
  // Conversion Analytics
  "/resources/conversion-analytics/ab-testing-social-proof/": imgAbTesting,
  "/resources/conversion-analytics/conversion-rate-benchmarks/": imgBenchmarks,
  "/resources/conversion-analytics/measuring-social-proof-roi/": imgMeasuringRoi,
  "/resources/conversion-analytics/heatmap-analytics-guide/": imgHeatmap,
  // Website Trust
  "/resources/website-trust/trust-signals-for-ecommerce/": imgTrustSignals,
  "/resources/website-trust/trust-badges-guide/": imgTrustBadges,
  "/resources/website-trust/building-website-credibility/": imgCredibility,
  "/resources/website-trust/fomo-marketing-guide/": imgFomo,
  // Testimonials
  "/resources/testimonials/how-to-collect-testimonials/": imgCollectTestimonials,
  "/resources/testimonials/video-testimonial-guide/": imgVideoTestimonial,
  "/resources/testimonials/testimonial-page-design/": imgTestimonialDesign,
  "/resources/testimonials/testimonial-request-email-templates/": imgTestimonialEmails,
};

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const ARTICLES_PER_PAGE = 9;

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "NotiProof Blog – Social Proof Guides & Articles",
  description: "In-depth guides on social proof, reviews, conversion analytics, website trust, and testimonials.",
  url: "https://notiproof.com/resources/blog/",
  publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
};

type ViewMode = "topics" | "articles";

export default function Blog() {
  const [view, setView] = useState<ViewMode>("topics");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = useCallback((q: string) => {
    setSearchQuery(q);
    setPage(1);
  }, []);

  const lq = searchQuery.toLowerCase();

  const filteredArticles = useMemo(() => {
    if (!lq) return allArticles;
    return allArticles.filter(
      (a) => a.title.toLowerCase().includes(lq) || a.desc.toLowerCase().includes(lq)
    );
  }, [lq]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(0, page * ARTICLES_PER_PAGE);
  const recentArticles = allArticles.slice(0, 3);

  return (
    <>
      <SEOHead
        title="Blog – Social Proof Guides, Articles & Insights"
        description="In-depth guides on social proof, conversion optimization, and building trust online. Expert resources for every type of business."
        canonical="https://notiproof.com/resources/blog/"
        schema={blogSchema}
      />

      {/* Header */}
      <section className="pt-10 md:pt-14 pb-0">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              In-depth guides on social proof, conversion optimization, and building trust online.
            </p>
          </motion.div>

          {/* Toggle */}
          <motion.div {...fadeUp} className="flex justify-center mb-6">
            <div className="inline-flex bg-muted rounded-full p-1 gap-1">
              <button
                onClick={() => { setView("topics"); setSearchQuery(""); setPage(1); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  view === "topics"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Browse Topics
              </button>
              <button
                onClick={() => { setView("articles"); setPage(1); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  view === "articles"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Articles
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Browse Topics View */}
      {view === "topics" && (
        <section className="section-padding pt-0">
          <div className="container-tight">
            {/* Topic cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {categories.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link
                    to={c.href}
                    className={`group block bg-card border border-border border-l-4 ${categoryAccents[c.id]} rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all h-full`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-base font-bold group-hover:text-primary transition-colors">{c.title}</h2>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {c.articles.length} {c.articles.length === 1 ? "article" : "articles"}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Recent Articles under Browse Topics */}
            <motion.div {...fadeUp}>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold">Recent Articles</h2>
                <button
                  onClick={() => setView("articles")}
                  className="text-sm text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  View all <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {recentArticles.map((a, i) => (
                  <ArticleCard
                    key={a.href}
                    title={a.title}
                    href={a.href}
                    desc={a.desc}
                    readTime={a.readTime}
                    date={a.date}
                    author={a.author}
                    categoryTitle={a.categoryTitle}
                    image={articleImages[a.href]}
                    gradient={categoryGradients[a.categoryId]}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Articles View */}
      {view === "articles" && (
        <section className="section-padding pt-0">
          <div className="container-tight">
            <motion.div {...fadeUp} className="max-w-2xl mx-auto mb-8">
              <ResourceSearch onSearch={handleSearch} />
            </motion.div>

            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold mb-6">
                {lq ? `Results for "${searchQuery}"` : "All Articles"}
              </h2>

              {filteredArticles.length === 0 ? (
                <p className="text-center text-muted-foreground py-12">
                  No articles match your search. Try a different term.
                </p>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {paginatedArticles.map((a, i) => (
                      <ArticleCard
                        key={a.href}
                        title={a.title}
                        href={a.href}
                        desc={a.desc}
                        readTime={a.readTime}
                        date={a.date}
                        author={a.author}
                        categoryTitle={a.categoryTitle}
                        image={articleImages[a.href]}
                        gradient={categoryGradients[a.categoryId]}
                        index={i}
                      />
                    ))}
                  </div>

                  {page < totalPages && (
                    <div className="flex justify-center mt-10">
                      <button
                        onClick={() => setPage((p) => p + 1)}
                        className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        Load More Articles
                      </button>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
