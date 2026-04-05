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
interface FeatureHighlight { icon: LucideIcon; title: string; desc: string; }

interface UseCasePageProps {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  badge: string;
  headline: string;
  description: string;
  descriptionContent?: React.ReactNode;
  icon: LucideIcon;
  painPoints: { title: string; desc: string }[];
  benefits: string[];
  solutions?: string[];
  stats: { value: string; label: string }[];
  notification: { name: string; action: string; item: string; time: string };
  featureHighlights?: FeatureHighlight[];
  testimonial?: Testimonial;
  integrations: string[];
  faqs: FAQ[];
  relatedUseCases: { label: string; href: string }[];
  resourceLinks?: ResourceLink[];
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function UseCaseTemplate({
  metaTitle, metaDescription, canonical, badge, headline, description, descriptionContent, icon: Icon,
  painPoints, benefits, solutions, stats, notification, featureHighlights,
  testimonial, faqs, relatedUseCases, resourceLinks,
}: UseCasePageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: metaTitle,
    description: metaDescription,
    url: canonical,
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  };

  const hasSolutions = solutions && solutions.length > 0;

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} canonical={canonical} schema={[webPageSchema, faqSchema]} />

      {/* Hero */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-6">
                <Icon className="w-3.5 h-3.5" /> {badge}
              </span>
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
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      <span className="font-semibold">{notification.name}</span> {notification.action}{" "}
                      <span className="font-semibold">{notification.item}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution Comparison */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {hasSolutions ? "The Challenge & The Solution" : "The Challenge"}
          </h2>
          {hasSolutions ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
              {/* VS badge */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background border-2 border-border items-center justify-center">
                <span className="text-xs font-bold text-muted-foreground">VS</span>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-7">
                <h3 className="font-bold text-destructive mb-5 flex items-center gap-2 text-base">
                  <XCircle className="w-5 h-5" /> Without NotiProof
                </h3>
                <ul className="space-y-4">
                  {painPoints.map((p) => (
                    <li key={p.title} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-foreground">{p.title}:</span> {p.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-7 ring-1 ring-primary/10">
                <h3 className="font-bold text-primary mb-5 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-5 h-5" /> With NotiProof
                </h3>
                <ul className="space-y-4">
                  {solutions.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((p) => (
                <motion.div key={p.title} {...fadeUp} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-10">
        <div className="container-tight">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">Ready to boost your conversions?</h3>
              <p className="text-primary-foreground/80 text-sm">Start your free trial today — no credit card required.</p>
            </div>
            <Button size="xl" variant="secondary" className="shrink-0 font-bold" asChild>
              <a href="https://app.notiproof.com/signup">Start Free Trial <ArrowRight className="w-5 h-5 ml-1" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Highlights OR Benefits */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How NotiProof Helps</h2>
          {featureHighlights && featureHighlights.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {featureHighlights.map((f) => (
                <motion.div key={f.title} {...fadeUp} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="h-1 bg-gradient-to-r from-primary to-primary/60" />
                  <div className="p-7">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2 text-base">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

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
      <section className="section-padding">
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
        <section className="section-padding bg-surface">
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

      {/* Related Use Cases */}
      <section className="py-12 bg-surface">
        <div className="container-tight text-center">
          <h2 className="text-xl font-bold mb-8">Explore Other Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedUseCases.map((uc) => (
              <Link
                key={uc.href}
                to={uc.href}
                className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm font-medium hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                {uc.label}
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
