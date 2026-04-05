import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Star, BarChart3, Shield, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarArticle {
  title: string;
  href: string;
}

interface ArticleSidebarProps {
  popularArticles?: SidebarArticle[];
  relatedArticles?: SidebarArticle[];
}

const categoryLinks = [
  { label: "Social Proof", href: "/resources/social-proof/", icon: BookOpen },
  { label: "Reviews", href: "/resources/reviews/", icon: Star },
  { label: "Conversion Analytics", href: "/resources/conversion-analytics/", icon: BarChart3 },
  { label: "Website Trust", href: "/resources/website-trust/", icon: Shield },
  { label: "Testimonials", href: "/resources/testimonials/", icon: MessageSquare },
];

const defaultPopular: SidebarArticle[] = [
  { title: "What Is Social Proof? The Complete Guide", href: "/resources/social-proof/what-is-social-proof/" },
  { title: "6 Types of Social Proof (With Examples)", href: "/resources/social-proof/types-of-social-proof/" },
  { title: "Social Proof Psychology: Why It Works", href: "/resources/social-proof/social-proof-psychology/" },
  { title: "Social Proof Examples That Convert", href: "/resources/social-proof/social-proof-example/" },
];

export default function ArticleSidebar({ popularArticles = defaultPopular, relatedArticles }: ArticleSidebarProps) {
  return (
    <aside className="space-y-8 lg:sticky lg:top-24">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-bold mb-3">Browse Categories</h3>
        <div className="space-y-1">
          {categoryLinks.map((c) => (
            <Link
              key={c.href}
              to={c.href}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary px-2 py-1.5 rounded-lg hover:bg-secondary transition-colors"
            >
              <c.icon className="w-3.5 h-3.5" />
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div>
        <h3 className="text-sm font-bold mb-3">Popular Articles</h3>
        <div className="space-y-2">
          {popularArticles.map((a) => (
            <Link
              key={a.href}
              to={a.href}
              className="flex items-start gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowRight className="w-3 h-3 mt-0.5 shrink-0" />
              <span>{a.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Related (if provided) */}
      {relatedArticles && relatedArticles.length > 0 && (
        <div>
          <h3 className="text-sm font-bold mb-3">Related Articles</h3>
          <div className="space-y-2">
            {relatedArticles.map((a) => (
              <Link
                key={a.href}
                to={a.href}
                className="flex items-start gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowRight className="w-3 h-3 mt-0.5 shrink-0" />
                <span>{a.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Glossary & Help links */}
      <div className="border-t border-border pt-4 space-y-2">
        <Link to="/resources/glossary/" className="block text-xs font-medium text-primary hover:underline">📖 Glossary of Terms</Link>
        <Link to="/resources/help-center/" className="block text-xs font-medium text-primary hover:underline">❓ Help Center</Link>
      </div>
    </aside>
  );
}
