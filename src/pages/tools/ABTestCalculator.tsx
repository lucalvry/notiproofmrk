import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

function calcSignificance(visitorsA: number, convsA: number, visitorsB: number, convsB: number) {
  if (visitorsA <= 0 || visitorsB <= 0) return null;
  const rateA = convsA / visitorsA;
  const rateB = convsB / visitorsB;
  const seA = Math.sqrt((rateA * (1 - rateA)) / visitorsA);
  const seB = Math.sqrt((rateB * (1 - rateB)) / visitorsB);
  const seDiff = Math.sqrt(seA * seA + seB * seB);
  if (seDiff === 0) return null;
  const zScore = (rateB - rateA) / seDiff;
  // Approximate two-tailed p-value using error function approximation
  const absZ = Math.abs(zScore);
  const t = 1 / (1 + 0.2316419 * absZ);
  const d = 0.3989422804014327;
  const prob = d * Math.exp(-absZ * absZ / 2) * (0.3193815 * t + -0.3565638 * t * t + 1.781478 * t * t * t + -1.8212560 * t * t * t * t + 1.3302744 * t * t * t * t * t);
  const pValue = 2 * prob;
  const confidence = (1 - pValue) * 100;
  const lift = rateA > 0 ? ((rateB - rateA) / rateA) * 100 : 0;
  return { rateA: rateA * 100, rateB: rateB * 100, lift, confidence, pValue, significant: confidence >= 95 };
}

export default function ABTestCalculator() {
  const [visitorsA, setVisitorsA] = useState("");
  const [convsA, setConvsA] = useState("");
  const [visitorsB, setVisitorsB] = useState("");
  const [convsB, setConvsB] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calcSignificance>>(null);

  const handleCalc = () => {
    const r = calcSignificance(Number(visitorsA), Number(convsA), Number(visitorsB), Number(convsB));
    setResult(r);
  };

  return (
    <>
      <SEOHead
        title="Free A/B Test Significance Calculator"
        description="Calculate statistical significance for your A/B tests. Enter visitors and conversions for control and variant to get confidence level, lift %, and p-value."
        canonical="https://notiproof.com/free-tools/ab-test-calculator/"
      />

      <section className="relative overflow-hidden bg-foreground text-background py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <motion.div {...fadeUp}>
            <Link to="/free-tools/" className="text-sm text-primary hover:underline mb-3 inline-block">← Free Tools</Link>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">A/B Test Significance Calculator</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Enter your test data to calculate statistical significance, confidence level, and conversion lift.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-2xl">
          <Card className="p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-bold mb-3 text-muted-foreground uppercase tracking-wider">Control (A)</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Visitors</label>
                    <Input type="number" placeholder="e.g. 5000" value={visitorsA} onChange={(e) => setVisitorsA(e.target.value)} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Conversions</label>
                    <Input type="number" placeholder="e.g. 150" value={convsA} onChange={(e) => setConvsA(e.target.value)} />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-3 text-primary uppercase tracking-wider">Variant (B)</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Visitors</label>
                    <Input type="number" placeholder="e.g. 5000" value={visitorsB} onChange={(e) => setVisitorsB(e.target.value)} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Conversions</label>
                    <Input type="number" placeholder="e.g. 185" value={convsB} onChange={(e) => setConvsB(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
            <Button onClick={handleCalc} className="w-full" size="lg">
              <Calculator className="w-4 h-4 mr-2" /> Calculate Significance
            </Button>

            {result && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-5 bg-muted/50 rounded-xl space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Control Rate</p>
                    <p className="text-lg font-bold">{result.rateA.toFixed(2)}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Variant Rate</p>
                    <p className="text-lg font-bold text-primary">{result.rateB.toFixed(2)}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Relative Lift</p>
                    <p className={`text-lg font-bold ${result.lift >= 0 ? "text-green-600" : "text-destructive"}`}>
                      {result.lift >= 0 ? "+" : ""}{result.lift.toFixed(2)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Confidence</p>
                    <p className={`text-lg font-bold ${result.significant ? "text-green-600" : "text-muted-foreground"}`}>
                      {result.confidence.toFixed(1)}%
                    </p>
                  </div>
                </div>
                <div className={`p-3 rounded-lg text-sm font-medium text-center ${result.significant ? "bg-green-50 text-green-800 border border-green-200" : "bg-muted border border-border"}`}>
                  {result.significant
                    ? "✅ Statistically significant! You can confidently pick the winner."
                    : "⏳ Not yet significant. Collect more data before making a decision."}
                </div>
              </motion.div>
            )}
          </Card>
        </div>
      </section>

      <CTASection title="A/B Test Your Social Proof Automatically" description="NotiProof includes built-in A/B testing for notifications — no spreadsheets needed." />
    </>
  );
}
