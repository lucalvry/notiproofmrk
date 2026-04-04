import { useState } from "react";
import { Rocket, CreditCard, Plug, Wrench, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import helpCenterData from "@/data/helpCenterData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket, CreditCard, Plug, Wrench,
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: helpCenterData.flatMap((cat) =>
    cat.articles.map((a) => ({
      "@type": "Question",
      name: a.question,
      acceptedAnswer: { "@type": "Answer", text: a.answer },
    }))
  ),
};

export default function HelpCenter() {
  const [query, setQuery] = useState("");
  const lq = query.toLowerCase();

  const filtered = helpCenterData
    .map((cat) => ({
      ...cat,
      articles: cat.articles.filter(
        (a) => a.question.toLowerCase().includes(lq) || a.answer.toLowerCase().includes(lq)
      ),
    }))
    .filter((cat) => cat.articles.length > 0);

  return (
    <>
      <SEOHead
        title="Help Center – NotiProof Support & Knowledge Base"
        description="Find answers to common questions about NotiProof: setup, billing, integrations, and troubleshooting. Get started quickly with step-by-step guides."
        canonical="https://notiproof.com/resources/help-center/"
        schema={schema}
      />

      <section className="section-padding">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Help Center</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers, get started, and resolve issues quickly.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search help articles…"
                className="pl-10 pr-10 h-12 text-base rounded-xl"
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="max-w-3xl mx-auto space-y-10">
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No results found for "{query}". Try a different search term or{" "}
                <Link to="/company/contact/" className="text-primary hover:underline">contact support</Link>.
              </p>
            )}

            {filtered.map((cat) => {
              const Icon = iconMap[cat.icon] || Wrench;
              return (
                <div key={cat.id} id={cat.id}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">{cat.title}</h2>
                      <p className="text-xs text-muted-foreground">{cat.description}</p>
                    </div>
                  </div>

                  <Accordion type="multiple" className="space-y-2">
                    {cat.articles.map((a, i) => (
                      <AccordionItem key={i} value={`${cat.id}-${i}`} className="border border-border rounded-lg px-4">
                        <AccordionTrigger className="text-sm font-medium text-left hover:no-underline">
                          {a.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                          {a.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="max-w-3xl mx-auto mt-16 text-center bg-card border border-border rounded-xl p-8">
            <h3 className="text-lg font-bold mb-2">Still need help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our support team is available Monday–Friday, 9am–6pm GMT.
            </p>
            <Button asChild>
              <Link to="/company/contact/">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
