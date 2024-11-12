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
    title: "Stagiaire Machine Learning",
    company: "TOGETTECH",
    period: "Juil. 2022 - Sept. 2022",
    location: "Yaoundé, Cameroun",
    description:
      "Développement d'un algorithme de recommandation de jobs et formations",
    achievements: [
      "Mise en place de pipelines d'extraction de données automatisés",
      "Déploiement d'un script d'extraction via AWS",
      "Utilisation de Firebase, Flask, Selenium, MongoDB",
    ],
    tech: ["Python", "AWS", "MongoDB", "Selenium", "Flask"],
  },
  {
    title: "Data Scientist/ML",
    company: "Spacekola",
    period: "Juil. 2021 - Sept. 2021",
    location: "Yaoundé, Cameroun",
    description: "Analyse de données et visualisation pour aide à la décision",
    achievements: [
      "Analyse approfondie des données",
      "Création de visualisations pertinentes",
      "Rédaction de rapports techniques",
    ],
    tech: ["Python", "Matplotlib", "Seaborn", "Pandas"],
  },
  {
    title: "Développeur Full Stack",
    company: "Dept Informatique UY1",
    period: "Juil. 2021 - Oct. 2021",
    location: "Yaoundé, Cameroun",
    description: "Développement full stack d'une plateforme web",
    achievements: [
      "Création de templates frontend",
      "Développement d'API backend",
      "Collaboration en équipe",
    ],
    tech: ["Laravel", "MySQL", "JavaScript", "TailwindCSS"],
  },
];
