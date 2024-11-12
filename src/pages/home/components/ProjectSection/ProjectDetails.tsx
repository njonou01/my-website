interface ProjectDetailsProps {
  isActive: boolean;
  description: string;
  highlights: string[];
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  isActive,
  description,
  highlights,
}) => (
  <div
    className={`overflow-hidden transition-all duration-500
      ${isActive ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}
  >
    <div className="space-y-4">
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
      <div className="space-y-3">
        {highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <i className="fas fa-check text-indigo-500 dark:text-indigo-400 mt-1" />
            <span className="text-gray-700 dark:text-gray-300">
              {highlight}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
