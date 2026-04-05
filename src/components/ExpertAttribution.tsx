import { Link } from "react-router-dom";
import { CalendarDays, UserCheck } from "lucide-react";

interface ExpertAttributionProps {
  authorName?: string;
  authorRole?: string;
  authorSlug?: string;
  reviewerName?: string;
  reviewerRole?: string;
  lastUpdated?: string;
}

export default function ExpertAttribution({
  authorName = "Olayinka Olayokun",
  authorRole = "Social Proof & CRO Specialist",
  authorSlug = "olayinka-olayokun",
  reviewerName = "NotiProof Editorial Team",
  reviewerRole = "Product & UX Review",
  lastUpdated = "April 2026",
}: ExpertAttributionProps) {
  return (
    <div className="not-prose flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border border-border bg-card px-5 py-4 text-sm mb-10">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
          {authorName.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <Link to={`/resources/author/${authorSlug}/`} className="font-semibold text-foreground hover:text-primary transition-colors">
            {authorName}
          </Link>
          <p className="text-xs text-muted-foreground">{authorRole}</p>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
        <UserCheck className="h-3.5 w-3.5" />
        <span className="text-xs">Reviewed by <strong className="text-foreground">{reviewerName}</strong></span>
      </div>
      <div className="flex items-center gap-1.5 text-muted-foreground ml-auto">
        <CalendarDays className="h-3.5 w-3.5" />
        <span className="text-xs">Updated {lastUpdated}</span>
      </div>
    </div>
  );
}
