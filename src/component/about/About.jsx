

// About.jsx
import React, { useContext } from "react";
import profileImage from "../../assets/susan2.jpeg";
import { FaAward, FaUsers, FaLaptopCode, FaArrowRight, FaHeart } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import "./about.css";
import { ThemeManager } from "../../context/ThemeTypes";

const About = () => {
  const { isDarkMode } = useContext(ThemeManager);

  return (
    <section id="about" className={`about ${isDarkMode ? "dark" : "light"}`}>
      <div className="section-header">
        <span className="section-subtitle">Get To Know</span>
        <h2 className="section-title">About Me</h2>
       
      </div>

      <div className="container about__container">
        {/* IMAGE SECTION */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={profileImage} alt="Susan Odii - Frontend Developer" />
          </div>
          <div className="floating-badge">
            <FaHeart className="badge-icon" />
            <span>2+ Years of Passion</span>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="about__content">
          
        

          {/* TEXT CONTENT */}
          <div className="about__text">
            <p className="greeting">
              <span className="wave-emoji">👋</span> Hi, I'm <strong>Susan Ediru</strong>
            </p>
            
            <p>
              I'm a <strong className="highlight">Frontend Developer</strong> passionate about 
              building <strong>scalable, user-friendly web applications</strong> that solve 
              real-world problems.
            </p>

            <p>
              I specialize in creating responsive interfaces using{" "}
              <strong>React</strong> and <strong>Next.js</strong>, with strong
              experience in <strong>API integration</strong>,{" "}
              <strong>state management</strong>, and{" "}
              <strong>performance optimization</strong>.
            </p>

            <div className="experience-highlight">
              <div className="highlight-dot"></div>
              <p>
                Currently working at <strong>KSolutions</strong>, contributing to 
                production-level applications and delivering high-quality solutions 
                for diverse clients.
              </p>
            </div>

            <p className="passion-statement">
              💡 I'm constantly learning, exploring new technologies, and 
              believing that <strong>great software</strong> starts with{" "}
              <strong>great user experiences</strong>.
            </p>
          </div>

          {/* CTA Button */}
          <div className="about__cta">
            <a href="#contact" className="btn cta-button">
              <span>Let's Work Together</span>
              <FaArrowRight className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

