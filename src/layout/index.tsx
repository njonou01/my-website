import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
  const [, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300);
      setIsScrolled(scrollTop > 0);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
  };

  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      <ScrollProgress />
      <ScrollTopButton />
      <Navbar
        isScrolled={isScrolled}
        openMobileNav={() => setIsMobileNavOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <main>{children}</main>
      <MobileNav
        languages={languages}
        isOpen={isMobileNavOpen}
        setIsOpen={setIsMobileNavOpen}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />
      <Footer />
    </div>
  );
};

export default Layout;
