import React, { useContext } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { ThemeManager } from "../../context/ThemeTypes";

import "./experience.css";
import ExperienceStepper from "../experiencestepper/ExperienceStepper";

const Experience = () => {
  const { isDarkMode } = useContext(ThemeManager);
  return (
    <section id='experience'>
      <h5 style={{ marginBottom: "2rem" }}>What Skills I have</h5>

      <div
        className={
          isDarkMode
            ? "container experience__container"
            : "container experience__container__light"
        }
      >
        {/* FRONTEND */}
        <div className='experience__frontend'>
          <h3>Technology Stack</h3>
          <div
            className={
              isDarkMode ? "experience__content" : "experience__content__light"
            }
          >
            <article className='experience__details'>
              <BsPatchCheckFill
                // className='experience__details-icon'
                color={isDarkMode ? "white" : "#2c2c6c"}
              />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>TailwindCSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NextJS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Git & Github</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
              </div>
            </article>
          </div>
        </div>

        {/* UI DESIGN & GRAPHICS */}
        <div className='experience__ui'>
          <h3>Soft Skills</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Teamwork</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Problem Solving</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Creativity</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Time Management</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Self-Learner</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Flexibility</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
