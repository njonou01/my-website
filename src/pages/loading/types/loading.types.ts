export interface LoadingPageProps {
  minLoadingTime?: number;
}

export interface FloatingIcon {
  id: number;
  logo: string;
  x: number;
  y: number;
  scale: number;
  speed: number;
  direction: {
    x: number;
    y: number;
  };
  rotation: number;
  opacity: number;
}

export interface LoadingState {
  icon: string;
  text: string;
}

export interface Skill {
  title: string;
}

export interface TechLogo {
  url: string;
  name: string;
}

export interface DisplayedTech {
  name: string;
  logo?: string;
}
