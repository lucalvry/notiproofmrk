import { Star, ChevronRight, Play, Truck, ShoppingCart, UserPlus, Users, Briefcase, Eye, CalendarCheck, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import mockTshirt from "@/assets/mock-tshirt.png";

/* ---- Helpers ---- */
export function Stars({ count = 5, size = 12 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="text-amber-400 fill-amber-400" style={{ width: size, height: size }} />
      ))}
    </div>
  );
}

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

/* ---- E-commerce notifications ---- */
export function PurchaseNotification() {
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
          <span className="text-[10px] text-green-600 flex items-center gap-0.5">✓ Verified by NotiProof</span>
        </div>
      </div>
    </div>
  );
}

export function VisitorNotification() {
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

export function CountdownNotification() {
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

export function OfferNotification() {
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

export function ReviewNotification() {
  return (
    <div className="p-3">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-sm font-bold text-amber-800 shrink-0">
          JD
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-foreground">James D.</span>
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

export function DeliveryNotification() {
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

export function VideoTestimonialNotification() {
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

/* ---- SaaS notifications ---- */
export function SignupNotification() {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shrink-0">
        <UserPlus className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm">
          <span className="font-bold text-primary">Alex K.</span>{" "}
          <span className="text-muted-foreground">from Berlin</span>
        </p>
        <p className="text-xs text-muted-foreground">Just started a free trial · 3 min ago</p>
        <span className="text-[10px] text-green-600 flex items-center gap-0.5 mt-0.5">✓ Verified by NotiProof</span>
      </div>
    </div>
  );
}

export function ActiveUsersNotification() {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-30" />
        <Users className="w-5 h-5 text-blue-500 z-10" />
      </div>
      <p className="text-sm">
        <span className="font-bold text-blue-500">342</span>{" "}
        <span className="text-foreground font-medium">teams</span>{" "}
        <span className="text-muted-foreground">are using this feature right now</span>
      </p>
    </div>
  );
}

/* ---- Agency notifications ---- */
export function InquiryNotification() {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shrink-0">
        <Briefcase className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">New project inquiry</p>
        <p className="text-xs text-muted-foreground">From Nike · Brand Redesign · 5 min ago</p>
        <a className="text-xs font-semibold text-primary mt-1 inline-flex items-center gap-0.5">
          View details <ChevronRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export function CaseStudyViewNotification() {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-purple-200 rounded-full animate-ping opacity-30" />
        <Eye className="w-5 h-5 text-purple-500 z-10" />
      </div>
      <p className="text-sm">
        <span className="font-bold text-purple-500">47</span>{" "}
        <span className="text-foreground font-medium">people</span>{" "}
        <span className="text-muted-foreground">viewed this case study today</span>
      </p>
    </div>
  );
}

/* ---- Local Business notifications ---- */
export function BookingNotification() {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shrink-0">
        <CalendarCheck className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm">
          <span className="font-bold text-primary">Sarah M.</span>{" "}
          <span className="text-muted-foreground">just booked</span>
        </p>
        <p className="text-xs text-muted-foreground">Table for 2 · 7:30 PM tonight</p>
        <span className="text-[10px] text-green-600 flex items-center gap-0.5 mt-0.5">✓ Verified by NotiProof</span>
      </div>
    </div>
  );
}

export function GoogleReviewNotification() {
  return (
    <div className="p-3">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-lg shrink-0">
          G
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-foreground">Maria L.</span>
            <span className="text-[10px] text-muted-foreground">via Google</span>
          </div>
          <Stars count={5} size={10} />
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-2 italic leading-relaxed">
        "Best pizza in town! The atmosphere is amazing and staff is super friendly."
      </p>
    </div>
  );
}

export function LocalVisitorNotification() {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-30" />
        <MapPin className="w-5 h-5 text-green-500 z-10" />
      </div>
      <p className="text-sm">
        <span className="font-bold text-green-500">12</span>{" "}
        <span className="text-foreground font-medium">people</span>{" "}
        <span className="text-muted-foreground">are viewing your menu right now</span>
      </p>
    </div>
  );
}
