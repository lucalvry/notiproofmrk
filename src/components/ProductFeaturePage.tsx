import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ { q: string; a: string; }
interface ResourceLink { label: string; href: string; context: string; }
interface Testimonial { quote: string; name: string; role: string; metric?: string; }
interface FeatureDetail { icon: LucideIcon; title: string; desc: string; featured?: boolean; }

interface ProductFeaturePageProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  headline: string;
  description: string;
  descriptionContent?: React.ReactNode;
  icon: LucideIcon;
  heroMockup?: React.ReactNode;
  benefits: string[];
  withoutNotiproof?: string[];
  withNotiproof?: string[];
  howItWorks: { step: string; desc: string }[];
  featureDetails?: FeatureDetail[];
  deepDiveContent?: React.ReactNode;
  deepDiveToc?: { id: string; label: string }[];
  testimonial?: Testimonial;
  useCases: { title: string; desc: string; href: string }[];
  faqs: FAQ[];
  relatedProducts: { label: string; href: string }[];
  resourceLinks?: ResourceLink[];
  comparisonLinks?: { label: string; href: string }[];
  lastUpdated?: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function ProductFeaturePage({
  metaTitle, metaDescription, canonical, headline, description, descriptionContent, icon: Icon, heroMockup,
  benefits, withoutNotiproof, withNotiproof, howItWorks, featureDetails, deepDiveContent, deepDiveToc,
  testimonial, faqs, relatedProducts, resourceLinks, comparisonLinks, lastUpdated,
}: ProductFeaturePageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const featureName = metaTitle.split("|")[0].split("–")[0].split("-")[0].trim();
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `NotiProof – ${featureName}`,
    description: metaDescription,
    image: "https://notiproof.com/og-image.png",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Marketing Software",
    operatingSystem: "Web, Cloud",
    url: canonical,
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com/" },
    creator: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com/" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "380",
      priceCurrency: "USD",
      offerCount: "5",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: metaTitle,
    description: metaDescription,
    url: canonical,
    mainEntity: { "@id": "#software" },
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  };

  const hasComparison = withoutNotiproof && withNotiproof;

  return (
    <article itemScope itemType="https://schema.org/WebPage">
      <SEOHead title={metaTitle} description={metaDescription} canonical={canonical} schema={[webPageSchema, faqSchema, softwareSchema]} ogType="product" />

      {/* Hero */}
      <header className="section-padding pt-4">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">{headline}</h1>
              {descriptionContent ? (
                <div className="text-lg text-muted-foreground mb-8">{descriptionContent}</div>
              ) : (
                <p className="text-lg text-muted-foreground mb-8">{description}</p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://app.notiproof.com/signup">Get Started Free <ArrowRight className="w-5 h-5" /></a>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/pricing/">View Pricing</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                Trusted by 4,000+ websites · No credit card required
              </p>
              {lastUpdated && (
                <p className="text-xs text-muted-foreground mt-2">
                  Last updated: <time dateTime={lastUpdated}>{new Date(lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                </p>
              )}
            </motion.div>

            {/* Notification preview mockup */}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              {heroMockup ? (
                <div className="bg-gradient-to-br from-primary/5 via-background to-primary/10 border border-border rounded-2xl p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden" role="img" aria-label={`NotiProof ${metaTitle} feature preview showing a sample notification widget`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.06),transparent_70%)]" />
                  <div className="relative z-10 w-full">{heroMockup}</div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-primary/5 via-background to-primary/10 border border-border rounded-2xl p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden" role="img" aria-label={`NotiProof ${metaTitle} — social proof notification preview showing a recent purchase alert`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.06),transparent_70%)]" />
                  <div className="bg-card border border-border rounded-xl p-5 shadow-xl max-w-xs w-full relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">
                          <span className="text-foreground">Sarah from Austin</span>{" "}
                          <span className="text-muted-foreground font-normal">just purchased</span>
                        </p>
                        <p className="text-xs text-muted-foreground">Premium Plan · 2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      47 people viewing this page
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </header>

      {/* Without / With Comparison — MOVED BEFORE deep dive for better contextual flow */}
      {hasComparison && (
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Difference NotiProof Makes</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background border-2 border-border items-center justify-center">
                <span className="text-xs font-bold text-muted-foreground">VS</span>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-7">
                <h3 className="font-bold text-destructive mb-5 flex items-center gap-2 text-base">
                  <XCircle className="w-5 h-5" /> Without NotiProof
                </h3>
                <ul className="space-y-4">
                  {withoutNotiproof!.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-7 ring-1 ring-primary/10">
                <h3 className="font-bold text-primary mb-5 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-5 h-5" /> With NotiProof
                </h3>
                <ul className="space-y-4">
                  {withNotiproof!.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Deep Dive Sections */}
      {deepDiveContent && (
        <section className="section-padding bg-surface">
          <div className="container-tight">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Deep Dive</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Everything you need to know about this feature — how it works, where to use it, and why it drives results.</p>
            <div className="max-w-4xl mx-auto space-y-8 [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:pt-8 [&>h2]:pb-4 [&>h2]:border-b [&>h2]:border-border [&>h2]:scroll-mt-28 [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-4 [&>p>strong]:text-foreground [&>p>a]:text-primary [&>p>a]:font-semibold [&>p>a:hover]:underline">
              {deepDiveContent}
            </div>
          </div>
        </section>
      )}

      {/* Mid-page CTA */}
      {deepDiveContent && (
        <section className="py-10">
          <div className="container-tight">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">Ready to see the difference?</h3>
                <p className="text-primary-foreground/80 text-sm">Get started free today — no credit card required.</p>
              </div>
              <Button size="xl" variant="secondary" className="shrink-0 font-bold" asChild>
                <a href="https://app.notiproof.com/signup">Get Started Free <ArrowRight className="w-5 h-5 ml-1" /></a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-7 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px border-t-2 border-dashed border-primary/20" />
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center relative">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground font-extrabold text-lg flex items-center justify-center mx-auto mb-4 relative z-10 shadow-md">
                    {i + 1}
                  </div>
                  <h3 className="font-bold mb-2">{step.step}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={b} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Details — with featured attribute prominence */}
      {featureDetails && featureDetails.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container-tight">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Feature Highlights</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {featureDetails.map((f, i) => (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className={`bg-card border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${f.featured ? "border-primary/40 ring-2 ring-primary/20 sm:col-span-2 lg:col-span-2" : "border-border hover:border-primary/30"}`}>
                  <div className={`h-1 ${f.featured ? "bg-gradient-to-r from-primary via-primary/80 to-primary/60" : "bg-gradient-to-r from-primary to-primary/60"}`} />
                  <div className="p-7">
                    <div className={`rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${f.featured ? "w-14 h-14" : "w-12 h-12"}`}>
                      <f.icon className={`text-primary ${f.featured ? "w-7 h-7" : "w-6 h-6"}`} />
                    </div>
                    <h3 className={`font-bold mb-2 ${f.featured ? "text-lg" : "text-base"}`}>{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {testimonial && (
        <section className="py-16">
          <div className="container-tight">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
                {testimonial.metric && (
                  <p className="text-4xl font-extrabold text-primary mb-4">{testimonial.metric}</p>
                )}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl italic text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                <p className="text-sm font-bold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/20 transition-colors">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      {resourceLinks && resourceLinks.length > 0 && (
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Reading</h2>
            <div className="max-w-3xl mx-auto grid gap-4">
              {resourceLinks.map((rl) => (
                <Link
                  key={rl.href}
                  to={rl.href}
                  className="group flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-primary group-hover:underline mb-1">{rl.label}</p>
                    <p className="text-xs text-muted-foreground">{rl.context}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compare */}
      {comparisonLinks && comparisonLinks.length > 0 && (
        <section className="py-12 bg-surface">
          <div className="container-tight">
            <h2 className="text-xl font-bold mb-2 text-center">See How NotiProof Compares</h2>
            <p className="text-sm text-muted-foreground text-center mb-8">Detailed head-to-head comparisons with leading alternatives</p>
            <div className="flex flex-wrap justify-center gap-3">
              {comparisonLinks.map((cl) => (
                <Link
                  key={cl.href}
                  to={cl.href}
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm font-medium hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  {cl.label}
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="py-12 bg-surface">
        <div className="container-tight">
          <h2 className="text-xl font-bold mb-8 text-center">Explore More Features</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedProducts.map((rp) => (
              <Link
                key={rp.href}
                to={rp.href}
                className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm font-medium hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                {rp.label}
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </article>
  );
}
