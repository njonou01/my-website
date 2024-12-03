import Section from "@/components/Section/Section";
import { experiences } from "@/data/experiences.data";
import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <Section
      regularTitle="Professionnel "
      gradientTitle="Parcours"
      description=""
      id="experience"
    >
      <div className="relative">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5
                       bg-gradient-to-b from-primary-500 via-primary-600 to-primary-700
                       rounded-full"
        ></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`mb-16 relative ${
              idx % 2 === 0
                ? "md:ml-auto md:pl-24 md:pr-0"
                : "md:mr-auto md:pr-24 md:pl-0"
            } md:w-1/2 group`}
          >
            {/* Timeline dot */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          w-4 h-4 bg-primary-500 rounded-full
                          ring-4 ring-white dark:ring-gray-900 group-hover:scale-110
                          transition-all duration-300 ease-out"
            ></div>

            {/* Card */}
            <div className="card">
              {/* Period badge */}
              <div className="absolute top-4 right-4">
                <span
                  className="text-sm font-medium px-3 py-1.5 
                              text-primary-700 dark:text-primary-300
                              bg-primary-50 dark:bg-primary-900/50
                              rounded-full ring-1 ring-primary-100 dark:ring-primary-700"
                >
                  {exp.period}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                {exp.title}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                {exp.company}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex items-center">
                <svg
                  className="w-4 h-4 mr-1.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                {exp.location}
              </p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-2.5 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start group/item">
                    <span className="text-primary-500 dark:text-primary-400 mr-2.5 transform group-hover/item:translate-x-1 transition-transform">
                      ▹
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
