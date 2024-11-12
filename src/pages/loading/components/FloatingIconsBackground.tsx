import React from "react";
import { FloatingIcon } from "./../types/loading.types";

interface FloatingIconsBackgroundProps {
  floatingIcons: FloatingIcon[];
}

export const FloatingIconsBackground: React.FC<
  FloatingIconsBackgroundProps
> = ({ floatingIcons }) => (
  <div className="absolute inset-0 overflow-hidden">
    {floatingIcons.map((icon) => (
      <div
        key={icon.id}
        className="absolute transition-transform pointer-events-none"
        style={{
          left: `${icon.x}%`,
          top: `${icon.y}%`,
          transform: `translate(-50%, -50%) scale(${icon.scale}) rotate(${icon.rotation}deg)`,
          opacity: icon.opacity,
        }}
      >
        <img
          src={icon.logo}
          alt=""
          loading="lazy"
          className="w-12 h-12 object-contain dark:filter dark:brightness-[0.3]"
          draggable="false"
        />
      </div>
    ))}
  </div>
);
