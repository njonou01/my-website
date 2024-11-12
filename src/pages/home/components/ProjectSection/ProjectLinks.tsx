interface ProjectLinksProps {
  githubLink?: string;
  demoLink?: string;
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({
  githubLink,
  demoLink,
}) => (
  <div className="flex gap-4">
    {githubLink && (
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 
          hover:text-gray-900 dark:hover:text-white
          transition-all duration-300"
      >
        <i className="fab fa-github text-xl hover:scale-110 transition-transform duration-300" />
      </a>
    )}
    {demoLink && (
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 
          hover:text-gray-900 dark:hover:text-white
          transition-all duration-300"
      >
        <i className="fas fa-external-link-alt text-xl hover:scale-110 transition-transform duration-300" />
      </a>
    )}
  </div>
);
