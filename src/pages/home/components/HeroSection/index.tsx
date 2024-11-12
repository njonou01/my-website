import heroData from "@/data/hero.data";
import React from "react";
import { HeroProps } from "../../types";
import { Anounce } from "@/components/Announce/Announce";
import { ImageCard } from "@/components/ImageCard/ImageCard";
import { SocialNetwork } from "@/components/SocialNetwork";
import { Social } from "@/types/components";
import HeroIntroduction from "./HeroIntroduction";
import HeroActions from "./HeroActions";

const HeroSection: React.FC<HeroProps> = ({ roles, profilePath }) => {
  return (
    <section className="min-h-screen relative overflow-x-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <HeroIntroduction
              greeting={heroData.introduction.greeting}
              name={heroData.introduction.name}
              description={heroData.introduction.description}
              roles={roles}
            />

            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              {heroData.annunces.map((status, index) => (
                <Anounce
                  key={`announce-${index}`}
                  status={status}
                  index={index}
                />
              ))}
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {heroData.socialLinks.map((social, index) => (
                <SocialNetwork
                  key={`social-${index}`}
                  social={social as Social}
                  index={index}
                />
              ))}
            </div>

            <HeroActions />
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <ImageCard
              profilePath={profilePath}
              className="inset-0 dark:bg-gradient-to-br dark:from-indigo-500/5 dark:to-blue-500/5 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
