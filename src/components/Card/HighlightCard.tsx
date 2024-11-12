export const HighlightCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  text: string;
}> = ({ icon, title, text }) => (
  <div
    className="flex items-start gap-4 p-4
    bg-gray-50 dark:bg-gray-700/50 rounded-xl
    hover:bg-gradient-to-r hover:from-indigo-500/5 hover:to-purple-500/5
    transition-colors duration-300"
  >
    <span className="text-2xl">{icon}</span>
    <div>
      <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
    </div>
  </div>
);
