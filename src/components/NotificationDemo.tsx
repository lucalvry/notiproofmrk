import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Search } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { industries, industryNotifications, type IndustryKey, type NotificationType } from "./demo/industryConfig";
import { EcommerceSite, SaaSSite, AgencySite, LocalBusinessSite } from "./demo/DemoSites";
import {
  PurchaseNotification, VisitorNotification, CountdownNotification, OfferNotification,
  ReviewNotification, DeliveryNotification, VideoTestimonialNotification,
  SignupNotification, ActiveUsersNotification,
  InquiryNotification, CaseStudyViewNotification,
  BookingNotification, GoogleReviewNotification, LocalVisitorNotification,
} from "./demo/DemoNotifications";

const CYCLE_MS = 4000;

function renderNotification(type: NotificationType) {
  switch (type) {
    case "purchase": return <PurchaseNotification />;
    case "visitors": return <VisitorNotification />;
    case "countdown": return <CountdownNotification />;
    case "offer": return <OfferNotification />;
    case "review": return <ReviewNotification />;
    case "delivery": return <DeliveryNotification />;
    case "video": return <VideoTestimonialNotification />;
    case "signup": return <SignupNotification />;
    case "activeUsers": return <ActiveUsersNotification />;
    case "inquiry": return <InquiryNotification />;
    case "caseStudyView": return <CaseStudyViewNotification />;
    case "booking": return <BookingNotification />;
    case "googleReview": return <GoogleReviewNotification />;
    case "localVisitors": return <LocalVisitorNotification />;
  }
}

function renderSite(industry: IndustryKey) {
  switch (industry) {
    case "ecommerce": return <EcommerceSite />;
    case "saas": return <SaaSSite />;
    case "agency": return <AgencySite />;
    case "local": return <LocalBusinessSite />;
  }
}

const industryKeys: IndustryKey[] = ["ecommerce", "saas", "agency", "local"];

export default function NotificationDemo() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>("ecommerce");
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const elapsedRef = useRef(0);
  const lastTickRef = useRef(Date.now());

  const notifs = industryNotifications[activeIndustry];
  const config = industries[activeIndustry];

  // Reset notification index when industry changes
  useEffect(() => {
    setCurrent(0);
    setProgress(0);
    elapsedRef.current = 0;
  }, [activeIndustry]);

  // Auto-cycle notifications
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % notifs.length);
      setProgress(0);
      elapsedRef.current = 0;
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, [isHovered, notifs.length]);

  // Progress bar animation
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

  const notifType = notifs[current];

  return (
    <div className="w-full" role="img" aria-label={config.ariaLabel}>
      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 text-center">
        ▶ Live Preview
      </p>

      {/* Industry pill selector */}
      <div className="flex justify-center gap-2 mb-4 flex-wrap">
        {industryKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActiveIndustry(key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              key === activeIndustry
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {industries[key].label}
          </button>
        ))}
      </div>

      {/* Browser Frame */}
      <div className="rounded-xl border border-border shadow-2xl shadow-primary/10 overflow-hidden bg-white">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex items-center gap-2 ml-3 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-200">
            <Lock className="w-3 h-3" />
            <span>{config.url}</span>
            <Search className="w-3 h-3 ml-auto opacity-50" />
          </div>
        </div>

        {/* Mock Website Content */}
        <div className="relative h-96 sm:h-[28rem] bg-gradient-to-br from-slate-50 via-white to-blue-50/50 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderSite(activeIndustry)}
            </motion.div>
          </AnimatePresence>

          {/* Curved pointer arrow */}
          <svg
            className="absolute bottom-[7.5rem] left-1 sm:left-0 w-10 h-16 z-10 pointer-events-none"
            viewBox="0 0 40 64"
            fill="none"
          >
            <path
              d="M32 4 C10 8, 6 28, 14 52"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 3"
              fill="none"
            />
            <path
              d="M9 46 L14 54 L20 47"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          {/* Notification Toast */}
          <div
            className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-80 cursor-pointer z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndustry}-${current}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white border border-gray-200 rounded-xl shadow-2xl ring-1 ring-black/5 overflow-hidden"
              >
                {renderNotification(notifType)}
              </motion.div>
            </AnimatePresence>

            <div className="mt-2">
              <Progress value={progress} className="h-1 bg-gray-200" />
            </div>

            <p className="text-[10px] text-gray-400 mt-1.5 text-right">
              Powered by <span className="font-semibold text-primary/60">NotiProof</span>
            </p>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {notifs.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              setProgress(0);
              elapsedRef.current = 0;
            }}
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
