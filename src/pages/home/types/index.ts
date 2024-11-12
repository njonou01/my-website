export type HeroProps = {
  roles: string[];
  profilePath: string;
};
export interface HeroData {
  introduction: {
    greeting: string;
    name: string;
    description: string;
  };
  annunces: Array<{
    text: string;
    icon?: string;
    type: "success" | "info" | "warning";
  }>;
  socialLinks: Array<{
    name: string;
    url: string;
    icon: string;
    color: string;
  }>;
}
