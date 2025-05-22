import React, { useContext } from "react";
import profileImage from "../../assets/susan2.jpeg";
import { FaAward, FaUsers, FaLaptopCode } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";

import "./about.css";
import { ThemeManager } from "../../context/ThemeTypes";

const About = () => {
  const { isDarkMode } = useContext(ThemeManager);
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={profileImage} alt='About-me' />
          </div>
        </div>

        <div className='about__content'>
          <p className='_about_text' style={{ color: !isDarkMode && "black" }}>
            Hi, I am Susan Odii, a Frontend developer. I specialize in building
            responsive and intuitive web apps using JavaScript frameworks like
            React and NextJS.
            <br />
            My skills include:
            <br />
            Crafting seamless user interfaces
            <br />
            Developing robust functionalities
            <br />
            Utilizing tools and technologies like React, Next.js, and Tailwind
            CSS. I have experience working at KSolutions as a developer.
            <br />
            Notable projects include E-Learning application , Housing data app,
            Hospital Management app, and agro ecommerce, giving me a
            well-rounded understanding of various industries and client needs.
          </p>

          <a
            href='#contact'
            className={
              isDarkMode
                ? "btn btn-primary"
                : " btn__light btn-primary btn_light"
            }
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
