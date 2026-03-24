import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";

const categories = ["All", "E-commerce", "CMS", "Marketing", "Analytics", "CRM", "Payment", "Automation"];

const integrationsList = [
  { name: "Shopify", category: "E-commerce", desc: "Show live purchase notifications on your Shopify store." },
  { name: "WooCommerce", category: "E-commerce", desc: "WordPress-based e-commerce social proof." },
  { name: "BigCommerce", category: "E-commerce", desc: "Enterprise e-commerce notifications." },
  { name: "Magento", category: "E-commerce", desc: "Adobe Commerce social proof widgets." },
  { name: "Stripe", category: "Payment", desc: "Display real-time payment notifications." },
  { name: "PayPal", category: "Payment", desc: "Show PayPal transaction alerts." },
  { name: "WordPress", category: "CMS", desc: "One-click WordPress plugin installation." },
  { name: "Webflow", category: "CMS", desc: "No-code Webflow integration." },
  { name: "Squarespace", category: "CMS", desc: "Add social proof to Squarespace sites." },
  { name: "Wix", category: "CMS", desc: "Easy Wix website integration." },
  { name: "Ghost", category: "CMS", desc: "Social proof for Ghost publications." },
  { name: "Bubble", category: "CMS", desc: "No-code Bubble app integration." },
  { name: "GA4", category: "Analytics", desc: "Sync with Google Analytics 4 data." },
  { name: "Google Tag Manager", category: "Analytics", desc: "Deploy via GTM containers." },
  { name: "Mixpanel", category: "Analytics", desc: "Event tracking and analytics sync." },
  { name: "Segment", category: "Analytics", desc: "Customer data platform integration." },
  { name: "Hotjar", category: "Analytics", desc: "Combine heatmaps with social proof." },
  { name: "Amplitude", category: "Analytics", desc: "Product analytics integration." },
  { name: "HubSpot", category: "CRM", desc: "CRM-powered notification triggers." },
  { name: "Salesforce", category: "CRM", desc: "Enterprise CRM integration." },
  { name: "Pipedrive", category: "CRM", desc: "Sales pipeline notifications." },
  { name: "Intercom", category: "CRM", desc: "Customer engagement platform sync." },
  { name: "Mailchimp", category: "Marketing", desc: "Email marketing signup notifications." },
  { name: "ConvertKit", category: "Marketing", desc: "Creator email platform integration." },
  { name: "ActiveCampaign", category: "Marketing", desc: "Marketing automation sync." },
  { name: "Klaviyo", category: "Marketing", desc: "E-commerce email marketing." },
  { name: "Drip", category: "Marketing", desc: "E-commerce CRM integration." },
  { name: "Omnisend", category: "Marketing", desc: "Omnichannel marketing sync." },
  { name: "Zapier", category: "Automation", desc: "Connect with 5,000+ apps." },
  { name: "Make", category: "Automation", desc: "Visual workflow automation." },
  { name: "Pabbly", category: "Automation", desc: "Affordable automation platform." },
  { name: "n8n", category: "Automation", desc: "Self-hosted workflow automation." },
  { name: "Slack", category: "Automation", desc: "Team notifications and alerts." },
  { name: "Discord", category: "Automation", desc: "Community notification integration." },
  { name: "Webhooks", category: "Automation", desc: "Custom webhook triggers." },
  { name: "REST API", category: "Automation", desc: "Full API access for custom setups." },
  { name: "Teachable", category: "E-commerce", desc: "Course enrollment notifications." },
  { name: "Gumroad", category: "E-commerce", desc: "Digital product sale alerts." },
];

export default function IntegrationsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = integrationsList.filter((i) => {
    const matchSearch = i.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || i.category === category;
    return matchSearch && matchCat;
  });

  const integrationLinks: Record<string, string> = {
    Shopify: "/integrations/shopify/",
    WordPress: "/integrations/wordpress/",
    Zapier: "/integrations/zapier/",
  };

  return (
    <>
      <SEOHead
        title="NotiProof Integrations – 38+ Platforms | Shopify, WordPress, Zapier & More"
        description="NotiProof integrates with 38+ platforms including Shopify, WooCommerce, WordPress, Stripe, Zapier, and more. All integrations included on every plan."
        canonical="https://notiproof.com/integrations/"
      />
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="Integrations"
            title="38+ Integrations. One Script. Endless Possibilities."
            description="NotiProof works with every platform. All integrations are included on every plan."
          />

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {integration.name.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{integration.name}</h3>
                    <span className="text-xs text-muted-foreground">{integration.category}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{integration.desc}</p>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No integrations found. Try a different search.</p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
