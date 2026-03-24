import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, LogOut, User } from "lucide-react";
import logo from "@/assets/notiproof-logo.png";
import { useAuth } from "@/contexts/AuthContext";

const productLinks = [
  { label: "Product Overview", href: "/product/", desc: "Everything NotiProof offers" },
  { label: "Social Proof Notifications", href: "/product/social-proof-notifications/", desc: "Real-time purchase & signup alerts" },
  { label: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", desc: "Text, image & video testimonials" },
  { label: "Video Testimonial Recorder", href: "/product/video-testimonial-recorder/", desc: "Record customer video reviews" },
  { label: "Review Aggregation", href: "/product/review-aggregation-showcase-system/", desc: "Aggregate & showcase reviews" },
  { label: "Campaign Builder", href: "/product/campaign-builder/", desc: "Create targeted campaigns" },
  { label: "Analytics & Insights", href: "/product/analytics-conversion-insights/", desc: "Conversion tracking dashboard" },
  { label: "Visitor Counter", href: "/product/visitor-counter-live-visitors/", desc: "Live visitor count widget" },
  { label: "Recent Activity", href: "/product/recent-activity-notifications/", desc: "Real-time activity feed" },
  { label: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/", desc: "Embeddable review widgets" },
];

const useCaseLinks = [
  { label: "All Use Cases", href: "/use-cases/", desc: "Browse by industry" },
  { label: "E-commerce", href: "/use-cases/ecommerce/", desc: "Online stores & marketplaces" },
  { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/", desc: "Drive trial signups" },
  { label: "Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/", desc: "CRO as a service" },
  { label: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/", desc: "Convert local visitors" },
];

const resourceLinks = [
  { label: "Resource Hub", href: "/resources/", desc: "Guides, articles & insights" },
  { label: "Social Proof Guide", href: "/resources/social-proof/", desc: "Complete pillar guide" },
  { label: "Reviews", href: "/resources/reviews/", desc: "Collecting & using reviews" },
  { label: "Conversion Analytics", href: "/resources/conversion-analytics/", desc: "Measuring conversion lifts" },
  { label: "Website Trust", href: "/resources/website-trust/", desc: "Building online trust signals" },
];

const companyLinks = [
  { label: "About NotiProof", href: "/company/about/", desc: "Our mission & story" },
  { label: "Contact", href: "/company/contact/", desc: "Get in touch" },
  { label: "Careers", href: "/company/careers/", desc: "Join our team" },
];

interface DropdownProps {
  label: string;
  links: { label: string; href: string; desc: string }[];
  active: boolean;
  open: string | null;
  setOpen: (v: string | null) => void;
}

function Dropdown({ label, links, active, open, setOpen }: DropdownProps) {
  const isOpen = open === label;
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(label)}
      onMouseLeave={() => setOpen(null)}
    >
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
          active ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-lg p-2 z-50 max-h-[70vh] overflow-y-auto">
          {links.map((sub) => (
            <Link
              key={sub.href}
              to={sub.href}
              onClick={() => setOpen(null)}
              className="block px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
            >
              <span className="text-sm font-medium">{sub.label}</span>
              <span className="block text-xs text-muted-foreground mt-0.5">{sub.desc}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();

  const isActive = (prefix: string) => location.pathname.startsWith(prefix);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-tight flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="NotiProof" className="h-8" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <Dropdown label="Product" links={productLinks} active={isActive("/product")} open={dropdown} setOpen={setDropdown} />
          <Dropdown label="Use Cases" links={useCaseLinks} active={isActive("/use-cases")} open={dropdown} setOpen={setDropdown} />
          <Link to="/integrations/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/integrations") ? "text-primary" : "text-muted-foreground"}`}>Integrations</Link>
          <Link to="/testimonials/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/testimonials") ? "text-primary" : "text-muted-foreground"}`}>Testimonials</Link>
          <Link to="/pricing/" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/pricing" || location.pathname === "/pricing/" ? "text-primary" : "text-muted-foreground"}`}>Pricing</Link>
          <Dropdown label="Resources" links={resourceLinks} active={isActive("/resources")} open={dropdown} setOpen={setDropdown} />
          <Dropdown label="Company" links={companyLinks} active={isActive("/company")} open={dropdown} setOpen={setDropdown} />
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://app.notiproof.com/login">Log In</a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://app.notiproof.com/signup">Start Free</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 pb-4 pt-2 space-y-1 max-h-[80vh] overflow-y-auto">
          <MobileSection title="Product" links={productLinks} close={() => setMobileOpen(false)} />
          <MobileSection title="Use Cases" links={useCaseLinks} close={() => setMobileOpen(false)} />
          <Link to="/integrations/" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary">Integrations</Link>
          <Link to="/testimonials/" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary">Testimonials</Link>
          <Link to="/pricing/" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary">Pricing</Link>
          <MobileSection title="Resources" links={resourceLinks} close={() => setMobileOpen(false)} />
          <MobileSection title="Company" links={companyLinks} close={() => setMobileOpen(false)} />
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" className="flex-1" asChild>
              <a href="https://app.notiproof.com/login">Log In</a>
            </Button>
            <Button size="sm" className="flex-1" asChild>
              <a href="https://app.notiproof.com/signup">Start Free</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileSection({ title, links, close }: { title: string; links: { label: string; href: string }[]; close: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-2 text-sm font-medium text-muted-foreground hover:text-primary">
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 space-y-1">
          {links.map((l) => (
            <Link key={l.href} to={l.href} onClick={close} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
