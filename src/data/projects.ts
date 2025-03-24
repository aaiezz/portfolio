export interface BaseProject {
  id: string;
  title: string;
  category: 'ux-ui' | 'photography' | 'videography' | 'graphic-design' | 'product-design';
  imageUrl: string;
  client: string;
  tools: {
    name: string;
    icon: string;
  }[];
  keywords: string[];
  slug: string;

}

export interface UXUIProject extends BaseProject {
  category: 'ux-ui';
  description: {
    main: string;
    challenge: string;
    solution: string;
    uxFocus: string;
    uiFocus: string;
    outcome: string;
  };
  projectDetails: {
    duration: string;
    role: string;
    team: string[];
  };
  process: {
[x: string]: any;
    phase: string;
    description: string;
    image?: string;
  }[];
}

export interface PhotoProject extends BaseProject {
  category: 'photography' | 'videography' | 'graphic-design' | 'product-design';
  description: string;
  gallery: {
    src: string;
    alt: string;
    width: 'full' | 'half';
    height: 'tall' | 'normal';
  }[];
}

export type Project = BaseProject;
export const projects: Project[] = [
  {
    id: '1',
    title: 'Beyond Blue Out of Home Campaign',
    category: 'graphic-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_bbooh-main.jpg',
    client: 'Beyond Blue',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    slug: 'bbooh'
  },
  {
    id: '2',
    title: 'Kepler Analytics Saas Platform',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_kepler01.jpg',
    client: 'Kepler Analytics',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'keplersaas'
  },

  {
    id: '3',
    title: 'Kepler Analytics Mobile App',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_kepler02.jpg',
    client: 'Kepler Analytics',
    description: {
      main: 'Expansion of Kepler Analytics to a mobile platform for senior and store managers.',
      challenge: 'Managers needed a quick and effective way to access CET metrics and analytics on the go.',
      solution: 'Designed a streamlined mobile app integrating research insights, mapping, user flows, and intuitive UI elements.',
      uxFocus: 'Focused on creating an engaging and efficient user flow optimized for mobile interactions.',
      uiFocus: 'Maintained Kepler’s brand identity through consistent typography, colors, and accessibility-driven design.',
      outcome: 'Enhanced usability with Quick Preview and Running Results sections for rapid data access.'
    },
    projectDetails: {
      duration: '4 months',
      role: 'UX/UIDesigner',
      team: ['Product Manager', 'UX Designer', 'Frontend Developer', 'Business Analyst']
    },
    tools: [
      { name: 'Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' }
    ],
    keywords: ['mobile app', 'data analytics', 'UX research', 'store managers'],
    slug: 'kepler-mobile',
    process: ['User Research & Interviews', 'Wireframing & Prototyping', 'UI Design & Usability Testing'],
    gallery: ['/Portfolio/img_portfolio_kepler02.jpg', '/Portfolio/img_portfolio_kepler02.jpg']
  },
  {
    id: '4',
    title: 'Mixxlist App Redesign',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_mixxlist.jpg',
    client: 'Mixxlist',
    description: {
      main: 'Redesign of Mixxlist app to improve playlist creation experience across multiple streaming services.',
      challenge: 'Users found it difficult to manage and create playlists efficiently across different platforms.',
      solution: 'Developed an intuitive interface with minimal cognitive load, focusing on easy interactions and a seamless workflow.',
      uxFocus: 'Enhanced user experience by simplifying playlist creation steps and reducing complexity.',
      uiFocus: 'Implemented a modern design with clean layouts, intuitive icons, and vibrant colors.',
      outcome: 'Improved user retention and satisfaction with a more engaging and intuitive interface.'
    },
    projectDetails: {
      duration: '3 months',
      role: 'UX/UI Designer',
      team: ['Product Manager', 'Frontend Developer']
    },
    tools: [
      { name: 'Sketch', icon: '/icons/sketch.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' }
    ],
    keywords: ['music app', 'playlist creation', 'user flow'],
    slug: 'mixxlist-redesign',
    process: ['User Research', 'Wireframing', 'UI Design'],
    gallery: ['../src/assets/Portfolio/mixxlist-1.jpg', '../src/assets/Portfolio/mixxlist-2.jpg']
  },
  {
    id: '5',
    title: 'Hey Ants File Sharing App',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_antsapp.jpg',
    client: 'Hey Ants',
    description: {
      main: 'Designing an intuitive file-sharing app for effortless transfers of up to 2GB.',
      challenge: 'Users needed a seamless, easy-to-use platform for sending large files in unconventional formats.',
      solution: 'Created a straightforward interface with minimal steps for file sharing, ensuring usability and clarity.',
      uxFocus: 'Focused on simplifying the transfer process with clear instructions and efficient user interactions.',
      uiFocus: 'Designed a clean and coherent UI with consistent typography and recognizable visuals.',
      outcome: 'Achieved a smooth transition between the app and website for a unified user experience.'
    },
    projectDetails: {
      duration: '5 months',
      role: 'Lead UX/UI Designer',
      team: ['Frontend Developer', 'Backend Developer']
    },
    tools: [
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' }
    ],
    keywords: ['file sharing', 'user-friendly', 'intuitive UI'],
    slug: 'heyants-app',
    process: ['User Flow Mapping', 'Prototyping', 'Usability Testing'],
    gallery: ['../src/assets/Portfolio/heyants-1.jpg', '../src/assets/Portfolio/heyants-2.jpg']
  },
  {
    id: '6',
    title: 'Vorsteiner AR App',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_vorsteinerapp.jpg',
    client: 'Vorsteiner',
    description: {
      main: 'Concept design for an AR app allowing users to visualize Vorsteiner products on their cars.',
      challenge: 'Customers needed a reliable way to see how Vorsteiner parts would look on their vehicles before purchasing.',
      solution: 'Developed an intuitive AR experience with user-friendly guides for virtual product placement.',
      uxFocus: 'Optimized interaction for seamless AR use, ensuring ease of navigation.',
      uiFocus: 'Created a sleek, high-end visual experience in line with Vorsteiner’s luxury branding.',
      outcome: 'Enabled confident purchasing decisions through a visually engaging and functional AR experience.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'UX/UI Designer',
      team: ['AR Developer', 'Product Manager']
    },
    tools: [
      { name: 'Unity', icon: '/icons/unity.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' }
    ],
    keywords: ['augmented reality', 'car customization', 'AR visualization'],
    slug: 'vorsteiner-ar',
    process: ['Concept Development', '3D Modeling', 'AR Prototype Testing'],
    gallery: ['../src/assets/Portfolio/vorsteiner-1.jpg', '../src/assets/Portfolio/vorsteiner-2.jpg']
  },
  
  {
    id: '7',
    title: 'Suzuki Marine Australia Website',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_suzukimarinemain.jpg',
    client: 'Suzuki Marine Australia',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'smaweb'
  }, 
  {
    id: '8',
    title: 'Suzuki Marine Australia Web App',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_suzukimarinewa.jpg',
    client: 'Suzuki Marine Australia',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'smaapp'
  },
  {
    id: '9',
    title: 'Suzuki Automotive Australia Service Portal',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_suzukiautoport.jpg',
    client: 'Suzuki Automotive Australia',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'saaport'
  },
  {
    id: '10',
    title: 'Darren Jones Website',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_darrenjones.jpg',
    client: 'Darren Jones Real Estata',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'djweb'
  },
  {
    id: '11',
    title: 'Eleven North Portfolio Website',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_11north.jpg',
    client: 'Eleven North Property Development',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: '11nweb'
  },
  {
    id: '12',
    title: 'Click Creative Agency Website',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_clickweb.jpg',
    client: 'Suzuki Automotive Australia',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'ccweb'
  },
  {
    id: '13',
    title: 'App Website and Merchant Portal',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_appa.jpg',
    client: 'Australia Propotional Products Association',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'appa'
  },
  {
    id: '14',
    title: 'Hey Music Website and Portal',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_heymusichome.jpg',
    client: 'Hey Music',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'hmweb'
  },
  {
    id: '15',
    title: 'Hey Ants Player Website and Dashboard',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_heyplayer.jpg',
    client: 'Hey Ants Player',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'hapweb'
  },
  {
    id: '16',
    title: 'Hey Ants Website and Dashboard',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_heyants.jpg',
    client: 'Hey Ants Player',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'haweb'
  },
  {
    id: '17',
    title: 'Merchloft Website and e-commerce Dashboard',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_merchloft01.jpg',
    client: 'Merch Loft',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'mlweb'
  },
  {
    id: '18',
    title: 'Seven Merch Website and e-commerce Dashboard',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_sevm01.jpg',
    client: 'Seven Merch',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: '7mweb'
  },
  {
    id: '18',
    title: 'Mediterranean Kitchen Website',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_mkweb01.jpg',
    client: 'Mediterranean Kitchen',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'mkweb'
  },
  {
    id: '20',
    title: 'Duffs Jewellers Portfolio Website',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_djweb01.jpg',
    client: 'Seven Merch',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'djweb'
  },
  {
    id: '21',
    title: 'Gold & Co. London Portfolio Website',
    category: 'ux-ui',
    imageUrl: '../src/assets/Portfolio/img_portfolio_gcweb.jpg',
    client: 'Gold & Co. London',
    description: {
      main: 'Complete redesign of Kepler Analytics data visualization platform',
      challenge: 'Retailers struggled to interpret complex foot traffic data and make data-driven decisions due to an overwhelming and unintuitive interface.',
      solution: 'Developed a streamlined dashboard with clear data hierarchies and intuitive navigation patterns, making complex analytics accessible to users of varying technical expertise.',
      uxFocus: 'Simplifying complex data interpretation through intuitive navigation and clear information hierarchy. Implemented user research findings to create streamlined workflows that match retailers decision-making processes.',
      uiFocus: 'Developing a clean, professional interface that makes data visualization accessible and engaging. Created a consistent visual system for data representation that helps users quickly identify patterns and insights.',
      outcome: 'The redesigned platform resulted in a 40% reduction in time spent analyzing data, 60% increase in daily active users, and significantly improved user satisfaction scores.'
    },
    projectDetails: {
      duration: '6 months',
      role: 'Lead UX/UI Designer',
      team: ['Product Manager', 'Data Scientist', 'Frontend Developer', 'Backend Developer']
    },
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews with 20 retail managers, analyzed usage patterns, and identified key pain points in the existing system.',
        image: '../src/assets/Portfolio/kepler-research.jpg'
      },
      {
        phase: 'Information Architecture',
        description: 'Restructured the data hierarchy and navigation system to align with users mental models and daily workflows.',
        image: '../src/assets/Portfolio/kepler-ia.jpg'
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes, iterating based on continuous user feedback and usability testing.',
        image: '../src/assets/Portfolio/kepler-design.jpg'
      }
    ],
    tools: [
      { name: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { name: 'Adobe XD', icon: '/icons/xd.svg' },
      { name: 'Microsoft PowerBI', icon: '/icons/pbi-01.svg' }
    ],
    keywords: ['SaaS', 'data visualization', 'analytics dashboard', 'user experience', 'enterprise software'],
    gallery: [
      {
        image: '../src/assets/Portfolio/kepler-dashboard.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        image: '../src/assets/Portfolio/kepler-reports.jpg',
        caption: 'Custom report builder interface'
      },
      {
        image: '../src/assets/Portfolio/kepler-mobile.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'gcweb'
  },
  {
    id: '23',
    title: 'Gold & Co. London eDM Campaign',
    category: 'graphic-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_gcedm.jpg',
    client: 'Gold & Co. London',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    slug: 'gcedm'
  },
  
  {
    id: '24',
    title: 'Gold & Co. London Product Design',
    category: 'product-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_gcprod01.jpg',
    client: 'Gold & Co. London',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    gallery: [
      {
        src: '../src/assets/Portfolio/img_portfolio_gcprod03.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_gcprod04.jpg',
        caption: 'Custom report builder interface'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_gcprod05.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'gcprod'
  },
  {
    id: '24',
    title: 'Gold & Co. London Bespoke Phone Design',
    category: 'product-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_gcprod02.jpg',
    client: 'Gold & Co. London',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    gallery: [
      {
        src: '../src/assets/Portfolio/img_portfolio_gcprod03.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_gcprod04.jpg',
        caption: 'Custom report builder interface'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_gcprod05.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'gcprod'
  },
  {
    id: '25',
    title: 'Vorsteiner Technical Spec Sheets',
    category: 'graphic-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_vorsteinerflyers.jpg',
    client: 'Vorsteiner',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    slug: 'vorts'
  },
  {
    id: '26',
    title: 'Duffs Jewellers Print Ads',
    category: 'graphic-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_duffprint01.jpg',
    client: 'Duffs Jewellers',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    slug: 'duffprint'
  },
  {
    id: '26',
    title: 'Hey Music OOH Promo Posters',
    category: 'graphic-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_ttooh.jpg',
    client: 'Hey Music',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    slug: 'hmooh'
  },
  {
    id: '27',
    title: 'Hey Mag Digital and Print Magazine',
    category: 'graphic-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_heymag01.jpg',
    client: 'Hey Music',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    slug: 'hmag'
  },
  {
    id: '28',
    title: 'Seven Merch Social Media Posts',
    category: 'graphic-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_sevm02.jpg',
    client: 'Seven Merch',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    slug: 'smsoc'
  },
  {
    id: '28',
    title: 'Mediterranean Kitchen Social Media Posts',
    category: 'graphic-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_mksoc01.jpg',
    client: 'Mediterranean Kitchen',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    slug: 'mksoc'
  },
  {
    id: '29',
    title: 'Hey Music Social Media Posts',
    category: 'graphic-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_hmsoc01.jpg',
    client: 'Hey Music',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    slug: 'hmsoc'
  },
  {
    id: '30',
    title: 'Enterprise Fitness Social Media Posts',
    category: 'graphic-design',
    imageUrl: '../src/assets/Portfolio/img_portfolio_efsoc01.jpg',
    client: 'Enterprise Fitness',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    slug: 'efsoc'
  },
  {
    id: '31',
    title: 'James Cameron Private Photoshoot',
    category: 'photography',
    imageUrl: '../src/assets/Portfolio/img_portfolio_jc01.jpg',
    client: ['KBS Communications | ', 'ADMM | ', 'Yas Marina Circuit'],
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    gallery: [
      {
        src: '../src/assets/Portfolio/img_portfolio_jc02.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_jc03.jpg',
        caption: 'Custom report builder interface'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_jc04.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_jc05.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_jc01.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
    ],
    slug: 'jcyas'
  },
  {
    id: '32',
    title: 'Petronas AMG F1 Team Private shoot',
    category: 'photography',
    imageUrl: '../src/assets/Portfolio/img_portfolio_merc01.jpg',
    client: ['KBS Communications | ', 'ADMM | ', 'Yas Marina Circuit'],
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    gallery: [
      {
        src: '../src/assets/Portfolio/img_portfolio_merc02.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_merc03.jpg',
        caption: 'Custom report builder interface'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_merc04.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'amgf1'
  },
  {
    id: '33',
    title: 'FIA GT1',
    category: 'photography',
    imageUrl: '../src/assets/Portfolio/img_portfolio_fiagt1yas01.jpg',
    client: 'Yas Marina Circuit',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    gallery: [
      {
        src: '../src/assets/Portfolio/img_portfolio_fiagt1yas02.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_fiagt1yas03.jpg',
        caption: 'Custom report builder interface'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_fiagt1yas04.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_fiagt1yas05.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_fiagt1yas06.jpg',
        caption: 'Custom report builder interface'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_fiagt1yas07.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_fiagt1yas08.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_fiagt1yas09.jpg',
        caption: 'Custom report builder interface'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_fiagt1yas10.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_fiagt1yas11.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'fiayas'
  },
  {
    id: '34',
    title: 'Private Photoshoop for Hamad A.M.',
    category: 'photography',
    imageUrl: '../src/assets/Portfolio/img_portfolio_venturi02.jpg',
    client: 'Private Commission',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    gallery: [
      {
        src: '../src/assets/Portfolio/img_portfolio_venturi03.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_venturi01.jpg',
        caption: 'Custom report builder interface'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_venturi04.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_venturi05.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'ventps'
  },
  {
    id: '35',
    title: 'Private Photoshoop for HH. Sheikh Nahyan bin Mubarak Al Nahyan',
    category: 'photography',
    imageUrl: '../src/assets/Portfolio/img_portfolio_hhsnahyan.jpg',
    client: ['KBS Communications | ', 'ADMM'],
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    gallery: [
      {
        src: '../src/assets/Portfolio/img_portfolio_hhsnahyan01.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
    ],
    slug: 'hhsn'
  },
  {
    id: '33',
    title: 'Yas Drag Racing Nights',
    category: 'photography',
    imageUrl: '../src/assets/Portfolio/img_portfolio_yasdrag02.jpg',
    client: 'Yas Marina Circuit',
    description: 'A comprehensive outdoor advertising campaign for Beyond Blue, featuring impactful billboard and print designs that raise awareness about mental health support services. The campaign utilized bold typography and compelling imagery to create an emotional connection with viewers.',
    tools: [
      { name: 'Adobe Illustrator', icon: '../src/assets/icons/illustrator.svg' },
      { name: 'Adobe InDesign', icon: '../src/assets/icons/indesign.svg' }
    ],
    keywords: ['outdoor advertising', 'print design', 'social impact', 'mental health', 'typography'],
    gallery: [
      {
        src: '../src/assets/Portfolio/img_portfolio_yasdrag01.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_yasdrag03.jpg',
        caption: 'Custom report builder interface'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_yasdrag04.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_yasdrag05.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_yasdrag06.jpg',
        caption: 'Custom report builder interface'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_yasdrag07.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_yasdrag08.jpg',
        caption: 'Main dashboard view showing key metrics and data visualizations'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_yasdrag09.jpg',
        caption: 'Custom report builder interface'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_yasdrag10.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_yasdrag11.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      },
      {
        src: '../src/assets/Portfolio/img_portfolio_yasdrag12.jpg',
        caption: 'Mobile-responsive design for on-the-go access'
      }
    ],
    slug: 'yasdrn'
  },
];



// lazy loader functionality
export function useLazyProjects(initialCount = 4) {
  const [visibleProjects, setVisibleProjects] = useState(allProjects.slice(0, initialCount));
  const [loadedCount, setLoadedCount] = useState(initialCount);

  const loadMore = () => {
    const newCount = loadedCount + 4;
    setVisibleProjects(allProjects.slice(0, newCount));
    setLoadedCount(newCount);
  };

  return { visibleProjects, loadMore, hasMore: loadedCount < allProjects.length };
}
