interface ContactInfoItemProps {
  icon: string;
  color: string;
  label: string;
  value: string;
  href?: string;
}

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  color,
  label,
  value,
  href,
}) => (
  <div className="flex items-center gap-4 group cursor-pointer">
    <div
      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} 
      flex items-center justify-center transform group-hover:scale-110 
      transition-transform duration-300 shadow-lg`}
    >
      <i className={`fas fa-${icon} text-white text-lg`} />
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="text-gray-900 dark:text-white hover:text-indigo-600 
          dark:hover:text-indigo-400 transition-all duration-300"
        >
          {value}
        </a>
      ) : (
        <span className="text-gray-900 dark:text-white">{value}</span>
      )}
    </div>
  </div>
);
