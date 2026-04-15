import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

export default function CartAbandonmentCalculator() {
  const [carts, setCarts] = useState("");
  const [completions, setCompletions] = useState("");
  const [aov, setAov] = useState("");
  const [result, setResult] = useState<{
    abandonRate: number;
    lostCarts: number;
    lostRevenue: number;
    recovery5: number;
    recovery10: number;
    recovery15: number;
  } | null>(null);

  const handleCalc = () => {
    const c = Number(carts);
    const comp = Number(completions);
    const a = Number(aov);
    if (c <= 0 || comp < 0 || a <= 0 || comp > c) return;
    const lostCarts = c - comp;
    const abandonRate = (lostCarts / c) * 100;
    const lostRevenue = lostCarts * a;
    setResult({
      abandonRate,
      lostCarts,
      lostRevenue,
      recovery5: lostCarts * 0.05 * a,
      recovery10: lostCarts * 0.10 * a,
      recovery15: lostCarts * 0.15 * a,
    });
  };

  return (
    <>
      <SEOHead
        title="Cart Abandonment Calculator – Revenue Loss Estimator"
        description="Calculate how much revenue you're losing to cart abandonment and see how much you could recover with exit-intent popups and social proof."
        canonical="https://notiproof.com/free-tools/cart-abandonment-calculator/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Cart Abandonment Calculator",
          description: "Calculate revenue lost to cart abandonment and potential recovery.",
          url: "https://notiproof.com/free-tools/cart-abandonment-calculator/",
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
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Cart Abandonment Calculator</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">See how much revenue you're leaving on the table — and how much you could recover.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-2xl">
          <Card className="p-6 md:p-8">
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-1 block">Monthly Carts Created</label>
                <Input type="number" placeholder="e.g. 5000" value={carts} onChange={(e) => setCarts(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Monthly Completed Purchases</label>
                <Input type="number" placeholder="e.g. 1500" value={completions} onChange={(e) => setCompletions(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Average Order Value ($)</label>
                <Input type="number" step="0.01" placeholder="e.g. 85" value={aov} onChange={(e) => setAov(e.target.value)} />
              </div>
            </div>
            <Button onClick={handleCalc} className="w-full" size="lg">
              <ShoppingCart className="w-4 h-4 mr-2" /> Calculate Lost Revenue
            </Button>

            {result && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <p className="text-xs text-muted-foreground mb-1">Abandonment Rate</p>
                    <p className="text-2xl font-extrabold text-red-600">{result.abandonRate.toFixed(1)}%</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <p className="text-xs text-muted-foreground mb-1">Lost Carts/mo</p>
                    <p className="text-2xl font-extrabold text-red-600">{result.lostCarts.toLocaleString()}</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <p className="text-xs text-muted-foreground mb-1">Lost Revenue/mo</p>
                    <p className="text-2xl font-extrabold text-red-600">${result.lostRevenue.toLocaleString()}</p>
                  </div>
                </div>

                <p className="text-sm font-medium text-muted-foreground">Potential monthly recovery with social proof & exit-intent:</p>
                <div className="space-y-2">
                  {[
                    { label: "5% recovery (conservative)", val: result.recovery5 },
                    { label: "10% recovery (average)", val: result.recovery10 },
                    { label: "15% recovery (optimized)", val: result.recovery15 },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border">
                      <span className="text-sm">{r.label}</span>
                      <span className="text-sm font-bold text-green-600">+${r.val.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </Card>

          <div className="mt-8 bg-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-3">Related Reading</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/cro/cart-abandonment/" className="text-primary hover:underline">Cart Abandonment: Causes & Solutions →</Link></li>
              <li><Link to="/resources/cro/exit-intent-strategies/" className="text-primary hover:underline">Exit Intent Strategies →</Link></li>
              <li><Link to="/resources/cro/checkout-optimization/" className="text-primary hover:underline">Checkout Optimization Guide →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Recover Lost Revenue Automatically" description="NotiProof's purchase notifications and urgency signals reduce cart abandonment by 10–25%." />
    </>
  );
}
