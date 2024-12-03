import Layout from "../../layout/index";
import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMeSection";
import mobileProfilImage from "../../assets/mobile.profile.png";
import desktopProfilImage from "../../assets/desktop.profile.png";
import { SkillsSection } from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import EducationSection from "./components/Education";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";

const Home: React.FC = () => {
  const roles = ["#Éleve Ingénieur", "#Développeur Full Stack"];
  const [profilImage, setprofilImage] = useState(desktopProfilImage);
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setprofilImage(isMobile ? mobileProfilImage : desktopProfilImage);
  }, []);

  return (
    <Layout>
      <HeroSection roles={roles} profilePath={profilImage} />
      <AboutMe />
      <ExperienceSection />
      <SkillsSection />
      <ProjectSection />
      <EducationSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
