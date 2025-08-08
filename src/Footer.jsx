import React from "react";
import frame36 from "./assets/Frame 36.png";
import frame35 from "./assets/Frame 35.png";
import img from "./assets/img.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-text">
          <img className="img" src={img} alt="frame" />
          <img className="frame-36" src={frame36} alt="frame" />
          <div className="text">
            <p>
              Thanks for visit my website <span></span> If you have any questions you can
              write me to any of my social networks, I am sure I will answer
              you.
            </p>
          </div>
          <img className="frame-35" src={frame35} alt="frame" />
        </div>
        <div className="footer-nav">
            <div className="logo">
              <p>web</p>
            </div>
            <div className="child-2">
              <ul>
                <li>home</li>
                <li>portfolio </li>
                <li>skills</li>
                <li>about me</li>
              </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
