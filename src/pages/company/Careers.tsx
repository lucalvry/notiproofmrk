import { motion } from "framer-motion";
import { Briefcase, Heart, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const perks = [
  { icon: Globe, title: "Remote-First", desc: "Work from anywhere in the world. We're a distributed team across multiple time zones." },
  { icon: Heart, title: "Competitive Benefits", desc: "Health insurance, equipment budget, learning stipend, and generous PTO." },
  { icon: Zap, title: "High Impact", desc: "Work on a product used by 5,000+ businesses. Ship features that matter." },
  { icon: Briefcase, title: "Growth", desc: "We invest in your growth. Annual learning budgets, conference attendance, and mentorship." },
];

export default function CareersPage() {
  return (
    <>
      <SEOHead
        title="Careers at NotiProof – Join Our Team"
        description="Join the NotiProof team and help businesses increase conversions with social proof. We're remote-first and always looking for talented people."
        canonical="https://notiproof.com/company/careers/"
      />

      <section className="section-padding">
        <div className="container-tight">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Join the NotiProof Team</h1>
            <p className="text-lg text-muted-foreground">
              We're building the future of social proof and conversion optimization. Join a remote-first team that ships fast and cares about impact.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {perks.map((p) => (
              <motion.div key={p.title} {...fadeUp} className="bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-bold mb-2">{p.title}</h2>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <p className="text-muted-foreground mb-4">
                We don't have any open positions right now, but we're always interested in hearing from talented people.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Send your resume and a note about what excites you about NotiProof to <span className="font-semibold text-primary">careers@notiproof.com</span>
              </p>
              <Button asChild>
                <a href="mailto:careers@notiproof.com">Send Your Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
