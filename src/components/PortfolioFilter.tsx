import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

type Category = 'ux-ui' | 'photography' | 'videography' | 'graphic-design' | 'product-design' | 'all';

const categories = [

  { id: 'ux-ui', label: 'UX/UI Design' },
  { id: 'photography', label: 'Photography' },
  { id: 'videography', label: 'Videography' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'product-design', label: 'Product Design' },
  { id: 'all', label: 'All Work' },
] as const;

export function PortfolioFilter() {
  const [activeCategory, setActiveCategory] = useState<Category>('ux-ui');

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          data-category-id={category.id}
          onClick={() => setActiveCategory(category.id as Category)}
          className={clsx(
            'px-6 py-2 rounded-full transition-all duration-300',
            'border-2 hover:border-accent',
            activeCategory === category.id
              ? 'bg-secondary text-white border-secondary'
              : 'bg-transparent text-secondary border-secondary/20'
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}