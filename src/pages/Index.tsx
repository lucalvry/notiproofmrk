import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bell, Users, BarChart3, MessageSquare, Zap, Target, TestTube, Palette, ChevronRight, XCircle, Clock, EyeOff, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NotificationDemo from "@/components/NotificationDemo";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";

const features = [
  { icon: Bell, title: "Real-Time Notifications", description: "Show live purchase alerts, signups, and activity to create urgency and trust." },
  { icon: Users, title: "Visitors Pulse", description: "Display live visitor counts to show popularity and increase engagement." },
  { icon: MessageSquare, title: "Testimonial Collection", description: "Collect, manage, and display customer testimonials with a beautiful wall." },
  { icon: Zap, title: "Smart Announcements", description: "Promote offers, updates, and events with targeted announcement bars." },
  { icon: BarChart3, title: "Analytics Dashboard", description: "Track impressions, clicks, and conversions with detailed real-time analytics." },
  { icon: Target, title: "Targeting Rules", description: "Show the right notification to the right visitor based on behavior and location." },
  { icon: TestTube, title: "A/B Testing", description: "Test different notification designs and copy to maximize your conversion rate." },
  { icon: Palette, title: "White Label", description: "Remove NotiProof branding and match your brand perfectly." },
];

const problems = [
  { icon: XCircle, title: "No Trust Signals", desc: "Visitors can't see that others are buying, signing up, or engaging with your product." },
  { icon: Clock, title: "No Urgency", desc: "Without real-time activity, visitors feel no pressure to take action now." },
  { icon: EyeOff, title: "No Social Proof", desc: "Testimonials buried on a page nobody visits don't convert. They need to be front and center." },
];

const useCases = [
  { title: "E-commerce", description: "Show recent purchases and stock alerts to drive sales.", href: "/use-cases/ecommerce/" },
  { title: "SaaS", description: "Display signup activity and trial conversions to build trust.", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
  { title: "Agencies", description: "Offer social proof as a value-add service for your clients.", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
  { title: "Creators", description: "Showcase course enrollments and community growth.", href: "/use-cases/" },
];

const integrations = [
  "Shopify", "WooCommerce", "Stripe", "GA4", "Zapier", "WordPress", "BigCommerce", "Webflow",
  "Squarespace", "HubSpot", "Mailchimp", "Slack",
];

const testimonials = [
  { name: "Jessica M.", role: "E-commerce Director", quote: "NotiProof increased our checkout conversions by 28% in the first month. The ROI is incredible.", rating: 5 },
  { name: "David K.", role: "SaaS Founder", quote: "We saw a 19% lift in trial signups within two weeks. The analytics dashboard helps us optimize constantly.", rating: 5 },
  { name: "Anna P.", role: "Agency Owner", quote: "We now offer NotiProof as part of our CRO services. Clients love the results and it's an easy upsell.", rating: 5 },
];

const avatarColors = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-destructive text-destructive-foreground",
];

const plans = [
  { name: "Free", price: "$0", desc: "Get started" },
  { name: "Starter", price: "$19", desc: "Growing sites" },
  { name: "Standard", price: "$49", desc: "Most Popular", popular: true },
  { name: "Pro", price: "$119", desc: "Advanced teams" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

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

      {/* Hero */}
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

      {/* Integrations marquee */}
      <section className="py-12 border-y border-border bg-surface overflow-hidden">
        <div className="container-tight">
          <p className="text-center text-sm font-medium text-muted-foreground mb-6">Works with 38+ platforms you already use</p>
        </div>
        <div className="relative">
          <div className="animate-marquee gap-x-10 whitespace-nowrap">
            {[...integrations, ...integrations].map((name, i) => (
              <span key={`${name}-${i}`} className="text-sm font-semibold text-muted-foreground/60 hover:text-foreground transition-colors px-4 flex-shrink-0">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="The Problem"
            title="97% of Visitors Leave Without Converting"
            description="Most websites fail to build trust and urgency. Without social proof, you're leaving money on the table."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-padding bg-surface">
        <div className="container-tight">
          <SectionHeading
            badge="Features"
            title="Everything You Need to Convert More Visitors"
            description="A complete conversion optimization toolkit — from real-time notifications to testimonial walls."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="Use Cases"
            title="Built for Every Business Type"
            description="Whether you're running an online store, SaaS, or agency — NotiProof adapts to your needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc) => (
              <Link key={uc.title} to={uc.href} className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{uc.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{uc.description}</p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by Conversion-Focused Teams"
            description="See why thousands of businesses use NotiProof to boost their results."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-highlight text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${avatarColors[i % avatarColors.length]}`}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/testimonials">View All Testimonials <ChevronRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Install section */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="Installation"
            title="One Line of Code. That's It."
            description="Add NotiProof to any website in seconds. No developers needed."
          />
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark rounded-xl p-6 font-mono text-sm relative group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <code className="text-dark-foreground">
                <span className="text-muted-foreground">{'<!-- Add before </head> -->'}</span>
                {'\n'}
                <span className="text-primary">&lt;script</span> <span className="text-highlight">src</span>=<span className="text-green-400">"https://cdn.notiproof.com/widget.js"</span> <span className="text-highlight">data-id</span>=<span className="text-green-400">"YOUR_ID"</span><span className="text-primary">&gt;&lt;/script&gt;</span>
              </code>
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 rounded-lg bg-muted/20 hover:bg-muted/40 text-dark-foreground transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Copy code"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {["Shopify", "WordPress", "Webflow", "Squarespace", "Custom HTML"].map((p) => (
                <span key={p} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <SectionHeading
            badge="Pricing"
            title="Simple, Transparent Pricing"
            description="All integrations included on every plan. No feature paywalls. Scale based on usage."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {plans.map((p) => (
              <motion.div
                key={p.name}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`bg-card border rounded-xl p-6 text-center relative hover:shadow-xl transition-shadow duration-300 ${p.popular ? "border-primary shadow-lg shadow-primary/10 ring-2 ring-primary" : "border-border"}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full animate-fade-pulse">
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-3xl font-extrabold mb-1">{p.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                <p className="text-xs text-muted-foreground mb-4">{p.desc}</p>
                <Button variant={p.popular ? "default" : "outline"} size="sm" className="w-full" asChild>
                  <a href="https://app.notiproof.com/signup">Get Started</a>
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="link" asChild>
              <Link to="/pricing">See full pricing comparison <ChevronRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
