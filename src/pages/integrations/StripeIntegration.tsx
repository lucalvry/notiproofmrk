import { CreditCard } from "lucide-react";
import IntegrationPage from "@/components/IntegrationPageTemplate";

export default function StripeIntegration() {
  return (
    <IntegrationPage
      metaTitle="NotiProof + Stripe – Real-Time Payment Notifications"
      metaDescription="Display real-time Stripe payment notifications on your website. Show recent purchases, subscription signups, and payment confirmations as social proof."
      canonical="https://notiproof.com/integrations/stripe/"
      name="Stripe"
      icon={CreditCard}
      headline="Turn Stripe Payments Into Social Proof"
      description="Automatically display real-time payment notifications when customers purchase through Stripe. Show recent transactions, subscription signups, and checkout activity to build trust and urgency."
      benefits={[
        "Auto-display Stripe payment notifications",
        "Show subscription signup alerts in real time",
        "Display checkout activity for urgency",
        "Works with Stripe Checkout and custom forms",
        "Revenue attribution per notification campaign",
        "Anonymize customer data for privacy compliance",
        "Supports one-time and recurring payments",
        "Webhook-based — instant notification delivery",
      ]}
      setupSteps={[
        { step: "Connect Stripe", desc: "Link your Stripe account via secure webhook integration from the NotiProof dashboard." },
        { step: "Configure Events", desc: "Choose which Stripe events to display — successful charges, subscriptions, or custom events." },
        { step: "Go Live", desc: "Customize notification design and placement, then enable real-time payment social proof." },
      ]}
      features={[
        "Successful payment notifications",
        "Subscription signup alerts",
        "Checkout session activity",
        "Invoice payment confirmations",
        "Recurring payment renewals",
        "Multi-currency support",
        "Customer location display",
        "Product/plan name in notifications",
        "Revenue tracking dashboard",
      ]}
      faqs={[
        { q: "How does the Stripe integration work?", a: "NotiProof connects via Stripe webhooks to receive real-time payment events and display them as social proof notifications on your website." },
        { q: "Is customer payment data secure?", a: "Yes. NotiProof never accesses sensitive payment data. We only receive event metadata (product name, location) through Stripe's secure webhook system." },
        { q: "Does it support Stripe Subscriptions?", a: "Yes. Display both one-time purchase notifications and recurring subscription signup alerts from Stripe Billing." },
        { q: "Can I customize which Stripe events trigger notifications?", a: "Yes. Choose from successful charges, subscription creations, invoice payments, or set up custom event filters." },
      ]}
      resourceLinks={[
        { label: "Social Proof for SaaS", href: "/resources/social-proof/social-proof-b2b-saas/", context: "Learn how SaaS companies use payment notifications to drive trial-to-paid conversions." },
        { label: "Conversion Rate Benchmarks", href: "/resources/conversion-analytics/conversion-rate-benchmarks/", context: "See how payment social proof impacts conversion rates across industries." },
      ]}
      relatedUseCases={[
        { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { label: "E-commerce", href: "/use-cases/ecommerce/" },
      ]}
    />
  );
}
