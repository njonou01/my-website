// Pour la section Compétences
export type Tool = {
  name: string;
  logo: string;
};

export type Skill = {
  name: string;
  description: string;
  tools: Tool[];
  projects: string[];
};

export type SkillCategory = {
  title: string;
  icon: string;
  description: string;
  color: string;
  skills: Skill[];
};

// Pour la section A Propos
export type Position = {
  top?: string;
  left?: string;
  right?: string;
  rotate: string;
};
export type Language = {
  code: "fr" | "en";
  label: string;
  flag: string;
};
export type PersonalTrait = {
  label: string;
  text: string;
  icon: string;
  position: Position;
};

export type Highlight = {
  title: string;
  text: string;
  icon: string;
};

export type Hobby = {
  name: string;
  description: string;
  icon: string;
};

export type Goal = {
  goal: string;
  description: string;
};

export type Personal = {
  title: string;
  subtitle: string;
  description: string;
  highlights: Highlight[];
};

export type Profile = {
  title: string;
  subtitle: string;
  hobbies: Hobby[];
  personality: string[];
};

export type Goals = {
  title: string;
  subtitle: string;
  vision: string;
  shortTerm: Goal[];
  longTerm: Goal[];
};

export type TabContent = {
  personal: Personal;
  profile: Profile;
  goals: Goals;
};

export type TabId = "personal" | "profile" | "goals";

export type Tab = {
  id: TabId;
  label: string;
  icon: string;
};

// Pour la section Contact
export type SocialLink = {
  name?: string;
  icon: string;
  url: string;
  color: string;
  label?: string;
};

export type ContactInfo = {
  icon: string;
  label: string;
  value: string;
  href?: string;
  color: string;
};

// Pour la section Projets
export type Project = {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  category: "ML" | "Data" | "Web";
  status: "Complété" | "En cours";
  demoLink?: string;
  githubLink: string;
  image: string;
  highlights: string[];
  year: string;
  role: string;
};

export type CategoryButton = {
  id: "all" | "ML" | "Data" | "Web";
  label: string;
  icon: string;
};

// Pour la section Hero

export type Announce = {
  title: string;
  details: string;
  emoji: string;
  gradient: string;
};

export type Badge = {
  icon: string;
  title: string;
  subtitle: string;
  gradient: string;
  position: string;
};

export type Status = {
  emoji: string;
  title: string;
  details: string;
  gradient: string;
};

export type Social = {
  icon: string;
  url: string;
  label: string;
  color: string;
};
