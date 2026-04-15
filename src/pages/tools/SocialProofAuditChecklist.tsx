import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

interface CheckItem {
  id: string;
  label: string;
  category: string;
  weight: number;
}

const items: CheckItem[] = [
  // Reviews & Ratings (25pts)
  { id: "google-reviews", label: "Google Business reviews displayed on site", category: "Reviews & Ratings", weight: 5 },
  { id: "review-count", label: "Total review count visible (e.g. '2,400+ reviews')", category: "Reviews & Ratings", weight: 4 },
  { id: "star-ratings", label: "Star ratings shown on product/service pages", category: "Reviews & Ratings", weight: 4 },
  { id: "third-party", label: "Third-party review badges (Trustpilot, G2, etc.)", category: "Reviews & Ratings", weight: 4 },
  { id: "review-recency", label: "Recent reviews (less than 30 days old) visible", category: "Reviews & Ratings", weight: 4 },
  { id: "review-response", label: "Owner responses to reviews displayed", category: "Reviews & Ratings", weight: 4 },
  // Testimonials (20pts)
  { id: "text-testimonials", label: "Text testimonials with name & photo", category: "Testimonials", weight: 4 },
  { id: "video-testimonials", label: "Video testimonials on key pages", category: "Testimonials", weight: 5 },
  { id: "case-studies", label: "Detailed case studies with metrics", category: "Testimonials", weight: 5 },
  { id: "testimonial-placement", label: "Testimonials near CTAs and pricing", category: "Testimonials", weight: 3 },
  { id: "industry-specific", label: "Industry-specific or persona-matched testimonials", category: "Testimonials", weight: 3 },
  // Trust Signals (20pts)
  { id: "trust-badges", label: "Security/payment trust badges in checkout", category: "Trust Signals", weight: 4 },
  { id: "client-logos", label: "Client/partner logos displayed", category: "Trust Signals", weight: 4 },
  { id: "media-mentions", label: "'As seen in' media logos", category: "Trust Signals", weight: 3 },
  { id: "certifications", label: "Industry certifications or awards shown", category: "Trust Signals", weight: 3 },
  { id: "guarantee", label: "Money-back guarantee or warranty displayed", category: "Trust Signals", weight: 3 },
  { id: "ssl-visible", label: "SSL/secure checkout indicators visible", category: "Trust Signals", weight: 3 },
  // Real-Time Proof (20pts)
  { id: "purchase-notifications", label: "Recent purchase/signup notifications", category: "Real-Time Proof", weight: 5 },
  { id: "visitor-counter", label: "Live visitor or 'people viewing' counter", category: "Real-Time Proof", weight: 4 },
  { id: "activity-feed", label: "Recent activity feed (downloads, signups)", category: "Real-Time Proof", weight: 4 },
  { id: "customer-count", label: "Total customer/user count displayed", category: "Real-Time Proof", weight: 4 },
  { id: "urgency-signals", label: "Stock levels or limited availability shown", category: "Real-Time Proof", weight: 3 },
  // Social Media (15pts)
  { id: "social-follower", label: "Social media follower counts shown", category: "Social Media Proof", weight: 3 },
  { id: "ugc-gallery", label: "User-generated content gallery", category: "Social Media Proof", weight: 4 },
  { id: "social-share", label: "Social share counts on content", category: "Social Media Proof", weight: 3 },
  { id: "social-feed", label: "Live social feed embedded", category: "Social Media Proof", weight: 2 },
  { id: "influencer", label: "Influencer or expert endorsements", category: "Social Media Proof", weight: 3 },
];

const maxScore = items.reduce((s, i) => s + i.weight, 0);

function getGrade(pct: number) {
  if (pct >= 85) return { grade: "A", color: "text-green-600", msg: "Excellent! Your site has strong social proof coverage." };
  if (pct >= 70) return { grade: "B", color: "text-blue-600", msg: "Good foundation. A few additions could significantly boost trust." };
  if (pct >= 50) return { grade: "C", color: "text-yellow-600", msg: "Average. You're missing key social proof elements that competitors likely have." };
  if (pct >= 30) return { grade: "D", color: "text-orange-600", msg: "Below average. Significant social proof gaps are likely costing you conversions." };
  return { grade: "F", color: "text-red-600", msg: "Critical gaps. Your site lacks the trust signals visitors need to convert." };
}

export default function SocialProofAuditChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const score = items.filter((i) => checked.has(i.id)).reduce((s, i) => s + i.weight, 0);
  const pct = Math.round((score / maxScore) * 100);
  const { grade, color, msg } = getGrade(pct);
  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <>
      <SEOHead
        title="Social Proof Audit Checklist – Free Website Scorer"
        description="Score your website's social proof with our interactive 27-point checklist. Get a grade and specific recommendations to improve trust and conversions."
        canonical="https://notiproof.com/free-tools/social-proof-audit-checklist/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Social Proof Audit Checklist",
          description: "Interactive 27-point social proof audit with scoring and recommendations.",
          url: "https://notiproof.com/free-tools/social-proof-audit-checklist/",
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
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Social Proof Audit Checklist</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Check off the social proof elements your website has. Get a score and actionable recommendations.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          {/* Live Score */}
          <Card className="p-6 mb-8 text-center sticky top-20 z-10 bg-card/95 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Your Score</p>
                <p className="text-3xl font-extrabold">{score}/{maxScore}</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-sm text-muted-foreground">Grade</p>
                <p className={`text-3xl font-extrabold ${color}`}>{grade}</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-sm text-muted-foreground">Completion</p>
                <p className="text-3xl font-extrabold">{pct}%</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">{msg}</p>
          </Card>

          {/* Checklist */}
          <div className="space-y-8">
            {categories.map((cat) => (
              <div key={cat}>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-primary" />
                  {cat}
                </h2>
                <div className="space-y-2">
                  {items.filter((i) => i.category === cat).map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                        checked.has(item.id) ? "bg-primary/5 border-primary/30" : "bg-card border-border hover:border-primary/20"
                      }`}
                    >
                      <Checkbox checked={checked.has(item.id)} onCheckedChange={() => toggle(item.id)} />
                      <span className={`text-sm flex-1 ${checked.has(item.id) ? "line-through text-muted-foreground" : ""}`}>{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.weight}pts</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-3">Related Reading</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/social-proof/social-proof-for-websites/" className="text-primary hover:underline">Social Proof for Websites →</Link></li>
              <li><Link to="/resources/website-trust/trust-badges-guide/" className="text-primary hover:underline">Trust Badges Guide →</Link></li>
              <li><Link to="/resources/social-proof/types-of-social-proof/" className="text-primary hover:underline">6 Types of Social Proof →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Fill the Gaps Automatically" description="NotiProof adds purchase notifications, review widgets, visitor counters, and testimonial displays — no code required." />
    </>
  );
}
