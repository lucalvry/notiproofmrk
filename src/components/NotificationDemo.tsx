import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Search, Star, ShoppingCart, Truck, Play, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import mockTshirt from "@/assets/mock-tshirt.png";

/* ------------------------------------------------------------------ */
/*  Notification data                                                  */
/* ------------------------------------------------------------------ */

type NotificationType =
  | "purchase"
  | "visitors"
  | "countdown"
  | "offer"
  | "review"
  | "delivery"
  | "video";

interface Notification {
  type: NotificationType;
}

const notifications: Notification[] = [
  { type: "purchase" },
  { type: "visitors" },
  { type: "countdown" },
  { type: "offer" },
  { type: "review" },
  { type: "delivery" },
  { type: "video" },
];

const CYCLE_MS = 4000;

/* ------------------------------------------------------------------ */
/*  Countdown timer sub-component                                      */
/* ------------------------------------------------------------------ */
function CountdownBoxes() {
  const [secs, setSecs] = useState(47);
  useEffect(() => {
    const id = setInterval(() => setSecs((s) => (s <= 0 ? 59 : s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const boxes: [string, string][] = [
    ["04", "Day"],
    ["11", "Hour"],
    ["34", "Min"],
    [String(secs).padStart(2, "0"), "Sec"],
  ];
  return (
    <div className="flex gap-1.5">
      {boxes.map(([val, label]) => (
        <div key={label} className="bg-amber-700 text-white rounded px-1.5 py-0.5 text-center min-w-[36px]">
          <div className="text-xs font-bold leading-tight">{val}</div>
          <div className="text-[8px] opacity-80">{label}</div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stars                                                              */
/* ------------------------------------------------------------------ */
function Stars({ count = 5, size = 12 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="text-amber-400 fill-amber-400" style={{ width: size, height: size }} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Individual notification renderers                                  */
/* ------------------------------------------------------------------ */

function PurchaseNotification() {
  return (
    <div className="flex items-center gap-3 p-3">
      <img src={mockTshirt} alt="Product" className="w-14 h-14 rounded-lg object-contain bg-blue-50" />
      <div className="flex-1 min-w-0">
        <p className="text-sm">
          <span className="font-bold text-primary">Louis S.</span>{" "}
          <span className="text-muted-foreground">From London</span>
        </p>
        <p className="text-xs text-muted-foreground">Purchased Nike T-shirt 2 mins ago</p>
        <div className="flex items-center justify-between mt-1">
          <a className="text-xs font-semibold text-primary flex items-center gap-0.5">
            Buy now <ChevronRight className="w-3 h-3" />
          </a>
          <span className="text-[10px] text-green-600 flex items-center gap-0.5">
            ✓ Verified by NotiProof
          </span>
        </div>
      </div>
    </div>
  );
}

function VisitorNotification() {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-orange-200 rounded-full animate-ping opacity-30" />
        <div className="w-5 h-5 bg-orange-400 rounded-full z-10" />
      </div>
      <p className="text-sm">
        <span className="font-bold text-orange-500">187</span>{" "}
        <span className="text-foreground font-medium">shoppers</span>{" "}
        <span className="text-muted-foreground">viewed this offer in last 24 hours</span>
      </p>
    </div>
  );
}

function CountdownNotification() {
  return (
    <div className="p-3">
      <div className="flex items-center gap-3">
        <div>
          <p className="text-sm font-bold text-foreground">Big Discount</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Limited time offer!</p>
        </div>
        <div className="ml-auto">
          <CountdownBoxes />
        </div>
      </div>
      <a className="text-xs font-semibold text-primary mt-1.5 inline-flex items-center gap-0.5">
        Shop now <ChevronRight className="w-3 h-3" />
      </a>
    </div>
  );
}

function OfferNotification() {
  return (
    <div className="flex items-center gap-3 p-3">
      <img src={mockTshirt} alt="Product" className="w-14 h-14 rounded-lg object-contain bg-blue-50" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-foreground">Buy 2 T-shirts, Get 1 free</p>
        <p className="text-[10px] text-muted-foreground">Exclusive Collection. Deal valid for 2 days</p>
        <a className="text-xs font-semibold text-green-600 mt-1 inline-flex items-center gap-0.5">
          Buy Now <ChevronRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function ReviewNotification() {
  return (
    <div className="p-3">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-sm font-bold text-amber-800 shrink-0">
          JD
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-foreground">James D.</span>
            <span className="text-[10px]">🇬</span>
          </div>
          <Stars count={5} size={10} />
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-2 italic leading-relaxed">
        "I Bought Nike T-shirt & it was delivered very fast. Loved buying it."
      </p>
      <button className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-1.5 rounded transition-colors">
        Buy now
      </button>
    </div>
  );
}

function DeliveryNotification() {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="bg-foreground text-background rounded-lg px-2 py-1.5 flex flex-col items-center leading-none shrink-0">
        <Truck className="w-4 h-4 mb-0.5" />
        <span className="text-[7px] font-black uppercase tracking-wide">FREE</span>
        <span className="text-[6px] font-bold uppercase text-orange-400">DELIVERY</span>
      </div>
      <p className="text-sm text-foreground">
        Avail <span className="font-semibold">free delivery</span> on cart value greater than <span className="font-bold text-primary">$100</span>
      </p>
    </div>
  );
}

function VideoTestimonialNotification() {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-pink-200 to-purple-300 shrink-0 flex items-center justify-center">
        <Play className="w-6 h-6 text-white fill-white drop-shadow" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">Emma from Toronto</p>
        <Stars count={4} size={10} />
        <p className="text-[10px] text-muted-foreground mt-0.5">Video testimonial · 0:45</p>
      </div>
    </div>
  );
}

function renderNotification(type: NotificationType) {
  switch (type) {
    case "purchase": return <PurchaseNotification />;
    case "visitors": return <VisitorNotification />;
    case "countdown": return <CountdownNotification />;
    case "offer": return <OfferNotification />;
    case "review": return <ReviewNotification />;
    case "delivery": return <DeliveryNotification />;
    case "video": return <VideoTestimonialNotification />;
  }
}

/* ------------------------------------------------------------------ */
/*  Mock product card                                                  */
/* ------------------------------------------------------------------ */
function ProductCard({ name, price, oldPrice }: { name: string; price: string; oldPrice?: string }) {
  return (
    <div className="rounded-lg bg-white border border-gray-100 p-2 shadow-sm">
      <div className="w-full aspect-square rounded bg-blue-50 flex items-center justify-center mb-2">
        <img src={mockTshirt} alt={name} className="w-4/5 h-4/5 object-contain" loading="lazy" />
      </div>
      <p className="text-[10px] font-medium text-gray-800 truncate">{name}</p>
      <div className="flex items-center gap-1 mt-0.5">
        <Stars count={5} size={8} />
        <span className="text-[8px] text-gray-400">(24)</span>
      </div>
      <div className="flex items-center gap-1 mt-1">
        <span className="text-xs font-bold text-gray-900">{price}</span>
        {oldPrice && <span className="text-[9px] text-gray-400 line-through">{oldPrice}</span>}
      </div>
      <button className="mt-1.5 w-full bg-primary/90 text-white text-[9px] font-semibold py-1 rounded flex items-center justify-center gap-0.5">
        <ShoppingCart className="w-2.5 h-2.5" /> Add to Cart
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
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

  return (
    <div className="w-full" role="img" aria-label="NotiProof social proof notification live preview — showing real-time purchase alerts, visitor counts, reviews, and testimonials on an e-commerce product page">
      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 text-center">
        ▶ Live Preview
      </p>

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
            <span>yourstore.com</span>
            <Search className="w-3 h-3 ml-auto opacity-50" />
          </div>
        </div>

        {/* Mock Website Content */}
        <div className="relative h-96 sm:h-[28rem] bg-gradient-to-br from-slate-50 via-white to-blue-50/50 overflow-hidden">
          {/* Mock nav */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
            <span className="text-sm font-bold text-gray-800 tracking-tight">YourStore</span>
            <div className="flex gap-4 text-[10px] font-medium text-gray-500">
              <span>Shop</span>
              <span className="text-red-500 font-semibold">Sale</span>
              <span>About</span>
              <span>Contact</span>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-gray-400" />
              <div className="relative">
                <ShoppingCart className="w-3.5 h-3.5 text-gray-400" />
                <span className="absolute -top-1 -right-1.5 bg-red-500 text-white text-[6px] font-bold w-3 h-3 rounded-full flex items-center justify-center">2</span>
              </div>
            </div>
          </div>

          {/* Hero banner */}
          <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-indigo-50">
            <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">New Arrival</p>
            <p className="text-lg font-bold text-gray-900 leading-tight">Summer Collection</p>
            <p className="text-[10px] text-gray-500 mt-0.5">Up to 40% off on selected items</p>
            <button className="mt-2 bg-primary text-white text-[9px] font-semibold px-3 py-1 rounded">
              Shop Now
            </button>
          </div>

          {/* Product grid */}
          <div className="px-5 py-3">
            <p className="text-xs font-semibold text-gray-700 mb-2">Trending Products</p>
            <div className="grid grid-cols-3 gap-2.5">
              <ProductCard name="Classic Blue Tee" price="$29.99" oldPrice="$49.99" />
              <ProductCard name="Premium Pocket Tee" price="$34.99" />
              <ProductCard name="Sport Fit Tee" price="$24.99" oldPrice="$39.99" />
            </div>
          </div>

          {/* Curved pointer arrow */}
          <svg
            className="absolute bottom-[13.5rem] left-[4.5rem] sm:bottom-[15rem] w-16 h-20 z-10 pointer-events-none"
            viewBox="0 0 60 80"
            fill="none"
          >
            <path
              d="M30 0 C25 30, 5 40, 10 65"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 3"
              fill="none"
            />
            <path
              d="M5 58 L10 66 L16 60"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          {/* Notification Toast — bottom-left */}
          <div
            className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-80 cursor-pointer z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white border border-gray-200 rounded-xl shadow-2xl ring-1 ring-black/5 overflow-hidden"
              >
                {renderNotification(notif.type)}
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="mt-2">
              <Progress value={progress} className="h-1 bg-gray-200" />
            </div>

            {/* Powered by badge */}
            <p className="text-[10px] text-gray-400 mt-1.5 text-right">
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
