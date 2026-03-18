import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const sections = [
  { icon: Building2, title: "About NotiProof", desc: "Learn about our mission, story, and the team behind the platform.", href: "/company/about/" },
  { icon: Mail, title: "Contact Us", desc: "Get in touch with our team for questions, support, or partnerships.", href: "/company/contact/" },
  { icon: Briefcase, title: "Careers", desc: "Join our growing team and help businesses convert more customers.", href: "/company/careers/" },
];

export default function CompanyHub() {
  return (
    <>
      <SEOHead
        title="Company – About NotiProof, Contact & Careers"
        description="Learn about NotiProof, our mission to help businesses increase conversions with social proof. Contact us or explore career opportunities."
        canonical="https://notiproof.com/company/"
      />
      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">The Company Behind NotiProof</h1>
            <p className="text-lg text-muted-foreground">We're on a mission to help every business build trust and convert more customers with social proof.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Link key={s.href} to={s.href} className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{s.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">Learn more <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
