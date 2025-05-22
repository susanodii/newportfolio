import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/susanodiifrontenddeveloper/'>
        <BsLinkedin />{" "}
      </a>
      <a href='https://github.com/susanodii'>
        <BsGithub />
      </a>
      <a href='https://x.com/SusanOdii'>
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
