import { Project } from "@/types/components";
import { ProjectStatus } from "./ProjectStatus";
import { TechnologyTag } from "./TechnologyTag";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectDetails } from "./ProjectDetails";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onToggleDetails: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isActive,
  onToggleDetails,
}) => (
  <div
    className="group bg-white dark:bg-gray-800 rounded-2xl 
      shadow-lg dark:shadow-gray-900/10
      border border-gray-100 dark:border-gray-700
      overflow-hidden transition-all duration-300 
      hover:shadow-xl dark:hover:shadow-gray-900/20
      hover:-translate-y-1"
  >
    <div className="relative overflow-hidden">
      <div className="aspect-video bg-gray-100 dark:bg-gray-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex justify-between items-center text-sm font-medium">
              <span className="bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                {project.year}
              </span>
              <span className="bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                {project.role}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <ProjectStatus status={project.status} />
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, idx) => (
          <TechnologyTag key={idx} name={tech} />
        ))}
      </div>

      <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <button
            onClick={onToggleDetails}
            className="text-indigo-600 dark:text-indigo-400 font-medium 
              flex items-center gap-2 transition-all duration-300 
              hover:gap-3 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            En savoir plus
            <i
              className={`fas fa-arrow-right transition-transform duration-300 ${
                isActive ? "rotate-90" : ""
              }`}
            />
          </button>
          <ProjectLinks
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        </div>

        <ProjectDetails
          isActive={isActive}
          description={project.fullDescription}
          highlights={project.highlights}
        />
      </div>
    </div>
  </div>
);
