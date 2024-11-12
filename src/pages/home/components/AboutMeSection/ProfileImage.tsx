import { personalTraits } from "@/data/about.data";
import { PersonalTraitCard } from "./PersonalTraitCard";
import profilImage from "../../../../assets/profil1.png";
export const ProfileImage: React.FC = () => (
  <div className="lg:w-1/2 lg:sticky lg:top-24">
    <div className="relative max-w-md mx-auto">
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-2xl" />
      <div
        className="relative aspect-[3/4] rounded-2xl overflow-hidden
        border border-gray-200 dark:border-gray-700
        shadow-2xl dark:shadow-gray-900/20"
      >
        <img
          src={profilImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent" />
        {personalTraits.map((trait) => (
          <PersonalTraitCard key={trait.label} trait={trait} />
        ))}
      </div>
    </div>
  </div>
);
