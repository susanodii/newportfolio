import React, { useContext, useState } from "react";
import portfolio1 from "../../assets/enwuit.PNG";
import portfolio2 from "../../assets/passgrage-img.jpg";
import portfolio3 from "../../assets/HMIP.PNG";
import portfolio4 from "../../assets/awiful-img.jpg";
import portfolio5 from "../../assets/ecommerce.png";
import portfolio6 from "../../assets/namesearch.png";
import portfolio7 from "../../assets/deliveryapp.jpg";
import portfolio8 from "../../assets/musicapp.jpg";
import portfolio9 from "../../assets/weatherapp.jpg";

import "./portfolio.css";
import { ThemeManager } from "../../context/ThemeTypes";

const data = [
  {
    id: 1,
    image: portfolio1,
    title: "Enwuit",
    details:
      "Entwuit is a cutting-edge eLearning platform addressing the fragmented market with an all-in-one solution. Built with  React, Tailwindcss and Nodejs",
    github:
      "https://github.com/KSOLUTIONS-TECHNOLOGIES-LTD/entwuit-fe/tree/fixMesageTemplate",
    demo: "https://www.entwuit.com/",
    category: "web",
  },

  {
    id: 3,
    image: portfolio3,
    title: "HMIP ",
    github: "https://github.com/Emsun0211/talentplus.git",
    details:
      "The Housing Market Information Portal (HMIP) provides reliable and convenient access to the latest housing market information in Nigeria.",
    demo: "https://hmip-fe.vercel.app/",
    category: "web",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Passgrades",
    details:
      "Passgrades is a learning managment system for peope who wants to study abroad",
    github: "https://github.com/atere21/ibeep-project.git",
    demo: "https://passgrades.com/",
    category: "web",
  },

  // {
  //   id: 4,
  //   image: portfolio4,
  //   title: "Awiful Labs",
  //   details: "Awiful labs is a digital agency project management app",
  //   github: "https://github.com/Emsun0211/textchatclient.git",
  //   demo: "https://awifulabs.com/",
  //   category: "web",
  // },
];
const web = data.filter((data) => data.category === "web");
const mobile = data.filter((data) => data.category === "mobile");

const Portfolio = () => {
  const [isweb, setisWeb] = useState(true);
  const { isDarkMode } = useContext(ThemeManager);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      {/* <div className='btn-container '>
				<button
					className={isweb ? "active" : ""}
					onClick={() => setisWeb(true)}>
					Web
				</button>
				<button
					className={!isweb ? "active" : ""}
					onClick={() => setisWeb(false)}>
					Mobile
				</button>
			</div> */}

      {isweb ? (
        <div className='container portfolio__container'>
          {web.map(({ id, image, title, details, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt='first portfolio' />
                </div>
                <h3 className={!isDarkMode && "portfolio__item__light"}>
                  {title}
                </h3>
                <h6>{details}</h6>
                <div className='portfolio__item-cta'>
                  {/* <a href={github} className='btn' target='blank'>
										Github
									</a> */}
                  <a
                    href={demo}
                    className='btn__light btn-primary'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className='container portfolio__container'>
          {mobile.map(({ id, image, title, details, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt='first portfolio' />
                </div>
                <h3 style={{}}>{title}</h3>
                <h6>{details}</h6>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='blank'>
                    Github
                  </a>
                  {/* <a
										href={demo}
										className='btn btn-primary'
										target='_blank'
										rel='noreferrer'>
										Live Demo
									</a> */}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
