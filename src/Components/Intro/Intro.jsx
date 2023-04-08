import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Zeeshan Haider</span>
          <span>
            MERN Stack Developer with high level of experience in web designing
            and development , producting the Quality work.
          </span>
        </div>
        <button className=" button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/zeeshanhaider538" target={"_blank"} alt="github">
            <img src={Github} alt="github"></img>
          </a>
          <a href="https://www.linkedin.com/in/zeeshan-haider-/" target={"_blank"} alt="Linkedin">
            <img src={LinkedIn} alt="LinkedIn"></img>
          </a>
            <img src={Instagram} alt="Instagram"></img>
        </div>
      </div>
      <div className="i-right">I am right side </div>
    </div>
  );
};

export default Intro;
