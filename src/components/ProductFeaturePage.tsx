import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ExpertAttribution from "@/components/ExpertAttribution";
import TableOfContents, { TocSection } from "@/components/TableOfContents";

interface FAQ {
  q: string;
  a: string;
}

interface ResourceLink {
  label: string;
  href: string;
  context: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  metric?: string;
}

interface FeatureDetail {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ProductFeaturePageProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  headline: string;
  description: string;
  descriptionContent?: React.ReactNode;
  icon: LucideIcon;
  benefits: string[];
  withoutNotiproof?: string[];
  withNotiproof?: string[];
  howItWorks: { step: string; desc: string }[];
  featureDetails?: FeatureDetail[];
  deepDiveContent?: React.ReactNode;
  deepDiveToc?: TocSection[];
  testimonial?: Testimonial;
  useCases: { title: string; desc: string; href: string }[];
  faqs: FAQ[];
  relatedProducts: { label: string; href: string }[];
  resourceLinks?: ResourceLink[];
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function ProductFeaturePage({
  metaTitle, metaDescription, canonical, headline, description, descriptionContent, icon: Icon,
  benefits, withoutNotiproof, withNotiproof, howItWorks, featureDetails, deepDiveContent, deepDiveToc,
  testimonial, faqs, relatedProducts, resourceLinks,
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

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NotiProof",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://notiproof.com",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
    <>
      <SEOHead title={metaTitle} description={metaDescription} canonical={canonical} schema={[webPageSchema, faqSchema, softwareSchema]} />

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero */}
      <section className="section-padding pt-4">
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://app.notiproof.com/signup">Start Free Trial <ArrowRight className="w-5 h-5" /></a>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/pricing/">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
            {/* Visual mockup */}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-border rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg max-w-xs w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Live Preview</p>
                      <p className="text-xs text-muted-foreground">See it in action on your site</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive Content with TOC sidebar + Expert Attribution */}
      {deepDiveContent && (
        <section className="section-padding">
          <div className="container-tight">
            <ExpertAttribution />
            <div className="flex gap-10">
              {/* Sticky TOC sidebar — desktop only */}
              {deepDiveToc && deepDiveToc.length > 0 && (
                <aside className="hidden lg:block w-64 shrink-0">
                  <div className="sticky top-24">
                    <TableOfContents sections={deepDiveToc} />
                  </div>
                </aside>
              )}
              {/* Main content */}
              <div className="min-w-0 flex-1">
                {/* Mobile TOC */}
                {deepDiveToc && deepDiveToc.length > 0 && (
                  <div className="lg:hidden">
                    <TableOfContents sections={deepDiveToc} />
                  </div>
                )}
                <div className="prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-a:font-semibold prose-li:text-muted-foreground prose-strong:text-foreground max-w-none [&>h2]:scroll-mt-28 [&>h2+p]:text-lg [&>h2+p]:font-medium [&>h2+p]:text-foreground/80">
                  {deepDiveContent}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Without / With Comparison OR Benefits */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          {hasComparison ? (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Difference NotiProof Makes</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-destructive mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Without NotiProof
                  </h3>
                  <ul className="space-y-3">
                    {withoutNotiproof.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6 ring-1 ring-primary/10">
                  <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> With NotiProof
                  </h3>
                  <ul className="space-y-3">
                    {withNotiproof.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {benefits.map((b) => (
                  <motion.div key={b} {...fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{b}</span>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold mb-2">{step.step}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Details */}
      {featureDetails && featureDetails.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container-tight">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Feature Highlights</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {featureDetails.map((f) => (
                <motion.div key={f.title} {...fadeUp} className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
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
            <div className="max-w-2xl mx-auto text-center">
              {testimonial.metric && (
                <p className="text-4xl font-extrabold text-primary mb-4">{testimonial.metric}</p>
              )}
              <blockquote className="text-lg italic text-foreground mb-4">"{testimonial.quote}"</blockquote>
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-card border border-border rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-sm list-none">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      {resourceLinks && resourceLinks.length > 0 && (
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Reading</h2>
            <div className="max-w-3xl mx-auto prose prose-sm">
              {resourceLinks.map((rl) => (
                <p key={rl.href}>
                  {rl.context}{" "}
                  <Link to={rl.href} className="text-primary font-semibold hover:underline">{rl.label}</Link>.
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="py-12 bg-surface">
        <div className="container-tight">
          <h2 className="text-xl font-bold mb-6 text-center">Explore More Features</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedProducts.map((rp) => (
              <Button key={rp.href} variant="outline" size="sm" asChild>
                <Link to={rp.href}>{rp.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
