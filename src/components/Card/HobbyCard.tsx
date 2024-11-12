export const HobbyCard: React.FC<{
  icon: React.ReactNode;
  name: string;
  description: string;
}> = ({ icon, name, description }) => (
  <div
    className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl
    hover:bg-gradient-to-r hover:from-indigo-500/5 hover:to-purple-500/5
    transition-colors duration-300"
  >
    <div className="flex items-center gap-3 mb-2">
      <span className="text-2xl">{icon}</span>
      <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);
