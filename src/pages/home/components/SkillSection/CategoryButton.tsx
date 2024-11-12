interface CategoryButtonProps {
  category: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  isActive: boolean;
  onClick: () => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isActive,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`w-full group p-6 rounded-xl transition-all duration-300
      ${
        isActive
          ? "bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 scale-[1.02]"
          : "bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 hover:shadow-md dark:hover:shadow-gray-900/10"
      }`}
  >
    <div className="flex items-center gap-4">
      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
        {category.icon}
      </span>
      <div className="text-left">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {category.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {category.description}
        </p>
      </div>
    </div>
  </button>
);
