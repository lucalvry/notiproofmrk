import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Monitor, Building2, Palette, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    headline: "Turn Browsers Into Buyers",
    description: "Show live purchase notifications, stock alerts, and customer reviews to create urgency and build trust on your online store.",
    benefits: ["28% average conversion lift", "Reduce cart abandonment", "Build instant trust with new visitors", "Show real-time purchase activity"],
    notification: { name: "Sarah from NYC", action: "just purchased", item: "Wireless Headphones", time: "2 min ago" },
    integrations: ["Shopify", "WooCommerce", "BigCommerce", "Stripe"],
  },
  {
    icon: Monitor,
    title: "SaaS",
    headline: "Accelerate Trial Signups",
    description: "Display signup activity, user milestones, and testimonials to convert free visitors into trial users and paying customers.",
    benefits: ["19% average trial signup lift", "Showcase user growth", "Highlight product adoption", "Social proof at every touchpoint"],
    notification: { name: "James from London", action: "started a trial of", item: "Pro Plan", time: "5 min ago" },
    integrations: ["Stripe", "HubSpot", "Segment", "Zapier"],
  },
  {
    icon: Building2,
    title: "Agencies",
    headline: "Deliver CRO as a Service",
    description: "Offer NotiProof as a value-add for your clients. White-label options let you brand it as your own conversion tool.",
    benefits: ["New revenue stream", "White-label available", "Multi-client management", "Client analytics dashboard"],
    notification: { name: "Agency client", action: "saw 32% more", item: "conversions", time: "this week" },
    integrations: ["White Label", "API", "Webhooks", "GA4"],
  },
  {
    icon: Palette,
    title: "Creators",
    headline: "Grow Your Audience With Proof",
    description: "Show course enrollments, community signups, and student success stories to attract more learners and subscribers.",
    benefits: ["23% enrollment increase", "Showcase student success", "Build course credibility", "Live enrollment activity"],
    notification: { name: "Alex from Austin", action: "enrolled in", item: "Design Masterclass", time: "3 min ago" },
    integrations: ["Teachable", "Gumroad", "ConvertKit", "Stripe"],
  },
  {
    icon: Briefcase,
    title: "Service Businesses",
    headline: "Win More Clients With Trust",
    description: "Display consultation bookings, client testimonials, and service reviews to establish credibility and close more deals.",
    benefits: ["35% more bookings", "Client testimonial walls", "Real-time booking alerts", "Professional trust signals"],
    notification: { name: "Maria from Chicago", action: "booked a", item: "strategy call", time: "10 min ago" },
    integrations: ["HubSpot", "Calendly", "Zapier", "Webhooks"],
  },
];

export default function UseCasesPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="Use Cases"
            title="Built for Every Business Type"
            description="From online stores to SaaS platforms — NotiProof adapts to your business and drives results."
          />

          <div className="space-y-20">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <uc.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-primary">{uc.title}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{uc.headline}</h3>
                  <p className="text-muted-foreground mb-6">{uc.description}</p>
                  <ul className="space-y-2 mb-6">
                    {uc.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {uc.integrations.map((int) => (
                      <span key={int} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{int}</span>
                    ))}
                  </div>
                  <Button asChild>
                    <a href="https://app.notiproof.com/signup">
                      Start Free <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <uc.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          <span className="font-semibold">{uc.notification.name}</span> {uc.notification.action}{" "}
                          <span className="font-semibold">{uc.notification.item}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{uc.notification.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
