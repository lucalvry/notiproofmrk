import { ShoppingCart } from "lucide-react";
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
    />
  );
}
