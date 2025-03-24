export interface Project {
  id: string;
  title: string;
  category: 'ux-ui' | 'photography' | 'videography' | 'graphic-design';
  imageUrl: string;
  client: string;
  description: string;
  tools: string[];
  slug: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Digital Music Space UX Redesign',
    category: 'ux-ui',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12',
    client: 'Fashion Retailer',
    description: 'Complete UX/UI overhaul of an Digital Music Space platform focusing on improved user journey and conversion optimization.',
    tools: ['Figma', 'Adobe XD', 'Sketch'],
    slug: 'fashion-retailer-redesign'
  },
  {
    id: '2',
    title: 'Urban Architecture',
    category: 'photography',
    imageUrl: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
    client: 'City Magazine',
    description: 'Urban architecture photography series showcasing modern architectural marvels.',
    tools: ['Canon EOS 5D Mk IV', 'Sigma 50mm Lens'],
    slug: 'urban-architecture'
  },
  {
    id: '3',
    title: 'Brand Identity Design',
    category: 'graphic-design',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    client: 'Startup Hub',
    description: 'Complete brand identity design including logo, typography, and brand guidelines.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    slug: 'startup-hub-branding'
  },
  {
    id: '4',
    title: 'Product Launch Film',
    category: 'videography',
    imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
    client: 'Tech Innovation Co',
    description: 'Cinematic product launch video highlighting key features and benefits.',
    tools: ['Sony A7S III', 'DJI Ronin-S'],
    slug: 'tech-product-launch'
  }
];

function filterProjectsByCategory(selectedCategory: 'ux-ui' | 'photography' | 'videography' | 'graphic-design') {
  return projects.filter(project => project.category === selectedCategory);
}

// Example usage:
const selectedCategory: 'ux-ui' = 'ux-ui'; // Example of category selection
const filteredProjects = filterProjectsByCategory(selectedCategory);
console.log(filteredProjects);
