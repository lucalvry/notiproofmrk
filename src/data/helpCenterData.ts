export interface HelpArticle {
  question: string;
  answer: string;
}

export interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  articles: HelpArticle[];
}

const helpCenterData: HelpCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Set up your account and launch your first social proof campaign in minutes.",
    icon: "Rocket",
    articles: [
      { question: "How do I create a NotiProof account?", answer: "Visit notiproof.com and click 'Start Free.' Enter your email, create a password, and you'll be guided through onboarding. No credit card required for the free plan." },
      { question: "How do I add NotiProof to my website?", answer: "After creating a campaign, copy the provided JavaScript snippet and paste it before the closing </body> tag on your website. For WordPress and Shopify, we have one-click plugins available." },
      { question: "How long does it take to see results?", answer: "Most customers see measurable increases in conversion rates within the first 48–72 hours. Social proof notifications begin displaying immediately after installation." },
      { question: "Can I customize the look and feel of notifications?", answer: "Yes! NotiProof offers full customization — colors, fonts, position, animation style, timing, and message templates. Match notifications perfectly to your brand." },
      { question: "Do I need coding skills to use NotiProof?", answer: "No. NotiProof is designed for non-technical users. The campaign builder is drag-and-drop, and installation requires just pasting a single code snippet." },
    ],
  },
  {
    id: "account-billing",
    title: "Account & Billing",
    description: "Manage your subscription, invoices, and team members.",
    icon: "CreditCard",
    articles: [
      { question: "What plans are available?", answer: "We offer Free, Starter, Growth, and Enterprise plans. Each includes different notification limits, features, and support levels. Visit our Pricing page for details." },
      { question: "Can I change my plan at any time?", answer: "Yes. Upgrade or downgrade from your account dashboard at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle." },
      { question: "How does billing work?", answer: "We bill monthly or annually (with a 20% discount for annual plans). All payments are processed securely via Stripe." },
      { question: "Can I get a refund?", answer: "We offer a 14-day money-back guarantee on all paid plans. Contact support within 14 days of your purchase for a full refund." },
      { question: "How do I cancel my subscription?", answer: "Go to Settings → Billing in your dashboard and click 'Cancel Plan.' Your account will remain active until the end of your current billing period." },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connect NotiProof with your existing tools and platforms.",
    icon: "Plug",
    articles: [
      { question: "Which platforms does NotiProof integrate with?", answer: "NotiProof integrates with 38+ platforms including Shopify, WordPress, WooCommerce, Zapier, Google Analytics, Slack, Mailchimp, HubSpot, and many more." },
      { question: "How do I connect Shopify?", answer: "Install the NotiProof app from the Shopify App Store, log in with your NotiProof account, and your store data will sync automatically." },
      { question: "Does NotiProof work with custom websites?", answer: "Yes. Any website that supports JavaScript can use NotiProof. Simply paste the embed code snippet into your site's HTML." },
      { question: "Can I send NotiProof data to Google Analytics?", answer: "Yes. Enable the Google Analytics integration in your dashboard to send notification views, clicks, and conversions as custom events." },
      { question: "How do webhooks work?", answer: "NotiProof can send real-time webhook payloads to any URL when events occur (new notification shown, clicked, conversion tracked). Configure webhooks in Settings → Integrations." },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Common issues and how to resolve them quickly.",
    icon: "Wrench",
    articles: [
      { question: "Notifications aren't showing on my website", answer: "Check that the embed code is placed before </body>, your domain is verified in the dashboard, and no ad-blockers are interfering. Test in an incognito window." },
      { question: "My conversion data seems incorrect", answer: "Ensure your conversion goals are configured correctly in Settings → Goals. Check that the goal URL pattern matches your thank-you or confirmation page." },
      { question: "The widget is affecting my page speed", answer: "NotiProof's script is async and under 15KB gzipped. If you see performance issues, check your browser's Network tab to ensure no other scripts are blocking." },
      { question: "I'm not receiving email notifications", answer: "Check your spam/junk folder. Verify your email in Settings → Email Preferences. Ensure notification emails are enabled for your account." },
      { question: "How do I contact support?", answer: "Email us at support@notiproof.com, use the live chat in your dashboard, or visit our Contact page. Enterprise customers get priority support with a dedicated account manager." },
    ],
  },
];

export default helpCenterData;
