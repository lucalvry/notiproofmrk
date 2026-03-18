import ResourceArticle from "@/components/ResourceArticle";
const r = [
  { title: "What Is Social Proof?", href: "/resources/social-proof/what-is-social-proof/", desc: "Complete definition." },
  { title: "Social Proof Examples", href: "/resources/social-proof/social-proof-example/", desc: "Real examples." },
  { title: "Social Proof Psychology", href: "/resources/social-proof/social-proof-psychology/", desc: "Why it works." },
];
export default function TypesOfSocialProof() {
  return (
    <ResourceArticle metaTitle="6 Types of Social Proof (With Examples for Each)" metaDescription="Discover the 6 types of social proof: expert, celebrity, user, crowd, friends, and certification. Learn which types work best for your business." canonical="https://notiproof.com/resources/social-proof/types-of-social-proof/" title="6 Types of Social Proof and How to Use Each One" pillarLink={{ label: "Social Proof Guide", href: "/resources/social-proof/" }} relatedArticles={r} content={
      <div className="space-y-6 text-muted-foreground">
        <p className="text-lg">Robert Cialdini identified social proof as one of his six principles of persuasion. Since then, marketers have identified six distinct types of social proof, each with unique strengths and ideal use cases.</p>
        <h2 className="text-2xl font-bold text-foreground">1. Expert Social Proof</h2>
        <p>When an industry expert endorses your product, it carries significant weight. Expert social proof includes industry analyst recommendations, thought leader endorsements, and expert review features. Example: "Recommended by Neil Patel" or featured in Gartner's Magic Quadrant.</p>
        <h2 className="text-2xl font-bold text-foreground">2. Celebrity Social Proof</h2>
        <p>Celebrity and influencer endorsements leverage their audience's trust. This type works best for consumer brands and can include sponsored content, brand ambassadorships, or organic mentions.</p>
        <h2 className="text-2xl font-bold text-foreground">3. User Social Proof</h2>
        <p>The most accessible and often most effective type. Customer reviews, testimonials, ratings, and case studies. User social proof is authentic and relatable — potential customers see themselves in the reviewer. NotiProof makes collecting and displaying user social proof effortless.</p>
        <h2 className="text-2xl font-bold text-foreground">4. Wisdom of the Crowd</h2>
        <p>Large numbers create confidence. "Join 10,000+ businesses" or "500,000 notifications delivered." When many people have chosen your product, others feel safe following suit. Real-time visitor counters and signup notifications are forms of crowd social proof.</p>
        <h2 className="text-2xl font-bold text-foreground">5. Wisdom of Friends</h2>
        <p>Recommendations from people you know are the most trusted form of social proof. Referral programs, social sharing features, and "friends who use this" features leverage this type.</p>
        <h2 className="text-2xl font-bold text-foreground">6. Certification Social Proof</h2>
        <p>Trust badges, security certifications, industry awards, and official partnerships. "SOC 2 Certified," "BBB Accredited," "Google Partner" — these signals provide institutional validation.</p>
      </div>
    } />
  );
}
