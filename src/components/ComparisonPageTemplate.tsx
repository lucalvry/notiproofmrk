import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X, Minus, ArrowRight, Trophy, ThumbsUp, ThumbsDown } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FeatureRow {
  feature: string;
  notiproof: string | boolean;
  competitor: string | boolean;
}

export interface PricingTier {
  name: string;
  notiproof: string;
  competitor: string;
}

export interface ComparisonData {
  competitorName: string;
  competitorSlug: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  verdict: string;
  verdictWinner: "notiproof" | "competitor" | "tie";
  features: FeatureRow[];
  pricing: PricingTier[];
  notiproofPros: string[];
  notiproofCons: string[];
  competitorPros: string[];
  competitorCons: string[];
  whoShouldChooseNotiproof: string;
  whoShouldChooseCompetitor: string;
  sections: { title: string; content: string }[];
  faqs: { q: string; a: string }[];
}

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-5 h-5 text-green-600 mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-destructive mx-auto" />;
  if (value === "—") return <Minus className="w-5 h-5 text-muted-foreground mx-auto" />;
  return <span className="text-sm">{value}</span>;
}

export default function ComparisonPageTemplate({ data }: { data: ComparisonData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.metaTitle,
    description: data.metaDescription,
    url: data.canonical,
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  };

  return (
    <>
      <SEOHead title={data.metaTitle} description={data.metaDescription} canonical={data.canonical} schema={schema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Comparison</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              NotiProof vs {data.competitorName}
            </h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Full feature-by-feature comparison to help you choose the right social proof platform.</p>
          </motion.div>
        </div>
      </section>

      {/* Verdict */}
      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp} className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
            <h2 className="text-xl font-bold mb-2">Quick Verdict</h2>
            <p className="text-muted-foreground leading-relaxed">{data.verdict}</p>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-12">
        <div className="container-tight">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Feature Comparison</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-[40%] font-bold">Feature</TableHead>
                    <TableHead className="text-center font-bold text-primary">NotiProof</TableHead>
                    <TableHead className="text-center font-bold">{data.competitorName}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.features.map((row) => (
                    <TableRow key={row.feature}>
                      <TableCell className="font-medium text-sm">{row.feature}</TableCell>
                      <TableCell className="text-center"><CellValue value={row.notiproof} /></TableCell>
                      <TableCell className="text-center"><CellValue value={row.competitor} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-12 bg-muted/30">
        <div className="container-tight">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Pricing Comparison</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-bold">Plan</TableHead>
                    <TableHead className="text-center font-bold text-primary">NotiProof</TableHead>
                    <TableHead className="text-center font-bold">{data.competitorName}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.pricing.map((tier) => (
                    <TableRow key={tier.name}>
                      <TableCell className="font-medium text-sm">{tier.name}</TableCell>
                      <TableCell className="text-center text-sm">{tier.notiproof}</TableCell>
                      <TableCell className="text-center text-sm">{tier.competitor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Sections */}
      {data.sections.map((section, i) => (
        <section key={section.title} className={`py-12 ${i % 2 === 0 ? "" : "bg-muted/30"}`}>
          <div className="container-tight">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">{section.content}</p>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Pros & Cons */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* NotiProof */}
            <motion.div {...fadeUp} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 text-primary">NotiProof</h3>
              <div className="space-y-3 mb-6">
                {data.notiproofPros.map((p) => (
                  <div key={p} className="flex gap-2 items-start">
                    <ThumbsUp className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm">{p}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {data.notiproofCons.map((c) => (
                  <div key={c} className="flex gap-2 items-start">
                    <ThumbsDown className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    <span className="text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Competitor */}
            <motion.div {...fadeUp} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">{data.competitorName}</h3>
              <div className="space-y-3 mb-6">
                {data.competitorPros.map((p) => (
                  <div key={p} className="flex gap-2 items-start">
                    <ThumbsUp className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm">{p}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {data.competitorCons.map((c) => (
                  <div key={c} className="flex gap-2 items-start">
                    <ThumbsDown className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    <span className="text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Should Choose */}
      <section className="py-12 bg-muted/30">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeUp} className="bg-card border border-primary/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">Choose NotiProof if…</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{data.whoShouldChooseNotiproof}</p>
            </motion.div>
            <motion.div {...fadeUp} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">Choose {data.competitorName} if…</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{data.whoShouldChooseCompetitor}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-4">
                <AccordionTrigger className="text-sm font-medium text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Comparisons */}
      <section className="py-12 bg-muted/30">
        <div className="container-tight text-center">
          <h2 className="text-xl font-bold mb-4">More Comparisons</h2>
          <Link to="/comparisons/" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline">
            View all comparisons <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
