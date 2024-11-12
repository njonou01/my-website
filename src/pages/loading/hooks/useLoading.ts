import { useState, useEffect } from "react";
import { loadingStates } from "@/data/loading.data";

export const useLoading = (minLoadingTime: number) => {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min((elapsedTime / minLoadingTime) * 100, 100);

      setLoadingProgress(progress);
      setCurrentState(
        Math.min(
          Math.floor((progress / 100) * loadingStates.length),
          loadingStates.length - 1
        )
      );

      if (progress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setShowLoading(false), 300);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [minLoadingTime]);

  return {
    loadingProgress,
    showLoading,
    currentState,
    loadingStates,
  };
};
