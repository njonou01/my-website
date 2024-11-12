type ProjectCategory = "all" | "ML" | "Data" | "Web";

interface FilterButtonProps {
  category: {
    id: ProjectCategory;
    label: string;
    icon: React.ReactNode;
  };
  isActive: boolean;
  onClick: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  category,
  isActive,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-medium 
      transition-all duration-300 flex items-center gap-2 
      hover:-translate-y-0.5 hover:shadow-md
      ${
        isActive
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
      }`}
  >
    <span className="text-lg">{category.icon}</span>
    {category.label}
  </button>
);
