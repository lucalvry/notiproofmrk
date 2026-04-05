import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

interface TrustItem {
  id: string;
  label: string;
  category: string;
  weight: number;
  tip: string;
}

const items: TrustItem[] = [
  { id: "ssl", label: "SSL certificate (HTTPS)", category: "Security", weight: 10, tip: "Essential. Install a free SSL via Let's Encrypt or your host." },
  { id: "privacy", label: "Privacy policy page", category: "Legal", weight: 5, tip: "Required by GDPR/CCPA. Use a generator if needed." },
  { id: "terms", label: "Terms of service page", category: "Legal", weight: 5, tip: "Protects you and builds customer confidence." },
  { id: "contact", label: "Contact page with multiple methods", category: "Transparency", weight: 8, tip: "Include email, phone, and a contact form." },
  { id: "address", label: "Physical address displayed", category: "Transparency", weight: 6, tip: "Shows you're a real business." },
  { id: "reviews", label: "Customer reviews/testimonials displayed", category: "Social Proof", weight: 10, tip: "Show real reviews on key pages. NotiProof can help!" },
  { id: "badges", label: "Trust badges (payment, security, guarantee)", category: "Social Proof", weight: 7, tip: "Money-back guarantee and secure checkout badges boost trust." },
  { id: "social", label: "Social media profiles linked", category: "Transparency", weight: 4, tip: "Link to active social profiles in your footer." },
  { id: "about", label: "About page with team photos/bios", category: "Transparency", weight: 6, tip: "Put faces to the brand. Real photos work best." },
  { id: "notifications", label: "Social proof notifications active", category: "Social Proof", weight: 8, tip: "Real-time purchase/signup notifications build urgency and trust." },
  { id: "speed", label: "Fast page load speed (<3s)", category: "Performance", weight: 7, tip: "Use Google PageSpeed Insights to test and optimize." },
  { id: "mobile", label: "Mobile-responsive design", category: "Performance", weight: 8, tip: "Test on multiple devices. 60%+ of traffic is mobile." },
  { id: "returns", label: "Clear return/refund policy", category: "Legal", weight: 6, tip: "Easy-to-find refund info reduces purchase anxiety." },
  { id: "thirdparty", label: "Third-party review platform (Google, Trustpilot)", category: "Social Proof", weight: 8, tip: "Aggregate reviews from platforms customers already trust." },
  { id: "professional", label: "Professional, consistent design", category: "Design", weight: 5, tip: "Invest in clean branding. Consistency = credibility." },
  { id: "blog", label: "Active blog or resource center", category: "Content", weight: 4, tip: "Regular content shows expertise and ongoing activity." },
  { id: "faq", label: "FAQ section on key pages", category: "Content", weight: 4, tip: "Address common objections before they become barriers." },
  { id: "video", label: "Video testimonials from customers", category: "Social Proof", weight: 7, tip: "Video is the most persuasive form of social proof." },
];

const maxScore = items.reduce((s, i) => s + i.weight, 0);

export default function WebsiteTrustScoreChecker() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const score = items.filter((i) => checked.has(i.id)).reduce((s, i) => s + i.weight, 0);
  const pct = Math.round((score / maxScore) * 100);
  const missing = items.filter((i) => !checked.has(i.id));

  const getGrade = () => {
    if (pct >= 90) return { grade: "A+", color: "text-green-600", msg: "Excellent! Your site is highly trustworthy." };
    if (pct >= 75) return { grade: "A", color: "text-green-600", msg: "Great job! A few improvements could make your site even stronger." };
    if (pct >= 60) return { grade: "B", color: "text-primary", msg: "Good foundation. Focus on the missing items below to level up." };
    if (pct >= 40) return { grade: "C", color: "text-accent", msg: "Room for improvement. Addressing trust signals can significantly boost conversions." };
    return { grade: "D", color: "text-destructive", msg: "Needs work. Start with SSL, reviews, and a contact page." };
  };

  const grade = getGrade();
  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <>
      <SEOHead
        title="Website Trust Score Checker – Free Audit Tool"
        description="Audit your website's trust signals with this interactive checklist. Get a trust score and personalized recommendations to boost credibility and conversions."
        canonical="https://notiproof.com/free-tools/website-trust-score-checker/"
      />

      <section className="relative overflow-hidden bg-foreground text-background py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <motion.div {...fadeUp}>
            <Link to="/free-tools/" className="text-sm text-primary hover:underline mb-3 inline-block">← Free Tools</Link>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Website Trust Score Checker</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Check off the trust signals your website has and get a score with recommendations.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          {/* Score */}
          <motion.div {...fadeUp} className="text-center mb-10">
            <div className={`text-6xl font-black ${grade.color}`}>{grade.grade}</div>
            <p className="text-2xl font-bold mt-1">{pct}%</p>
            <p className="text-sm text-muted-foreground mt-1">{grade.msg}</p>
          </motion.div>

          {/* Checklist */}
          <Card className="p-6 md:p-8">
            {categories.map((cat) => (
              <div key={cat} className="mb-6 last:mb-0">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">{cat}</h3>
                <div className="space-y-2">
                  {items.filter((i) => i.category === cat).map((item) => (
                    <label key={item.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <Checkbox checked={checked.has(item.id)} onCheckedChange={() => toggle(item.id)} className="mt-0.5" />
                      <div>
                        <span className="text-sm font-medium">{item.label}</span>
                        {!checked.has(item.id) && <p className="text-xs text-muted-foreground mt-0.5">{item.tip}</p>}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </Card>

          {/* Recommendations */}
          {missing.length > 0 && missing.length < items.length && (
            <motion.div {...fadeUp} className="mt-8 bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                Top Recommendations
              </h2>
              <div className="space-y-2">
                {missing.sort((a, b) => b.weight - a.weight).slice(0, 5).map((item) => (
                  <div key={item.id} className="p-3 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.tip}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <CTASection title="Boost Your Trust Score Instantly" description="NotiProof adds social proof notifications, testimonials, and review aggregation — the top trust signals for any website." />
    </>
  );
}
