import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, UserPlus, Eye, Star, Lock, Search, PlayCircle, Megaphone, ThumbsUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const notifications = [
  {
    icon: ShoppingCart,
    name: "Sarah from NYC",
    action: "just purchased",
    item: "Premium Plan",
    time: "2 minutes ago",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: UserPlus,
    name: "James from London",
    action: "signed up for",
    item: "Free Trial",
    time: "5 minutes ago",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: Eye,
    name: "142 visitors",
    action: "are viewing",
    item: "this page",
    time: "right now",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: Star,
    name: "Michael from Berlin",
    action: "left a 5-star",
    item: "review",
    time: "8 minutes ago",
    iconBg: "bg-accent/20",
    iconColor: "text-accent-foreground",
  },
  {
    icon: PlayCircle,
    name: "Emma from Toronto",
    action: "shared a",
    item: "video testimonial",
    time: "12 minutes ago",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Megaphone,
    name: "🔥 Flash Sale",
    action: "30% off ends",
    item: "tonight!",
    time: "announcement",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    icon: ThumbsUp,
    name: "4.9★ average",
    action: "from 2,847 reviews on",
    item: "Google",
    time: "verified",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
];

const CYCLE_MS = 3500;

export default function NotificationDemo() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const elapsedRef = useRef(0);
  const lastTickRef = useRef(Date.now());

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % notifications.length);
      setProgress(0);
      elapsedRef.current = 0;
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Progress bar animation — freezes on hover, resumes on leave
  useEffect(() => {
    if (isHovered) return;
    lastTickRef.current = Date.now();
    let raf: number;
    const tick = () => {
      const now = Date.now();
      elapsedRef.current += now - lastTickRef.current;
      lastTickRef.current = now;
      setProgress(Math.min((elapsedRef.current / CYCLE_MS) * 100, 100));
      if (elapsedRef.current < CYCLE_MS) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current, isHovered]);

  const notif = notifications[current];
  const Icon = notif.icon;

  return (
    <div className="w-full">
      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 text-center">
        ▶ Live Preview
      </p>

      {/* Browser Frame */}
      <div className="rounded-xl border border-border shadow-2xl shadow-primary/10 overflow-hidden bg-card">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/60 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex items-center gap-2 ml-3 bg-background rounded-md px-3 py-1 text-xs text-muted-foreground border border-border">
            <Lock className="w-3 h-3" />
            <span>yourstore.com</span>
            <Search className="w-3 h-3 ml-auto opacity-50" />
          </div>
        </div>

        {/* Mock Website Content */}
        <div className="relative h-96 sm:h-[28rem] bg-gradient-to-br from-muted/30 via-background to-muted/50 p-5 overflow-hidden">
          {/* Mock nav */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-20 h-4 rounded bg-muted" />
            <div className="flex gap-3">
              <div className="w-10 h-3 rounded bg-muted/70" />
              <div className="w-10 h-3 rounded bg-muted/70" />
              <div className="w-10 h-3 rounded bg-muted/70" />
            </div>
          </div>

          {/* Mock hero text */}
          <div className="mb-5">
            <div className="w-48 h-5 rounded bg-muted/80 mb-2" />
            <div className="w-36 h-5 rounded bg-muted/60 mb-3" />
            <div className="w-56 h-3 rounded bg-muted/40 mb-1" />
            <div className="w-44 h-3 rounded bg-muted/40" />
          </div>

          {/* Mock product grid */}
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg bg-muted/50 border border-border/50 p-2">
                <div className="w-full aspect-square rounded bg-muted/70 mb-2" />
                <div className="w-full h-2 rounded bg-muted/60 mb-1" />
                <div className="w-2/3 h-2 rounded bg-muted/40" />
              </div>
            ))}
          </div>

          {/* Notification Toast — bottom-left, like on a real site */}
          <div
            className="absolute bottom-10 left-4 right-4 sm:right-auto sm:w-80 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-card border border-border rounded-xl p-3.5 shadow-2xl ring-1 ring-primary/10 flex items-center gap-3"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${notif.iconBg}`}>
                  <Icon className={`w-5 h-5 ${notif.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium leading-snug">
                    <span className="font-semibold">{notif.name}</span>{" "}
                    {notif.action}{" "}
                    <span className="font-semibold">{notif.item}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{notif.time}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="mt-2">
              <Progress value={progress} className="h-1 bg-muted/40" />
            </div>

            {/* Powered by badge */}
            <p className="text-[10px] text-muted-foreground/50 mt-1.5 text-right">
              Powered by <span className="font-semibold text-primary/60">NotiProof</span>
            </p>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {notifications.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary w-6"
                : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
