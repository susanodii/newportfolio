

import React, { useContext } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { ThemeManager } from "../../context/ThemeTypes";
import ExperienceStepper from "../experiencestepper/ExperienceStepper"; // ADD THIS
import "./experience.css";

const Experience = () => {
  const { isDarkMode } = useContext(ThemeManager);
  
  // Technology stack data - cleaner and maintainable
  const techStack = [
    "HTML", "CSS", "TailwindCSS", "JavaScript", 
    "React", "NextJS", "Git & Github", "Figma", "MUI"
  ];
  
  const softSkills = [
    "Teamwork", "Problem Solving", "Creativity", 
    "Time Management", "Self-Learner", "Flexibility"
  ];

  return (
    <section id='experience'>
      {/* ADDED: Experience Stepper for work history */}
      <ExperienceStepper />
      
      <div className="skills-section-header">
        <h5>What Skills I Have</h5>
        <h2>Technical Expertise</h2>
        <div className="skills-decoration">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        className={
          isDarkMode
            ? "container experience__container"
            : "container experience__container__light"
        }
      >
        {/* TECHNOLOGY STACK */}
        <div className='experience__frontend'>
          <h3>⚡ Technology Stack</h3>
          <div
            className={
              isDarkMode ? "experience__content" : "experience__content__light"
            }
          >
            {techStack.map((skill, index) => (
              <article className='experience__details' key={index}>
                <BsPatchCheckFill 
                  className='experience__details-icon'
                  style={{ color: isDarkMode ? "#4ade80" : "#2c2c6c" }}
                />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div className='experience__ui'>
          <h3>🤝 Soft Skills</h3>
          <div className='experience__content'>
            {softSkills.map((skill, index) => (
              <article className='experience__details' key={index}>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;







// import React, { useContext } from "react";
// import { BsPatchCheckFill } from "react-icons/bs";
// import { ThemeManager } from "../../context/ThemeTypes";

// import "./experience.css";


// const Experience = () => {
//   const { isDarkMode } = useContext(ThemeManager);
//   return (
//     <section id='experience'>
//       <h5 style={{ marginBottom: "2rem" }}>What Skills I have</h5>

//       <div
//         className={
//           isDarkMode
//             ? "container experience__container"
//             : "container experience__container__light"
//         }
//       >
//         {/* FRONTEND */}
//         <div className='experience__frontend'>
//           <h3>Technology Stack</h3>
//           <div
//             className={
//               isDarkMode ? "experience__content" : "experience__content__light"
//             }
//           >
//             <article className='experience__details'>
//               <BsPatchCheckFill
//                 // className='experience__details-icon'
//                 color={isDarkMode ? "white" : "#2c2c6c"}
//               />
//               <div>
//                 <h4>HTML</h4>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>CSS</h4>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>TailwindCSS</h4>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>JavaScript</h4>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>React</h4>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>NextJS</h4>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>Git & Github</h4>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>Figma</h4>
//               </div>
//             </article>

//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>MUI</h4>
//               </div>
//             </article>
//           </div>
//         </div>

//         {/* UI DESIGN & GRAPHICS */}
//         <div className='experience__ui'>
//           <h3>Soft Skills</h3>
//           <div className='experience__content'>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>Teamwork</h4>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>Problem Solving</h4>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>Creativity</h4>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>Time Management</h4>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>Self-Learner</h4>
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon' />
//               <div>
//                 <h4>Flexibility</h4>
//               </div>
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Experience;
