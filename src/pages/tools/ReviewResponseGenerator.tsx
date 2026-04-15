import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

type Sentiment = "positive" | "neutral" | "negative";

const templates: Record<Sentiment, (name: string, biz: string, detail: string) => string> = {
  positive: (name, biz, detail) =>
    `Hi ${name || "there"},\n\nThank you so much for taking the time to leave us such a wonderful review! We're thrilled to hear ${detail ? `that ${detail}` : "about your great experience"}.\n\nYour kind words mean the world to the ${biz || "our"} team. We work hard to deliver the best possible experience, and feedback like yours makes it all worthwhile.\n\nWe look forward to serving you again soon!\n\nWarm regards,\nThe ${biz || "Our"} Team`,
  neutral: (name, biz, detail) =>
    `Hi ${name || "there"},\n\nThank you for sharing your experience with ${biz || "us"}. We appreciate your honest feedback${detail ? ` about ${detail}` : ""}.\n\nWe're always looking for ways to improve, and your input helps us do just that. If there's anything specific we can do to make your next experience even better, please don't hesitate to reach out to us directly.\n\nWe hope to see you again soon!\n\nBest regards,\nThe ${biz || "Our"} Team`,
  negative: (name, biz, detail) =>
    `Hi ${name || "there"},\n\nThank you for bringing this to our attention. We sincerely apologize ${detail ? `for the issue with ${detail}` : "for your experience falling short of expectations"}.\n\nThis isn't the standard we hold ourselves to at ${biz || "our company"}, and we want to make it right. Could you please reach out to us directly at [your email/phone] so we can resolve this personally?\n\nWe value your business and hope to have the opportunity to restore your confidence in us.\n\nSincerely,\nThe ${biz || "Our"} Team`,
};

export default function ReviewResponseGenerator() {
  const [sentiment, setSentiment] = useState<Sentiment>("positive");
  const [name, setName] = useState("");
  const [biz, setBiz] = useState("");
  const [detail, setDetail] = useState("");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setGenerated(templates[sentiment](name, biz, detail));
    setCopied(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="Review Response Generator – Free Templates"
        description="Generate professional review responses instantly. Choose positive, neutral, or negative sentiment and get a personalized reply template you can copy-paste."
        canonical="https://notiproof.com/free-tools/review-response-generator/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Review Response Generator",
          description: "Generate professional responses to customer reviews.",
          url: "https://notiproof.com/free-tools/review-response-generator/",
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
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Review Response Generator</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Generate professional, personalized responses to customer reviews in seconds.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-2xl">
          <Card className="p-6 md:p-8">
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-1 block">Review Sentiment</label>
                <Select value={sentiment} onValueChange={(v) => setSentiment(v as Sentiment)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="positive">⭐ Positive (4–5 stars)</SelectItem>
                    <SelectItem value="neutral">😐 Neutral (3 stars)</SelectItem>
                    <SelectItem value="negative">👎 Negative (1–2 stars)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Reviewer's Name (optional)</label>
                <Input placeholder="e.g. Sarah" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Your Business Name (optional)</label>
                <Input placeholder="e.g. Acme Store" value={biz} onChange={(e) => setBiz(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Specific Detail to Address (optional)</label>
                <Input placeholder="e.g. the fast shipping, the product quality issue" value={detail} onChange={(e) => setDetail(e.target.value)} />
              </div>
            </div>
            <Button onClick={generate} className="w-full" size="lg">
              <MessageSquare className="w-4 h-4 mr-2" /> Generate Response
            </Button>

            {generated && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Your Response:</p>
                  <Button variant="outline" size="sm" onClick={copy}>
                    {copied ? <><Check className="w-3 h-3 mr-1" /> Copied!</> : <><Copy className="w-3 h-3 mr-1" /> Copy</>}
                  </Button>
                </div>
                <Textarea value={generated} onChange={(e) => setGenerated(e.target.value)} rows={10} className="text-sm" />
              </motion.div>
            )}
          </Card>

          <div className="mt-8 bg-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-3">Related Reading</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/reviews/responding-to-negative-reviews/" className="text-primary hover:underline">Responding to Negative Reviews →</Link></li>
              <li><Link to="/resources/reviews/review-generation-strategies/" className="text-primary hover:underline">Review Generation Strategies →</Link></li>
              <li><Link to="/resources/reviews/how-to-collect-google-reviews/" className="text-primary hover:underline">How to Get More Google Reviews →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Automate Your Review Management" description="NotiProof aggregates reviews from 15+ platforms and helps you respond faster." />
    </>
  );
}
