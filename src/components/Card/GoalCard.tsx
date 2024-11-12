export const GoalCard: React.FC<{
  goal: string;
  description: string;
}> = ({ goal, description }) => (
  <div
    className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl
    hover:bg-gradient-to-r hover:from-indigo-500/5 hover:to-purple-500/5
    transition-colors duration-300"
  >
    <h5 className="font-medium text-gray-900 dark:text-white mb-1">{goal}</h5>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);
