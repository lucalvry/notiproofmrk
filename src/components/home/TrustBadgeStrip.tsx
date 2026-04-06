import { Star, Globe, Puzzle } from "lucide-react";

const badges = [
  { icon: Star, label: "4.9/5 on G2", highlight: "4.9/5" },
  { icon: Globe, label: "4,000+ websites", highlight: "4,000+" },
  { icon: Puzzle, label: "38+ integrations", highlight: "38+" },
];

export default function TrustBadgeStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {badges.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5"
        >
          <b.icon className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">{b.label}</span>
        </div>
      ))}
    </div>
  );
}
