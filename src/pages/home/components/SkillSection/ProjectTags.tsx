interface ProjectTagsProps {
  projects: string[];
}

export const ProjectTags: React.FC<ProjectTagsProps> = ({ projects }) => (
  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
      Projets réalisés
    </p>
    <div className="flex flex-wrap gap-2">
      {projects.map((project, idx) => (
        <span
          key={idx}
          className="text-sm px-3 py-1.5
            text-gray-700 dark:text-gray-300
            bg-gray-100 dark:bg-gray-700/50
            border border-gray-200 dark:border-gray-600
            hover:border-indigo-300 dark:hover:border-indigo-700
            hover:bg-gray-50 dark:hover:bg-gray-700
            rounded-full transition-colors duration-200"
        >
          {project}
        </span>
      ))}
    </div>
  </div>
);
