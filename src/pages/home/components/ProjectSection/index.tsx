import Section from "@/components/Section/Section";
import { categories, projects } from "@/data/projects.data";
import React, { useState } from "react";

const ProjectSection: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "ML" | "Data" | "Web">("all");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      regularTitle="Projets"
      gradientTitle="Remarquables"
      description="Un aperçu de mes réalisations en machine learning, data engineering et développement web"
    >
      <div className="flex justify-center mb-12">
        <div
          className="inline-flex bg-white dark:bg-gray-800 rounded-xl p-2 
                         shadow-lg dark:shadow-gray-900/10 
                         border border-gray-100 dark:border-gray-700"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium 
                  transition-all duration-300 flex items-center gap-2 
                  hover:-translate-y-0.5 hover:shadow-md
                  ${
                    filter === cat.id
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  }`}
            >
              <span className="text-lg">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
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
                  className="w-full h-full object-cover transition-transform 
                      duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t 
                      from-gray-900/80 via-gray-900/50 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity 
                      duration-300"
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
                <span
                  className={`px-3 py-1.5 rounded-full text-sm font-medium
                      backdrop-blur-sm border
                      ${
                        project.status === "En cours"
                          ? "bg-indigo-100/90 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700"
                          : "bg-green-100/90 dark:bg-green-900/50 text-green-600 dark:text-green-300 border-green-200 dark:border-green-700"
                      }`}
                >
                  {project.status}
                </span>
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
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm font-medium
                        text-gray-700 dark:text-gray-300
                        bg-gray-100 dark:bg-gray-700/50
                        border border-gray-200 dark:border-gray-600
                        hover:border-indigo-300 dark:hover:border-indigo-700
                        rounded-lg transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() =>
                      setActiveProject(
                        activeProject === project.id ? null : project.id
                      )
                    }
                    className="text-indigo-600 dark:text-indigo-400 font-medium 
                        flex items-center gap-2 transition-all duration-300 
                        hover:gap-3 hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    En savoir plus
                    <i
                      className={`fas fa-arrow-right transition-transform duration-300
                        ${activeProject === project.id ? "rotate-90" : ""}`}
                    />
                  </button>

                  <div className="flex gap-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 
                            hover:text-gray-900 dark:hover:text-white
                            transition-all duration-300"
                      >
                        <i
                          className="fab fa-github text-xl hover:scale-110 
                            transition-transform duration-300"
                        />
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 
                            hover:text-gray-900 dark:hover:text-white
                            transition-all duration-300"
                      >
                        <i
                          className="fas fa-external-link-alt text-xl hover:scale-110 
                            transition-transform duration-300"
                        />
                      </a>
                    )}
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500
                      ${
                        activeProject === project.id
                          ? "max-h-[500px] opacity-100 mt-6"
                          : "max-h-0 opacity-0"
                      }`}
                >
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.fullDescription}
                    </p>
                    <div className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection;
