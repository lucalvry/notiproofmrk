import { MapPin } from "lucide-react";
import UseCaseTemplate from "@/components/UseCaseTemplate";

export default function LocalBusinessUseCase() {
  return (
    <UseCaseTemplate
      metaTitle="Social Proof for Local Business – Convert Website Visitors Into Customers"
      metaDescription="Use social proof notifications, Google review aggregation, and testimonial walls to convert local website visitors into paying customers with NotiProof."
      canonical="https://notiproof.com/use-cases/local-business-social-proof-convert-website-visitors/"
      badge="Local Business"
      headline="Convert Local Website Visitors Into Paying Customers"
      description="Show local booking activity, aggregate Google reviews, and display customer testimonials to build trust and convert your website visitors into clients."
      icon={MapPin}
      painPoints={[
        { title: "Low Website Conversion", desc: "Local business websites often convert under 3% of visitors. Most leave without taking action." },
        { title: "Trust Gap", desc: "Visitors don't know if your business is reputable. Without visible social proof, they go to competitors." },
        { title: "Scattered Reviews", desc: "Great reviews on Google and Yelp don't help if visitors never see them on your website." },
      ]}
      benefits={[
        "35% average booking increase",
        "Aggregate Google & Yelp reviews",
        "Show recent booking activity",
        "Display customer testimonials",
        "Location-based visitor targeting",
        "Works on any website platform",
        "Mobile-optimized notifications",
        "Simple setup — no tech skills needed",
      ]}
      stats={[
        { value: "35%", label: "More Bookings" },
        { value: "4.8★", label: "Avg. Review Score Shown" },
        { value: "28%", label: "More Phone Calls" },
        { value: "2min", label: "Setup Time" },
      ]}
      notification={{ name: "Maria from Chicago", action: "booked a", item: "consultation", time: "10 minutes ago" }}
      integrations={["Google Reviews", "Yelp", "WordPress", "Squarespace", "Wix", "Calendly", "Zapier"]}
      faqs={[
        { q: "Can I show Google reviews on my website?", a: "Yes. NotiProof aggregates your Google reviews and displays them on your site with a beautiful widget." },
        { q: "Does it work for service businesses?", a: "Yes. Show recent bookings, consultations, and appointments to build trust with potential clients." },
        { q: "Can I target visitors in my area?", a: "Yes. Use geo-targeting to show location-specific notifications and reviews." },
        { q: "Do I need a developer?", a: "No. Setup takes 2 minutes with our guided wizard. Works on any website platform." },
      ]}
      relatedUseCases={[
        { label: "E-commerce", href: "/use-cases/ecommerce/" },
        { label: "SaaS", href: "/use-cases/saas-social-proof-tools-drive-sign-ups/" },
        { label: "Agencies", href: "/use-cases/social-proof-for-marketing-agencies-impress-clients/" },
      ]}
    />
  );
}
