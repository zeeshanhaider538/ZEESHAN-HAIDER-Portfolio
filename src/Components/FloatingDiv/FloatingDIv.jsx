import React from "react";
import "./FloatingDiv.css";
const FloatingDIv = ({ image, txt1, txt2 }) => {
  return (
    <div className="floatingdiv">
      <img src={image} alt="Crown"></img>
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
};

export default FloatingDIv;
