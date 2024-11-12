interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
}) => (
  <span
    className={`bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);
