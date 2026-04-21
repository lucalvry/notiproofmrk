/**
 * LearningResource / Course + CollectionPage schema helpers for pillar pages.
 *
 * Drives `hasPart` from the topical map so cluster lists stay in sync.
 * Returns an array: [LearningResource, CollectionPage] — both wired to the
 * same cluster set so each pillar publishes machine-verifiable topical
 * authority (Koray Pillar 5 — pillar = CollectionPage with hasPart).
 */
import { topicalMap } from "@/data/topicalMap";

const DOMAIN = "https://notiproof.com";

interface LearningResourceOptions {
  pillarName: string;
  description: string;
  url: string;
  /** ISO date the curriculum was last reviewed/updated */
  dateModified?: string;
}

/**
 * Build a `LearningResource` + `CollectionPage` JSON-LD pair for a pillar page.
 * Both nodes share `hasPart` so search engines can verify pillar coverage from
 * either entry point.
 */
export function buildLearningResourceSchema({ pillarName, description, url, dateModified }: LearningResourceOptions) {
  const pillar = topicalMap.find((p) => p.name === pillarName);
  if (!pillar) return null;

  const publishedClusters = pillar.clusters.filter((c) => c.status === "published");

  const hasPart = publishedClusters.map((c) => ({
    "@type": "LearningResource",
    name: c.title,
    url: `${DOMAIN}${c.url}`,
    learningResourceType: "Article",
    about: {
      "@type": "Thing",
      name: c.about.name,
      ...(c.about.sameAs && { sameAs: c.about.sameAs }),
    },
  }));

  const collectionItemList = publishedClusters.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${DOMAIN}${c.url}`,
    name: c.title,
  }));

  const learningResource = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: `${pillarName} — Complete Learning Curriculum`,
    description,
    url,
    learningResourceType: "Curriculum",
    educationalLevel: "Beginner to Advanced",
    inLanguage: "en",
    teaches: {
      "@type": "DefinedTerm",
      name: pillar.about.name,
      ...(pillar.about.sameAs && { sameAs: pillar.about.sameAs }),
    },
    about: {
      "@type": "DefinedTerm",
      name: pillar.about.name,
      ...(pillar.about.sameAs && { sameAs: pillar.about.sameAs }),
    },
    provider: { "@type": "Organization", name: "NotiProof", url: DOMAIN },
    ...(dateModified && { dateModified }),
    hasPart,
  };

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${pillarName} — Topical Hub`,
    description,
    url,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: "NotiProof", url: DOMAIN },
    about: {
      "@type": "DefinedTerm",
      name: pillar.about.name,
      ...(pillar.about.sameAs && { sameAs: pillar.about.sameAs }),
    },
    ...(dateModified && { dateModified }),
    hasPart,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: publishedClusters.length,
      itemListElement: collectionItemList,
    },
  };

  return [learningResource, collectionPage];
}
