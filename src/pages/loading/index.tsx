import React, { useState, useEffect } from "react";
import { LoadingPageProps } from "./types/loading.types";
import { useFloatingIcons } from "./hooks/useFloatingIcons";
import { useLoading } from "./hooks/useLoading";
import { displayedTechs, skills } from "../../data/loading.data";
import { INITIALS } from "@/constants/branding";
import { FloatingIconsBackground } from "./components/FloatingIconsBackground";
import { SkillsCarousel } from "./components/SkillsCarousel";
import { ProgressBar } from "./components/ProgressBar";
import { TechnologyStack } from "./components/TechnologyStack";

const LoadingScreen: React.FC<LoadingPageProps> = ({
  minLoadingTime = 200,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const floatingIcons = useFloatingIcons();
  const { loadingProgress, showLoading, currentState, loadingStates } =
    useLoading(minLoadingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  if (!showLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 dark:bg-gray-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-500/[0.05] dark:bg-grid-gray-400/[0.05] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.07] via-transparent to-indigo-500/[0.07]" />

      <FloatingIconsBackground floatingIcons={floatingIcons} />

      <div className="relative w-[90%] max-w-md mx-auto p-6">
        <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-400/5 blur-3xl rounded-full" />
        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-100 dark:border-gray-700 shadow-2xl dark:shadow-black/20 p-6">
          <div className="text-center mb-8">
            <div className="inline-block relative mb-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                {INITIALS}.
              </div>
            </div>
            <SkillsCarousel skills={skills} currentIndex={currentIndex} />
          </div>

          <div className="space-y-6">
            <ProgressBar progress={loadingProgress} />

            <div className="flex items-center justify-between text-sm px-1">
              <div className="flex items-center gap-2">
                <span className="animate-spin">
                  {loadingStates[currentState].icon}
                </span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  {loadingStates[currentState].text}
                </span>
              </div>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                {Math.round(loadingProgress)}%
              </span>
            </div>

            <TechnologyStack technologies={displayedTechs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
