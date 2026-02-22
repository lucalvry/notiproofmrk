import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Video, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const testimonials = [
  { name: "Jessica M.", role: "E-commerce Director, StyleHouse", quote: "NotiProof increased our checkout conversions by 28% in the first month. The ROI paid for the annual plan in the first week.", rating: 5 },
  { name: "David K.", role: "Founder, CloudMetrics SaaS", quote: "We saw a 19% lift in trial signups within two weeks. The analytics dashboard helps us optimize our notifications constantly.", rating: 5 },
  { name: "Anna P.", role: "CEO, GrowthPulse Agency", quote: "We now offer NotiProof as part of our CRO package. Clients love the white-label option and the results speak for themselves.", rating: 5 },
  { name: "Tom R.", role: "Marketing Lead, FreshFit", quote: "The testimonial wall feature alone is worth the subscription. We collect and showcase reviews without any third-party tools.", rating: 5 },
  { name: "Sarah L.", role: "Owner, DesignCraft", quote: "Installation took 2 minutes. Literally one line of code. And we started seeing conversion improvements the same day.", rating: 5 },
  { name: "Michael B.", role: "Head of Growth, TechScale", quote: "A/B testing different notification styles helped us find the perfect message. Our conversions went from 2.1% to 3.8%.", rating: 5 },
  { name: "Elena V.", role: "Founder, CourseHub", quote: "Showing live enrollment notifications created genuine FOMO. Course signups increased by 34% in the first month.", rating: 5 },
  { name: "Chris D.", role: "CTO, PayStream", quote: "The targeting rules are incredible. We show different notifications based on visitor behavior and location. Very powerful.", rating: 5 },
  { name: "Rachel G.", role: "VP Marketing, HomeStyle", quote: "We tested NotiProof against our previous tool and saw a 45% improvement in click-through rates. Never looking back.", rating: 5 },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by Conversion-Focused Teams Everywhere"
            description="See how businesses use NotiProof to boost conversions, collect testimonials, and build trust."
          />

          {/* Testimonial wall preview */}
          <div className="bg-surface border border-border rounded-2xl p-8 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Testimonial Wall Preview</h3>
              <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">Product Feature</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              This is what your customers see. NotiProof's built-in testimonial wall lets you collect, curate, and display reviews — no third-party tools needed.
            </p>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="break-inside-avoid bg-card border border-border rounded-xl p-5"
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-highlight text-highlight" />
                    ))}
                  </div>
                  <p className="text-sm mb-4 italic">"{t.quote}"</p>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Feature highlight */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: MessageSquare, title: "Collect Testimonials", desc: "Send collection links to customers. They submit text or video testimonials in seconds." },
              { icon: Star, title: "Curate & Display", desc: "Approve, tag, and showcase the best testimonials on a beautiful, embeddable wall." },
              { icon: Video, title: "Video Testimonials", desc: "Accept video reviews from customers. Display them alongside text testimonials." },
            ].map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.notiproof.com/signup">
                Start Collecting Testimonials <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
