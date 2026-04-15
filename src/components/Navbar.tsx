import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/notiproof-logo.png";

/* ─── Product dropdown data ─── */
const productGroups = [
  {
    group: "Social Proof",
    items: [
      { label: "Social Proof Notifications", href: "/product/social-proof-notifications/", desc: "Real-time purchase & signup alerts" },
      { label: "Visitor Counter", href: "/product/visitor-counter-live-visitors/", desc: "Live visitor count widget" },
      { label: "Recent Activity", href: "/product/recent-activity-notifications/", desc: "Real-time activity feed" },
    ],
  },
  {
    group: "Testimonials",
    items: [
      { label: "Testimonials Collection", href: "/product/testimonials-collection-text-image-video/", desc: "Text, image & video testimonials" },
      { label: "Video Testimonial Recorder", href: "/product/video-testimonial-recorder/", desc: "Record customer video reviews" },
      { label: "Testimonials Widget", href: "/product/testimonials-widget-reviews-widget/", desc: "Embeddable review widgets" },
    ],
  },
  {
    group: "Platform",
    items: [
      { label: "Campaign Builder", href: "/product/campaign-builder/", desc: "Create targeted campaigns" },
      { label: "Analytics & Insights", href: "/product/analytics-conversion-insights/", desc: "Conversion tracking dashboard" },
      { label: "Review Aggregation", href: "/product/review-aggregation-showcase-system/", desc: "Aggregate & showcase reviews" },
    ],
  },
];

const solutionLinks = [
  { label: "E-commerce", href: "/use-cases/ecommerce/", desc: "Online stores & marketplaces" },
  { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/", desc: "Drive trial signups" },
  { label: "Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/", desc: "CRO as a service" },
  { label: "Local Business", href: "/use-cases/local-business-social-proof-convert-website-visitors/", desc: "Convert local visitors" },
];

/* ─── Resources mega dropdown data ─── */
const resourceGroups = [
  {
    group: "Learn",
    items: [
      { label: "Blog", href: "/resources/blog/", desc: "Articles on social proof & CRO" },
      { label: "Guides Hub", href: "/resources/guides/", desc: "Comprehensive pillar guides" },
      { label: "Case Studies", href: "/case-studies/", desc: "Real customer results" },
    ],
  },
  {
    group: "Tools & Compare",
    items: [
      { label: "Free Tools", href: "/free-tools/", desc: "CRO calculators & audits" },
      { label: "A/B Test Calculator", href: "/free-tools/ab-test-calculator/", desc: "Statistical significance tool" },
      { label: "ROI Calculator", href: "/free-tools/social-proof-roi-calculator/", desc: "Estimate social proof ROI" },
      { label: "Comparisons", href: "/comparisons/", desc: "Side-by-side tool comparisons" },
    ],
  },
  {
    group: "Support",
    items: [
      { label: "Help Center", href: "/resources/help-center/", desc: "Tutorials & FAQs" },
      { label: "Glossary", href: "/resources/glossary/", desc: "Key terms & definitions" },
    ],
  },
];

/* ─── Product mega dropdown ─── */
function ProductDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[640px] z-50">
      <div className="bg-card border border-border rounded-xl shadow-xl p-5">
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-border">
          <Link to="/product/" onClick={onClose} className="text-sm font-bold text-primary hover:underline">
            Product Overview →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {productGroups.map((g) => (
            <div key={g.group}>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 mb-2">{g.group}</p>
              <div className="space-y-1">
                {g.items.map((item) => (
                  <Link key={item.href} to={item.href} onClick={onClose} className="block px-2 py-2 rounded-lg hover:bg-secondary transition-colors">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="block text-[11px] text-muted-foreground mt-0.5">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Resources mega dropdown ─── */
function ResourcesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[580px] z-50">
      <div className="bg-card border border-border rounded-xl shadow-xl p-5">
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-border">
          <Link to="/resources/" onClick={onClose} className="text-sm font-bold text-primary hover:underline">
            All Resources →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {resourceGroups.map((g) => (
            <div key={g.group}>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 mb-2">{g.group}</p>
              <div className="space-y-1">
                {g.items.map((item) => (
                  <Link key={item.href} to={item.href} onClick={onClose} className="block px-2 py-2 rounded-lg hover:bg-secondary transition-colors">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="block text-[11px] text-muted-foreground mt-0.5">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Simple dropdown ─── */
function SimpleDropdown({ links, onClose }: { links: { label: string; href: string; desc: string }[]; onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 pt-2 w-72 z-50">
      <div className="bg-card border border-border rounded-xl shadow-lg p-2">
        {links.map((l) => (
          <Link key={l.href} to={l.href} onClick={onClose} className="block px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors">
            <span className="text-sm font-medium">{l.label}</span>
            <span className="block text-xs text-muted-foreground mt-0.5">{l.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── Nav item with dropdown ─── */
function NavItem({ label, active, open, setOpen, children }: { label: string; active: boolean; open: string | null; setOpen: (v: string | null) => void; children: React.ReactNode }) {
  const isOpen = open === label;
  return (
    <div className="relative" onMouseEnter={() => setOpen(label)} onMouseLeave={() => setOpen(null)}>
      <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${active ? "text-primary" : "text-muted-foreground"}`}>
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && children}
    </div>
  );
}

/* ─── Mobile helpers ─── */
function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-2 text-sm font-medium text-muted-foreground hover:text-primary">
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pl-4 space-y-1">{children}</div>}
    </div>
  );
}

function MobileLink({ href, label, close }: { href: string; label: string; close: () => void }) {
  return <Link to={href} onClick={close} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">{label}</Link>;
}

/* ─── Navbar ─── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (prefix: string) => location.pathname.startsWith(prefix);
  const closeMobile = () => setMobileOpen(false);
  const closeDropdown = () => setDropdown(null);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-tight flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="NotiProof" className="h-8" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <NavItem label="Product" active={isActive("/product")} open={dropdown} setOpen={setDropdown}>
            <ProductDropdown onClose={closeDropdown} />
          </NavItem>
          <NavItem label="Solutions" active={isActive("/use-cases")} open={dropdown} setOpen={setDropdown}>
            <SimpleDropdown links={solutionLinks} onClose={closeDropdown} />
          </NavItem>
          <Link to="/integrations/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/integrations") ? "text-primary" : "text-muted-foreground"}`}>
            Integrations
          </Link>
          <Link to="/pricing/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/pricing") ? "text-primary" : "text-muted-foreground"}`}>
            Pricing
          </Link>
          <NavItem label="Resources" active={isActive("/resources") || isActive("/comparisons") || isActive("/free-tools") || isActive("/case-studies")} open={dropdown} setOpen={setDropdown}>
            <ResourcesDropdown onClose={closeDropdown} />
          </NavItem>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://app.notiproof.com/login" target="_blank" rel="noopener noreferrer">Log In</a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://app.notiproof.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free</a>
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
          <MobileSection title="Product">
            <MobileLink href="/product/" label="Product Overview" close={closeMobile} />
            {productGroups.flatMap((g) => g.items).map((item) => (
              <MobileLink key={item.href} href={item.href} label={item.label} close={closeMobile} />
            ))}
          </MobileSection>
          <MobileSection title="Solutions">
            <MobileLink href="/use-cases/" label="All Use Cases" close={closeMobile} />
            {solutionLinks.map((l) => <MobileLink key={l.href} href={l.href} label={l.label} close={closeMobile} />)}
          </MobileSection>
          <Link to="/integrations/" onClick={closeMobile} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary">Integrations</Link>
          <Link to="/pricing/" onClick={closeMobile} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary">Pricing</Link>
          <MobileSection title="Resources">
            <MobileLink href="/resources/" label="All Resources" close={closeMobile} />
            {resourceGroups.flatMap((g) => g.items).map((l) => <MobileLink key={l.href} href={l.href} label={l.label} close={closeMobile} />)}
          </MobileSection>
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" className="flex-1" asChild>
              <a href="https://app.notiproof.com/login">Log In</a>
            </Button>
            <Button size="sm" className="flex-1" asChild>
              <a href="https://app.notiproof.com/signup">Get Started Free</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
