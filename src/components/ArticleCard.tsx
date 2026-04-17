import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";
import authorImg from "@/assets/author-olayinka.png";

interface ArticleCardProps {
  title: string;
  href: string;
  desc: string;
  readTime: string;
  date: string;
  author: string;
  categoryTitle: string;
  image?: string;
  imageAlt?: string;
  gradient?: string;
  index?: number;
}

export default function ArticleCard({
  title, href, desc, readTime, date, author, categoryTitle,
  image, imageAlt, gradient = "from-primary/20 to-primary/10", index = 0,
}: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={href}
        className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all h-full flex flex-col"
      >
        {image ? (
          <img
            src={image}
            alt={imageAlt || `${categoryTitle}: ${title}`}
            className="aspect-[16/9] w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className={`aspect-[16/9] bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-3xl opacity-30">📄</span>
          </div>
        )}
        <div className="p-5 flex-1 flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full self-start mb-3">
            {categoryTitle}
          </span>
          <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed line-clamp-2 flex-1">
            {desc}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border/50">
            <div className="flex items-center gap-1.5">
              <img src={authorImg} alt={author} className="w-5 h-5 rounded-full object-cover" />
              <span className="font-medium">{author}</span>
            </div>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {readTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {date}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
