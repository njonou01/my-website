import React from "react";

interface ActionButtonProps {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  href,
  variant,
  children,
}) => {
  const baseClasses =
    "px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1";
  const variantClasses = {
    primary:
      "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-indigo-700/20 hover:scale-105",
    secondary:
      "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-gray-900/10 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/20",
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </a>
  );
};

const HeroActions: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
      <ActionButton href="#about" variant="primary">
        Découvrir mon profil
      </ActionButton>
      <ActionButton href="#contact" variant="secondary">
        Me contacter
      </ActionButton>
    </div>
  );
};

export default HeroActions;
