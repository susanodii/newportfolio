// Header.jsx - Fixed with all 7 unique tech badges
import  { useContext, useEffect, useState } from "react";
import CTA from "./cta";
import HeaderSocials from "./HeaderSocials";

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import "./header.css";
import { ThemeManager } from "../../context/ThemeTypes";

const Header = () => {
  const { isDarkMode } = useContext(ThemeManager);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="top" className={`header ${isDarkMode ? "dark" : "light"}`}>
      <div className="container header__container">
        {/* Animated background elements */}
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        {/* Text Content */}
        <div className="header__content">
          <div className="header__badge">
            <span className="badge-text">Available for work</span>
            <span className="badge-dot"></span>
          </div>
          
          <h5 className="header__greeting">
            <span className="greeting-wave">👋</span> Hi, I'm
          </h5>
          
          <h1 className="header__name">
            Susan <span className="name-highlight">Ediru</span>
          </h1>
          
          <div className="header__title-wrapper">
            <div className="header__title">
              <span className="typed-text">Frontend Developer</span>
            </div>
          </div>
          
          <p className="header__description">
            Crafting beautiful, responsive, and high-performance web applications
          </p>
        </div>

        {/* CTA Buttons */}
        <CTA isDarkMode={isDarkMode} />

        {/* Social Links */}
        <HeaderSocials />

        
      

        {/* Scroll Indicator */}
        <a 
          href="#contact" 
          className={`scroll__down ${!isVisible ? "fade-out" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToContact();
          }}
        >
          <span className="scroll-text">Scroll Down</span>
          <MdOutlineKeyboardDoubleArrowDown className="scroll-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;







