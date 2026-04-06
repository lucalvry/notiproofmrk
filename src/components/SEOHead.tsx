import { Helmet } from "react-helmet-async";

interface ArticleMeta {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object | object[];
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
  speakable?: string[];
  articleMeta?: ArticleMeta;
  ogType?: string;
}

export default function SEOHead({
  title,
  description,
  canonical,
  schema,
  ogImage = "https://notiproof.com/og-image.png",
  ogImageAlt,
  noindex = false,
  speakable,
  articleMeta,
  ogType,
}: SEOHeadProps) {
  const fullTitle = title.includes("NotiProof") ? title : `${title} – NotiProof`;
  const canonicalUrl = canonical || (typeof window !== "undefined" ? window.location.href : "");

  const allSchemas: object[] = [];

  // Default WebPage schema on every page
  const webPageSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fullTitle,
    description,
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "NotiProof",
      url: "https://notiproof.com/",
    },
  };
  allSchemas.push(webPageSchema);

  if (schema) {
    if (Array.isArray(schema)) allSchemas.push(...schema);
    else allSchemas.push(schema);
  }

  if (speakable && speakable.length > 0) {
    // Merge speakable into existing WebPage schema instead of creating duplicate
    webPageSchema.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: speakable,
    };
  }

  const resolvedOgType = ogType || (articleMeta ? "article" : "website");

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={resolvedOgType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt || fullTitle} />
      {canonical && <meta property="og:url" content={canonical} />}

      {articleMeta?.publishedTime && (
        <meta property="article:published_time" content={articleMeta.publishedTime} />
      )}
      {articleMeta?.modifiedTime && (
        <meta property="article:modified_time" content={articleMeta.modifiedTime} />
      )}
      {articleMeta?.author && (
        <meta property="article:author" content={articleMeta.author} />
      )}
      {articleMeta?.section && (
        <meta property="article:section" content={articleMeta.section} />
      )}
      {articleMeta?.author && (
        <meta name="author" content={articleMeta.author} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {allSchemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(allSchemas.length === 1 ? allSchemas[0] : allSchemas)}
        </script>
      )}
    </Helmet>
  );
}
