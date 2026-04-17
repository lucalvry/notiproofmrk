import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface TocItem {
  id: string;
  label: string;
}

interface LegalPageShellProps {
  title: string;
  lastUpdated: string;
  intro?: string;
  toc: TocItem[];
  activePath: "/privacy-policy/" | "/terms-of-service/" | "/cookie-policy/";
  children: ReactNode;
}

const navLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" as const },
  { label: "Terms of Service", href: "/terms-of-service/" as const },
  { label: "Cookie Policy", href: "/cookie-policy/" as const },
  { label: "Contact", href: "/company/contact/" as const },
];

export default function LegalPageShell({
  title,
  lastUpdated,
  intro,
  toc,
  activePath,
  children,
}: LegalPageShellProps) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");

  useEffect(() => {
    if (toc.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );
    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  return (
    <>
      {/* Branded hero band */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-border">
        <div className="container-tight py-12 md:py-16">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <FileText className="w-4 h-4" />
            <span>Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{title}</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Last updated: <time>{lastUpdated}</time>
          </p>
          {intro && (
            <p className="text-base md:text-lg text-foreground/80 max-w-3xl mb-6">
              {intro}
            </p>
          )}
          <nav aria-label="Legal documents" className="flex flex-wrap gap-2">
            {navLinks.map((link) => {
              const isActive = link.href === activePath;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground border-border hover:border-primary/40"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          {/* Mobile TOC */}
          <div className="lg:hidden mb-8">
            <Accordion type="single" collapsible>
              <AccordionItem value="toc" className="border border-border rounded-xl px-4">
                <AccordionTrigger className="text-sm font-semibold">
                  On this page
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pb-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-muted-foreground hover:text-primary block py-1"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-10">
            {/* Desktop sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                  On this page
                </p>
                <ul className="space-y-1.5 border-l border-border">
                  {toc.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`block text-sm pl-3 py-1 -ml-px border-l-2 transition-colors ${
                            isActive
                              ? "border-primary text-primary font-medium"
                              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Card-style content surface */}
            <article className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm">
              <div
                className="prose prose-slate dark:prose-invert max-w-none
                prose-headings:scroll-mt-24 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-table:border prose-table:border-border prose-table:rounded-lg prose-table:overflow-hidden
                prose-th:bg-muted prose-th:text-foreground prose-th:font-semibold prose-th:px-4 prose-th:py-2 prose-th:text-left
                prose-td:px-4 prose-td:py-2 prose-td:border-t prose-td:border-border
                prose-li:my-1
                prose-ul:my-4 prose-ol:my-4"
              >
                {children}
              </div>

              <div className="mt-12 pt-6 border-t border-border flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  Questions? <Link to="/company/contact/" className="text-primary hover:underline">Contact us</Link>
                </p>
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary"
                >
                  Back to top <ChevronUp className="w-3 h-3" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
