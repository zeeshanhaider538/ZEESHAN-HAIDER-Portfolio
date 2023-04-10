import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDIv from "../FloatingDiv/FloatingDIv";
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
      <div className="i-right">
        <img src={Vector1} alt="Vector1"></img>
        <img src={Vector2} alt="Vector2"></img>
        <img src={Boy} alt="Boy"></img>
        <img src={Glassesimoji} alt="Glassesemoji"/>
        <div style={{top:"-4%",left:"68%"}}>
         <FloatingDIv image={Crown} txt1={"MERN Stack"} txt2={"Developer"}/> 
        </div>
        <div style={{top:"18rem",left:'-2rem'}}>
          <FloatingDIv image={Thumbup} txt1="Best Design" txt2="Award"/>
        </div>
        {/* {Blr Divs} */}
        <div className="blur" style={{background:"rgb(238 210 255)" }}></div>
         </div>
    </div>
  );
};

export default Intro;