import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { topicalMap, getTopicalCoverage } from "@/data/topicalMap";

const CANONICAL = "https://notiproof.com/resources/topical-map/";

export default function TopicalMap() {
  const coverage = getTopicalCoverage();
  const totalClusters = coverage.reduce((sum, p) => sum + p.clusterCount, 0);
  const totalPublished = coverage.reduce((sum, p) => sum + p.publishedCount, 0);

  // Schema: emit the topical map as a CollectionPage with a hasPart array of
  // every pillar/cluster — this is the publicly verifiable Pillar 1 deliverable.
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NotiProof Topical Map — Documented Content Hierarchy",
    description: "Auditable topical authority map: 6 macro pillars, 66+ subtopic clusters, with macro entities (about) and Wikipedia entity references for every published article.",
    url: CANONICAL,
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
    hasPart: topicalMap.map((p) => ({
      "@type": "CreativeWork",
      name: p.name,
      url: `https://notiproof.com${p.url}`,
      about: {
        "@type": "Thing",
        name: p.about.name,
        ...(p.about.sameAs && { sameAs: p.about.sameAs }),
      },
      hasPart: p.clusters.map((c) => ({
        "@type": "Article",
        headline: c.title,
        url: `https://notiproof.com${c.url}`,
        about: {
          "@type": "Thing",
          name: c.about.name,
          ...(c.about.sameAs && { sameAs: c.about.sameAs }),
        },
      })),
    })),
  };

  return (
    <>
      <SEOHead
        title="Topical Map — Documented Content Hierarchy | NotiProof"
        description="Public topical authority map showing every pillar, cluster, and macro entity covered on NotiProof. Built per Koray Tuğberk GÜBÜR's semantic SEO framework."
        canonical={CANONICAL}
        schema={schema}
      />

      <section className="section-padding">
        <div className="container-tight max-w-5xl mx-auto">
          <Breadcrumbs />

          <header className="mb-12 mt-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              NotiProof Topical Map
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              The documented content hierarchy that backs every article on NotiProof. Each pillar covers a macro topic; each cluster covers a subtopic with explicit entity references to Wikipedia / Wikidata. This is the public, auditable artifact behind our topical authority claims.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="border border-border rounded-xl p-5 bg-card">
                <div className="text-3xl font-extrabold text-primary">{topicalMap.length}</div>
                <div className="text-sm text-muted-foreground mt-1">Macro pillars</div>
              </div>
              <div className="border border-border rounded-xl p-5 bg-card">
                <div className="text-3xl font-extrabold text-primary">{totalClusters}</div>
                <div className="text-sm text-muted-foreground mt-1">Cluster articles</div>
              </div>
              <div className="border border-border rounded-xl p-5 bg-card">
                <div className="text-3xl font-extrabold text-primary">{totalPublished}</div>
                <div className="text-sm text-muted-foreground mt-1">Published</div>
              </div>
            </div>
          </header>

          <div className="space-y-12">
            {topicalMap.map((pillar) => (
              <section key={pillar.url} className="border border-border rounded-2xl p-6 md:p-8 bg-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      <Link to={pillar.url} className="hover:text-primary transition-colors inline-flex items-center gap-2">
                        {pillar.name}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </h2>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </div>
                  <a
                    href={pillar.about.sameAs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {pillar.about.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-3">
                  {pillar.clusters.map((c) => (
                    <Link
                      key={c.url}
                      to={c.url}
                      className="group flex items-start gap-3 border border-border rounded-lg p-4 hover:border-primary/40 hover:bg-primary/5 transition-all"
                    >
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {c.title}
                        </div>
                        <div className="mt-1 flex flex-wrap gap-1.5">
                          <span className="text-[10px] font-medium bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded">
                            about: {c.about.name}
                          </span>
                          {c.mentions?.slice(0, 2).map((m) => (
                            <span key={m.name} className="text-[10px] font-medium bg-muted text-muted-foreground px-1.5 py-0.5 rounded">
                              {m.name}
                            </span>
                          ))}
                          {c.mentions && c.mentions.length > 2 && (
                            <span className="text-[10px] text-muted-foreground">+{c.mentions.length - 2}</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="mt-12 border border-primary/20 bg-primary/5 rounded-xl p-6">
            <h2 className="text-lg font-bold mb-2">About this map</h2>
            <p className="text-sm text-muted-foreground">
              This topical map is the Pillar 1 deliverable in <strong className="text-foreground">Koray Tuğberk GÜBÜR's</strong> semantic SEO framework. Every cluster page emits Article schema with <code className="text-xs bg-background px-1 py-0.5 rounded">about</code> and <code className="text-xs bg-background px-1 py-0.5 rounded">mentions</code> derived from this single source of truth, giving search engines explicit entity vectors for topical authority verification.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
