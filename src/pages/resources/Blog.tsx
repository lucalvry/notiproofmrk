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
import imgReviewsPillar from "@/assets/featured-reviews-pillar.jpg";
import imgGoogleReviews from "@/assets/featured-how-to-collect-google-reviews.jpg";
import imgReviewAggregation from "@/assets/featured-review-aggregation-guide.jpg";
import imgNegativeReviews from "@/assets/featured-responding-to-negative-reviews.jpg";
import imgReviewWidgets from "@/assets/featured-review-widgets-for-websites.jpg";
// Conversion Analytics
import imgConversionPillar from "@/assets/featured-conversion-analytics-pillar.jpg";
import imgAbTesting from "@/assets/featured-ab-testing-social-proof.jpg";
import imgBenchmarks from "@/assets/featured-conversion-rate-benchmarks.jpg";
import imgMeasuringRoi from "@/assets/featured-measuring-social-proof-roi.jpg";
import imgHeatmap from "@/assets/featured-heatmap-analytics-guide.jpg";
// Website Trust
import imgTrustPillar from "@/assets/featured-website-trust-pillar.jpg";
import imgTrustSignals from "@/assets/featured-trust-signals-ecommerce.jpg";
import imgTrustBadges from "@/assets/featured-trust-badges-guide.jpg";
import imgCredibility from "@/assets/featured-building-website-credibility.jpg";
import imgFomo from "@/assets/featured-fomo-marketing-guide.jpg";
// Testimonials
import imgTestimonialsPillar from "@/assets/featured-testimonials-pillar.jpg";
import imgCollectTestimonials from "@/assets/featured-how-to-collect-testimonials.jpg";
import imgVideoTestimonial from "@/assets/featured-video-testimonial-guide.jpg";
import imgTestimonialDesign from "@/assets/featured-testimonial-page-design.jpg";
import imgTestimonialEmails from "@/assets/featured-testimonial-request-email-templates.jpg";
// Bridge articles
import imgReviewsSocialProof from "@/assets/featured-reviews-and-social-proof.jpg";
import imgTestimonialsTrust from "@/assets/featured-testimonials-as-trust-signals.jpg";
import imgTestimonialReviewRoi from "@/assets/featured-testimonial-review-roi.jpg";

const articleImages: Record<string, string> = {
  // Social Proof
  "/resources/social-proof/": imgGuide,
  "/resources/social-proof/what-is-social-proof/": imgWhat,
  "/resources/social-proof/types-of-social-proof/": imgTypes,
  "/resources/social-proof/social-proof-psychology/": imgPsych,
  "/resources/social-proof/social-proof-example/": imgExamples,
  "/resources/social-proof/social-proof-in-marketing/": imgMarketing,
  "/resources/social-proof/social-proof-for-websites/": imgWebsites,
  "/resources/social-proof/reviews-and-social-proof/": imgReviewsSocialProof,
  // Reviews
  "/resources/reviews/": imgReviewsPillar,
  "/resources/reviews/how-to-collect-google-reviews/": imgGoogleReviews,
  "/resources/reviews/review-aggregation-guide/": imgReviewAggregation,
  "/resources/reviews/responding-to-negative-reviews/": imgNegativeReviews,
  "/resources/reviews/review-widgets-for-websites/": imgReviewWidgets,
  // Conversion Analytics
  "/resources/conversion-analytics/": imgConversionPillar,
  "/resources/conversion-analytics/ab-testing-social-proof/": imgAbTesting,
  "/resources/conversion-analytics/conversion-rate-benchmarks/": imgBenchmarks,
  "/resources/conversion-analytics/measuring-social-proof-roi/": imgMeasuringRoi,
  "/resources/conversion-analytics/heatmap-analytics-guide/": imgHeatmap,
  "/resources/conversion-analytics/testimonial-review-roi/": imgTestimonialReviewRoi,
  // Website Trust
  "/resources/website-trust/": imgTrustPillar,
  "/resources/website-trust/trust-signals-for-ecommerce/": imgTrustSignals,
  "/resources/website-trust/trust-badges-guide/": imgTrustBadges,
  "/resources/website-trust/building-website-credibility/": imgCredibility,
  "/resources/website-trust/fomo-marketing-guide/": imgFomo,
  "/resources/website-trust/testimonials-as-trust-signals/": imgTestimonialsTrust,
  // Testimonials
  "/resources/testimonials/": imgTestimonialsPillar,
  "/resources/testimonials/how-to-collect-testimonials/": imgCollectTestimonials,
  "/resources/testimonials/video-testimonial-guide/": imgVideoTestimonial,
  "/resources/testimonials/testimonial-page-design/": imgTestimonialDesign,
  "/resources/testimonials/testimonial-request-email-templates/": imgTestimonialEmails,
};

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const ARTICLES_PER_PAGE = 9;

const blogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "NotiProof Blog – Social Proof Guides & Articles",
    description: "In-depth guides on social proof, reviews, conversion analytics, website trust, and testimonials.",
    url: "https://notiproof.com/resources/blog/",
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NotiProof Blog Articles",
    itemListElement: allArticles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title,
      url: `https://notiproof.com${a.href}`,
    })),
  },
];

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

  // Latest updates: sort by date descending, take 3
  const latestArticles = useMemo(() => {
    return [...allArticles].sort((a, b) => {
      const dateA = a.date || "";
      const dateB = b.date || "";
      return dateB.localeCompare(dateA);
    }).slice(0, 3);
  }, []);

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

          {/* Latest Updates */}
          <motion.div {...fadeUp} className="mb-10">
            <h2 className="text-xl font-bold mb-5">Latest Updates</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {latestArticles.map((a, i) => (
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
            {categories.map((c, ci) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.05 }}
                className="mb-14"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">{c.title}</h2>
                </div>

                {/* Pillar hero card */}
                <Link
                  to={c.href}
                  className={`group block bg-card border border-border border-l-4 ${categoryAccents[c.id]} rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all mb-5`}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      {articleImages[c.href] ? (
                        <img src={articleImages[c.href]} alt={c.title} className="w-full h-48 md:h-full object-cover" loading="lazy" />
                      ) : (
                        <div className={`w-full h-48 md:h-full bg-gradient-to-br ${categoryGradients[c.id]}`} />
                      )}
                    </div>
                    <div className="p-6 md:w-3/5 flex flex-col justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full self-start mb-3">
                        Complete Guide
                      </span>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{c.title}: The Complete Guide</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{c.desc}</p>
                      <span className="text-sm text-primary font-semibold inline-flex items-center gap-1 group-hover:underline">
                        Read the complete guide <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Cluster articles */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {c.articles.map((a, i) => (
                    <ArticleCard
                      key={a.href}
                      title={a.title}
                      href={a.href}
                      desc={a.desc}
                      readTime={a.readTime}
                      date={a.date}
                      author={a.author}
                      categoryTitle={c.title}
                      image={articleImages[a.href]}
                      gradient={categoryGradients[c.id]}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
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
