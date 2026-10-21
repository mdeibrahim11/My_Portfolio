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
  image?: string;
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
  whatsapp: "mdeibrahim11",
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
    { label: "Based in", value: "Gazipur, Dhaka" },
    { label: "Experience", value: "1+ Years" },
    { label: "Status", value: "Open to work" },
  ],
  status: "Open to work",
  email: "eibrahim11.dev@gmail.com",
  secondaryEmail: "eibrahim11.dev@gmail.com",
  academicEmail: "s21502003689@nu.ac.bd",
  github: "https://github.com/mdeibrahim",
  githubAlt: "https://github.com/mdeibrahim11",
  linkedin: "https://www.linkedin.com/in/md-eibrahim11/",
  facebook: "https://facebook.com/md.eibrahim.52035",
  location: "Dhaka, Bangladesh",
  resumeUrl: "/documents/MD_EIBRAHIM_MOLLA_CV.pdf",
  avatarUrl: "/images/profile_pic.png",
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
      { name: "Node.js", level: "Intermediate", featured: true },
      { name: "Backend Architecture", level: "Mastery", featured: true },
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
      { name: "Database Indexing & Tuning", level: "Advanced" },
    ],
  },
  {
    id: "languages",
    name: "Programming Languages & DevOps",
    description: "Core computer science languages, Linux systems, and container workflows",
    skills: [
      { name: "Python", level: "Primary", featured: true },
      { name: "C / C++", level: "Mastery", featured: true },
      { name: "JavaScript / TypeScript", level: "Primary", featured: true },
      { name: "Docker & Containerization", level: "Advanced", featured: true },
      { name: "Linux Terminal & Shell", level: "Mastery", featured: true },
      { name: "Git / GitHub", level: "Mastery", featured: true },
    ],
  },
  {
    id: "frontend",
    name: "Web & Frontend Interfaces",
    description: "Responsive layouts, dynamic client logic, and interactive design",
    skills: [
      { name: "HTML5 & CSS3", level: "Mastery", featured: true },
      { name: "Tailwind CSS", level: "Primary", featured: true },
      { name: "React & Next.js", level: "Advanced", featured: true },
      { name: "Bootstrap", level: "Mastery" },
      { name: "DOM & Asynchronous JS", level: "Mastery" },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "event-management",
    title: "EventPro (Event Management Platform)",
    category: "Full Stack & Python Django",
    tagline: "Interactive event ticketing and attendee management web platform",
    description:
      "A comprehensive event coordination platform featuring real-time attendee registration, dynamic seat booking workflows, and automated ticketing.",
    role: "Full Stack Developer",
    technologies: ["Python", "Django", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    metrics: "Live on Render",
    liveUrl: "https://event-management-application-sjsl.onrender.com/",
    repoUrl: "https://github.com/mdeibrahim/Event_management_Application",
    image: "/images/projects/eventpro.png",
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
    role: "Backend Engineer",
    technologies: ["Python", "Django", "REST API", "PostgreSQL", "OOP Architecture"],
    metrics: "Scalable relational schema",
    liveUrl: "https://github.com/mdeibrahim/Employee_management_System",
    repoUrl: "https://github.com/mdeibrahim/Employee_management_System",
    image: "/images/projects/ems.png",
    featured: true,
    accentColor: "#F53F06",
  },
  {
    id: "timely-prayer",
    title: "Timely Prayer (Desktop Software)",
    category: "Python Automation & System Utility",
    tagline: "Automated desktop utility for prayer alerts, screen focus locking, and system tray integration",
    description:
      "A lightweight background automation utility in Python with Tkinter GUI and Pystray system tray integration that triggers timely prayer alerts and enforces distraction locking.",
    role: "Sole Creator",
    technologies: ["Python", "Tkinter", "GUI", "Pystray", "OS Integrations", "Pillow"],
    metrics: "Local desktop automation daemon",
    liveUrl: "https://drive.google.com/drive/folders/18nUrmt3gadOwb-dLw0eMtZZCcuJA9oVj?usp=sharing",
    repoUrl: "https://github.com/mdeibrahim",
    featured: true,
    accentColor: "#F53F06",
  },
  {
    id: "restaurant-app",
    title: "Restaurant Foods & Drinks",
    category: "Digital Dining & Frontend",
    tagline: "Interactive restaurant showcase and digital menu experience",
    description:
      "A responsive restaurant showcase and digital menu solution designed with fluid categorized filtering, interactive cart preview, and fast UI rendering.",
    role: "Frontend Developer",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "REST APIs"],
    metrics: "Live on GitHub Pages",
    liveUrl: "https://mdeibrahim.github.io/Rastaurent/",
    repoUrl: "https://github.com/mdeibrahim/Rastaurent",
    image: "/images/projects/food.png",
    featured: true,
    accentColor: "#F53F06",
  },
  {
    id: "result-calculator",
    title: "Grade & Result Calculator",
    category: "Web Utility & Algorithm",
    tagline: "Dynamic academic grade computation and GPA analysis tool",
    description:
      "An automated grading web application with responsive UI, dynamic grade computation engines, and client-side validation logic.",
    role: "Frontend Developer",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Computation Algorithms"],
    metrics: "Live on GitHub Pages",
    liveUrl: "https://mdeibrahim.github.io/Result_calculator/",
    repoUrl: "https://github.com/mdeibrahim/Result_calculator",
    image: "/images/projects/result.png",
    featured: true,
    accentColor: "#F53F06",
  },
  {
    id: "portfolio-1",
    title: "Developer Portfolio 1.0",
    category: "Modern Web Architecture",
    tagline: "Responsive developer portfolio with custom animations and interactive sections",
    description:
      "The initial interactive developer portfolio platform showcasing software engineering projects, technical stack proficiencies, and direct dispatch channels.",
    role: "Creator & Developer",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Responsive Design"],
    metrics: "Live on GitHub Pages",
    liveUrl: "https://mdeibrahim11.github.io/Portfolio_1/",
    repoUrl: "https://github.com/mdeibrahim/Portfolio_1",
    image: "/images/projects/portfilio1.png",
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
      "Architecting scalable backend services and high-throughput REST APIs using Python, Django, and FastAPI.",
      "Optimizing relational database schemas and automated workflows for sub-second data processing.",
    ],
    skills: ["Python", "Django", "FastAPI", "PostgreSQL", "REST APIs", "Architecture"],
  },
  {
    id: "softvence-it",
    period: "Jun 2025 — May 2026",
    role: "Co-Leader of Code-Hydra & Python Developer",
    company: "Softvence IT LTD",
    location: "Mohakhali, Dhaka, Bangladesh",
    current: false,
    description: [
      "Co-led the Code-Hydra developer team, conducting architectural planning, code reviews, and schema migrations.",
      "Engineered resilient production backend services and relational database architectures using Python and MySQL.",
    ],
    skills: ["Python", "Django", "MySQL", "REST APIs", "Git", "Team Leadership"],
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
