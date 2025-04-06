import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiGithub,
  SiLinkedin,
  SiInstagram,
} from "@icons-pack/react-simple-icons";

export const navItems = [
  {
    title: "Início",
    href: "#",
  },
  {
    title: "Sobre",
    href: "/sobre",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Contato",
    href: "/contato",
  },
];

export const socialLinks = [
  {
    icon: SiLinkedin,
    title: "Linkedin",
    href: "https://linkedin.com/in/raphaeleliass",
  },
  {
    icon: SiGithub,
    title: "Github",
    href: "https://github.com/raphaeleliass",
  },
  {
    icon: SiInstagram,
    title: "Instagram",
    href: "https://instagram.com/raphaeleliass",
  },
];

export const projectsData = [
  {
    title: "Todo App",
    description:
      "A simple and intuitive Todo App that allows users to efficiently manage daily tasks. Users can add, edit, remove tasks, and mark them as completed. Built with NextJS for a dynamic and responsive user experience.",
    imageSrc: "/todo-app.png",
    siteLink: "https://raphaelelias-todo-app.vercel.app",
    repoLink: "https://github.com/raphaeleliass/todo-app",
    technologies: [
      { name: "NextJS" },
      { name: "Context API" },
      { name: "Firebase" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
    ],
  },
  {
    title: "Stream Vibe",
    description:
      "A site that consumes the TMDB API, lists movie categories, and allows users to add movies to their favorites.",
    imageSrc: "/stream-vibe.png",
    siteLink: "https://raphaelelias-stream-vibe.vercel.app/",
    repoLink: "https://github.com/raphaeleliass/stream-vibe",
    technologies: [
      { name: "TailwindCSS" },
      { name: "React" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Age Calculator",
    description:
      "An interactive age calculator that allows users to input a birthdate and calculate the exact age in years, months, and days. Features real-time validation and a sleek UI.",
    imageSrc: "/age-calculator.png",
    siteLink: "https://raphaelelias-agecalculator.vercel.app/",
    repoLink: "https://github.com/raphaeleliass/age-calculator",
    technologies: [
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Crowdfund Project",
    description:
      "A Crowdfund project with a modern interface, showcasing a responsive design built for desktop and mobile.",
    imageSrc: "/crowdfund.png",
    siteLink: "https://raphaelelias-crowdfund.vercel.app/",
    repoLink: "https://github.com/raphaeleliass/crowdfund-project",
    technologies: [{ name: "HTML" }, { name: "TailwindCSS" }],
  },
];

export const logos = [
  {
    title: "React",
    icon: SiReact,
    description:
      "React é uma biblioteca JavaScript para construir interfaces de usuário, permitindo a criação de componentes reutilizáveis e a gestão eficiente do estado.",
    href: "https://reactjs.org/",
  },
  {
    title: "NextJS",
    icon: SiNextdotjs,
    description:
      "Next.js é um framework de desenvolvimento web React que permite a renderização do lado do servidor e a geração de sites estáticos.",
    href: "https://nextjs.org/",
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    description:
      "TypeScript é um superconjunto de JavaScript que adiciona tipagem estática, facilitando o desenvolvimento e a manutenção de grandes aplicações.",
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "NodeJS",
    icon: SiNodedotjs,
    description:
      "Node.js é um ambiente de execução JavaScript do lado do servidor, permitindo a construção de aplicações escaláveis e rápidas.",
    href: "https://nodejs.org/",
  },
  {
    title: "TailwindCSS",
    icon: SiTailwindcss,
    description:
      "Tailwind CSS é um framework CSS utilitário que permite a criação de designs personalizados diretamente no HTML, promovendo uma abordagem de desenvolvimento mais rápida e eficiente.",
    href: "https://tailwindcss.com/",
  },
];
