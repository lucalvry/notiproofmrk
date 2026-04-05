import { ShoppingBag } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function ShopifyIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof for Shopify – Social Proof Notifications for Your Store"
      metaDescription="Add real-time purchase notifications, customer reviews, and visitor counts to your Shopify store. One-click install. Increase conversions by 28%."
      canonical="https://notiproof.com/integrations/shopify/"
      name="Shopify"
      icon={ShoppingBag}
      headline="Supercharge Your Shopify Store With Social Proof"
      description="Add real-time purchase notifications, stock alerts, customer reviews, and visitor counts to your Shopify store with a one-click app install. No coding needed."
      benefits={[
        "One-click Shopify app install",
        "Auto-sync orders and products",
        "Show real-time purchase notifications",
        "Display product reviews and ratings",
        "Stock alert and urgency notifications",
        "Works with Shopify themes and headless stores",
        "Zero impact on store speed",
        "Revenue attribution in analytics",
      ]}
      setupSteps={[
        { step: "Install App", desc: "Find NotiProof in the Shopify App Store and click 'Add app'. No code required." },
        { step: "Configure", desc: "Choose notification types, customize design, and set display rules in the dashboard." },
        { step: "Go Live", desc: "Enable notifications and start converting more shoppers into buyers." },
      ]}
      features={[
        "Purchase notification popups",
        "Add-to-cart activity alerts",
        "Low stock urgency notifications",
        "Customer review notifications",
        "Live visitor counter",
        "Product page social proof",
        "Cart page conversion widgets",
        "Checkout page trust signals",
        "Mobile-optimized display",
      ]}
      faqs={[
        { q: "Does NotiProof work with all Shopify themes?", a: "Yes. NotiProof works with every Shopify theme, including custom and headless Shopify setups." },
        { q: "Will it slow down my Shopify store?", a: "No. Our script is under 15KB and loads asynchronously after your page content." },
        { q: "Can I show real order data?", a: "Yes. NotiProof syncs with your Shopify orders and displays real purchase data." },
        { q: "Is it compatible with Shopify Plus?", a: "Yes. We fully support Shopify Plus with additional enterprise features." },
      ]}
      resourceLinks={[
        { label: "Social Proof for E-commerce: Complete Guide", href: "/resources/social-proof/social-proof-for-websites/", context: "Learn how social proof notifications drive purchases on e-commerce stores." },
        { label: "Types of Social Proof That Convert", href: "/resources/social-proof/types-of-social-proof/", context: "Discover which notification types work best for Shopify stores." },
        { label: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", context: "See real examples of social proof increasing Shopify conversion rates." },
      ]}
      relatedUseCases={[
        { label: "E-commerce", href: "/use-cases/ecommerce/" },
        { label: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
      ]}
    />
  );
}
