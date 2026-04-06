// About.jsx
import  { useContext } from "react";
import profileImage from "../../assets/susan2.jpeg";
import { FaArrowRight, FaHeart } from "react-icons/fa";

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
            <img src={profileImage} alt="Susan Ediru - Frontend Developer & Technical Writer" />
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
              I'm a <strong className="highlight">Frontend Developer</strong> and 
              <strong className="highlight"> Technical Writer</strong> passionate about 
              building <strong>scalable, user-friendly web applications</strong> and 
              creating <strong>clear, accessible documentation</strong> that bridges the gap 
              between complex technology and users.
            </p>

            <p>
              I specialize in creating responsive interfaces using{" "}
              <strong>React</strong> and <strong>Next.js</strong>, with strong
              experience in <strong>API integration</strong>,{" "}
              <strong>state management</strong>, and{" "}
              <strong>performance optimization</strong>.
            </p>

            {/* Technical Writing Highlights */}
            <div className="writing-highlights">
              <p className="writing-title">📝 Beyond coding, I'm also an experienced technical writer:</p>
              <ul>
                <li>
                  <span className="highlight-bullet">✍️</span>
                  Contributed to <strong>open source documentation</strong> (Mautic Community Handbook)
                </li>
                <li>
                  <span className="highlight-bullet">📚</span>
                  Written <strong>user guides and navigation documentation</strong> for platforms like Code Funhouse
                </li>
                <li>
                  <span className="highlight-bullet">📊</span>
                  Created <strong>usability testing documentation</strong> that identified 15+ UX improvements
                </li>
                <li>
                  <span className="highlight-bullet">🎯</span>
                  Authored <strong>technical articles</strong> on frontend development for my Hashnode blog
                </li>
              </ul>
            </div>

            <div className="experience-highlight">
              <div className="highlight-dot"></div>
              <p>
                Worked at <strong>KSolutions</strong> as a Frontend Developer, 
                contributing to production-level applications while also documenting 
                technical processes and creating user-friendly guides.
              </p>
            </div>

            <p className="passion-statement">
              💡 I believe that <strong>great software</strong> starts with{" "}
              <strong>great user experiences</strong> AND <strong>great documentation</strong>. 
              I'm constantly learning, exploring new technologies, and sharing knowledge 
              through both code and words.
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