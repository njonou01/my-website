import React from "react";
import { SectionTitle } from "./SectionTitle";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  regularTitle?: string;
  gradientTitle?: string;
  description?: string;
};
const Section: React.FC<SectionProps> = ({
  id,
  children,
  regularTitle,
  gradientTitle,
  description,
}) => {
  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="md:container md:mx-auto px-1 sm:px-6 lg:px-8">
        <SectionTitle
          gradient={gradientTitle as string}
          regular={regularTitle as string}
          description={description}
        />

        <div className="mx-auto space-y-6">{children}</div>
      </div>
    </section>
  );
};

export default Section;
