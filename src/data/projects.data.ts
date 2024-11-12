import { CategoryButton, Project } from "@/types/components";

export const projects: Project[] = [
  {
    id: 1,
    title: "Système de Recommandation ML",
    shortDescription:
      "Algorithme de recommandation intelligent pour jobs et formations",
    fullDescription:
      "Développement d'un système de recommandation avancé utilisant des techniques de deep learning pour matcher les profils avec les offres d'emploi et formations pertinentes.",
    technologies: ["Python", "TensorFlow", "AWS", "MongoDB"],
    category: "ML",
    status: "Complété",
    demoLink: "#",
    githubLink: "#",
    image: "/api/placeholder/600/400",
    highlights: [
      "Précision de 92% dans les recommandations",
      "Traitement de plus de 10K profils",
      "Architecture scalable sur AWS",
    ],
    year: "2023",
    role: "Lead Developer",
  },
  {
    id: 2,
    title: "Pipeline Data Automation",
    shortDescription:
      "Solution automatisée d'extraction et traitement de données",
    fullDescription:
      "Pipeline de données automatisé pour collecter, nettoyer et analyser des données à grande échelle.",
    technologies: ["Python", "AWS", "Docker", "Selenium"],
    category: "Data",
    status: "En cours",
    githubLink: "#",
    image: "/api/placeholder/600/400",
    highlights: [
      "Traitement de 1M+ données/jour",
      "Réduction de 70% du temps de traitement",
      "Monitoring en temps réel",
    ],
    year: "2023",
    role: "Data Engineer",
  },
  {
    id: 3,
    title: "Plateforme Full Stack",
    shortDescription: "Application web moderne et réactive",
    fullDescription:
      "Application web complète avec backend robuste et frontend moderne.",
    technologies: ["Laravel", "React", "MySQL", "TailwindCSS"],
    category: "Web",
    status: "Complété",
    demoLink: "#",
    githubLink: "#",
    image: "/api/placeholder/600/400",
    highlights: [
      "Architecture microservices",
      "Interface utilisateur responsive",
      "Tests automatisés",
    ],
    year: "2022",
    role: "Full Stack Developer",
  },
];

export const categories: CategoryButton[] = [
  { id: "all", label: "Tous", icon: "🎯" },
  { id: "ML", label: "Machine Learning", icon: "🤖" },
  { id: "Data", label: "Data Engineering", icon: "📊" },
  { id: "Web", label: "Web Development", icon: "🌐" },
];
