import { Card } from "@/components/Card/Card";
import { GoalCard } from "@/components/Card/GoalCard";
import { HighlightCard } from "@/components/Card/HighlightCard";
import { HobbyCard } from "@/components/Card/HobbyCard";
import Section from "@/components/Section/Section";
import { tabContent } from "@/data/about.data";
import { TabId } from "@/types/components";
import { useState } from "react";
import { Tabs } from "./Tabs";
import { ProfileImage } from "./ProfileImage";
import { ActionButtons } from "./ActionButtons";

const AboutMeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("personal");

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <Card>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {tabContent.personal.subtitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {tabContent.personal.description}
            </p>
            <div className="grid gap-6">
              {tabContent.personal.highlights.map((highlight, index) => (
                <HighlightCard key={index} {...highlight} />
              ))}
            </div>
          </Card>
        );

      case "profile":
        return (
          <Card>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {tabContent.profile.subtitle}
            </h3>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {tabContent.profile.hobbies.map((hobby, index) => (
                  <HobbyCard key={index} {...hobby} />
                ))}
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                  Traits de personnalité
                </h4>
                <div className="grid gap-3">
                  {tabContent.profile.personality.map((trait, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3
                      bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <span className="text-indigo-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {trait}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        );

      case "goals":
        return (
          <Card>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {tabContent.goals.subtitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {tabContent.goals.vision}
            </p>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                  Objectifs à court terme
                </h4>
                <div className="space-y-4">
                  {tabContent.goals.shortTerm.map((goal, index) => (
                    <GoalCard key={index} {...goal} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                  Vision à long terme
                </h4>
                <div className="space-y-4">
                  {tabContent.goals.longTerm.map((goal, index) => (
                    <GoalCard key={index} {...goal} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        );
    }
  };

  return (
    <Section id="about" regularTitle="de Moi" gradientTitle="À propos">
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex flex-col lg:flex-row items-start gap-16">
        <ProfileImage />
        <div className="lg:w-1/2 space-y-8">
          {renderTabContent()}
          <ActionButtons />
        </div>
      </div>
    </Section>
  );
};

export default AboutMeSection;
