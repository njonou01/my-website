export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    title: "Professeur particulier de mathématiques",
    company: "Acadomia",
    period: "Fev. 2024 - Présent",
    location: "Île de France",
    description:
      "Enseignement personnalisé des mathématiques du CE1 à la Terminale",
    achievements: [
      "Adaptation des méthodes pédagogiques selon le niveau",
      "Suivi personnalisé des progrès des élèves",
      "Préparation aux examens et contrôles",
      "Développement de supports pédagogiques",
    ],
    tech: ["Mathématiques", "Pédagogie", "Méthodologie"],
  },
  {
    title: "Développeur Full Stack",
    company: "StudentBank",
    period: "Juin 2024 - Août 2024",
    location: "Meaux, France",
    description:
      "Développement d'une plateforme complète d'accompagnement étudiant : recherche de logement, gestion bancaire, et services d'aide à la vie étudiante",
    achievements: [
      "Développement de fonctionnalités de recherche avancée pour le logement",
      "Implémentation du système de gestion de compte utilisateur",
      "Mise en place de l'internationalisation (i18n) pour une portée internationale",
      "Optimisation des performances et de l'expérience utilisateur",
    ],
    tech: ["Spring Boot", "Angular", "RxJs", "Java", "Jenkins", "i18n"],
  },
  {
    title: "ML Engineer & Data Scientist",
    company: "TOGETTECH",
    period: "Juil. 2022 - Sept. 2022",
    location: "Yaoundé, Cameroun",
    description:
      "Conception et développement d'un système de recommandation intelligent",
    achievements: [
      "Développement d'algorithmes de recommandation personnalisés",
      "Mise en place de pipelines d'extraction de données automatisés",
      "Optimisation des performances du système de scraping",
      "Intégration avec Firebase et construction d'API REST",
    ],
    tech: [
      "Python",
      "Flask",
      "MongoDB",
      "Selenium",
      "Beautiful Soup",
      "Scrapy",
      "Firebase",
    ],
  },
  {
    title: "Développeur Full Stack",
    company: "TE-SEA",
    period: "Juil. 2021 - Oct. 2021",
    location: "Yaoundé, Cameroun",
    description: "Développement d'une plateforme éducative complète",
    achievements: [
      "Création d'interfaces utilisateur réactives avec ReactJS",
      "Développement d'API RESTful avec Laravel",
      "Optimisation des performances de la base de données",
      "Implémentation de fonctionnalités de recherche avancée",
    ],
    tech: ["Laravel", "MySQL", "ReactJS", "TailwindCSS", "Node.js", "Git"],
  },
];
