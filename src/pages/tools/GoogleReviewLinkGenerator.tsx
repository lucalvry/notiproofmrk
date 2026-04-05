import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Star, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

export default function GoogleReviewLinkGenerator() {
  const [placeId, setPlaceId] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generateLink = () => {
    const id = placeId.trim();
    if (!id) return;
    setLink(`https://search.google.com/local/writereview?placeid=${encodeURIComponent(id)}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    toast({ title: "Copied!", description: "Review link copied to clipboard." });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="Google Review Link Generator – Free Tool"
        description="Generate a direct Google review link for your business. Paste your Google Place ID and get a shareable link customers can use to leave a review."
        canonical="https://notiproof.com/free-tools/google-review-link-generator/"
      />

      <section className="relative overflow-hidden bg-foreground text-background py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <motion.div {...fadeUp}>
            <Link to="/free-tools/" className="text-sm text-primary hover:underline mb-3 inline-block">← Free Tools</Link>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Google Review Link Generator</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Create a direct link that takes customers straight to your Google review form.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-2xl">
          <Card className="p-6 md:p-8">
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-1 block">Google Place ID</label>
                <Input placeholder="e.g. ChIJN1t_tDeuEmsRUsoyG83frY4" value={placeId} onChange={(e) => setPlaceId(e.target.value)} />
                <p className="text-xs text-muted-foreground mt-1">
                  Find your Place ID at{" "}
                  <a href="https://developers.google.com/maps/documentation/places/web-service/place-id-finder" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google's Place ID Finder
                  </a>
                </p>
              </div>
            </div>
            <Button onClick={generateLink} className="w-full" size="lg">
              <Star className="w-4 h-4 mr-2" /> Generate Review Link
            </Button>

            {link && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-muted/50 rounded-xl">
                <p className="text-xs text-muted-foreground mb-2">Your Google Review Link:</p>
                <div className="flex gap-2">
                  <Input value={link} readOnly className="text-sm" />
                  <Button variant="outline" size="icon" onClick={copyLink}>
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">Share this link via email, SMS, receipts, or QR codes to collect more Google reviews.</p>
              </motion.div>
            )}
          </Card>

          <div className="mt-8 bg-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-3">How to Find Your Google Place ID</h2>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              <li>Go to the <a href="https://developers.google.com/maps/documentation/places/web-service/place-id-finder" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Place ID Finder</a></li>
              <li>Search for your business name and location</li>
              <li>Copy the Place ID shown on the map</li>
              <li>Paste it above to generate your review link</li>
            </ol>
          </div>
        </div>
      </section>

      <CTASection title="Aggregate All Your Reviews in One Place" description="NotiProof pulls reviews from Google, G2, Trustpilot, and more — and displays them as social proof on your site." />
    </>
  );
}
