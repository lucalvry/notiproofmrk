import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";

interface FAQ { q: string; a: string; }

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

interface FeatureHighlight {
  icon: LucideIcon;
  title: string;
  desc: string;
}

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
              <p className="text-lg text-muted-foreground mb-8">{description}</p>
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
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-destructive mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" /> Without NotiProof
                </h3>
                <ul className="space-y-3">
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
              <div className="bg-card border border-primary/20 rounded-xl p-6 ring-1 ring-primary/10">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> With NotiProof
                </h3>
                <ul className="space-y-3">
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

      {/* Feature Highlights OR Benefits */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How NotiProof Helps</h2>
          {featureHighlights && featureHighlights.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {featureHighlights.map((f) => (
                <motion.div key={f.title} {...fadeUp} className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
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
      <section className="section-padding">
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
        <section className="section-padding bg-surface">
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

      {/* Related Use Cases */}
      <section className="py-12 bg-surface">
        <div className="container-tight text-center">
          <h2 className="text-xl font-bold mb-6">Explore Other Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedUseCases.map((uc) => (
              <Button key={uc.href} variant="outline" size="sm" asChild>
                <Link to={uc.href}>{uc.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
