import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object | object[];
  ogImage?: string;
  noindex?: boolean;
  speakable?: string[];
}

export default function SEOHead({
  title,
  description,
  canonical,
  schema,
  ogImage = "https://notiproof.com/og-image.png",
  noindex = false,
  speakable,
}: SEOHeadProps) {
  const fullTitle = title.includes("NotiProof") ? title : `${title} – NotiProof`;
  const canonicalUrl = canonical || (typeof window !== "undefined" ? window.location.href : "");

  const allSchemas: object[] = [];
  if (schema) {
    if (Array.isArray(schema)) allSchemas.push(...schema);
    else allSchemas.push(schema);
  }

  if (speakable && speakable.length > 0) {
    allSchemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: fullTitle,
      url: canonicalUrl,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: speakable,
      },
    });
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}

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
