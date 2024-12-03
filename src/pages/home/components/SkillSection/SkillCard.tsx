import { ProjectTags } from "./ProjectTags";
import { ToolIcon } from "./ToolIcon";

interface SkillCardProps {
  skill: {
    name: string;
    description: string;
    tools: Array<{ logo: string; name: string }>;
    projects?: string[];
  };
  isHovered: boolean;
  onHover: (name: string | null) => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  isHovered,
  onHover,
}) => (
  <div
    onMouseEnter={() => onHover(skill.name)}
    onMouseLeave={() => onHover(null)}
    className={`card
      ${isHovered ? "scale-[1.02]" : ""}`}
  >
    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
      {skill.name}
    </h4>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
      {skill.description}
    </p>

    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
          Technologies
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skill.tools.map((tool, idx) => (
            <ToolIcon key={idx} tool={tool} />
          ))}
        </div>
      </div>

      {skill.projects && <ProjectTags projects={skill.projects} />}
    </div>
  </div>
);
