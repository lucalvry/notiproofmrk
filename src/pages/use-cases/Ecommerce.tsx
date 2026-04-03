import { ShoppingCart, Bell, Eye, Star, TrendingUp, Shield } from "lucide-react";
import UseCaseTemplate from "@/components/UseCaseTemplate";

export default function EcommerceUseCase() {
  return (
    <UseCaseTemplate
      metaTitle="Social Proof for E-commerce – Increase Sales & Reduce Cart Abandonment"
      metaDescription="Show real-time purchase notifications, stock alerts, and customer reviews on your online store. Increase e-commerce conversions by 28% with NotiProof."
      canonical="https://notiproof.com/use-cases/ecommerce/"
      badge="E-commerce"
      headline="Turn Online Browsers Into Confident Buyers"
      description="Show live purchase notifications, stock alerts, visitor counts, and customer reviews on your e-commerce store. Build trust and create urgency that drives sales."
      icon={ShoppingCart}
      painPoints={[
        { title: "High Cart Abandonment", desc: "70% of shoppers abandon carts because they don't trust the store or feel no urgency to buy." },
        { title: "No Social Proof", desc: "New visitors can't see that others are buying. Without trust signals, they leave without purchasing." },
        { title: "Low Conversion Rates", desc: "Average e-commerce conversion rates are just 2-3%. Without optimization, you're losing revenue." },
      ]}
      solutions={[
        "Real-time purchase notifications show constant buying activity",
        "Visitor counters on product pages create urgency to buy now",
        "Review aggregation from Google and Trustpilot builds instant trust",
        "Low-stock alerts trigger loss aversion and faster purchasing decisions",
        "A/B tested campaigns ensure you're showing the most effective social proof",
      ]}
      benefits={[
        "28% average conversion rate increase",
        "Show real-time purchase activity",
        "Low-stock alerts create urgency",
        "Customer review notifications build trust",
        "Visitor counter shows page popularity",
        "Works with Shopify, WooCommerce, BigCommerce",
        "One-click Shopify app installation",
        "Revenue attribution in analytics",
      ]}
      stats={[
        { value: "28%", label: "Avg. Conversion Lift" },
        { value: "42%", label: "Less Cart Abandonment" },
        { value: "3.2x", label: "More Add-to-Carts" },
        { value: "60s", label: "Setup Time" },
      ]}
      notification={{ name: "Sarah from NYC", action: "just purchased", item: "Wireless Headphones", time: "2 minutes ago" }}
      featureHighlights={[
        { icon: Bell, title: "Purchase Alerts", desc: "Show 'Sarah from NYC just bought Wireless Headphones' to create FOMO and validate buying decisions." },
        { icon: Eye, title: "Visitor Counters", desc: "Display '47 people viewing this product' to show demand and create urgency to act before it sells out." },
        { icon: Star, title: "Review Widgets", desc: "Aggregate reviews from Google, Trustpilot, and your store into one beautiful widget on product pages." },
        { icon: TrendingUp, title: "Low-Stock Alerts", desc: "Show 'Only 3 left in stock' notifications to trigger loss aversion and accelerate purchase decisions." },
        { icon: Shield, title: "Trust Badges", desc: "Display 'Trusted by 10,000+ customers' counters to build credibility with first-time visitors." },
      ]}
      testimonial={{
        quote: "NotiProof's purchase notifications reduced our cart abandonment by 42% and increased average order value by 15%. It paid for itself on day one.",
        name: "Emma Rodriguez",
        role: "E-commerce Director, StyleHaven",
        metric: "-42% Cart Abandonment",
      }}
      integrations={["Shopify", "WooCommerce", "BigCommerce", "Stripe", "PayPal", "Klaviyo", "GA4"]}
      faqs={[
        { q: "Does NotiProof work with Shopify?", a: "Yes. We have a one-click Shopify app that installs in seconds. No code needed." },
        { q: "Can I show real purchase data?", a: "Yes. NotiProof connects to your store and displays real order data in notifications." },
        { q: "Will it slow down my store?", a: "No. Our script is under 15KB and loads asynchronously. Zero impact on page speed." },
        { q: "Can I customize the notification design?", a: "Yes. Match your store's branding with custom colors, fonts, positioning, and animation styles." },
        { q: "What e-commerce metrics can I track?", a: "Track impressions, clicks, add-to-carts, purchases, and revenue lift attributed to NotiProof notifications." },
      ]}
      relatedUseCases={[
        { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { label: "Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
        { label: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
      ]}
      resourceLinks={[
        { label: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", context: "Learn how to implement a complete social proof strategy for your online store:" },
        { label: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", context: "See real-world examples of e-commerce stores using social proof to increase sales:" },
        { label: "Shopify Integration", href: "/integrations/shopify/", context: "Get started with NotiProof on your Shopify store in under 60 seconds:" },
      ]}
    />
  );
}
