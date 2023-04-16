import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import "../Services/Services.css";
const Works = () => {
  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span>Wors for All these</span>
        <span>Brands & Clients</span>
        <span>
          I specialize in offering a comprehensive range of services as a MERN
          Stack
          <br />
          developer, including Web Application Development, Custom API
          Development,
          <br />
          Front-End Development, Back-End Development, Website Maintenance
          <br />
          and Support, and Technical Consulting.
          <br />I am passionate about delivering exceptional service and value
          to my <br />
          clients as a MERN stack developer. Through my comprehensive range of{" "}
          <br />
          services, I am dedicated to helping clients achieve their business
          objectives <br />
          and stay ahead of the competition.
        </span>

        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiver" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopi" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
