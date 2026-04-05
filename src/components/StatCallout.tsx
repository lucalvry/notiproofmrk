import { TrendingUp } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface StatCalloutProps {
  stat: string;
  context: string;
  icon?: LucideIcon;
}

export default function StatCallout({ stat, context, icon: Icon = TrendingUp }: StatCalloutProps) {
  return (
    <div className="not-prose my-8 flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <p className="text-2xl font-extrabold text-primary leading-tight">{stat}</p>
        <p className="text-sm text-muted-foreground mt-0.5">{context}</p>
      </div>
    </div>
  );
}
