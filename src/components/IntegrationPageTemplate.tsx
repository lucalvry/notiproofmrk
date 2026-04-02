import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";

interface ResourceLink {
  label: string;
  href: string;
  context: string;
}

interface IntegrationPageProps {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  benefits: string[];
  setupSteps: { step: string; desc: string }[];
  features: string[];
  faqs: { q: string; a: string }[];
  resourceLinks?: ResourceLink[];
  relatedUseCases?: { label: string; href: string }[];
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function IntegrationPage({
  metaTitle, metaDescription, canonical, name, icon: Icon,
  headline, description, benefits, setupSteps, features, faqs,
  resourceLinks, relatedUseCases,
}: IntegrationPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} canonical={canonical} schema={faqSchema} />

      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">{headline}</h1>
            <p className="text-lg text-muted-foreground mb-8">{description}</p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">Connect {name} Free <ArrowRight className="w-5 h-5" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use NotiProof With {name}</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-center mb-12">Setup in 3 Simple Steps</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {setupSteps.map((s, i) => (
              <motion.div key={s.step} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">{i + 1}</div>
                <h3 className="font-bold mb-2">{s.step}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Use Cases */}
      {relatedUseCases && relatedUseCases.length > 0 && (
        <section className="py-12 border-y border-border">
          <div className="container-tight text-center">
            <h2 className="text-xl font-bold mb-4">See {name} in Action</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Learn how businesses use NotiProof with {name} to increase conversions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedUseCases.map((uc) => (
                <Button key={uc.href} variant="outline" size="sm" asChild>
                  <Link to={uc.href}>{uc.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
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

      <div className="py-12 bg-surface text-center">
        <div className="container-tight">
          <h2 className="text-xl font-bold mb-6">Explore More Integrations</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" size="sm" asChild><Link to="/integrations/">All Integrations</Link></Button>
            <Button variant="outline" size="sm" asChild><Link to="/integrations/shopify/">Shopify</Link></Button>
            <Button variant="outline" size="sm" asChild><Link to="/integrations/wordpress/">WordPress</Link></Button>
            <Button variant="outline" size="sm" asChild><Link to="/integrations/zapier/">Zapier</Link></Button>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
