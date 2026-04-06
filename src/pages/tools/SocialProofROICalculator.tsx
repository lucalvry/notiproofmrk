import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

const lifts = [5, 10, 15, 20, 30, 35];

export default function SocialProofROICalculator() {
  const [traffic, setTraffic] = useState("");
  const [convRate, setConvRate] = useState("");
  const [aov, setAov] = useState("");
  const [results, setResults] = useState<{ lift: number; newRate: number; addlConvs: number; addlRev: number }[] | null>(null);

  const handleCalc = () => {
    const t = Number(traffic);
    const cr = Number(convRate) / 100;
    const a = Number(aov);
    if (t <= 0 || cr <= 0 || a <= 0) return;
    const baseConvs = t * cr;
    const baseRev = baseConvs * a;
    setResults(
      lifts.map((l) => {
        const newRate = cr * (1 + l / 100);
        const newConvs = t * newRate;
        return { lift: l, newRate: newRate * 100, addlConvs: newConvs - baseConvs, addlRev: (newConvs - baseConvs) * a };
      })
    );
  };

  return (
    <>
      <SEOHead
        title="Social Proof ROI Calculator – Free Tool"
        description="Estimate the revenue impact of social proof on your website. Enter your traffic, conversion rate, and AOV to see projected lift at various improvement levels."
        canonical="https://notiproof.com/free-tools/social-proof-roi-calculator/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Social Proof ROI Calculator",
          description: "Estimate revenue lift from social proof based on your traffic, conversion rate, and average order value.",
          url: "https://notiproof.com/free-tools/social-proof-roi-calculator/",
          applicationCategory: "BusinessApplication",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          provider: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
        }}
      />

      <section className="relative overflow-hidden bg-foreground text-background py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <motion.div {...fadeUp}>
            <Link to="/free-tools/" className="text-sm text-primary hover:underline mb-3 inline-block">← Free Tools</Link>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Social Proof ROI Calculator</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">See how much additional revenue social proof could generate for your business.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-2xl">
          <Card className="p-6 md:p-8">
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-1 block">Monthly Website Visitors</label>
                <Input type="number" placeholder="e.g. 50000" value={traffic} onChange={(e) => setTraffic(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Current Conversion Rate (%)</label>
                <Input type="number" step="0.01" placeholder="e.g. 2.5" value={convRate} onChange={(e) => setConvRate(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Average Order Value ($)</label>
                <Input type="number" step="0.01" placeholder="e.g. 85" value={aov} onChange={(e) => setAov(e.target.value)} />
              </div>
            </div>
            <Button onClick={handleCalc} className="w-full" size="lg">
              <DollarSign className="w-4 h-4 mr-2" /> Calculate ROI
            </Button>

            {results && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <p className="text-sm text-muted-foreground mb-3">Estimated additional monthly revenue at various conversion lifts:</p>
                <div className="space-y-2">
                  {results.map((r) => (
                    <div key={r.lift} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border">
                      <div>
                        <span className="text-sm font-medium">+{r.lift}% lift</span>
                        <span className="text-xs text-muted-foreground ml-2">({r.newRate.toFixed(2)}% conv. rate)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-green-600">+${r.addlRev.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo</span>
                        <span className="text-xs text-muted-foreground ml-2">(+{Math.round(r.addlConvs)} orders)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </Card>

          <div className="mt-8 bg-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-3">Related Reading</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/conversion-analytics/measuring-social-proof-roi/" className="text-primary hover:underline">Measuring Social Proof ROI: Complete Guide →</Link></li>
              <li><Link to="/resources/social-proof/social-proof-in-marketing/" className="text-primary hover:underline">Social Proof in Marketing →</Link></li>
              <li><Link to="/resources/social-proof/social-proof-example/" className="text-primary hover:underline">Social Proof Examples That Convert →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Start Boosting Conversions Today" description="NotiProof customers see 10-35% conversion lifts with social proof notifications, testimonials, and reviews." />
    </>
  );
}
