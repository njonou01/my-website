interface SocialLinkProps {
  url: string;
  icon: string;
  color: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ url, icon, color }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 rounded-xl
      bg-gray-100 dark:bg-gray-700/50 
      border border-gray-200 dark:border-gray-600
      shadow-sm dark:shadow-gray-900/10
      flex items-center justify-center 
      group hover:-translate-y-1 hover:shadow-md
      transition-all duration-300 
      ${color}`}
  >
    <i
      className={`fab fa-${icon} text-gray-600 dark:text-gray-400 
      group-hover:text-white transition-colors`}
    />
  </a>
);
