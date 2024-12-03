import Section from "@/components/Section/Section";
import { skillCategories } from "@/data/skills.data";
import { useState } from "react";
import { CategoryButton } from "./CategoryButton";
import { SkillCard } from "./SkillCard";

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <Section
      regularTitle="Compétences"
      gradientTitle="Techniques"
      description="Technologies et outils maîtrisés à travers mes projets et ma formation"
      id="skills"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <div className="sticky top-24 space-y-4">
            {skillCategories.map((category, idx) => (
              <CategoryButton
                key={idx}
                category={category}
                isActive={activeCategory === idx}
                onClick={() => setActiveCategory(idx)}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, idx) => (
              <SkillCard
                key={idx}
                skill={skill}
                isHovered={hoveredSkill === skill.name}
                onHover={setHoveredSkill}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
