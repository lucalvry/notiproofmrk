import { Globe } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function WordPressIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof for WordPress – Social Proof Plugin for WordPress Sites"
      metaDescription="Add social proof notifications, testimonials, and visitor counts to your WordPress site. Free plugin with one-click install. Boost conversions instantly."
      canonical="https://notiproof.com/integrations/wordpress/"
      name="WordPress"
      icon={Globe}
      headline="Add Social Proof to Your WordPress Site in Minutes"
      description="Install the NotiProof WordPress plugin to display real-time notifications, testimonial walls, and visitor counts. Works with any WordPress theme and page builder."
      benefits={[
        "Free WordPress plugin",
        "Works with any theme and page builder",
        "WooCommerce integration included",
        "Shortcodes for testimonial walls",
        "Gutenberg blocks available",
        "Compatible with caching plugins",
        "GDPR-compliant options",
        "Lightweight — no speed impact",
      ]}
      setupSteps={[
        { step: "Install Plugin", desc: "Download from the WordPress Plugin Directory or upload the plugin manually." },
        { step: "Connect", desc: "Enter your NotiProof API key to sync your account." },
        { step: "Activate", desc: "Enable notifications and testimonial widgets through the dashboard." },
      ]}
      features={[
        "Social proof notification popups",
        "Testimonial wall shortcodes",
        "Gutenberg block support",
        "WooCommerce order sync",
        "Contact form submission alerts",
        "Page-level targeting rules",
        "Mobile-responsive widgets",
        "Custom CSS support",
        "Multi-site support",
      ]}
      faqs={[
        { q: "Does it work with WooCommerce?", a: "Yes. NotiProof integrates directly with WooCommerce to show real-time purchase notifications." },
        { q: "Is the plugin compatible with page builders?", a: "Yes. Works with Elementor, Divi, Beaver Builder, and all major page builders." },
        { q: "Will it conflict with caching plugins?", a: "No. NotiProof loads dynamically and works perfectly with WP Rocket, W3 Total Cache, etc." },
        { q: "Can I use shortcodes to embed widgets?", a: "Yes. Use shortcodes to place testimonial walls, review widgets, and counters anywhere on your site." },
      ]}
    />
  );
}
