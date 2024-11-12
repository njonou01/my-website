export const TechnologyTag: React.FC<{ name: string }> = ({ name }) => (
  <span
    className="px-3 py-1.5 text-sm font-medium
      text-gray-700 dark:text-gray-300
      bg-gray-100 dark:bg-gray-700/50
      border border-gray-200 dark:border-gray-600
      hover:border-indigo-300 dark:hover:border-indigo-700
      rounded-lg transition-all duration-200"
  >
    {name}
  </span>
);
