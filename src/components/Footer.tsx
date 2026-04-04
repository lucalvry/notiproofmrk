import { Link } from "react-router-dom";
import logo from "@/assets/notiproof-logo.png";

const footerLinks = {
  Product: [
    { label: "Product Overview", href: "/product/" },
    { label: "Social Proof Notifications", href: "/product/social-proof-notifications/" },
    { label: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/" },
    { label: "Video Testimonial Recorder", href: "/product/video-testimonial-recorder/" },
    { label: "Review Aggregation", href: "/product/review-aggregation-showcase-system/" },
    { label: "Campaign Builder", href: "/product/campaign-builder/" },
    { label: "Analytics & Insights", href: "/product/analytics-conversion-insights/" },
    { label: "Visitor Counter", href: "/product/visitor-counter-live-visitors/" },
    { label: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/" },
    { label: "Pricing", href: "/pricing/" },
  ],
  Solutions: [
    { label: "All Use Cases", href: "/use-cases/" },
    { label: "E-commerce", href: "/use-cases/ecommerce/" },
    { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
    { label: "Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
    { label: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
    { label: "Integrations", href: "/integrations/" },
    { label: "Shopify", href: "/integrations/shopify/" },
    { label: "WordPress", href: "/integrations/wordpress/" },
    { label: "Zapier", href: "/integrations/zapier/" },
  ],
  Resources: [
    { label: "Resource Hub", href: "/resources/" },
    { label: "Blog", href: "/resources/blog/" },
    { label: "Guides", href: "/resources/social-proof/" },
    { label: "Glossary", href: "/resources/glossary/" },
    { label: "Comparisons", href: "/best-social-proof-software/" },
    { label: "Help Center", href: "/resources/help-center/" },
    { label: "Free Tools", href: "/conversion-optimization-tools/" },
  ],
  Company: [
    { label: "About", href: "/company/about/" },
    { label: "Contact", href: "/company/contact/" },
    { label: "Careers", href: "/company/careers/" },
    { label: "Testimonials", href: "/testimonials/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms-of-service/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground" role="contentinfo">
      <div className="container-tight section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/">
              <img src={logo} alt="NotiProof" className="h-8 mb-4 brightness-0 invert" />
            </Link>
            <p className="text-sm text-dark-foreground/60 max-w-xs">
              Increase conversions with real-time social proof notifications, testimonials, and trust widgets.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-dark-foreground/60 hover:text-dark-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-dark-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-dark-foreground/40">
            © {new Date().getFullYear()} NotiProof. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://twitter.com/notiproof" target="_blank" className="text-sm text-dark-foreground/40 hover:text-dark-foreground/80 transition-colors" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/company/notiproof" target="_blank" className="text-sm text-dark-foreground/40 hover:text-dark-foreground/80 transition-colors" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
