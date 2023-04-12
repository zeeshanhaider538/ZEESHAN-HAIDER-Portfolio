import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
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
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side  */}
      <div className="cards">
        <div>
          <Card
            emoji={HeartEmoji}
            headind={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd "}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

// With my extensive expertise in developing full-stack web applications, I have a proven track record of delivering high-quality, scalable, and secure solutions that meet the unique needs of my clients. Whether it's building custom APIs, developing responsive user interfaces, or providing ongoing maintenance and support, I am committed to delivering results that exceed expectations.

// In addition, I pride myself on providing technical consulting services that help clients identify and overcome technical challenges. By leveraging my experience and expertise, I am able to provide valuable insights and recommendations that enable clients to achieve their goals and succeed in their respective industries.

// Overall, I am passionate about delivering exceptional service and value to my clients as a MERN stack developer. Through my comprehensive range of services, I am dedicated to helping clients achieve their business objectives and stay ahead of the competition.
