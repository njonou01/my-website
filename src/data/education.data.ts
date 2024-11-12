type Education = {
  id: number;
  title: string;
  school: string;
  period: string;
  location: string;
  description: string;
  specializations: string[];
  skills: string[];
  status: "En cours" | "Diplômé";
  syllabusUrl: string;
};

export const education: Education[] = [
  {
    id: 1,
    title: "Diplôme d'Ingénieur",
    school: "École Publique d'Ingénieur de Santé et du Numérique",
    period: "Depuis sept. 2024",
    location: "Créteil, France",
    description: `Formation d'excellence en ingénierie numérique spécialisée dans l'IA et la santé. 
                 Programme axé sur l'application de l'intelligence artificielle dans le domaine médical,
                 permettant de développer une expertise unique en analyse de données de santé.`,
    specializations: [
      "Intelligence Artificielle",
      "Logique",
      "Recherche Opérationnelle",
    ],
    skills: [
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Réseaux de Neurones",
      "Analyse Prédictive",
      "Data Mining",
    ],
    status: "En cours",
    syllabusUrl: "#",
  },
  {
    id: 2,
    title: "Licence en Informatique",
    school: "Université de Yaoundé 1",
    period: "2019 - 2022",
    location: "Yaoundé, Cameroun",
    description: `Formation approfondie en informatique avec spécialisation en science des données 
                 et apprentissage automatique. Focus sur la pratique à travers des projets concrets
                 et des cas d'études réels.`,
    specializations: ["Data Science", "Machine Learning", "Analyse de données"],
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "SQL",
      "NoSQL",
      "Data Visualization",
    ],
    status: "Diplômé",
    syllabusUrl: "#",
  },
];
