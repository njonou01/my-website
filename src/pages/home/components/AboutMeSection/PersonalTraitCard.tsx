import { PersonalTrait } from "@/types/components";

interface PersonalTraitCardProps {
  trait: PersonalTrait;
}

export const PersonalTraitCard: React.FC<PersonalTraitCardProps> = ({
  trait,
}) => (
  <div
    className="absolute bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm
      rounded-xl shadow-lg border border-gray-200 dark:border-gray-700
      p-3 transform hover:scale-105 transition-all duration-300"
    style={{
      top: trait.position.top,
      ...(trait.position.right
        ? { right: trait.position.right }
        : { left: trait.position.left }),
      transform: `rotate(${trait.position.rotate})`,
    }}
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">{trait.icon}</span>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {trait.label}
        </p>
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {trait.text}
        </p>
      </div>
    </div>
  </div>
);
