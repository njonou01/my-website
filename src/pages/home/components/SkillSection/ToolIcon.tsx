interface ToolIconProps {
  tool: {
    logo: string;
    name: string;
  };
}

export const ToolIcon: React.FC<ToolIconProps> = ({ tool }) => (
  <div className="group flex flex-col items-center">
    <div
      className="w-12 h-12 rounded-xl 
        bg-gray-50 dark:bg-gray-700/50
        border border-gray-100 dark:border-gray-600
        shadow-sm dark:shadow-gray-900/10
        flex items-center justify-center p-2
        group-hover:scale-110 group-hover:-translate-y-1
        group-hover:shadow-md dark:group-hover:shadow-gray-900/20
        transition-all duration-300"
    >
      <img
        src={tool.logo}
        alt={tool.name}
        className="w-full h-full object-contain"
      />
    </div>
    <span className="mt-2 text-xs text-gray-600 dark:text-gray-400 text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
      {tool.name}
    </span>
  </div>
);
