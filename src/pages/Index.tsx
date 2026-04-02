import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bell, Users, BarChart3, MessageSquare, Zap, Target, XCircle, Clock, EyeOff, CheckCircle2, Copy, Check, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NotificationDemo from "@/components/NotificationDemo";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const problems = [
  { icon: XCircle, title: "No Trust Signals", solution: "Real-Time Notifications", solutionDesc: "Show live purchases, signups, and reviews as they happen — building instant trust.", solutionIcon: Bell },
  { icon: Clock, title: "No Urgency", solution: "Visitor Counter & Activity Pulse", solutionDesc: "Display live visitor counts and recent activity to create natural urgency.", solutionIcon: Users },
  { icon: EyeOff, title: "Testimonials Nobody Sees", solution: "Smart Testimonial Widgets", solutionDesc: "Surface your best customer stories at the exact moment they'll influence a decision.", solutionIcon: MessageSquare },
];

const howItWorks = [
  { step: "Install", desc: "Add one line of code to your site — or use our Shopify, WordPress, or Zapier integration.", code: `<script src="https://cdn.notiproof.com/widget.js" data-id="YOUR_ID"></script>` },
  { step: "Configure", desc: "Choose notification types, design templates, and targeting rules from the dashboard. No coding required." },
  { step: "Convert", desc: "Watch your conversion rate climb as real-time social proof builds trust with every visitor." },
];

const results = [
  { metric: "+28%", label: "Checkout Conversions", type: "E-commerce", quote: "NotiProof increased our checkout conversions in the first month. The ROI is incredible.", name: "Jessica M.", role: "E-commerce Director" },
  { metric: "+19%", label: "Trial Signups", type: "SaaS", quote: "We saw a lift in trial signups within two weeks. The analytics dashboard helps us optimize constantly.", name: "David K.", role: "SaaS Founder" },
  { metric: "+34%", label: "Lead Generation", type: "Agency", quote: "We now offer NotiProof as part of our CRO services. Clients love the results.", name: "Anna P.", role: "Agency Owner" },
];

const useCases = [
  { title: "E-commerce", description: "Show recent purchases and stock alerts to drive sales.", href: "/use-cases/ecommerce/" },
  { title: "SaaS", description: "Display signup activity and trial conversions to build trust.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
  { title: "Agencies", description: "Offer social proof as a value-add service for your clients.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
  { title: "Local Business", description: "Showcase reviews and foot traffic to convert local visitors.", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
];

const codeSnippet = `<script src="https://cdn.notiproof.com/widget.js" data-id="YOUR_ID"></script>`;

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const homepageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "NotiProof",
      url: "https://notiproof.com",
      logo: "https://notiproof.com/notiproof-logo.png",
      description: "Social proof and testimonial platform that increases website conversions by 10–35%.",
      foundingDate: "2024",
      areaServed: "Worldwide",
      knowsAbout: ["Social Proof", "Conversion Rate Optimization", "Testimonial Management", "FOMO Marketing", "Real-Time Notifications", "A/B Testing", "Customer Reviews", "Website Trust Signals"],
      sameAs: ["https://twitter.com/notiproof", "https://linkedin.com/company/notiproof"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "NotiProof",
      url: "https://notiproof.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://notiproof.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "NotiProof",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "0",
        highPrice: "380",
        priceCurrency: "USD",
        offerCount: "5",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
      },
    },
  ];

  return (
    <>
      <SEOHead
        title="NotiProof – Increase Website Conversions by 10–35% With Real-Time Social Proof"
        description="NotiProof is the social proof and testimonial platform trusted by thousands of businesses. Show real-time notifications, collect testimonials, and boost conversions instantly."
        canonical="https://notiproof.com/"
        schema={homepageSchema}
      />

      {/* ── 1. Hero ── */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container-tight">
          <motion.div {...fadeUp} className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Increase Conversions by{" "}
              <span className="text-gradient">10–35%</span>{" "}
              With Real-Time Social Proof
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-lg">
              Boost conversions with real-time purchase alerts, testimonials, and engagement notifications. Set up in under 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="https://app.notiproof.com/signup">
                  Start Free 14-Day Trial <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">No credit card required · Setup in 60 seconds</p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="mt-10 w-full max-w-5xl mx-auto">
            <NotificationDemo />
          </motion.div>
        </div>
      </section>

      {/* ── 2. Trust Strip ── */}
      <section className="py-10 border-y border-border bg-surface">
        <div className="container-tight text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6">Trusted by 2,000+ conversion-focused teams worldwide</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {["Shopify", "WooCommerce", "Stripe", "GA4", "Zapier", "WordPress", "Webflow", "HubSpot"].map((name) => (
              <span key={name} className="text-sm font-semibold text-muted-foreground/50">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Problem → Solution (merged) ── */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="The Problem & The Solution"
            title="97% of Visitors Leave Without Converting"
            description="Most websites fail to build trust and urgency. NotiProof fixes the three biggest conversion killers."
          />
          <div className="grid gap-8">
            {problems.map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid md:grid-cols-2 gap-6 bg-card border border-border rounded-xl overflow-hidden"
              >
                {/* Problem side */}
                <div className="p-6 md:p-8 bg-destructive/5 border-b md:border-b-0 md:border-r border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-destructive">Problem</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.title === "No Trust Signals" && "Visitors can't see that others are buying, signing up, or engaging with your product."}
                    {item.title === "No Urgency" && "Without real-time activity, visitors feel no pressure to take action now."}
                    {item.title === "Testimonials Nobody Sees" && "Testimonials buried on a page nobody visits don't convert. They need to be front and center."}
                  </p>
                </div>
                {/* Solution side */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.solutionIcon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Solution</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.solution}</h3>
                  <p className="text-sm text-muted-foreground">{item.solutionDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. How It Works ── */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <SectionHeading
            badge="How It Works"
            title="Three Steps to Higher Conversions"
            description="From install to results in under five minutes."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorks.map((s, i) => (
              <motion.div key={s.step} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.15 }} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">{s.step}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                {s.code && (
                  <div className="bg-dark rounded-lg p-3 font-mono text-xs text-dark-foreground relative group">
                    <code className="break-all">{s.code}</code>
                    <button
                      onClick={handleCopy}
                      className="absolute top-2 right-2 p-1 rounded bg-muted/20 hover:bg-muted/40 text-dark-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Copy code"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Results ── */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="Results"
            title="Real Results From Real Businesses"
            description="See the conversion lifts businesses achieve with NotiProof."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <motion.div key={r.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl font-extrabold text-primary">{r.metric}</span>
                  <span className="text-sm font-medium text-muted-foreground">{r.label}</span>
                </div>
                <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full mb-3">{r.type}</span>
                <p className="text-sm text-muted-foreground italic mb-4">"{r.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-highlight text-highlight" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">— {r.name}, {r.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Explore by Use Case ── */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <SectionHeading
            badge="Use Cases"
            title="Built for Every Business Type"
          />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 -mt-4">
            Whether you sell products, subscriptions, services, or courses — NotiProof adapts to your business model. Social proof works because it taps into a fundamental{" "}
            <Link to="/resources/social-proof/social-proof-psychology/" className="text-primary font-semibold hover:underline">psychological principle</Link>{" "}
            that applies across every industry.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc) => (
              <Link key={uc.title} to={uc.href} className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{uc.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{uc.description}</p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  See how <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <CTASection />
    </>
  );
}
