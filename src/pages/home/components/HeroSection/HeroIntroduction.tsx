import { useTypingEffect } from "../../../../hooks/useTypingEffect";

interface HeroIntroductionProps {
  greeting: string;
  name: string;
  description: string;
  roles: string[];
}

const HeroIntroduction: React.FC<HeroIntroductionProps> = ({
  greeting,
  name,
  description,
  roles,
}) => {
  const { displayedText } = useTypingEffect({
    texts: roles,
    typingSpeed: 150,
    deletingSpeed: 75,
    pauseTime: 1500,
  });

  const formatDescription = (text: string) => {
    return text.split(/(\s+)/).map((word, index) => {
      if (word.startsWith("#")) {
        return (
          <span
            key={index}
            className="text-indigo-600 dark:text-indigo-400 font-semibold"
          >
            {word.substring(1)}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <div>
      <h2 className="text-lg md:text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-3">
        {greeting}
      </h2>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
          {name}
        </span>
      </h1>
      <div className="h-12 mb-6">
        <span className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-semibold">
          {displayedText}
          <span className="animate-pulse">|</span>
        </span>
      </div>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
        {formatDescription(description)}
      </p>
    </div>
  );
};

export default HeroIntroduction;
