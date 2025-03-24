import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  client: string;
  slug: string;
}

export function ProjectCard({ title, category, imageUrl, client, slug }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative overflow-hidden rounded-lg shadow-lg"
    >
      <a href={`/portfolio/${slug}`} className="block aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-1 " >{title}</h3>
          <p className="text-sm text-white/80">{client}</p>
          <span className="inline-block mt-2 text-xs px-3 py-1 bg-white/20 rounded-full">
            {category}
          </span>
        </div>
      </a>
    </motion.div>
  );
}