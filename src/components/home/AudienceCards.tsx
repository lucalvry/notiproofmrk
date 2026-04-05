import { ShoppingCart, Rocket, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const personas = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Show recent purchases, stock alerts, and review notifications to drive sales and reduce cart abandonment.",
    example: "Jessica, Shopify store owner",
    href: "/use-cases/ecommerce/",
    gradient: "from-primary/10 to-blue-400/10",
  },
  {
    icon: Rocket,
    title: "SaaS",
    description: "Display signup activity, trial conversions, and customer milestones to build trust with prospects.",
    example: "David, SaaS founder",
    href: "/use-cases/saas-social-proof-tools-drive-sign-ups/",
    gradient: "from-purple-400/10 to-pink-400/10",
  },
  {
    icon: Users,
    title: "Agencies",
    description: "Offer social proof as a value-add service and impress clients with measurable conversion lifts.",
    example: "Anna, agency owner",
    href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/",
    gradient: "from-accent/10 to-yellow-300/10",
  },
  {
    icon: MapPin,
    title: "Local Business",
    description: "Showcase reviews, foot traffic, and recent bookings to convert local website visitors into customers.",
    example: "Marcus, restaurant owner",
    href: "/use-cases/local-business-social-proof-convert-website-visitors/",
    gradient: "from-green-400/10 to-emerald-400/10",
  },
];

export default function AudienceCards() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <SectionHeading
          badge="Use Cases"
          title="Built for every type of business"
          description="Whether you sell products, subscriptions, or services — NotiProof adapts to your business model."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={p.href}
                className={`group block rounded-2xl border border-border bg-gradient-to-b ${p.gradient} p-6 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 h-full`}
              >
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {p.description}
                </p>
                <p className="text-xs text-muted-foreground/70 italic">
                  {p.example}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
