

// HeaderSocials.jsx
import React from "react";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  const socialLinks = [
    {
      icon: <BsLinkedin />,
      url: "https://www.linkedin.com/in/susanodiifrontenddeveloper/",
      label: "LinkedIn",
      color: "#0077b5"
    },
    {
      icon: <BsGithub />,
      url: "https://github.com/susanodii",
      label: "GitHub",
      color: "#333"
    },
    {
      icon: <BsTwitter />,
      url: "https://x.com/SusanOdii",
      label: "Twitter",
      color: "#1DA1F2"
    }
  ];

  return (
    <div className="header__socials">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={social.label}
          style={{ "--social-color": social.color }}
        >
          {social.icon}
          <span className="social-tooltip">{social.label}</span>
        </a>
      ))}
      <div className="socials-line"></div>
    </div>
  );
};

export default HeaderSocials;








