export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  role: string;
  technologies: string[];
  metrics?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    featured?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  skills: string[];
  current?: boolean;
}

export interface HonorItem {
  year: string;
  title: string;
  badge: string;
  detail: string;
}

export const PERSONAL_INFO = {
  name: "Md Eibrahim Molla",
  handle: "mdeibrahim11",
  wordmark: "ebrahim",
  title: "Software Engineer & Python Specialist",
  shortBio:
    "Passionate Python Developer and Software Engineer with expertise in building robust backend systems, scalable RESTful APIs, and efficient web applications.",
  aboutParagraphs: [
    "Passionate Python Developer and Software Engineer with expertise in building robust backend systems, scalable RESTful APIs, and efficient web applications. Focused on writing clean, maintainable code and solving complex technical challenges.",
    "Currently architecting scalable backend solutions at Amio Uddokta. Previously co-led the Code-Hydra engineering team at Softvence IT LTD, developing production RESTful services, database architectures, and high-throughput systems.",
  ],
  facts: [
    { label: "Role", value: "Software Engineer" },
    { label: "Based in", value: "Uttara, Dhaka" },
    { label: "Experience", value: "1+ Years" },
    { label: "Status", value: "Open to work" },
  ],
  status: "Open to work",
  email: "eibrahim11.dev@gmail.com",
  github: "https://github.com/mdeibrahim11",
  linkedin: "https://www.linkedin.com/in/md-eibrahim11/",
  location: "Uttara, Dhaka, Bangladesh",
  stats: [
    { label: "Years Shipping", value: "1+" },
    { label: "Primary Discipline", value: "Python / Backend" },
    { label: "Softvence Leadership", value: "Team Co-Lead" },
    { label: "GitHub Accolades", value: "Pull Shark (x3)" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    name: "Python & Backend Systems",
    description: "Server architecture, microservices, and asynchronous API engineering",
    skills: [
      { name: "Python / Django", level: "Primary", featured: true },
      { name: "FastAPI / Flask", level: "Primary", featured: true },
      { name: "RESTful API Design", level: "Mastery", featured: true },
      { name: "Backend Architecture", level: "Mastery", featured: true },
      { name: "Authentication / JWT", level: "Advanced", featured: true },
      { name: "Microservices", level: "Intermediate" },
      { name: "Clean Code & OOP", level: "Mastery" },
    ],
  },
  {
    id: "databases",
    name: "Databases & Data Modeling",
    description: "Relational schemas, transactional integrity, and query optimization",
    skills: [
      { name: "PostgreSQL", level: "Primary", featured: true },
      { name: "MySQL", level: "Primary", featured: true },
      { name: "Redis Caching", level: "Advanced", featured: true },
      { name: "SQLite", level: "Mastery" },
      { name: "Database Indexing & Tuning", level: "Advanced", featured: true },
      { name: "Prisma ORM", level: "Intermediate" },
    ],
  },
  {
    id: "devops",
    name: "DevOps & System Environment",
    description: "Containerization, Unix workflows, and continuous integration",
    skills: [
      { name: "Docker & Containerization", level: "Advanced", featured: true },
      { name: "Linux Terminal & Shell", level: "Mastery", featured: true },
      { name: "Git / GitHub Workflows", level: "Mastery", featured: true },
      { name: "Postman & API Testing", level: "Mastery", featured: true },
      { name: "CI/CD Deployment", level: "Advanced" },
      { name: "Cloud & Edge Hosting", level: "Intermediate" },
    ],
  },
  {
    id: "frontend",
    name: "Web & Frontend Interfaces",
    description: "Responsive layouts, dynamic client logic, and interactive design",
    skills: [
      { name: "JavaScript (ES6+)", level: "Primary", featured: true },
      { name: "HTML5 & Semantic Web", level: "Mastery", featured: true },
      { name: "CSS3 / Modern Styling", level: "Mastery", featured: true },
      { name: "Tailwind CSS", level: "Primary", featured: true },
      { name: "React & Next.js", level: "Advanced", featured: true },
      { name: "Bootstrap", level: "Mastery" },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "event-management",
    title: "Event Management Application",
    category: "Full Stack & Web Application",
    tagline: "Interactive event ticketing and attendee management web platform",
    description:
      "A comprehensive event coordination and ticketing platform featuring real-time attendee tracking, dynamic seat allocation, and responsive booking workflows.",
    role: "Full Stack Developer — Built interactive booking interface, dynamic ticket generation, and client-side form validations.",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Tailwind CSS"],
    metrics: "Production-ready ticketing workflow",
    liveUrl: "https://github.com/mdeibrahim11",
    repoUrl: "https://github.com/mdeibrahim11",
    featured: true,
    accentColor: "#F53F06",
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    category: "Enterprise Backend & OOP",
    tagline: "Comprehensive organization system for managing staff records, departments, and payroll",
    description:
      "Robust organizational management platform architected with clean OOP principles to handle hierarchical employee data, department assignments, and automated payroll computations.",
    role: "Backend Engineer — Designed relational database schemas, secure CRUD operations, and automated payroll calculation engines.",
    technologies: ["Python", "PostgreSQL / MySQL", "OOP Architecture", "Database Modeling"],
    metrics: "Scalable relational schema design",
    liveUrl: "https://github.com/mdeibrahim11",
    repoUrl: "https://github.com/mdeibrahim11",
    featured: true,
    accentColor: "#F53F06",
  },
  {
    id: "prayer-time-locker",
    title: "Prayer Time Locker Software",
    category: "Python Automation & System Utility",
    tagline: "Automated desktop utility software for schedule alerts and distraction locking",
    description:
      "A lightweight background automation utility written in Python that tracks prayer times, triggers scheduled alerts, and enforces screen focus during designated periods.",
    role: "Sole Creator — Authored astronomical calculation logic, asynchronous system tray notifications, and locking mechanisms.",
    technologies: ["Python", "Automation", "OS Integrations", "Algorithms"],
    metrics: "100% automated local background daemon",
    liveUrl: "https://github.com/mdeibrahim11",
    repoUrl: "https://github.com/mdeibrahim11",
    featured: true,
    accentColor: "#F53F06",
  },
  {
    id: "oop-python",
    title: "OOP Project by Python",
    category: "Software Design & Architecture",
    tagline: "Object-Oriented Programming design patterns and practical architectural implementations",
    description:
      "A curated repository implementing industry-standard software design patterns (Factory, Observer, Singleton, Decorator) in pure Python with unit test suites.",
    role: "Author — Implemented practical, production-ready OOP patterns with architectural documentation and strict type annotations.",
    technologies: ["Python", "OOP", "Design Patterns", "Clean Code", "Unit Testing"],
    metrics: "Clean architectural separation",
    liveUrl: "https://github.com/mdeibrahim11",
    repoUrl: "https://github.com/mdeibrahim11",
    featured: true,
    accentColor: "#F53F06",
  },
  {
    id: "restaurant-app",
    title: "Restaurant Digital System",
    category: "Digital Dining & Commerce",
    tagline: "Digital restaurant ordering platform showcasing menu items and interactive customer experience",
    description:
      "An interactive restaurant showcase and digital menu solution designed to elevate dining experiences with intuitive categorized filtering, responsive cart preview, and fast UI rendering.",
    role: "Frontend Developer — Designed fluid responsive menus, dietary category filtering, and micro-animations.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "REST APIs"],
    metrics: "Fluid customer UX & dynamic menu filtering",
    liveUrl: "https://github.com/mdeibrahim11",
    repoUrl: "https://github.com/mdeibrahim11",
    featured: true,
    accentColor: "#F53F06",
  },
  {
    id: "portfolio",
    title: "Developer Portfolio Platform",
    category: "Modern Web Architecture",
    tagline: "Futuristic dark glassmorphic portfolio with interactive 3D visual geometry",
    description:
      "Ultra-fast portfolio engineered with Next.js 16, React 19, Tailwind CSS v4, and dynamic 3D icosahedron geometry, strictly adhering to custom design tokens and performance best practices.",
    role: "Architect & Engineer — Crafted dark glassmorphic design system, high-DPI 3D canvas, and mobile-optimized responsive layout.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Canvas 3D"],
    metrics: "Sub-second load times & WCAG AA contrast",
    liveUrl: "https://github.com/mdeibrahim11",
    repoUrl: "https://github.com/mdeibrahim11",
    featured: true,
    accentColor: "#F53F06",
  },
];

export const CAREER_JOURNEY: ExperienceItem[] = [
  {
    id: "amio-uddokta",
    period: "2026 — Present",
    role: "Software Engineer",
    company: "Amio Uddokta",
    location: "Dhaka, Bangladesh",
    current: true,
    description: [
      "Architecting and engineering scalable backend solutions, REST APIs, and business automation software for digital entrepreneurs and enterprises.",
      "Designing modular microservices and automated workflow pipelines with sub-second response times.",
      "Optimizing high-concurrency database queries and secure API endpoints.",
    ],
    skills: ["Python", "Django", "FastAPI", "Backend Architecture", "PostgreSQL", "REST APIs"],
  },
  {
    id: "softvence-it",
    period: "Jun 2025 — May 2026",
    role: "Co-Leader of Code-Hydra Team & Python Developer",
    company: "Softvence IT LTD",
    location: "Mohakhali, Dhaka, Bangladesh",
    current: false,
    description: [
      "Co-led the Code-Hydra developer team, conducting code reviews, sprint architecture, and database design.",
      "Engineered robust backend services, integrated database schemas, and developed high-performance REST APIs using Python and modern web frameworks.",
      "Managed schema migrations, performance tuning, and cross-functional team delivery with Git version control.",
    ],
    skills: ["Python", "Django", "REST APIs", "MySQL", "Git", "Team Leadership"],
  },
];

export const HONORS: HonorItem[] = [
  {
    year: "2026",
    title: "GitHub Achievements",
    badge: "Pull Shark",
    detail: "Silver tier Pull Shark (x3) and Pair Extraordinaire",
  },
  {
    year: "2025",
    title: "Python Development",
    badge: "Certified",
    detail: "Full-Stack Software Engineering & Problem Solving",
  },
];

export interface ElevatorFloor {
  id: string;
  floor: string;
  name: string;
  label: string;
  targetId: string;
}

export const ELEVATOR_FLOORS: ElevatorFloor[] = [
  { id: "hero", floor: "001", name: "Home", label: "Overview", targetId: "hero" },
  { id: "about", floor: "002", name: "About", label: "Identity & Core", targetId: "about" },
  { id: "skills", floor: "003", name: "Expertise", label: "Technical Stack", targetId: "skills" },
  { id: "projects", floor: "004", name: "Projects", label: "Production Systems", targetId: "projects" },
  { id: "experience", floor: "005", name: "Experience", label: "Career Journey", targetId: "experience" },
  { id: "contact", floor: "006", name: "Contact", label: "Direct Dispatch", targetId: "contact" },
];
