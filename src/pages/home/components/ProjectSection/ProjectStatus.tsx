import { Project } from "@/types/components";

interface ProjectStatusProps {
  status: Project["status"];
}

export const ProjectStatus: React.FC<ProjectStatusProps> = ({ status }) => (
  <span
    className={`px-3 py-1.5 rounded-full text-sm font-medium
      backdrop-blur-sm border
      ${
        status === "En cours"
          ? "bg-indigo-100/90 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700"
          : "bg-green-100/90 dark:bg-green-900/50 text-green-600 dark:text-green-300 border-green-200 dark:border-green-700"
      }`}
  >
    {status}
  </span>
);
