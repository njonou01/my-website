import { Social } from "@/types/components";

type SocialNetworkProps = {
  social: Social;
  index: number;
};

export const SocialNetwork: React.FC<SocialNetworkProps> = ({
  social,
  index,
}) => {
  return (
    <a
      key={index}
      href={social.url}
      aria-label={social.label}
      className={`w-12 h-12 flex items-center justify-center rounded-xl
               bg-white dark:bg-gray-800
               border border-gray-200 dark:border-gray-700
               shadow-md dark:shadow-gray-900/10
               transform hover:scale-110 hover:-translate-y-1
               transition-all duration-300
               ${social.color} hover:text-white
               hover:border-transparent hover:shadow-lg`}
    >
      <i className={`${social.icon} text-xl`}></i>
    </a>
  );
};
