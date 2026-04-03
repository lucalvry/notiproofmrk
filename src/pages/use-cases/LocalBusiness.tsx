import { MapPin, Star, Bell, Eye, MessageSquare, Globe } from "lucide-react";
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
      solutions={[
        "Aggregate Google and Yelp reviews into a beautiful widget on your website",
        "Show recent booking activity to prove your business is busy and in-demand",
        "Display customer testimonials with photos for authentic local credibility",
        "Geo-targeted notifications show activity from nearby customers",
        "Simple setup — no developer or technical skills needed",
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
      featureHighlights={[
        { icon: Star, title: "Google Review Widget", desc: "Pull your Google and Yelp reviews directly onto your website. Visitors see your 4.8-star rating without leaving your page." },
        { icon: Bell, title: "Booking Notifications", desc: "Show 'Maria from Chicago just booked a consultation' to prove your business is active and in-demand." },
        { icon: Eye, title: "Visitor Counters", desc: "Display '12 people viewing this service' to create urgency for popular appointment slots." },
        { icon: MessageSquare, title: "Testimonial Wall", desc: "Showcase customer stories with photos on a beautiful, embeddable wall that builds local trust." },
        { icon: Globe, title: "Geo-Targeting", desc: "Show notifications from customers in the same city or region as the visitor for maximum local relevance." },
      ]}
      testimonial={{
        quote: "Showing our Google reviews on our website increased consultation bookings by 35%. Patients trust us before they even walk in the door.",
        name: "Dr. Sarah Mitchell",
        role: "Owner, BrightSmile Dental",
        metric: "+35% More Bookings",
      }}
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
      resourceLinks={[
        { label: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", context: "Learn how to implement social proof specifically for local business websites:" },
        { label: "Reviews Hub", href: "/resources/reviews/", context: "Explore our complete guide to leveraging customer reviews for your local business:" },
      ]}
    />
  );
}
