interface Skill {
  title: string;
}

interface SkillsCarouselProps {
  skills: Skill[];
  currentIndex: number;
}

export const SkillsCarousel: React.FC<SkillsCarouselProps> = ({
  skills,
  currentIndex,
}) => (
  <div className="h-6 overflow-hidden">
    <div
      className="transition-transform duration-500"
      style={{ transform: `translateY(-${currentIndex * 24}px)` }}
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          className="h-6 flex items-center justify-center gap-2 text-sm"
        >
          <span className="text-gray-600 dark:text-gray-300">
            {skill.title}
          </span>
        </div>
      ))}
    </div>
  </div>
);
