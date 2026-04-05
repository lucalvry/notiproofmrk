import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import AuthorCard, { defaultAuthor, type AuthorData } from "@/components/AuthorCard";
import TableOfContents, { type TocSection } from "@/components/TableOfContents";
import ArticleSidebar from "@/components/ArticleSidebar";

interface ArticleLink {
  title: string;
  href: string;
  desc: string;
}

interface ResourceArticleProps {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  title: string;
  readingTime?: string;
  publishDate: string;
  updatedDate?: string;
  content: React.ReactNode;
  relatedArticles: ArticleLink[];
  pillarLink?: { label: string; href: string };
  tocSections?: TocSection[];
  author?: AuthorData;
  featuredImage?: string;
  featuredImageGradient?: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function ResourceArticle({
  metaTitle, metaDescription, canonical, title, readingTime = "8 min read",
  publishDate, updatedDate, content, relatedArticles, pillarLink, tocSections, author = defaultAuthor,
  featuredImage, featuredImageGradient = "from-primary/20 to-primary/10",
}: ResourceArticleProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: publishDate,
    ...(updatedDate && { dateModified: updatedDate }),
    ...(featuredImage && { image: featuredImage }),
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.jobTitle,
      description: author.bio,
      knowsAbout: author.knowsAbout,
      url: `https://notiproof.com${author.profileUrl || "/resources/author/olayinka-olayokun/"}`,
    },
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
    url: canonical,
  };

  const sidebarRelated = relatedArticles.map((a) => ({ title: a.title, href: a.href }));

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} canonical={canonical} schema={articleSchema} />

      <article className="section-padding" itemScope itemType="https://schema.org/Article">
        <div className="container-tight">
          {/* Navigation: Back to Blog + Pillar link */}
          <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link to="/resources/blog/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            {pillarLink && (
              <>
                <span className="text-muted-foreground/30">|</span>
                <Link to={pillarLink.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary/80 hover:text-primary bg-primary/5 px-3 py-1 rounded-full transition-colors">
                  📖 Part of the {pillarLink.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </>
            )}
          </div>

          {/* Featured image — full width above both columns */}
          {featuredImage ? (
            <div className="max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden">
              <img src={featuredImage} alt={title} className="w-full aspect-[2/1] object-cover" itemProp="image" loading="lazy" width="800" height="400" />
            </div>
          ) : (
            <div className={`max-w-4xl mx-auto mb-8 aspect-[2/1] rounded-2xl bg-gradient-to-br ${featuredImageGradient} flex items-center justify-center`}>
              <span className="text-5xl opacity-20">📄</span>
            </div>
          )}

          {/* Title + metadata — full width above both columns */}
          <header className="max-w-4xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4" itemProp="headline">{title}</h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <AuthorCard author={author} compact />
              <div className="flex items-center gap-3 text-sm text-muted-foreground sm:ml-auto">
                <time dateTime={publishDate} itemProp="datePublished">
                  {formatDate(publishDate)}
                </time>
                {updatedDate && (
                  <>
                    <span className="text-muted-foreground/40">·</span>
                    <span className="text-xs bg-primary/10 text-primary font-medium px-2 py-0.5 rounded">
                      Updated <time dateTime={updatedDate} itemProp="dateModified">{formatDate(updatedDate)}</time>
                    </span>
                  </>
                )}
                <span className="text-muted-foreground/40">·</span>
                <span>{readingTime}</span>
              </div>
            </div>
          </header>

          {/* Two-column layout: content + sidebar */}
          <div className="max-w-4xl mx-auto flex gap-12">
            <div className="flex-1 min-w-0 max-w-3xl">
              {/* TOC */}
              {tocSections && tocSections.length > 0 && (
                <TableOfContents sections={tocSections} />
              )}

              {/* Article body */}
              <div className="prose prose-lg max-w-none" itemProp="articleBody">
                {content}
              </div>

              {/* In-article CTA */}
              <div className="my-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold mb-3">Ready to Add Social Proof to Your Website?</h3>
                <p className="text-muted-foreground text-sm mb-4">Start your free trial and increase conversions in minutes.</p>
                <Button asChild>
                  <a href="https://app.notiproof.com/signup">Start Free Trial <ArrowRight className="w-4 h-4" /></a>
                </Button>
              </div>

              {/* Author full card */}
              <AuthorCard author={author} />

              {/* Related (inline, below article) */}
              <nav className="mt-12" aria-label="Related articles">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid gap-4">
                  {relatedArticles.map((a) => (
                    <Link key={a.href} to={a.href} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all">
                      <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <h3 className="font-semibold text-sm">{a.title}</h3>
                        <p className="text-xs text-muted-foreground">{a.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            {/* Sidebar (desktop only) */}
            <div className="hidden lg:block w-64 shrink-0">
              <ArticleSidebar relatedArticles={sidebarRelated} />
            </div>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
