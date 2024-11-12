import React from "react";
import { SectionTitle } from "./SectionTitle";

type SectionProps = {
  children: React.ReactNode;
  regularTitle?: string;
  gradientTitle?: string;
  description?: string;
};
const Section: React.FC<SectionProps> = ({
  children,
  regularTitle,
  gradientTitle,
  description,
}) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          gradient={gradientTitle as string}
          regular={regularTitle as string}
          description={description}
        />

        <div className="max-w-5xl mx-auto space-y-6">{children}</div>
      </div>
    </section>
  );
};

export default Section;
