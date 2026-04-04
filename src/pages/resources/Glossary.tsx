import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import SEOHead from "@/components/SEOHead";
import glossaryTerms from "@/data/glossaryTerms";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const schema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Social Proof & CRO Glossary",
  url: "https://notiproof.com/resources/glossary/",
  hasDefinedTerm: glossaryTerms.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
    url: `https://notiproof.com/resources/glossary/#${t.slug}`,
  })),
};

export default function Glossary() {
  const [query, setQuery] = useState("");
  const lq = query.toLowerCase();

  const filtered = useMemo(
    () => glossaryTerms.filter((t) => t.term.toLowerCase().includes(lq) || t.definition.toLowerCase().includes(lq)),
    [lq],
  );

  const grouped = useMemo(() => {
    const map: Record<string, typeof glossaryTerms> = {};
    filtered.forEach((t) => {
      const letter = t.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(t);
    });
    return map;
  }, [filtered]);

  const activeLetters = new Set(Object.keys(grouped));

  return (
    <>
      <SEOHead
        title="Social Proof & CRO Glossary – Key Terms Defined"
        description="A comprehensive glossary of social proof, conversion rate optimization, and digital marketing terms. Clear definitions with links to in-depth guides."
        canonical="https://notiproof.com/resources/glossary/"
        schema={schema}
      />

      <section className="section-padding">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Glossary</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Key terms in social proof, conversion optimization, and digital marketing — clearly defined with links to in-depth resources.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mb-6">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search terms…"
                className="pl-10 pr-10 h-11 rounded-xl"
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Alphabet nav */}
            <nav className="flex flex-wrap gap-1 mb-10" aria-label="Alphabet navigation">
              {alphabet.map((l) => (
                <a
                  key={l}
                  href={`#letter-${l}`}
                  className={`w-8 h-8 flex items-center justify-center rounded text-xs font-bold transition-colors ${
                    activeLetters.has(l)
                      ? "bg-primary/10 text-primary hover:bg-primary/20"
                      : "text-muted-foreground/30 cursor-default pointer-events-none"
                  }`}
                >
                  {l}
                </a>
              ))}
            </nav>

            {/* Terms */}
            {filtered.length === 0 && (
              <p className="text-muted-foreground py-8">No terms match "{query}".</p>
            )}

            <div className="space-y-10">
              {alphabet
                .filter((l) => grouped[l])
                .map((l) => (
                  <div key={l} id={`letter-${l}`} className="scroll-mt-24">
                    <h2 className="text-2xl font-extrabold text-primary mb-4">{l}</h2>
                    <div className="space-y-4">
                      {grouped[l].map((t) => (
                        <div
                          key={t.slug}
                          id={t.slug}
                          className="bg-card border border-border rounded-xl p-5 scroll-mt-24"
                        >
                          <h3 className="text-base font-bold mb-2">{t.term}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t.definition}</p>
                          {t.relatedLinks && t.relatedLinks.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {t.relatedLinks.map((rl) => (
                                <Link
                                  key={rl.href}
                                  to={rl.href}
                                  className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline"
                                >
                                  <ArrowRight className="w-3 h-3" />
                                  {rl.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
