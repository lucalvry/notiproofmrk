import { TrendingUp } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCalloutProps {
  stat: string;
  context: string;
  icon?: LucideIcon;
}

export default function StatCallout({ stat, context, icon: Icon = TrendingUp }: StatCalloutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="not-prose my-8 flex items-center gap-5 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-6"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <div>
        <p className="text-3xl font-extrabold text-primary leading-tight">{stat}</p>
        <p className="text-sm text-muted-foreground mt-1">{context}</p>
      </div>
    </motion.div>
  );
}
