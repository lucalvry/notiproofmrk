import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const values = [
  { title: "Customer-First", desc: "Every feature we build starts with a real customer problem. We ship solutions, not features." },
  { title: "Data-Driven", desc: "We measure everything. Decisions are based on data, not opinions." },
  { title: "Transparency", desc: "Clear pricing, honest communication, and no hidden fees. What you see is what you get." },
  { title: "Continuous Improvement", desc: "We ship weekly updates. The platform gets better every single week." },
];

const milestones = [
  { year: "2022", event: "NotiProof founded with a mission to democratize social proof" },
  { year: "2023", event: "Launched testimonial collection, video recording, and review aggregation" },
  { year: "2024", event: "Reached 5,000+ active businesses, 38+ integrations, and $2M+ ARR" },
  { year: "2025", event: "Expanded with AI testimonial analysis, campaign builder, and agency tools" },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About NotiProof – Our Mission, Story & Team"
        description="NotiProof was founded to help businesses of all sizes increase conversions with real-time social proof. Learn about our mission, values, and the team behind the platform."
        canonical="https://notiproof.com/company/about/"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About NotiProof",
          description: "Learn about NotiProof's mission, story, and values.",
          url: "https://notiproof.com/company/about/",
        }}
      />

      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Making Social Proof Accessible to Every Business</h1>
            <p className="text-lg text-muted-foreground">
              NotiProof was founded with a simple belief: every business deserves the trust-building tools that enterprise companies have. We make social proof technology accessible, affordable, and effortless to implement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-8">
              We believe that trust is the most important conversion factor online. Our mission is to help businesses build that trust through authentic social proof — real-time notifications, genuine customer testimonials, and transparent engagement data.
            </p>
            <p className="text-lg text-muted-foreground text-center">
              NotiProof serves over 5,000 businesses worldwide, from solo entrepreneurs to enterprise teams. Every day, our platform processes millions of social proof interactions, helping businesses convert visitors into customers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v) => (
              <motion.div key={v.title} {...fadeUp} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {milestones.map((m, i) => (
              <motion.div key={m.year} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex gap-4">
                <span className="text-lg font-bold text-primary shrink-0 w-16">{m.year}</span>
                <p className="text-muted-foreground">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-tight text-center">
          <h2 className="text-xl font-bold mb-6">NotiProof by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5,000+", label: "Active Businesses" },
              { value: "38+", label: "Integrations" },
              { value: "10M+", label: "Monthly Notifications" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Join 5,000+ Businesses?" description="Start using NotiProof today and see the difference social proof makes." />
    </>
  );
}
