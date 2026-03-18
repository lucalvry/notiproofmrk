import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };
export default function BestSocialProofSoftware() {
  return (<>
    <SEOHead title="Best Social Proof Software (2025) – Compare Top Tools" description="Compare the best social proof software for 2025: NotiProof, Fomo, Proof, TrustPulse, and more. Features, pricing, and honest reviews." canonical="https://notiproof.com/best-social-proof-software/" />
    <section className="section-padding"><div className="container-tight">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Best Social Proof Software in 2025</h1>
        <p className="text-lg text-muted-foreground">An honest comparison of the top social proof platforms. Find the right tool for your business.</p>
      </motion.div>
      <div className="max-w-4xl mx-auto space-y-6">
        {[
          { name: "NotiProof", desc: "All-in-one social proof & testimonial platform with 38+ integrations, video testimonials, and AI analysis.", price: "Free – $380/mo", highlight: true },
          { name: "Fomo", desc: "Real-time social proof notifications for e-commerce stores.", price: "$25 – $149/mo", highlight: false },
          { name: "Proof (UseProof)", desc: "Social proof notifications with A/B testing. Recently acquired.", price: "$79 – $299/mo", highlight: false },
          { name: "TrustPulse", desc: "Simple social proof notification tool by OptinMonster.", price: "$5 – $39/mo", highlight: false },
          { name: "ProveSource", desc: "Social proof notifications with basic analytics.", price: "Free – $166/mo", highlight: false },
        ].map((tool) => (
          <div key={tool.name} className={`bg-card border rounded-xl p-6 ${tool.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"}`}>
            {tool.highlight && <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full mb-2 inline-block">Our Pick</span>}
            <h2 className="text-xl font-bold mb-2">{tool.name}</h2>
            <p className="text-sm text-muted-foreground mb-2">{tool.desc}</p>
            <p className="text-sm font-semibold">{tool.price}</p>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">Why NotiProof Stands Out</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {["All-in-one platform (notifications + testimonials + reviews)", "38+ integrations included on every plan", "Video testimonial recorder built in", "AI testimonial analysis", "White label available", "1-line install, no developers needed"].map((b) => (
            <div key={b} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm">{b}</span></div>
          ))}
        </div>
      </div>
    </div></section>
    <CTASection />
  </>);
}
