import { useState } from "react";
import { ChevronDown, List } from "lucide-react";

export interface TocSection {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  sections: TocSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!sections.length) return null;

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  const tocList = (
    <nav aria-label="Table of contents">
      <ol className="space-y-1.5 list-none p-0 m-0">
        {sections.map((s, i) => (
          <li key={s.id}>
            <button
              onClick={() => handleClick(s.id)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full py-1"
            >
              <span className="text-xs font-mono text-muted-foreground/50 mr-2">{String(i + 1).padStart(2, "0")}</span>
              {s.label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );

  return (
    <>
      {/* Desktop: sticky sidebar-style box */}
      <div className="hidden lg:block border border-border rounded-xl p-5 bg-card mb-10">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
          <List className="w-3.5 h-3.5" />
          Table of Contents
        </h2>
        {tocList}
      </div>

      {/* Mobile: collapsible */}
      <div className="lg:hidden border border-border rounded-xl bg-card mb-8">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-between w-full p-4 text-sm font-bold"
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4" />
            Table of Contents
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpen ? "rotate-180" : ""}`} />
        </button>
        {mobileOpen && <div className="px-4 pb-4">{tocList}</div>}
      </div>
    </>
  );
}
