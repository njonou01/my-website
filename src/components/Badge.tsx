type BadgeType = {
  icon: string;
  title: string;
  subtitle: string;
  gradient: string;
  position: string;
};
type BadgeProps = {
  badge: BadgeType;
  index: number;
};
export const Badge: React.FC<BadgeProps> = ({ badge, index }) => {
  return (
    <div
      key={index}
      className={`absolute ${badge.position}
               bg-white dark:bg-gray-800
               shadow-lg dark:shadow-gray-900/10
               rounded-2xl p-3 transform hover:scale-105
               hover:shadow-xl dark:hover:shadow-gray-900/20
               transition-all duration-300 cursor-pointer
               border border-gray-200 dark:border-gray-700`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 bg-gradient-to-br ${badge.gradient} 
                  rounded-xl flex items-center justify-center
                  shadow-lg`}
        >
          <i className={`${badge.icon} text-white text-lg`}></i>
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white text-sm">
            {badge.title}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-xs">
            {badge.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
