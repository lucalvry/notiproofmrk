import { Helmet } from "react-helmet-async";

interface ArticleMeta {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

type LegalPageType = "PrivacyPolicy" | "TermsOfService" | "CollectionPage";

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
  pageType?: LegalPageType;
  lastReviewed?: string;
  reviewedBy?: { name: string; url?: string };
  primaryImageOfPage?: string;
  /** Koray G10 — declare sibling/related URLs in WebPage schema for silo cross-linking */
  relatedLink?: string[];
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
  pageType,
  lastReviewed,
  reviewedBy,
  primaryImageOfPage,
  relatedLink,
}: SEOHeadProps) {
  const fullTitle = title.includes("NotiProof") ? title : `${title} – NotiProof`;
  const canonicalUrl = canonical || (typeof window !== "undefined" ? window.location.href : "");

  const allSchemas: object[] = [];

  // Default WebPage schema on every page (typed for legal pages when pageType is provided)
  // Koray Pillar 6: lastReviewed + reviewedBy signal content freshness audits to Google
  const currentYear = new Date().getFullYear();
  const webPageSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": pageType || "WebPage",
    name: fullTitle,
    description,
    url: canonicalUrl,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "NotiProof",
      url: "https://notiproof.com/",
    },
    copyrightYear: currentYear,
    copyrightHolder: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com/" },
    ...(lastReviewed && { lastReviewed }),
    ...(reviewedBy && {
      reviewedBy: {
        "@type": "Person",
        name: reviewedBy.name,
        ...(reviewedBy.url && { url: reviewedBy.url }),
      },
    }),
    ...(primaryImageOfPage && {
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: primaryImageOfPage.startsWith("http")
          ? primaryImageOfPage
          : `https://notiproof.com${primaryImageOfPage}`,
        creator: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com/" },
        creditText: "NotiProof",
        copyrightNotice: `© ${currentYear} NotiProof`,
        license: "https://notiproof.com/legal/terms-of-service/",
      },
    }),
    ...(relatedLink && relatedLink.length > 0 && { relatedLink }),
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
