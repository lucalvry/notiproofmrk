import { Link } from "react-router-dom";
import logo from "@/assets/notiproof-logo.png";

const footerLinks = {
  Platform: [
    { label: "Social Proof Notifications", href: "/social-proof-notifications/" },
    { label: "Notifications", href: "/product/social-proof-notifications/" },
    { label: "Testimonials", href: "/product/testimonials-collection-text-image-video/" },
    { label: "Video Recorder", href: "/product/video-testimonial-recorder/" },
    { label: "Review Aggregation", href: "/product/review-aggregation-showcase-system/" },
    { label: "Campaign Builder", href: "/product/campaign-builder/" },
    { label: "Analytics", href: "/product/analytics-conversion-insights/" },
    { label: "Visitor Counter", href: "/product/visitor-counter-live-visitors/" },
    { label: "Widgets", href: "/product/testimonials-widget-reviews-widget/" },
  ],
  Solutions: [
    { label: "E-commerce", href: "/use-cases/ecommerce/" },
    { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
    { label: "Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
    { label: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/" },
  ],
  Integrations: [
    { label: "Shopify", href: "/integrations/shopify/" },
    { label: "WordPress", href: "/integrations/wordpress/" },
    { label: "Zapier", href: "/integrations/zapier/" },
  ],
  Learn: [
    { label: "Blog", href: "/resources/blog/" },
    { label: "Social Proof Guide", href: "/resources/social-proof/" },
    { label: "Reviews Guide", href: "/resources/reviews/" },
    { label: "Testimonials Guide", href: "/resources/testimonials/" },
    { label: "Conversion Analytics", href: "/resources/conversion-analytics/" },
    { label: "Website Trust Guide", href: "/resources/website-trust/" },
    { label: "Comparisons", href: "/comparisons/" },
    { label: "Free Tools", href: "/free-tools/" },
    { label: "Glossary", href: "/resources/glossary/" },
    { label: "Help Center", href: "/resources/help-center/" },
  ],
  Company: [
    { label: "About", href: "/company/about/" },
    { label: "Contact", href: "/company/contact/" },
    { label: "Careers", href: "/company/careers/" },
    { label: "Testimonials", href: "/testimonials/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms-of-service/" },
    { label: "Pricing", href: "/pricing/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground" role="contentinfo">
      <div className="container-tight section-padding">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/">
              <img src={logo} alt="NotiProof" className="h-8 mb-4 brightness-0 invert" />
            </Link>
            <p className="text-sm text-dark-foreground/60 max-w-xs mb-6">
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
            <a href="https://twitter.com/notiproof" target="_blank" className="text-dark-foreground/40 hover:text-dark-foreground/80 transition-colors" rel="noopener noreferrer" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com/company/notiproof" target="_blank" className="text-dark-foreground/40 hover:text-dark-foreground/80 transition-colors" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
