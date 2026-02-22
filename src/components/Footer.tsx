import { Link } from "react-router-dom";
import logo from "@/assets/notiproof-logo.png";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/integrations" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-tight section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="NotiProof" className="h-8 mb-4 brightness-0 invert" />
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
            <a href="#" className="text-sm text-dark-foreground/40 hover:text-dark-foreground/80 transition-colors">Twitter</a>
            <a href="#" className="text-sm text-dark-foreground/40 hover:text-dark-foreground/80 transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-dark-foreground/40 hover:text-dark-foreground/80 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
