import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";

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
  content: React.ReactNode;
  relatedArticles: ArticleLink[];
  pillarLink?: { label: string; href: string };
}

export default function ResourceArticle({
  metaTitle, metaDescription, canonical, title, readingTime = "8 min read",
  content, relatedArticles, pillarLink,
}: ResourceArticleProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    author: { "@type": "Organization", name: "NotiProof" },
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
    url: canonical,
  };

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} canonical={canonical} schema={articleSchema} />

      <article className="section-padding">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto">
            <header className="mb-12">
              {pillarLink && (
                <Link to={pillarLink.href} className="text-sm text-primary font-semibold mb-4 inline-block hover:underline">
                  ← {pillarLink.label}
                </Link>
              )}
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>By NotiProof Team</span>
                <span>·</span>
                <span>{readingTime}</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              {content}
            </div>

            {/* CTA within article */}
            <div className="my-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-3">Ready to Add Social Proof to Your Website?</h3>
              <p className="text-muted-foreground text-sm mb-4">Start your free trial and increase conversions in minutes.</p>
              <Button asChild>
                <a href="https://app.notiproof.com/signup">Start Free Trial <ArrowRight className="w-4 h-4" /></a>
              </Button>
            </div>
          </div>

          {/* Related */}
          <div className="max-w-3xl mx-auto mt-12">
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
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
