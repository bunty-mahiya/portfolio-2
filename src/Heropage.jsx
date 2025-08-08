import React from "react";
import img from "./assets/img.jpg";
import figma from "./assets/Figma.png";
import instagram from "./assets/Instagram.png";
import linkedin from "./assets/LinkedIn.png";
import telegram from "./assets/Telegram.png";
import twitter from "./assets/Twitter.png";
import medium from "./assets/Medium.png";
import arrow from "./assets/arrow-down.png";

const Heropage = () => {
  return (
    <>
      <header>
        <div className="text">
          <div className="title">
            <h1>PRODUCT </h1>
            <h1>DESIGNER</h1>
            <h2>CRISTIAN MUN0Z</h2>
          </div>
          <div className="socialM">
            <div className="soc-logo">
            
              <img src={instagram} alt="icon-instagram" srcset="" />
              <img src={figma} alt="icon-medium" srcset="" />
              <img src={linkedin} alt="icon-medium" srcset="" />
              <img src={twitter} alt="icon-medium" srcset="" />
              <img src={telegram} alt="icon-medium" srcset="" />
              <img src={medium} alt="icon-medium" srcset="" />
            </div>
            <div className="carr-dow">
              Download Curriculum Vitae <img src={arrow} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="img">
          <img src={img} alt="img"  />
        </div>
      </header>
    </>
  );
};

export default Heropage;
