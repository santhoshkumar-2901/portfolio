export const profile = {
  name: 'Santhosh Kumar S',
  role: 'Full-Stack Developer',
  tagline: 'Building fast, secure web applications with the PERN stack.',
  bio: "I'm a full-stack developer with hands-on experience across the PERN stack — building responsive interfaces, designing RESTful APIs, and managing relational databases. I care about getting the fundamentals right: proper authentication, clean API design, and interfaces that feel considered rather than assembled. I'm currently looking for opportunities to build real-world, scalable software.",
  location: 'Srivilliputhur, Tamil Nadu, India',
  email: 'santhoshkumars2901@gmail.com',
  linkedin: 'https://linkedin.com/in/s-santhosh-kumar-dev',
  github: 'https://github.com/santhoshkumar-2901',
  resumeUrl: "/Santhosh Kumar's Resume.pdf"
}

export const skills = [
  {
    group: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express.js'],
  },
  {
    group: 'Database',
    items: ['PostgreSQL'],
  },
  {
    group: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'VS Code'],
  },
]

export const projects = [
  {
    title: 'ShopStack',
    subtitle: 'E-Commerce Product Management System',
    description:
      'A full-stack product management system with complete CRUD operations for managing products, built on a relational Postgres schema for scalable storage.',
    features: [
      'RESTful APIs built with Node.js and Express.js for structured product data handling',
      'Relational PostgreSQL database (Neon) designed for scalable product storage',
      'Responsive frontend using React, Zustand, and Tailwind CSS with real-time UI synchronization',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL (Neon)', 'Zustand', 'Tailwind CSS'],
    liveUrl: 'https://shopstack-885w.onrender.com/',
    githubUrl: 'https://github.com/santhoshkumar-2901/shopstack',
  },
  {
    title: 'PERN Authentication App',
    subtitle: 'Full-Stack Auth System',
    description:
      'A full-stack authentication system with secure user registration and login, built end-to-end on the PERN stack.',
    features: [
      'JWT-based authentication with Bcrypt password hashing for data security',
      'RESTful APIs with Node.js and Express.js for backend logic',
      'Responsive UI with React and Tailwind CSS, using Axios for API communication',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Bcrypt', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: 'https://github.com/santhoshkumar-2901/pern-auth',
    featured: false,
  },
]

export const education = {
  degree: 'B.Sc. in Computer Science',
  institution: 'Arulmigu Kalasalingam College of Arts and Science',
  location: 'Krishnankoil, Virudhunagar',
  duration: 'June 2022 — May 2025',
}

export const currentLearning = [
  {
    title: 'Next.js',
    description: 'For building production-ready React applications.',
  },
  {
    title: 'TypeScript',
    description: 'For writing scalable and maintainable code.',
  },
  {
    title: 'Advanced React',
    description: 'Advanced patterns, performance optimization, and best practices.',
  },
]
