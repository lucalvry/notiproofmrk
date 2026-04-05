import { Bell, MessageSquare, BarChart3, Zap } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

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
    gradient: "from-primary/20 to-blue-400/20",
  },
  {
    value: "testimonials",
    icon: MessageSquare,
    label: "Testimonials",
    title: "Collect & display testimonials effortlessly",
    description:
      "Gather written and video testimonials from happy customers with one-click collection forms. Display them in beautiful widgets that convert — right where they matter most.",
    gradient: "from-accent/20 to-yellow-300/20",
  },
  {
    value: "analytics",
    icon: BarChart3,
    label: "Analytics",
    title: "Conversion analytics & A/B testing",
    description:
      "Track every impression, click, and conversion. Run A/B tests on notification styles, timing, and placement to find what drives the most revenue for your business.",
    gradient: "from-green-400/20 to-emerald-400/20",
  },
  {
    value: "integrations",
    icon: Zap,
    label: "Integrations",
    title: "Connect your entire stack in minutes",
    description:
      "One-click integrations with Shopify, WooCommerce, WordPress, Zapier, Stripe, and more. Pull in real purchase data, reviews, and signups automatically.",
    gradient: "from-purple-400/20 to-pink-400/20",
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
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {f.description}
                  </p>
                </div>
                <div
                  className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${f.gradient} border border-border flex items-center justify-center`}
                >
                  <f.icon className="w-16 h-16 text-muted-foreground/30" />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
