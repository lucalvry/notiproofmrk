import { Lightbulb } from "lucide-react";

interface KeyTakeawayProps {
  children: React.ReactNode;
  title?: string;
}

export default function KeyTakeaway({ children, title = "Key Takeaway" }: KeyTakeawayProps) {
  return (
    <div className="not-prose my-8 rounded-xl border-l-4 border-primary bg-card p-5 shadow-sm">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
        <Lightbulb className="h-4 w-4" />
        {title}
      </p>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
