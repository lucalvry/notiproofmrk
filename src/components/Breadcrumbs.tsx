import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const labelMap: Record<string, string> = {
  "": "Home",
  product: "Product",
  "use-cases": "Use Cases",
  integrations: "Integrations",
  testimonials: "Testimonials",
  pricing: "Pricing",
  company: "Company",
  resources: "Resources",
  about: "About",
  contact: "Contact",
  careers: "Careers",
  "social-proof": "Social Proof",
  "social-proof-notifications": "Social Proof Notifications",
  "testimonials-collection-text-image-video": "Testimonials Collection",
  "video-testimonial-recorder": "Video Testimonial Recorder",
  "review-aggregation-showcase-system": "Review Aggregation",
  "campaign-builder": "Campaign Builder",
  "integrations-ecosystem": "Integrations Ecosystem",
  "analytics-conversion-insights": "Analytics & Conversion Insights",
  "visitor-counter-live-visitors": "Visitor Counter",
  "recent-activity-notifications": "Recent Activity Notifications",
  "testimonials-widget-reviews-widget": "Testimonials & Reviews Widget",
  ecommerce: "E-commerce",
  "saas-social-proof-tools-drive-sign-ups": "SaaS",
  "social-proof-for-marketing-agencies-impress-clients": "Agencies",
  "local-business-social-proof-convert-website-visitors": "Local Business",
  shopify: "Shopify",
  wordpress: "WordPress",
  zapier: "Zapier",
  "what-is-social-proof": "What Is Social Proof?",
  "social-proof-example": "Social Proof Examples",
  "social-proof-in-marketing": "Social Proof in Marketing",
  "social-proof-for-websites": "Social Proof for Websites",
  "types-of-social-proof": "Types of Social Proof",
  "social-proof-psychology": "Social Proof Psychology",
  reviews: "Reviews",
  "conversion-analytics": "Conversion Analytics",
  "website-trust": "Website Trust",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
  "conversion-optimization-tools": "Conversion Optimization Tools",
  "best-social-proof-software": "Best Social Proof Software",
};

export default function Breadcrumbs() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = [
    { label: "Home", href: "/" },
    ...segments.map((seg, i) => ({
      label: labelMap[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      href: "/" + segments.slice(0, i + 1).join("/") + "/",
    })),
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `https://notiproof.com${crumb.href}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="container-tight py-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {crumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
              {i === crumbs.length - 1 ? (
                <span className="font-medium text-foreground">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
