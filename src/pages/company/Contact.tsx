import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact NotiProof – Get in Touch With Our Team"
        description="Have questions about NotiProof? Contact our team for support, sales inquiries, or partnership opportunities. We respond within 24 hours."
        canonical="https://notiproof.com/company/contact/"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact NotiProof",
          url: "https://notiproof.com/company/contact/",
        }}
      />

      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a question, need support, or want to explore a partnership? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Mail, title: "Email Us", desc: "hello@notiproof.com", sub: "For general inquiries" },
              { icon: MessageSquare, title: "Live Chat", desc: "Available in-app", sub: "For quick support questions" },
              { icon: Clock, title: "Response Time", desc: "Within 24 hours", sub: "Mon–Fri, 9am–6pm EST" },
            ].map((c) => (
              <motion.div key={c.title} {...fadeUp} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-bold mb-1">{c.title}</h2>
                <p className="text-sm font-medium text-primary">{c.desc}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                    <input id="name" type="text" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                    <input id="email" type="email" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1.5">Subject</label>
                  <select id="subject" className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option>General Inquiry</option>
                    <option>Sales</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Press</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="How can we help?" />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
