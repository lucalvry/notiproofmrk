import { Search, ShoppingCart, Star, Zap, BarChart3, Globe, Clock, Phone } from "lucide-react";
import { Stars } from "./DemoNotifications";
import mockTshirt from "@/assets/mock-tshirt.png";

/* ---- Product Card (e-commerce) ---- */
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

/* ---- Mock site nav ---- */
function SiteNav({ brand, items, icon }: { brand: string; items: string[]; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
      <span className="text-sm font-bold text-gray-800 tracking-tight flex items-center gap-1.5">
        {icon}
        {brand}
      </span>
      <div className="flex gap-4 text-[10px] font-medium text-gray-500">
        {items.map((item) => (
          <span key={item} className={item === "Sale" ? "text-red-500 font-semibold" : ""}>{item}</span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Search className="w-3.5 h-3.5 text-gray-400" />
      </div>
    </div>
  );
}

/* ---- E-commerce Site ---- */
export function EcommerceSite() {
  return (
    <>
      <SiteNav brand="YourStore" items={["Shop", "Sale", "About", "Contact"]} />
      <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">New Arrival</p>
        <p className="text-lg font-bold text-gray-900 leading-tight">Summer Collection</p>
        <p className="text-[10px] text-gray-500 mt-0.5">Up to 40% off on selected items</p>
        <button className="mt-2 bg-primary text-white text-[9px] font-semibold px-3 py-1 rounded">Shop Now</button>
      </div>
      <div className="px-5 py-3">
        <p className="text-xs font-semibold text-gray-700 mb-2">Trending Products</p>
        <div className="grid grid-cols-3 gap-2.5">
          <ProductCard name="Classic Blue Tee" price="$29.99" oldPrice="$49.99" />
          <ProductCard name="Premium Pocket Tee" price="$34.99" />
          <ProductCard name="Sport Fit Tee" price="$24.99" oldPrice="$39.99" />
        </div>
      </div>
    </>
  );
}

/* ---- SaaS Site ---- */
export function SaaSSite() {
  return (
    <>
      <SiteNav brand="YourApp" items={["Features", "Pricing", "Docs", "Blog"]} icon={<Zap className="w-3.5 h-3.5 text-blue-500" />} />
      <div className="px-5 py-5 bg-gradient-to-r from-slate-50 to-blue-50 text-center">
        <p className="text-[10px] uppercase tracking-widest text-blue-500 font-semibold">Trusted by 10,000+ teams</p>
        <p className="text-lg font-bold text-gray-900 leading-tight mt-1">Ship Faster with AI</p>
        <p className="text-[10px] text-gray-500 mt-1">The all-in-one platform to build, deploy, and scale.</p>
        <div className="flex gap-2 justify-center mt-3">
          <button className="bg-primary text-white text-[9px] font-semibold px-3 py-1.5 rounded">Start Free Trial</button>
          <button className="bg-white border border-gray-200 text-gray-700 text-[9px] font-semibold px-3 py-1.5 rounded">Watch Demo</button>
        </div>
      </div>
      <div className="px-5 py-3">
        <p className="text-xs font-semibold text-gray-700 mb-2">Why teams love us</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: <Zap className="w-4 h-4 text-blue-500" />, title: "Lightning Fast", desc: "Deploy in seconds" },
            { icon: <BarChart3 className="w-4 h-4 text-green-500" />, title: "Analytics", desc: "Real-time insights" },
            { icon: <Globe className="w-4 h-4 text-purple-500" />, title: "Global CDN", desc: "Edge everywhere" },
          ].map((f) => (
            <div key={f.title} className="rounded-lg bg-white border border-gray-100 p-2.5 shadow-sm text-center">
              <div className="flex justify-center mb-1">{f.icon}</div>
              <p className="text-[10px] font-semibold text-gray-800">{f.title}</p>
              <p className="text-[8px] text-gray-400 mt-0.5">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---- Agency Site ---- */
export function AgencySite() {
  return (
    <>
      <SiteNav brand="YourAgency" items={["Work", "Services", "Team", "Contact"]} />
      <div className="px-5 py-5 bg-gradient-to-r from-purple-50 to-pink-50">
        <p className="text-[10px] uppercase tracking-widest text-purple-500 font-semibold">Award-Winning Studio</p>
        <p className="text-lg font-bold text-gray-900 leading-tight mt-1">We Build Brands<br />That Convert</p>
        <p className="text-[10px] text-gray-500 mt-1">Strategy · Design · Development</p>
        <button className="mt-2 bg-gray-900 text-white text-[9px] font-semibold px-3 py-1 rounded">View Our Work</button>
      </div>
      <div className="px-5 py-3">
        <p className="text-xs font-semibold text-gray-700 mb-2">Recent Projects</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Nike Rebrand", color: "from-orange-200 to-red-200" },
            { name: "Spotify Campaign", color: "from-green-200 to-emerald-200" },
            { name: "Tesla Landing", color: "from-blue-200 to-indigo-200" },
          ].map((p) => (
            <div key={p.name} className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className={`w-full aspect-[4/3] bg-gradient-to-br ${p.color}`} />
              <div className="p-1.5 bg-white">
                <p className="text-[9px] font-semibold text-gray-800">{p.name}</p>
                <p className="text-[7px] text-gray-400">Branding · Web</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---- Local Business Site ---- */
export function LocalBusinessSite() {
  return (
    <>
      <SiteNav brand="Joe's Pizzeria" items={["Menu", "Hours", "Reviews"]} icon={<span className="text-base">🍕</span>} />
      <div className="px-5 py-5 bg-gradient-to-r from-amber-50 to-orange-50">
        <p className="text-[10px] uppercase tracking-widest text-orange-500 font-semibold">Est. 1998 · Brooklyn, NY</p>
        <p className="text-lg font-bold text-gray-900 leading-tight mt-1">Best Pizza in Brooklyn</p>
        <div className="flex items-center gap-1.5 mt-1">
          <Stars count={5} size={10} />
          <span className="text-[10px] text-gray-500">4.9 (2,847 reviews)</span>
        </div>
        <div className="flex gap-2 mt-2">
          <button className="bg-orange-500 text-white text-[9px] font-semibold px-3 py-1 rounded">Order Now</button>
          <button className="bg-white border border-gray-200 text-gray-700 text-[9px] font-semibold px-3 py-1 rounded flex items-center gap-1">
            <Phone className="w-2.5 h-2.5" /> Call Us
          </button>
        </div>
      </div>
      <div className="px-5 py-3">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-3 h-3 text-green-500" />
          <span className="text-[10px] font-semibold text-green-600">Open Now</span>
          <span className="text-[10px] text-gray-400">· Closes at 11 PM</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Margherita", price: "$14", emoji: "🍕" },
            { name: "Pepperoni", price: "$16", emoji: "🍕" },
            { name: "Truffle", price: "$22", emoji: "🍄" },
          ].map((item) => (
            <div key={item.name} className="rounded-lg bg-white border border-gray-100 p-2 shadow-sm text-center">
              <span className="text-2xl">{item.emoji}</span>
              <p className="text-[9px] font-semibold text-gray-800 mt-1">{item.name}</p>
              <p className="text-[10px] font-bold text-orange-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
