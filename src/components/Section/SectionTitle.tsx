import { GradientText } from "./GradientText";

interface SectionTitleProps {
  gradient: string;
  regular: string;
  description?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  gradient,
  regular,
  description,
  className = "",
}) => (
  <div className={`text-center mb-16 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      <GradientText>{gradient}</GradientText>{" "}
      <span className="text-gray-900 dark:text-white">{regular}</span>
    </h2>
    {description && (
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    )}
  </div>
);
