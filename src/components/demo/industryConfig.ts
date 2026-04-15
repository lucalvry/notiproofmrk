export type IndustryKey = "ecommerce" | "saas" | "agency" | "local";

export interface IndustryConfig {
  label: string;
  url: string;
  ariaLabel: string;
}

export const industries: Record<IndustryKey, IndustryConfig> = {
  ecommerce: {
    label: "E-commerce",
    url: "yourstore.com",
    ariaLabel: "NotiProof social proof notification live preview — showing real-time purchase alerts, visitor counts, reviews, and testimonials on an e-commerce product page",
  },
  saas: {
    label: "SaaS",
    url: "yourapp.io",
    ariaLabel: "NotiProof social proof notification live preview — showing signup alerts, active user counts, and reviews on a SaaS landing page",
  },
  agency: {
    label: "Agency",
    url: "youragency.co",
    ariaLabel: "NotiProof social proof notification live preview — showing project inquiries, case study views, and reviews on an agency portfolio site",
  },
  local: {
    label: "Local Business",
    url: "joespizzeria.com",
    ariaLabel: "NotiProof social proof notification live preview — showing bookings, Google reviews, and visitor counts on a local business website",
  },
};

export type NotificationType =
  | "purchase" | "visitors" | "countdown" | "offer" | "review" | "delivery" | "video"
  | "signup" | "activeUsers"
  | "inquiry" | "caseStudyView"
  | "booking" | "googleReview" | "localVisitors";

export const industryNotifications: Record<IndustryKey, NotificationType[]> = {
  ecommerce: ["purchase", "visitors", "countdown", "offer", "review", "delivery", "video"],
  saas: ["signup", "activeUsers", "review", "video"],
  agency: ["inquiry", "caseStudyView", "review", "video"],
  local: ["booking", "googleReview", "localVisitors", "video"],
};
