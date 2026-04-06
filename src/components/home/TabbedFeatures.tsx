import { Bell, MessageSquare, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import tabNotifications from "@/assets/tab-notifications.jpg";
import tabTestimonials from "@/assets/tab-testimonials.jpg";
import tabAnalytics from "@/assets/tab-analytics.jpg";
import tabIntegrations from "@/assets/tab-integrations.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const features = [
  {
    value: "notifications",
    icon: Bell,
    label: "Notifications",
    title: "Real-time social proof notifications",
    description:
      "Show live purchase alerts, signup activity, and review notifications to build instant trust. Customize timing, position, and design to match your brand perfectly.",
    image: tabNotifications,
    link: { href: "/resources/social-proof/", label: "Read the complete social proof guide →" },
  },
  {
    value: "testimonials",
    icon: MessageSquare,
    label: "Testimonials",
    title: "Collect & display testimonials effortlessly",
    description:
      "Gather written and video testimonials from happy customers with one-click collection forms. Display them in beautiful widgets that convert — right where they matter most.",
    image: tabTestimonials,
    link: { href: "/resources/testimonials/", label: "Read the complete testimonials guide →" },
  },
  {
    value: "analytics",
    icon: BarChart3,
    label: "Analytics",
    title: "Conversion analytics & A/B testing",
    description:
      "Track every impression, click, and conversion. Run A/B tests on notification styles, timing, and placement to find what drives the most revenue for your business.",
    image: tabAnalytics,
    link: { href: "/resources/conversion-analytics/", label: "Read the conversion analytics guide →" },
  },
  {
    value: "integrations",
    icon: Zap,
    label: "Integrations",
    title: "Connect your entire stack in minutes",
    description:
      "One-click integrations with Shopify, WooCommerce, WordPress, Zapier, Stripe, and more. Pull in real purchase data, reviews, and signups automatically.",
    image: tabIntegrations,
    link: { href: "/product/integrations-ecosystem/", label: "Explore all integrations →" },
  },
];

export default function TabbedFeatures() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <SectionHeading
          badge="Features"
          title="More reasons to love NotiProof"
          description="Everything you need to turn website visitors into paying customers."
        />

        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="w-full max-w-xl mx-auto grid grid-cols-4 h-auto bg-muted/50 p-1 rounded-xl mb-10">
            {features.map((f) => (
              <TabsTrigger
                key={f.value}
                value={f.value}
                className="flex flex-col items-center gap-1.5 py-3 px-2 text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-md rounded-lg transition-all"
              >
                <f.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{f.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((f) => (
            <TabsContent key={f.value} value={f.value}>
              <motion.div
                {...fadeUp}
                className="grid md:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-3">
                    {f.description}
                  </p>
                  {f.link && (
                    <Link to={f.link.href} className="text-sm font-semibold text-primary hover:underline">
                      {f.link.label}
                    </Link>
                  )}
                </div>
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] rounded-2xl shadow-lg object-cover border border-border"
                />
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
