import React, { useContext } from "react";
import CV from "../../assets/susan_cv.pdf";
import { ThemeManager } from "../../context/ThemeTypes";

const cta = ({ isDarkMode }) => {
  return (
    <div className='cta'>
      <a href={CV} download className={"btn"}>
        Download CV
      </a>
      <a
        href='#contact'
        className={isDarkMode ? "btn btn-primary" : " btn__light btn-primary"}
      >
        Let's Talk
      </a>
    </div>
  );
};

export default cta;
