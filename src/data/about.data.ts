import { PersonalTrait, TabContent } from "@/types/props.type";

export const personalTraits: PersonalTrait[] = [
  {
    label: "Approche",
    text: "Créatif & Innovant",
    icon: "💡",
    position: {
      top: "5%",
      right: "5%",
      rotate: "15deg",
    },
  },
  {
    label: "Mindset",
    text: "Toujours apprendre",
    icon: "🎯",
    position: {
      top: "45%",
      left: "1rem",
      rotate: "-2deg",
    },
  },
  {
    label: "Valeurs",
    text: "Détermination",
    icon: "⭐",
    position: {
      top: "75%",
      right: "1rem",
      rotate: "2deg",
    },
  },
];

export const tabContent: TabContent = {
  personal: {
    title: "Personnel",
    subtitle: "Mon Histoire",
    description: `Passionné par les mathématiques et la technologie depuis mon plus jeune âge,
                 j'ai toujours été fasciné par la façon dont nous pouvons utiliser ces outils
                 pour créer un impact positif. Mon parcours m'a permis de développer une
                 approche unique, combinant créativité et rigueur analytique.`,
    highlights: [
      {
        title: "Début de l'aventure",
        text: "Découverte de la programmation static ",
        icon: "🚀",
      },
      {
        title: "Formation",
        text: "Développement de compétences techniques",
        icon: "📚",
      },
      {
        title: "Vision",
        text: "Création de solutions innovantes",
        icon: "🔮",
      },
    ],
  },
  profile: {
    title: "Profil",
    subtitle: "Ce qui me définit",
    hobbies: [
      {
        name: "Lecture",
        description:
          "Passionné par les livres de développement personnel et d'innovation",
        icon: "📚",
      },
      {
        name: "Sport",
        description: "Le sport comme source d'énergie et de discipline",
        icon: "⚡",
      },
      {
        name: "Musique",
        description: "Source d'inspiration et de créativité",
        icon: "🎵",
      },
      {
        name: "Voyage",
        description: "Découvrir de nouvelles perspectives",
        icon: "✈️",
      },
    ],
    personality: [
      "Créatif et innovant dans l'approche des défis",
      "Passionné par l'apprentissage continu",
      "Orienté solutions et résultats",
      "Esprit d'équipe et collaboration",
    ],
  },
  goals: {
    title: "Objectifs",
    subtitle: "Mes Ambitions",
    vision: `Créer un impact significatif à travers l'innovation technologique,
            tout en continuant à grandir personnellement et professionnellement.`,
    shortTerm: [
      {
        goal: "Excellence Technique",
        description: "Maîtriser les dernières innovations",
      },
      {
        goal: "Leadership",
        description: "Développer mes compétences en gestion d'équipe",
      },
    ],
    longTerm: [
      {
        goal: "Innovation",
        description: "Créer des solutions qui font la différence",
      },
      {
        goal: "Impact",
        description: "Contribuer positivement à la société",
      },
    ],
  },
};

export const tabs: Array<{
  id: "personal" | "profile" | "goals";
  label: string;
  icon: string;
}> = [
  { id: "personal", label: "Personnel", icon: "👤" },
  { id: "profile", label: "Profil", icon: "🎯" },
  { id: "goals", label: "Objectifs", icon: "✨" },
] as const;
