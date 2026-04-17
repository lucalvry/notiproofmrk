import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, FileText, BookMarked, BarChart3, HelpCircle, Wrench, Scale, Briefcase, ArrowRight, Network } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const categories = [
  {
    icon: FileText,
    title: "Blog",
    desc: "Browse all articles on social proof, reviews, testimonials, CRO, and website trust — organized by topic with search and filters.",
    href: "/resources/blog/",
    cta: "Read the blog",
  },
  {
    icon: BookOpen,
    title: "Guides",
    desc: "In-depth pillar guides covering social proof, reviews, testimonials, conversion analytics, website trust, and CRO from start to finish.",
    href: "/resources/guides/",
    cta: "Explore guides",
  },
  {
    icon: BookMarked,
    title: "Glossary",
    desc: "80+ definitions for social proof, CRO, reviews, UX, and marketing psychology terms — quick reference for marketers and developers.",
    href: "/resources/glossary/",
    cta: "Browse glossary",
  },
  {
    icon: Wrench,
    title: "Free Tools",
    desc: "Interactive calculators and audit tools — A/B test significance, social proof ROI, Google review link generator, trust score checker, and more.",
    href: "/free-tools/",
    cta: "Try free tools",
  },
  {
    icon: Scale,
    title: "Comparisons",
    desc: "Side-by-side comparisons of NotiProof vs Fomo, TrustPulse, ProveSource, Yotpo, Trustmary — plus alternatives roundups and pricing breakdowns.",
    href: "/comparisons/",
    cta: "View comparisons",
  },
  {
    icon: Briefcase,
    title: "Case Studies",
    desc: "Real results from e-commerce stores, SaaS companies, agencies, and local businesses using NotiProof to increase conversions.",
    href: "/case-studies/",
    cta: "Read case studies",
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    desc: "Step-by-step tutorials, setup guides, FAQs, and troubleshooting for every NotiProof feature and integration.",
    href: "/resources/help-center/",
    cta: "Get help",
  },
  {
    icon: BarChart3,
    title: "Product Docs",
    desc: "Detailed feature walkthroughs for notifications, testimonials, review aggregation, campaign builder, analytics, and widgets.",
    href: "/product/",
    cta: "View product",
  },
  {
    icon: Network,
    title: "Topical Map",
    desc: "The documented content hierarchy behind every article — 6 macro pillars, 66+ clusters, with explicit Wikipedia entity references for full topical authority transparency.",
    href: "/resources/topical-map/",
    cta: "View topical map",
  },
];

const collectionPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NotiProof Resources – Guides, Blog, Tools & More",
    description: "Explore guides, blog articles, glossary, comparisons, case studies, free tools, and help center for social proof and conversion optimization.",
    url: "https://notiproof.com/resources/",
    publisher: { "@type": "Organization", name: "NotiProof", url: "https://notiproof.com" },
  },
];

export default function ResourcesHub() {
  return (
    <>
      <SEOHead
        title="Resources – Guides, Blog, Tools & Comparisons | NotiProof"
        description="Explore NotiProof's resource library: blog articles, pillar guides, free CRO tools, software comparisons, case studies, glossary, and help center."
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
              Everything you need to master social proof, conversion optimization, and building trust online — guides, tools, comparisons, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Link
                  to={cat.href}
                  className="group flex flex-col h-full bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{cat.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{cat.desc}</p>
                  <span className="text-sm text-primary font-semibold inline-flex items-center gap-1 group-hover:underline">
                    {cat.cta} <ArrowRight className="w-3.5 h-3.5" />
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
