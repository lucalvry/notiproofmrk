import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { defaultAuthor } from "@/components/AuthorCard";
import CTASection from "@/components/CTASection";

const allArticles = [
  { title: "The Complete Guide to Social Proof", href: "/resources/social-proof/", readTime: "25 min", date: "2025-01-15", category: "Social Proof" },
  { title: "What Is Social Proof? The Complete Guide", href: "/resources/social-proof/what-is-social-proof/", readTime: "12 min", date: "2025-01-20", category: "Social Proof" },
  { title: "6 Types of Social Proof (With Examples)", href: "/resources/social-proof/types-of-social-proof/", readTime: "10 min", date: "2025-01-25", category: "Social Proof" },
  { title: "Social Proof Psychology: Why It Works", href: "/resources/social-proof/social-proof-psychology/", readTime: "11 min", date: "2025-02-05", category: "Social Proof" },
  { title: "Social Proof Examples That Convert", href: "/resources/social-proof/social-proof-example/", readTime: "9 min", date: "2025-02-15", category: "Social Proof" },
  { title: "Social Proof in Marketing", href: "/resources/social-proof/social-proof-in-marketing/", readTime: "10 min", date: "2025-03-01", category: "Social Proof" },
  { title: "Social Proof for Websites", href: "/resources/social-proof/social-proof-for-websites/", readTime: "11 min", date: "2025-03-10", category: "Social Proof" },
  { title: "Best Social Proof Software (2025)", href: "/best-social-proof-software/", readTime: "8 min", date: "2025-03-15", category: "Tools & Comparisons" },
  { title: "Social Proof Notifications Guide", href: "/social-proof-notifications/", readTime: "7 min", date: "2025-03-18", category: "Tools & Comparisons" },
  { title: "Conversion Optimization Tools", href: "/conversion-optimization-tools/", readTime: "6 min", date: "2025-03-20", category: "Tools & Comparisons" },
];

const author = defaultAuthor;

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.bio,
    knowsAbout: author.knowsAbout,
    sameAs: author.sameAs,
  },
};

export default function AuthorProfile() {
  return (
    <>
      <SEOHead
        title={`${author.name} – Author & Digital Marketing Expert`}
        description={author.bio}
        canonical="https://notiproof.com/resources/author/olayinka-olayokun/"
        schema={schema}
      />

      <section className="section-padding">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto">
            {/* Author Header */}
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
              <img
                src={author.image}
                alt={author.name}
                className="w-24 h-24 rounded-full object-cover shrink-0"
              />
              <div>
                <h1 className="text-3xl font-extrabold mb-1">{author.name}</h1>
                <p className="text-primary font-medium mb-1">{author.jobTitle}</p>
                <p className="text-xs text-muted-foreground mb-3">{author.credentials}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{author.bio}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {author.knowsAbout.map((topic) => (
                    <span key={topic} className="text-xs bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles */}
            <h2 className="text-xl font-bold mb-6">
              Articles by {author.name.split(" ")[0]} ({allArticles.length})
            </h2>
            <div className="grid gap-3">
              {allArticles.map((a) => (
                <Link
                  key={a.href}
                  to={a.href}
                  className="group flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold group-hover:text-primary transition-colors">{a.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>
                      <span className="bg-secondary px-2 py-0.5 rounded text-[10px] font-medium">{a.category}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
