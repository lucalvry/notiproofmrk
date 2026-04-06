import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, FileText, BookMarked, BarChart3, HelpCircle, Briefcase, Package, Wrench, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const resourceCards = [
  {
    icon: FileText,
    title: "Blog",
    desc: "In-depth articles on social proof, reviews, conversion analytics, and more.",
    href: "/resources/blog/",
  },
  {
    icon: BookOpen,
    title: "Guides",
    desc: "Comprehensive pillar guides covering social proof from psychology to implementation.",
    href: "/resources/guides/",
  },
  {
    icon: BookMarked,
    title: "Glossary",
    desc: "Key terms and definitions for social proof, CRO, and digital marketing.",
    href: "/resources/glossary/",
  },
  {
    icon: BarChart3,
    title: "Comparisons",
    desc: "Side-by-side comparisons of social proof software and CRO tools.",
    href: "/comparisons/",
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    desc: "Step-by-step tutorials, FAQs, and troubleshooting for NotiProof.",
    href: "/resources/help-center/",
  },
  {
    icon: Briefcase,
    title: "Case Studies",
    desc: "Real results from e-commerce, SaaS, agencies, and local businesses.",
    href: "/use-cases/",
  },
  {
    icon: Package,
    title: "Documentation",
    desc: "Product docs, feature walkthroughs, and integration setup guides.",
    href: "/product/",
  },
  {
    icon: Wrench,
    title: "Free Tools",
    desc: "Conversion optimization tools, A/B testing resources, and calculators.",
    href: "/free-tools/",
  },
];

const collectionPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NotiProof Resources – Social Proof Guides, Blog & Tools",
    description: "Explore guides, articles, glossary, comparisons, case studies, and free tools for social proof and conversion optimization.",
    url: "https://notiproof.com/resources/",
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NotiProof Resources",
    itemListElement: resourceCards.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `https://notiproof.com${c.href}`,
    })),
  },
];

export default function ResourcesHub() {
  return (
    <>
      <SEOHead
        title="Resources – Guides, Blog, Glossary & Tools"
        description="Explore NotiProof's resource library: blog articles, pillar guides, glossary, software comparisons, case studies, help center, and free CRO tools."
        canonical="https://notiproof.com/resources/"
        schema={collectionPageSchema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-tight relative z-10">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Resources</h1>
            <p className="text-lg opacity-80">
              Everything you need to master social proof — from beginner guides to advanced optimization tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resourceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={card.href}
                  className="group flex flex-col h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{card.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{card.desc}</p>
                  <span className="mt-4 text-sm font-semibold text-primary flex items-center gap-1">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
