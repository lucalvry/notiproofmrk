import authorImage from "@/assets/author-olayinka.png";

export interface AuthorData {
  name: string;
  jobTitle: string;
  image: string;
  bio: string;
  credentials: string;
  knowsAbout: string[];
  sameAs: string[];
}

export const defaultAuthor: AuthorData = {
  name: "Olayinka Olayokun",
  jobTitle: "Digital Marketing & SEO Specialist",
  image: authorImage,
  bio: "Olayinka is a CIM-certified digital marketer, content creator, and SEO specialist with an MBA in Digital Marketing and Business Transformation. With over 10 years of experience helping businesses in Nigeria, the UK, the US, Australia, and Dubai achieve their goals online, he brings deep expertise in conversion optimization, social proof strategy, and growth marketing.",
  credentials: "CIM Certified · MBA in Digital Marketing & Business Transformation",
  knowsAbout: ["Digital Marketing", "SEO", "Social Proof", "Conversion Rate Optimization", "Content Strategy", "Growth Marketing"],
  sameAs: [],
};

interface AuthorCardProps {
  author?: AuthorData;
  compact?: boolean;
}

export default function AuthorCard({ author = defaultAuthor, compact = false }: AuthorCardProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-3" itemScope itemType="https://schema.org/Person">
        <img
          src={author.image}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover"
          itemProp="image"
        />
        <div>
          <span className="text-sm font-semibold" itemProp="name">{author.name}</span>
          <span className="block text-xs text-muted-foreground" itemProp="jobTitle">{author.jobTitle}</span>
        </div>
      </div>
    );
  }

  return (
    <aside
      className="border border-border rounded-xl p-6 bg-card mt-12"
      itemScope
      itemType="https://schema.org/Person"
      aria-label="About the author"
    >
      <div className="flex items-start gap-5">
        <img
          src={author.image}
          alt={author.name}
          className="w-16 h-16 rounded-full object-cover shrink-0"
          itemProp="image"
        />
        <div className="min-w-0">
          <h3 className="text-base font-bold" itemProp="name">{author.name}</h3>
          <p className="text-sm text-primary font-medium" itemProp="jobTitle">{author.jobTitle}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{author.credentials}</p>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed" itemProp="description">
            {author.bio}
          </p>
          <meta itemProp="knowsAbout" content={author.knowsAbout.join(", ")} />
        </div>
      </div>
    </aside>
  );
}
