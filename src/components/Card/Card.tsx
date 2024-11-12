export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="bg-white dark:bg-gray-800 rounded-xl p-8
    border border-gray-200 dark:border-gray-700
    shadow-lg dark:shadow-gray-900/10"
  >
    {children}
  </div>
);
