import { PersonalTrait, Tab, TabContent } from "@/types/components";

export const personalTraits: PersonalTrait[] = [
  {
    label: "Mindset",
    text: "Problem Solver",
    icon: "🧠",
    position: {
      top: "15%",
      right: "5%",
      rotate: "15deg",
    },
  },
  {
    label: "Excellence",
    text: "Rigoureux & Organisé",
    icon: "⚡",
    position: {
      top: "45%",
      left: "1rem",
      rotate: "-2deg",
    },
  },
  {
    label: "Valeurs",
    text: "Esprit d'équipe",
    icon: "🤝",
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
    description: `Du Cameroun à la France, mon parcours m'a forgé une vision unique 
    de la technologie. Chaque défi rencontré a renforcé ma passion pour 
    l'innovation et ma soif d'apprentissage.`,
    highlights: [
      {
        title: "Racines",
        text: "De la passion à l'expertise",
        icon: "🌱",
      },
      {
        title: "Évolution",
        text: "La tech comme second langage",
        icon: "🚀",
      },
      {
        title: "Ambition",
        text: "Repousser les frontières du possible",
        icon: "✨",
      },
    ],
  },
  profile: {
    title: "Profil",
    subtitle: "Mon ADN",
    hobbies: [
      {
        name: "Tech",
        description: "L'innovation comme mode de vie",
        icon: "💻",
      },
      {
        name: "Science",
        description: "La curiosité comme moteur",
        icon: "🔬",
      },
      {
        name: "Football",
        description: "L'esprit d'équipe en action",
        icon: "⚽",
      },
    ],
    personality: [
      "Curieux par nature",
      "Déterminé face aux défis",
      "Passionné de tech",
      "Apprentissage constant",
    ],
  },
  goals: {
    title: "Objectifs",
    subtitle: "Ma Vision",
    vision: `Construire le futur avec la tech comme langage universel`,
    shortTerm: [
      {
        goal: "Excellence",
        description: "Maîtriser l'art du code et de la data",
      },
      {
        goal: "Impact",
        description: "Transformer les idées en réalités",
      },
    ],
    longTerm: [
      {
        goal: "Pioneer",
        description: "Explorer les frontières de la tech",
      },
      {
        goal: "Legacy",
        description: "Inspirer la prochaine génération",
      },
    ],
  },
};

export const tabs: Tab[] = [
  { id: "personal", label: "Personnel", icon: "👤" },
  { id: "profile", label: "Profil", icon: "🎯" },
  { id: "goals", label: "Objectifs", icon: "✨" },
] as const;
