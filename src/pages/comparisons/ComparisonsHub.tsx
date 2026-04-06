import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Minus } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

const comparisons = [
  { name: "Fomo", slug: "notiproof-vs-fomo", desc: "Compare real-time notifications, integrations, and pricing." },
  { name: "TrustPulse", slug: "notiproof-vs-trustpulse", desc: "See how analytics, targeting, and value stack up." },
  { name: "Proof", slug: "notiproof-vs-proof", desc: "Feature depth, testimonial tools, and ROI compared." },
  { name: "ProveSource", slug: "notiproof-vs-provesource", desc: "Side-by-side on notifications, video, and support." },
];

const summaryFeatures = [
  { feature: "Free Plan", notiproof: true, fomo: false, trustpulse: false, proof: false, provesource: true },
  { feature: "Video Testimonials", notiproof: true, fomo: false, trustpulse: false, proof: false, provesource: false },
  { feature: "Review Aggregation", notiproof: true, fomo: false, trustpulse: false, proof: false, provesource: false },
  { feature: "A/B Testing", notiproof: true, fomo: true, trustpulse: false, proof: true, provesource: false },
  { feature: "Analytics Dashboard", notiproof: true, fomo: true, trustpulse: true, proof: true, provesource: true },
  { feature: "White-Label", notiproof: true, fomo: true, trustpulse: false, proof: false, provesource: true },
  { feature: "38+ Integrations", notiproof: true, fomo: true, trustpulse: false, proof: false, provesource: true },
  { feature: "Campaign Builder", notiproof: true, fomo: false, trustpulse: false, proof: false, provesource: false },
];

function BoolIcon({ val }: { val: boolean }) {
  return val ? <Check className="w-4 h-4 text-green-600 mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
}

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Social Proof Software Comparisons – NotiProof",
    description: "Compare NotiProof with Fomo, TrustPulse, Proof, and ProveSource. Detailed feature tables, pricing, and verdicts.",
    url: "https://notiproof.com/comparisons/",
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Social Proof Software Comparisons",
    itemListElement: comparisons.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `NotiProof vs ${c.name}`,
      url: `https://notiproof.com/comparisons/${c.slug}/`,
    })),
  },
];

export default function ComparisonsHub() {
  return (
    <>
      <SEOHead
        title="Social Proof Software Comparisons (2025)"
        description="Compare NotiProof vs Fomo, TrustPulse, Proof & ProveSource. Side-by-side feature tables, pricing breakdowns, and expert verdicts."
        canonical="https://notiproof.com/comparisons/"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Comparisons</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Social Proof Software Comparisons</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Honest, detailed comparisons so you can pick the best social proof tool for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Head-to-Head Comparisons</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {comparisons.map((c, i) => (
              <motion.div key={c.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link
                  to={`/comparisons/${c.slug}/`}
                  className="group flex flex-col h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">NotiProof vs {c.name}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{c.desc}</p>
                  <span className="mt-4 text-sm font-semibold text-primary flex items-center gap-1">
                    Read comparison <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-12 bg-muted/30">
        <div className="container-tight">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">At a Glance</h2>
            <div className="rounded-xl border border-border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-bold">Feature</TableHead>
                    <TableHead className="text-center font-bold text-primary">NotiProof</TableHead>
                    <TableHead className="text-center font-bold">Fomo</TableHead>
                    <TableHead className="text-center font-bold">TrustPulse</TableHead>
                    <TableHead className="text-center font-bold">Proof</TableHead>
                    <TableHead className="text-center font-bold">ProveSource</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {summaryFeatures.map((row) => (
                    <TableRow key={row.feature}>
                      <TableCell className="font-medium text-sm">{row.feature}</TableCell>
                      <TableCell><BoolIcon val={row.notiproof} /></TableCell>
                      <TableCell><BoolIcon val={row.fomo} /></TableCell>
                      <TableCell><BoolIcon val={row.trustpulse} /></TableCell>
                      <TableCell><BoolIcon val={row.proof} /></TableCell>
                      <TableCell><BoolIcon val={row.provesource} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-2xl font-bold text-center mb-6">Related Resources</h2>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link to="/resources/social-proof/what-is-social-proof/" className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-center">
              <p className="text-sm font-semibold">What Is Social Proof?</p>
              <p className="text-xs text-muted-foreground mt-1">The complete guide</p>
            </Link>
            <Link to="/free-tools/" className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-center">
              <p className="text-sm font-semibold">Free CRO Tools</p>
              <p className="text-xs text-muted-foreground mt-1">Calculators & audits</p>
            </Link>
            <Link to="/resources/conversion-analytics/" className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-center">
              <p className="text-sm font-semibold">Conversion Analytics</p>
              <p className="text-xs text-muted-foreground mt-1">Measure & optimize</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Ready to See NotiProof in Action?" description="Start your free 14-day trial and see why teams switch from competitors." />
    </>
  );
}
