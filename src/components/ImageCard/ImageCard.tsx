import { Badge } from "../Badge";
import heroData from "@/data/hero.data";

type ImageCardProps = {
  ratio?: number;
  profilePath: string;
  className?: string;
};

export const ImageCard: React.FC<ImageCardProps> = ({
  profilePath,
  className,
}) => {
  return (
    <div className="relative">
      <div className={`absolute ${className}`} />
      <img src={profilePath} alt={heroData.introduction.name} />
      {heroData.badges.map((badge, index) => (
        <Badge key={index} badge={badge} index={index} />
      ))}
    </div>
  );
};
