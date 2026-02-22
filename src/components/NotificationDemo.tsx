import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, UserPlus, Eye, Star } from "lucide-react";

const notifications = [
  {
    icon: ShoppingCart,
    name: "Sarah from NYC",
    action: "just purchased",
    item: "Premium Plan",
    time: "2 minutes ago",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: UserPlus,
    name: "James from London",
    action: "signed up for",
    item: "Free Trial",
    time: "5 minutes ago",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Eye,
    name: "142 visitors",
    action: "are viewing",
    item: "this page",
    time: "right now",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Star,
    name: "Michael from Berlin",
    action: "left a 5-star",
    item: "review",
    time: "8 minutes ago",
    color: "bg-highlight/20 text-highlight-foreground",
  },
];

export default function NotificationDemo() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const notif = notifications[current];
  const Icon = notif.icon;

  return (
    <div className="relative w-full max-w-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-card border border-border rounded-xl p-4 shadow-lg flex items-center gap-3"
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${notif.color}`}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              <span className="font-semibold">{notif.name}</span>{" "}
              {notif.action}{" "}
              <span className="font-semibold">{notif.item}</span>
            </p>
            <p className="text-xs text-muted-foreground">{notif.time}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Stacked cards behind */}
      <div className="absolute -bottom-2 left-3 right-3 h-4 bg-card border border-border rounded-b-xl opacity-60 -z-10" />
      <div className="absolute -bottom-4 left-6 right-6 h-4 bg-card border border-border rounded-b-xl opacity-30 -z-20" />
    </div>
  );
}
