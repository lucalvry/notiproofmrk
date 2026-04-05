import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

type Tone = "friendly" | "professional" | "casual";
type Industry = "ecommerce" | "saas" | "agency" | "local";

const templates: Record<Tone, Record<Industry, { subject: string; body: string }>> = {
  friendly: {
    ecommerce: {
      subject: "We'd love to hear about your experience! 🎉",
      body: `Hi [Customer Name],\n\nThank you so much for your recent purchase! We hope you're loving your [Product Name].\n\nWould you mind taking 2 minutes to share your experience? Your feedback helps other shoppers make confident decisions — and it means the world to our team.\n\n[Leave a Testimonial →]\n\nThank you!\n[Your Name]\n[Company Name]`,
    },
    saas: {
      subject: "Quick favor? Share your experience with [Product] 🙏",
      body: `Hi [Customer Name],\n\nYou've been using [Product] for a while now, and we'd love to hear how it's going!\n\nWould you share a quick testimonial about your experience? It takes less than 2 minutes and helps other teams discover [Product].\n\n[Share Your Testimonial →]\n\nThanks so much!\n[Your Name]`,
    },
    agency: {
      subject: "Would you share a quick testimonial? 🌟",
      body: `Hi [Client Name],\n\nIt's been great working with you on [Project Name], and we're thrilled with the results we've achieved together.\n\nWould you be open to sharing a brief testimonial about our work? It helps us attract more clients like you.\n\n[Leave a Testimonial →]\n\nAppreciate it!\n[Your Name]\n[Agency Name]`,
    },
    local: {
      subject: "How was your visit? We'd love your feedback!",
      body: `Hi [Customer Name],\n\nThank you for visiting [Business Name]! We hope you had a wonderful experience.\n\nWould you take a moment to leave us a testimonial? Your review helps neighbors discover our business.\n\n[Share Your Experience →]\n\nThank you!\n[Your Name]`,
    },
  },
  professional: {
    ecommerce: {
      subject: "Your feedback matters — share your experience",
      body: `Dear [Customer Name],\n\nThank you for choosing [Company Name] for your recent purchase.\n\nWe are committed to providing the best products and customer experience. Your testimonial would be invaluable in helping us serve more customers like you.\n\nPlease take a moment to share your thoughts:\n\n[Submit Testimonial →]\n\nBest regards,\n[Your Name]\n[Company Name]`,
    },
    saas: {
      subject: "Request for testimonial — [Product Name]",
      body: `Dear [Customer Name],\n\nAs a valued [Product Name] customer, your perspective is important to us.\n\nWe would appreciate it if you could provide a brief testimonial about your experience with our platform. Your insights help prospective customers make informed decisions.\n\n[Submit Testimonial →]\n\nThank you for your time.\n\nBest regards,\n[Your Name]`,
    },
    agency: {
      subject: "Testimonial request — [Project Name]",
      body: `Dear [Client Name],\n\nThank you for the opportunity to work with you on [Project Name]. We are pleased with the outcomes we achieved together.\n\nWould you be willing to provide a testimonial regarding our collaboration? This helps us demonstrate the value we deliver to potential clients.\n\n[Submit Testimonial →]\n\nSincerely,\n[Your Name]\n[Agency Name]`,
    },
    local: {
      subject: "We value your feedback — [Business Name]",
      body: `Dear [Customer Name],\n\nThank you for being a customer of [Business Name]. We appreciate your trust in our services.\n\nWe would be grateful if you could share your experience in a brief testimonial. Your feedback helps us maintain the highest standards of service.\n\n[Submit Testimonial →]\n\nWarm regards,\n[Your Name]`,
    },
  },
  casual: {
    ecommerce: {
      subject: "Hey! Got a sec to share your thoughts? 😊",
      body: `Hey [Customer Name]!\n\nHope you're enjoying your [Product Name]! We'd really appreciate it if you could share a quick note about your experience.\n\nIt only takes a minute and it helps us a ton!\n\n[Share Your Thoughts →]\n\nCheers,\n[Your Name]`,
    },
    saas: {
      subject: "Hey [Customer Name] — quick ask! 🚀",
      body: `Hey [Customer Name]!\n\nLoving having you as a [Product] user! Quick ask — would you mind dropping a testimonial about your experience?\n\nSuper quick, I promise! It helps other people find us.\n\n[Drop a Testimonial →]\n\nThanks!\n[Your Name]`,
    },
    agency: {
      subject: "Hey! Mind sharing a quick review? 🙌",
      body: `Hey [Client Name]!\n\nReally enjoyed working on [Project Name] with you. Would you mind sharing a quick testimonial about our work together?\n\nIt'd mean a lot!\n\n[Share Your Review →]\n\nThanks a bunch,\n[Your Name]`,
    },
    local: {
      subject: "Thanks for stopping by! 👋",
      body: `Hey [Customer Name]!\n\nThanks for coming to [Business Name]! We had a blast serving you.\n\nWould you share a quick review? It helps us grow and serve more awesome people like you!\n\n[Leave a Review →]\n\nThanks!\n[Your Name]`,
    },
  },
};

export default function TestimonialEmailGenerator() {
  const [tone, setTone] = useState<Tone>("friendly");
  const [industry, setIndustry] = useState<Industry>("saas");
  const [copied, setCopied] = useState<"subject" | "body" | null>(null);
  const { toast } = useToast();

  const template = templates[tone][industry];

  const copyText = (text: string, type: "subject" | "body") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast({ title: "Copied!", description: `${type === "subject" ? "Subject line" : "Email body"} copied to clipboard.` });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <SEOHead
        title="Testimonial Request Email Generator – Free Tool"
        description="Generate copy-paste email templates to request testimonials from customers. Choose tone and industry for personalized templates."
        canonical="https://notiproof.com/free-tools/testimonial-email-generator/"
      />

      <section className="relative overflow-hidden bg-foreground text-background py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10 text-center">
          <motion.div {...fadeUp}>
            <Link to="/free-tools/" className="text-sm text-primary hover:underline mb-3 inline-block">← Free Tools</Link>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Testimonial Request Email Generator</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Generate ready-to-send email templates to request testimonials from your happy customers.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-2xl">
          <Card className="p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-1 block">Tone</label>
                <Select value={tone} onValueChange={(v) => setTone(v as Tone)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Industry</label>
                <Select value={industry} onValueChange={(v) => setIndustry(v as Industry)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="saas">SaaS</SelectItem>
                    <SelectItem value="agency">Agency</SelectItem>
                    <SelectItem value="local">Local Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Subject */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-bold">Subject Line</label>
                <Button variant="ghost" size="sm" onClick={() => copyText(template.subject, "subject")}>
                  {copied === "subject" ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                  Copy
                </Button>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg text-sm border border-border">{template.subject}</div>
            </div>

            {/* Body */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-bold">Email Body</label>
                <Button variant="ghost" size="sm" onClick={() => copyText(template.body, "body")}>
                  {copied === "body" ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                  Copy
                </Button>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg text-sm border border-border whitespace-pre-line">{template.body}</div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">Replace [bracketed text] with your actual details before sending.</p>
          </Card>
        </div>
      </section>

      <CTASection title="Automate Testimonial Collection" description="NotiProof sends testimonial requests automatically after purchase — with video, text, and image options." />
    </>
  );
}
