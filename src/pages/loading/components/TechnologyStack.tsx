import { DisplayedTech } from "./loading.types";
export interface Technology {
  name: string;
  logo: string;
}
interface TechnologyStackProps {
  technologies: DisplayedTech[];
}

export const TechnologyStack: React.FC<TechnologyStackProps> = ({
  technologies,
}) => {
  const validTechnologies: Technology[] = technologies.filter(
    (tech): tech is Technology => typeof tech.logo === "string"
  );

  return (
    <div className="flex justify-center gap-4 pt-2">
      {validTechnologies.map((tech, index) => (
        <div
          key={tech.name}
          className="flex flex-col items-center gap-1"
          style={{
            animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
            opacity: 0,
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 flex items-center justify-center p-2 transform hover:scale-110 transition-transform">
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-full h-full object-contain dark:filter dark:brightness-200"
            />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};
