import { ShoppingCart } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function WooCommerceIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof for WooCommerce – Social Proof Notifications for WordPress Stores"
      metaDescription="Add real-time purchase notifications, customer reviews, and visitor counts to your WooCommerce store. Simple WordPress plugin install. Boost conversions by 25%."
      canonical="https://notiproof.com/integrations/woocommerce/"
      name="WooCommerce"
      icon={ShoppingCart}
      headline="Boost WooCommerce Sales With Real-Time Social Proof"
      description="Display live purchase notifications, review widgets, and visitor counts on your WooCommerce store. Works with any WordPress theme — install in under 60 seconds."
      benefits={[
        "One-click WordPress plugin install",
        "Auto-sync WooCommerce orders in real time",
        "Show recent purchase notifications to visitors",
        "Display product reviews from Google and Trustpilot",
        "Live visitor counter creates buying urgency",
        "Works with any WordPress theme or page builder",
        "Lightweight script — zero impact on page speed",
        "Revenue attribution tracks ROI per notification",
      ]}
      setupSteps={[
        { step: "Install Plugin", desc: "Download the NotiProof plugin from WordPress.org or upload the ZIP file to your WordPress dashboard." },
        { step: "Connect Store", desc: "Link your WooCommerce store to sync orders, products, and customer data automatically." },
        { step: "Launch Notifications", desc: "Choose templates, set display rules, and start converting more visitors into buyers." },
      ]}
      features={[
        "Recent purchase popup notifications",
        "Add-to-cart activity alerts",
        "Low stock urgency notifications",
        "Google & Trustpilot review widgets",
        "Live visitor counter per product",
        "Testimonial collection forms",
        "Cart page trust signals",
        "Mobile-responsive notification design",
        "WooCommerce Subscriptions support",
      ]}
      faqs={[
        { q: "Does NotiProof work with all WooCommerce themes?", a: "Yes. NotiProof is compatible with every WooCommerce theme including Storefront, Astra, Flatsome, and custom themes built with Elementor or Divi." },
        { q: "Will it slow down my WordPress site?", a: "No. The NotiProof script is under 15KB and loads asynchronously after your page content, so it has zero impact on Core Web Vitals." },
        { q: "Can I display real WooCommerce order data?", a: "Yes. NotiProof syncs directly with your WooCommerce orders database to display real purchase notifications with product names and buyer locations." },
        { q: "Does it work with WooCommerce Subscriptions?", a: "Yes. NotiProof can display subscription signup notifications alongside one-time purchase alerts for recurring revenue stores." },
      ]}
      resourceLinks={[
        { label: "Social Proof for E-commerce: Complete Guide", href: "/resources/social-proof/social-proof-for-websites/", context: "Learn how social proof notifications drive purchases on e-commerce stores." },
        { label: "Cart Abandonment Reduction Strategies", href: "/resources/cro/cart-abandonment/", context: "Combine social proof with cart recovery tactics to recover lost revenue." },
        { label: "Review Widgets for Websites", href: "/resources/reviews/review-widgets-for-websites/", context: "Display aggregated reviews on your WooCommerce product pages." },
      ]}
      relatedUseCases={[
        { label: "E-commerce", href: "/use-cases/ecommerce/" },
        { label: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
      ]}
    />
  );
}
