import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form>
          <input
            type="text"
            className="user"
            name="user_name"
            placeholder="Name"
          />
          <input
            type="email"
            className="user"
            name="user_email"
            placeholder="Email"
          />
          <textarea
            name="Message"
            placeholder="Message"
            className="user"
          ></textarea>
          <input value="send" type="submit" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
