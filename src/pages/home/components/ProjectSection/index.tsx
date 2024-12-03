import Section from "@/components/Section/Section";
import { categories, projects } from "@/data/projects.data";
import { ProjectCategory } from "@/types/components";
import React, { useState } from "react";
import { FilterButton } from "./FilterButton";
import { ProjectCard } from "./ProjectCard";

const ProjectSection: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      regularTitle="Projets"
      gradientTitle="Remarquables"
      description="Un aperçu de mes réalisations en machine learning, data engineering et développement web"
      id="projects"
    >
      <div className="flex justify-center mb-12">
        <div
          className="inline-flex bg-white dark:bg-gray-800 rounded-xl p-2 
          shadow-lg dark:shadow-gray-900/10 
          border border-gray-100 dark:border-gray-700"
        >
          {categories.map((cat) => (
            <FilterButton
              key={cat.id}
              category={cat}
              isActive={filter === cat.id}
              onClick={() => setFilter(cat.id)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={activeProject === project.id}
            onToggleDetails={() =>
              setActiveProject(activeProject === project.id ? null : project.id)
            }
          />
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection;
