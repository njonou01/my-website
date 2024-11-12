export const ActionButtons: React.FC = () => (
  <div className="flex gap-4 pt-6">
    <a
      href="#contact"
      className="px-6 py-3 bg-indigo-600 text-white rounded-xl
      shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 hover:shadow-indigo-500/30
      hover:-translate-y-0.5 transition-all duration-300"
    >
      Me Contacter
    </a>
    <a
      href="/cv.pdf"
      className="px-6 py-3 bg-white dark:bg-gray-800 rounded-xl
      text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700
      shadow-lg dark:shadow-gray-900/10 hover:border-indigo-500 dark:hover:border-indigo-400
      hover:-translate-y-0.5 transition-all duration-300"
    >
      Mon CV
    </a>
  </div>
);
