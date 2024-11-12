import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import { languages } from "@/data/languages";
import MobileNav from "./MobileNav/MobileNav";
import Footer from "./Footer/Footer";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import ScrollTopButton from "@/components/ScrollTopButton/ScrollTopButton";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
  }, []);
  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <ScrollProgress />
      <ScrollTopButton />
      <Navbar
        languages={languages}
        isScrolled={isScrolled}
        openMobileNav={() => setIsMobileNavOpen(true)}
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
      />

      <main>{children}</main>

      <MobileNav
        languages={languages}
        isOpen={isMobileNavOpen}
        setIsOpen={setIsMobileNavOpen}
        isDark={false}
        toggleTheme={toggleTheme}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />

      <Footer />
    </div>
  );
};

export default Layout;
