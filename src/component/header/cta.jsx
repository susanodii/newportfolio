

// cta.jsx
import  { useContext } from "react";
import CV from "../../assets/susan_cv.pdf";
import { ThemeManager } from "../../context/ThemeTypes";
import { FiDownload, FiMessageCircle } from "react-icons/fi";

const CTA = ({ isDarkMode }) => {
  const { isDarkMode: globalDarkMode } = useContext(ThemeManager);
  const darkMode = isDarkMode !== undefined ? isDarkMode : globalDarkMode;

  return (
    <div className="cta">
      <a href={CV} download className="btn btn-download">
        <FiDownload className="btn-icon" />
        <span>Download CV</span>
      </a>
      <a
        href="#contact"
        className={darkMode ? "btn btn-primary" : "btn btn-light"}
      >
        <FiMessageCircle className="btn-icon" />
        <span>Let's Talk</span>
      </a>
    </div>
  );
};

export default CTA;








