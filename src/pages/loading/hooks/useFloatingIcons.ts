import { useState, useEffect } from "react";
import { FloatingIcon } from "../types/loading.types";
import { techLogos } from "@/data/loading.data";

const createFloatingIcon = (id: number): FloatingIcon => ({
  id,
  logo: techLogos[Math.floor(Math.random() * techLogos.length)].url,
  x: Math.random() * 100,
  y: Math.random() * 100,
  scale: 0.3 + Math.random() * 0.4,
  speed: 0.2 + Math.random() * 0.3,
  direction: {
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2,
  },
  rotation: Math.random() * 360,
  opacity: 0.1 + Math.random() * 0.2,
});

export const useFloatingIcons = (count: number = 25) => {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const icons = Array.from({ length: count }, (_, i) =>
      createFloatingIcon(i)
    );
    setFloatingIcons(icons);

    let animationFrameId: number;
    let lastTime = Date.now();

    const updateIcons = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setFloatingIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let newX = icon.x + icon.direction.x * icon.speed * deltaTime * 30;
          let newY = icon.y + icon.direction.y * icon.speed * deltaTime * 30;
          const newDirection = { ...icon.direction };

          if (newX < 0 || newX > 100) {
            newDirection.x *= -1;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY < 0 || newY > 100) {
            newDirection.y *= -1;
            newY = Math.max(0, Math.min(100, newY));
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            direction: newDirection,
            rotation: (icon.rotation + icon.speed * deltaTime * 50) % 360,
          };
        })
      );

      animationFrameId = requestAnimationFrame(updateIcons);
    };

    animationFrameId = requestAnimationFrame(updateIcons);
    return () => cancelAnimationFrame(animationFrameId);
  }, [count]);

  return floatingIcons;
};
