import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

export default function ConversionRateCalculator() {
  const [visitors, setVisitors] = useState("");
  const [conversions, setConversions] = useState("");
  const [result, setResult] = useState<{ rate: number; needed5: number; needed10: number; needed25: number } | null>(null);

  const handleCalc = () => {
    const v = Number(visitors);
    const c = Number(conversions);
    if (v <= 0 || c < 0) return;
    const rate = (c / v) * 100;
    setResult({
      rate,
      needed5: Math.ceil(v * 0.05) - c,
      needed10: Math.ceil(v * 0.10) - c,
      needed25: Math.ceil(v * 0.25) - c,
    });
  };

  return (
    <>
      <SEOHead
        title="Free Conversion Rate Calculator – Instant Results"
        description="Calculate your website conversion rate instantly. Enter visitors and conversions to see your rate plus benchmarks and improvement targets."
        canonical="https://notiproof.com/free-tools/conversion-rate-calculator/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Conversion Rate Calculator",
          description: "Calculate your website conversion rate and see improvement targets.",
          url: "https://notiproof.com/free-tools/conversion-rate-calculator/",
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
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Conversion Rate Calculator</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Calculate your conversion rate and see how many additional conversions you need to hit key benchmarks.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-2xl">
          <Card className="p-6 md:p-8">
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-1 block">Total Visitors</label>
                <Input type="number" placeholder="e.g. 10000" value={visitors} onChange={(e) => setVisitors(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Total Conversions</label>
                <Input type="number" placeholder="e.g. 250" value={conversions} onChange={(e) => setConversions(e.target.value)} />
              </div>
            </div>
            <Button onClick={handleCalc} className="w-full" size="lg">
              <Calculator className="w-4 h-4 mr-2" /> Calculate Rate
            </Button>

            {result && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 space-y-4">
                <div className="text-center p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Your Conversion Rate</p>
                  <p className="text-4xl font-extrabold text-primary">{result.rate.toFixed(2)}%</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Conversions needed to reach benchmarks:</p>
                  {[
                    { label: "5% (Good)", needed: result.needed5 },
                    { label: "10% (Great)", needed: result.needed10 },
                    { label: "25% (Elite)", needed: result.needed25 },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border">
                      <span className="text-sm font-medium">{b.label}</span>
                      <span className={`text-sm font-bold ${b.needed <= 0 ? "text-green-600" : "text-muted-foreground"}`}>
                        {b.needed <= 0 ? "✓ Already there!" : `+${b.needed.toLocaleString()} more`}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-card border border-border">
                  <h3 className="text-sm font-bold mb-2">Industry Benchmarks</h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• E-commerce: 1.5–3.5%</li>
                    <li>• SaaS free trial: 3–8%</li>
                    <li>• Lead generation: 5–15%</li>
                    <li>• Landing pages (optimized): 10–25%</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </Card>

          <div className="mt-8 bg-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-3">Related Reading</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/conversion-analytics/conversion-rate-benchmarks/" className="text-primary hover:underline">Conversion Rate Benchmarks by Industry →</Link></li>
              <li><Link to="/resources/cro/landing-page-optimization/" className="text-primary hover:underline">Landing Page Optimization Guide →</Link></li>
              <li><Link to="/resources/cro/ecommerce-conversion-optimization/" className="text-primary hover:underline">E-commerce Conversion Optimization →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Boost Your Conversion Rate" description="NotiProof customers see 10–35% conversion lifts with social proof notifications, testimonials, and reviews." />
    </>
  );
}
